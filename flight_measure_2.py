#!/usr/bin/env python3

import time
import random

# ----------------------------
# User Configuration
# ----------------------------
BATTERY_CAPACITY_MAH = 1500.0   # e.g., 1500mAh battery
USE_80_PERCENT_RULE = True      # Use only 80% of battery capacity for safety
SAMPLING_INTERVAL_S = 0.1       # 100ms sampling interval
SIMULATION_DURATION_S = 120     # Run simulation for 120 seconds (2 minutes)

# Synthetic current range for the "virtual drone" (in Amperes)
CURRENT_MIN_A = 2.0
CURRENT_MAX_A = 10.0

# Effective capacity (mAh) factoring in the 80% rule
if USE_80_PERCENT_RULE:
    effective_capacity_mAh = BATTERY_CAPACITY_MAH * 0.8
else:
    effective_capacity_mAh = BATTERY_CAPACITY_MAH

# ----------------------------
# Variables for Integration
# ----------------------------
consumed_mAh = 0.0
flight_time_left_minutes = 0.0

print("Starting SIMULATIVE Battery Monitor...")
print(f"Battery capacity (mAh): {BATTERY_CAPACITY_MAH}")
print(f"Using 80% rule: {USE_80_PERCENT_RULE}")
print(f"Simulation duration (s): {SIMULATION_DURATION_S}")

start_time = time.time()
last_time = start_time

while True:
    current_time = time.time()
    elapsed_s = current_time - last_time
    total_elapsed_s = current_time - start_time

    # Stop if we've hit our total simulation time
    if total_elapsed_s >= SIMULATION_DURATION_S:
        print("\nReached the end of simulation time.")
        break

    # Step the simulation at the specified intervals
    if elapsed_s >= SAMPLING_INTERVAL_S:
        # 1. Generate synthetic current reading
        #    (Randomly pick a current between CURRENT_MIN_A and CURRENT_MAX_A)
        current_A = random.uniform(CURRENT_MIN_A, CURRENT_MAX_A)

        # 2. Convert elapsed time to hours
        elapsed_h = elapsed_s / 3600.0

        # 3. Coulomb Counting: how many mAh used in this interval?
        used_Ah = current_A * elapsed_h  # A * h
        used_mAh = used_Ah * 1000.0      # convert to mAh

        # 4. Update total consumed
        consumed_mAh += used_mAh

        # 5. Calculate remaining capacity
        remaining_mAh = effective_capacity_mAh - consumed_mAh
        if remaining_mAh < 0:
            remaining_mAh = 0.0

        # 6. Estimate flight time
        #    If the current is near zero, set flight time to a large number
        if current_A > 0.1:
            flight_time_left_h = (remaining_mAh / 1000.0) / current_A
            flight_time_left_minutes = flight_time_left_h * 60.0
        else:
            flight_time_left_minutes = 9999.0

        # 7. Print telemetry info
        print(
            f"Time: {total_elapsed_s:5.1f}s | "
            f"Current (A): {current_A:5.2f} | "
            f"Consumed (mAh): {consumed_mAh:7.1f} | "
            f"Remaining (mAh): {remaining_mAh:7.1f} | "
            f"Est. Flight Time (min): {flight_time_left_minutes:7.1f}"
        )

        # Check if we've fully depleted the effective capacity
        if remaining_mAh <= 0:
            print("\nBattery effectively depleted—simulation ending.")
            break

        # Update the time checkpoint
        last_time = current_time

    # Sleep a bit so we don’t hammer the CPU
    time.sleep(0.01)

print("\nSIMULATION COMPLETE.")
print(f"Total time simulated: {time.time() - start_time:.1f} seconds.")
