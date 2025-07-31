def get_watt_per_kg_range(aircraft_type):
    aircraft_power_table = {
        "Park Flyers / Slow Flyers": (110, 155),
        "Trainers / Gentle Flyers": (155, 200),
        "Sport Aerobatic / Fast Scale": (200, 245),
        "Advanced Aerobatics / High Speed": (245, 285),
        "3D Models / Ducted Fans": (285, 330),
        "Unlimited 3D Performance": (330, 460)
    }
    return aircraft_power_table.get(aircraft_type, None)

def calculate_power(weight_kg, aircraft_type):
    watt_range = get_watt_per_kg_range(aircraft_type)
    if not watt_range:
        raise ValueError("Invalid aircraft type.")

    min_power = weight_kg * watt_range[0]
    max_power = weight_kg * watt_range[1]
    return min_power, max_power

def main():
    print("Aircraft Power Requirement Calculator (Metric Units - kg)")
    print("Aircraft Types:")
    print("1. Park Flyers / Slow Flyers")
    print("2. Trainers / Gentle Flyers")
    print("3. Sport Aerobatic / Fast Scale")
    print("4. Advanced Aerobatics / High Speed")
    print("5. 3D Models / Ducted Fans")
    print("6. Unlimited 3D Performance")

    types = {
        "1": "Park Flyers / Slow Flyers",
        "2": "Trainers / Gentle Flyers",
        "3": "Sport Aerobatic / Fast Scale",
        "4": "Advanced Aerobatics / High Speed",
        "5": "3D Models / Ducted Fans",
        "6": "Unlimited 3D Performance"
    }

    selection = input("Enter the number for your aircraft type: ").strip()
    if selection not in types:
        print("Invalid selection.")
        return

    try:
        weight_kg = float(input("Enter aircraft weight in kilograms (kg): ").strip())
    except ValueError:
        print("Invalid weight input.")
        return

    aircraft_type = types[selection]
    min_watt, max_watt = calculate_power(weight_kg, aircraft_type)

    print(f"\nAircraft Type: {aircraft_type}")
    print(f"Weight: {weight_kg:.2f} kg")
    print(f"Estimated Power Requirement: {min_watt:.0f} W – {max_watt:.0f} W")

if __name__ == "__main__":
    main()
