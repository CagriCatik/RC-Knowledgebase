def calculate_motor_esc_params(kv_ratings, battery_voltages, current_draws):
    """
    Calculate motor and ESC parameters for different KV ratings and battery voltages.

    Args:
        kv_ratings (list): List of motor KV ratings.
        battery_voltages (list): List of battery voltages in volts.
        current_draws (dict): Dictionary with KV rating as key and current draw (A) as value.

    Returns:
        list: List of dictionaries containing RPM, torque level, power, and ESC recommendation.
    """
    results = []

    for kv in kv_ratings:
        for voltage in battery_voltages:
            # Calculate RPM
            rpm = kv * voltage

            # Determine torque level (inverse relation with KV)
            if kv >= 2000:
                torque = "Low"
            elif 1000 <= kv < 2000:
                torque = "Medium"
            else:
                torque = "High"

            # Get current draw for the motor
            current = current_draws.get(kv, 0)

            # Calculate Power
            power = voltage * current

            # Recommend ESC rating (20% buffer on current)
            esc_rating = round(current * 1.2)

            # Store results
            results.append({
                "KV": kv,
                "Voltage (V)": voltage,
                "RPM": rpm,
                "Torque": torque,
                "Power (W)": power,
                "ESC Recommendation (A)": esc_rating,
            })

    return results

# Example inputs
kv_ratings = [2300, 1200, 900]  # Motor KV ratings
battery_voltages = [14.8, 11.1]  # Battery voltages (4S, 3S LiPo)
current_draws = {
    2300: 30,  # Current draw in Amps for 2300 KV motor
    1200: 40,  # Current draw in Amps for 1200 KV motor
    900: 50,   # Current draw in Amps for 900 KV motor
}

# Perform calculations
results = calculate_motor_esc_params(kv_ratings, battery_voltages, current_draws)

# Print results
for result in results:
    print(result)
