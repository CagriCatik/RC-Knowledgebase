import numpy as np
import matplotlib.pyplot as plt

def calculate_flight_time(capacity_mAh, avg_current_A, use_80_percent=True):
    """
    Calculate flight time in minutes based on:
      - capacity_mAh: Battery capacity in mAh
      - avg_current_A: Average current draw in Amperes (A)
      - use_80_percent: Whether to apply the 80% rule for LiPo batteries
    """
    # 1. Convert mAh to Ah
    capacity_Ah = capacity_mAh / 1000.0
    
    # 2. Apply 80% rule if desired
    if use_80_percent:
        capacity_Ah *= 0.8  # use only 80% of the total capacity
    
    # 3. Calculate theoretical flight time (in hours)
    #    flight_time_hours = capacity_Ah / avg_current_A
    #    flight_time_minutes = flight_time_hours * 60
    #    Combine both in one step:
    flight_time_minutes = (capacity_Ah / avg_current_A) * 60
    
    return flight_time_minutes

def plot_flight_time_vs_capacity():
    """
    Plot how flight time changes as capacity increases
    for different average current draws.
    """
    # Define a range of battery capacities (mAh)
    capacities = np.arange(500, 4501, 500)  # e.g., 500mAh to 4500mAh in 500mAh steps
    
    # Define a set of average currents to compare
    avg_currents = [5, 10, 15, 20, 30]  # in Amperes
    
    plt.figure(figsize=(8, 6))
    
    for current in avg_currents:
        flight_times = []
        for cap in capacities:
            ft = calculate_flight_time(cap, current, use_80_percent=True)
            flight_times.append(ft)
        
        # Plot flight time against capacity
        plt.plot(capacities, flight_times, marker='o', label=f"{current} A Avg Current")
    
    plt.title("Flight Time vs. Battery Capacity (80% Rule Applied)")
    plt.xlabel("Battery Capacity (mAh)")
    plt.ylabel("Flight Time (minutes)")
    plt.grid(True)
    plt.legend()
    plt.show()

def plot_flight_time_vs_current():
    """
    Plot how flight time changes as average current draw varies
    for different battery capacities.
    """
    # Define a range of average currents (A)
    currents = np.arange(5, 31, 5)  # 5A to 30A in steps of 5A
    
    # Define a set of battery capacities to compare (mAh)
    capacities = [1000, 1500, 2000, 3000, 4000]
    
    plt.figure(figsize=(8, 6))
    
    for cap in capacities:
        flight_times = []
        for current in currents:
            ft = calculate_flight_time(cap, current, use_80_percent=True)
            flight_times.append(ft)
        
        # Plot flight time against current
        plt.plot(currents, flight_times, marker='s', label=f"{cap} mAh")
    
    plt.title("Flight Time vs. Average Current (80% Rule Applied)")
    plt.xlabel("Average Current (A)")
    plt.ylabel("Flight Time (minutes)")
    plt.grid(True)
    plt.legend()
    plt.show()

if __name__ == "__main__":
    # Plot 1: Flight Time vs. Battery Capacity (for various avg currents)
    plot_flight_time_vs_capacity()
    
    # Plot 2: Flight Time vs. Average Current Draw (for various capacities)
    plot_flight_time_vs_current()
