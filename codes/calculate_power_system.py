# plane_power_system_calculator.py
# Power System Estimator for RC Planes (Metric Units Only)
# Source: https://rcplanes.online/setup_guidelines.htm

import math

def recommend_power(weight_kg, flight_type="trainer"):
    if flight_type == "glider":
        return weight_kg * 65
    elif flight_type == "aerobatic":
        return weight_kg * 200
    else:  # default: trainer
        return weight_kg * 120

def motor_efficiency_output(input_power, efficiency_percent):
    return input_power * (efficiency_percent / 100)

def motor_weight_from_power(power_watt, efficiency=70):
    factor = 3 if efficiency <= 70 else 5
    return power_watt / factor  # in grams

def battery_voltage_from_wingspan_cm(cm):
    if cm < 100:
        return 11.1  # 3s
    elif cm < 140:
        return 14.8  # 4s
    elif cm < 175:
        return 22.2  # 6s
    elif cm < 215:
        return 29.6  # 8s
    elif cm < 245:
        return 37.0  # 10s
    else:
        return 44.4  # 12s

def prop_pitch_speed(pitch_cm, rpm):
    return (pitch_cm * rpm) / 60000  # m/s

def thrust_check(thrust_g, plane_weight_g):
    return {
        "hover": thrust_g >= plane_weight_g,
        "takeoff": thrust_g >= 0.5 * plane_weight_g,
        "climb": thrust_g >= 0.33 * plane_weight_g
    }

def esc_rating(max_current):
    return max_current * 1.2

def battery_discharge_check(capacity_mah, c_rating, load_current):
    max_safe_continuous = (capacity_mah * c_rating * 0.6) / 1000  # A
    return load_current <= max_safe_continuous

# Example usage
if __name__ == "__main__":
    weight_kg = float(input("Enter plane weight (kg): "))
    wingspan_cm = float(input("Enter wingspan (cm): "))
    flight_type = input("Enter flight type (trainer/glider/aerobatic): ").lower()
    motor_efficiency = float(input("Enter motor efficiency (%): "))

    input_power = recommend_power(weight_kg, flight_type)
    output_power = motor_efficiency_output(input_power, motor_efficiency)
    est_motor_weight = motor_weight_from_power(input_power, motor_efficiency)
    recommended_voltage = battery_voltage_from_wingspan_cm(wingspan_cm)

    print(f"\n--- Power System Recommendation ---")
    print(f"Required input power: {input_power:.1f} W")
    print(f"Expected shaft output power: {output_power:.1f} W")
    print(f"Estimated motor weight: {est_motor_weight:.1f} g")
    print(f"Recommended battery voltage: {recommended_voltage:.1f} V")

    pitch_cm = float(input("\nEnter prop pitch (cm): "))
    rpm = float(input("Enter RPM: "))
    pitch_speed = prop_pitch_speed(pitch_cm, rpm)
    print(f"Static pitch speed: {pitch_speed:.2f} m/s")

    thrust_g = float(input("Enter estimated static thrust (grams): "))
    weight_g = weight_kg * 1000
    thrust_eval = thrust_check(thrust_g, weight_g)
    print("Thrust checks:", thrust_eval)

    max_current = float(input("Enter max expected current (A): "))
    esc_suggested = esc_rating(max_current)
    print(f"Recommended ESC rating: {esc_suggested:.1f} A")

    cap_mah = float(input("Enter battery capacity (mAh): "))
    c_rate = float(input("Enter battery C-rate: "))
    battery_ok = battery_discharge_check(cap_mah, c_rate, max_current)
    print(f"Battery safe for use: {battery_ok}")
