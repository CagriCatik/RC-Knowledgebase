import tkinter as tk
from tkinter import ttk, messagebox

def calculate_motor_esc_params(kv_ratings, battery_voltages, current_draws):
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

def calculate_and_display():
    try:
        kv_ratings = list(map(int, kv_entry.get().split(',')))
        battery_voltages = list(map(float, voltage_entry.get().split(',')))
        current_draws_input = current_draws_entry.get().split(',')

        current_draws = {}
        for item in current_draws_input:
            kv, current = map(float, item.split(':'))
            current_draws[int(kv)] = current

        results = calculate_motor_esc_params(kv_ratings, battery_voltages, current_draws)

        result_text.delete('1.0', tk.END)
        for result in results:
            result_text.insert(tk.END, f"KV: {result['KV']}, Voltage: {result['Voltage (V)']} V, RPM: {result['RPM']}, Torque: {result['Torque']}, Power: {result['Power (W)']} W, ESC Recommendation: {result['ESC Recommendation (A)']} A\n")
    except Exception as e:
        messagebox.showerror("Error", f"Invalid input: {e}")

# Create the main window
root = tk.Tk()
root.title("Motor & ESC Parameter Calculator")
root.geometry("800x600")
root.configure(bg="#f0f0f0")

# Input frame
input_frame = tk.Frame(root, bg="#f0f0f0", padx=10, pady=10)
input_frame.pack(fill="x", pady=10)

tk.Label(input_frame, text="KV Ratings (comma-separated):", bg="#f0f0f0", font=("Arial", 12)).grid(row=0, column=0, sticky="w")
kv_entry = tk.Entry(input_frame, width=50, font=("Arial", 12))
kv_entry.grid(row=0, column=1, padx=10, pady=5)
kv_entry.insert(0, "2300,1200,900")

tk.Label(input_frame, text="Battery Voltages (comma-separated):", bg="#f0f0f0", font=("Arial", 12)).grid(row=1, column=0, sticky="w")
voltage_entry = tk.Entry(input_frame, width=50, font=("Arial", 12))
voltage_entry.grid(row=1, column=1, padx=10, pady=5)
voltage_entry.insert(0, "14.8,11.1")

tk.Label(input_frame, text="Current Draws (KV:Current, comma-separated):", bg="#f0f0f0", font=("Arial", 12)).grid(row=2, column=0, sticky="w")
current_draws_entry = tk.Entry(input_frame, width=50, font=("Arial", 12))
current_draws_entry.grid(row=2, column=1, padx=10, pady=5)
current_draws_entry.insert(0, "2300:30,1200:40,900:50")

# Calculate button
calculate_button = tk.Button(root, text="Calculate", command=calculate_and_display, font=("Arial", 12), bg="#007BFF", fg="white", relief="raised", padx=10, pady=5)
calculate_button.pack(pady=10)

# Results frame
results_frame = tk.Frame(root, bg="#f0f0f0", padx=10, pady=10)
results_frame.pack(fill="both", expand=True)

tk.Label(results_frame, text="Results:", bg="#f0f0f0", font=("Arial", 14, "bold")).pack(anchor="w", pady=5)
result_text = tk.Text(results_frame, wrap="word", font=("Courier New", 12), bg="#ffffff", fg="#000000", height=20, relief="solid", borderwidth=1)
result_text.pack(fill="both", expand=True, padx=5, pady=5)

# Run the application
root.mainloop()
