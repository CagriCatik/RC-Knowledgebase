# How to measure the Flight Time

## **1. Overview of the Approach**

1. **Measure Battery Current**  
   - Use a **current sensor** (e.g., ACS712, INA219, or similar Hall-effect/voltage-shunt-based sensor) that outputs an analog or digital reading proportional to the instantaneous current flowing from the battery.  
   - The microcontroller reads these values at a regular interval.

2. **Integrate Current Over Time**  
   - Every time you read the current, you multiply by the elapsed time to figure out “how many mAh” have been consumed in that interval. Summing these intervals gives you the total capacity used so far.

3. **Estimate Remaining Capacity**  
   - Knowing the battery’s nominal capacity (e.g., 1500mAh) minus the consumed mAh gives an approximation of remaining capacity.  
   - You can then infer an estimated “remaining flight time” from the current consumption rate.

4. **Display or Transmit Data**  
   - Show the remaining battery capacity and/or flight time on an onboard display (LCD/OLED) or send telemetry back to a ground station or flight controller.

5. **Refinements**  
   - Measure battery voltage as well to catch low-voltage conditions (voltage sag).  
   - Factor in battery health, temperature, and other practical aspects to refine accuracy.

---

## **2. Hardware Setup**

**2.1 Current Sensor**

1. **Examples**  
   - **ACS712**: Analog output, simple but can be noisy.  
   - **INA219**: I²C digital sensor, more accurate, measures both current and voltage.  
   - **INA260**, **INA3221**, or similar integrated power monitors also exist.

2. **Wiring**  
   - Place the sensor in series with your battery’s positive lead (or negative lead, depending on sensor type).  
   - If it’s an analog sensor like ACS712, connect its analog output pin to an ADC (Analog-to-Digital Converter) pin on the microcontroller.  
   - If it’s a digital sensor like INA219, connect SDA and SCL to your microcontroller’s I²C bus pins (plus ground and VIN).

3. **Microcontroller**  
   - Arduino Uno, STM32 “Blue Pill,” ESP32, or any board with an ADC or I²C interface.  
   - Ensure the microcontroller’s operating voltage and logic levels are compatible with the sensor.

---

## **3. Firmware Logic**

The core idea is to perform **periodic readings** of the current, integrate over time, and then calculate remaining flight time. Below is a conceptual Arduino-style pseudo-code (applicable to many microcontrollers with minor tweaks).

```cpp
/*****************************************************
 * Example: Using an INA219 sensor (I²C) or ACS712 (analog)
 * For INA219, you can use a library like Adafruit_INA219.
 * For ACS712, you read from analog pin and convert to current.
 *****************************************************/

##include <Wire.h>
// ##include <Adafruit_INA219.h>  // If using an INA219 library

// Adafruit_INA219 ina219;  // If using the INA219
// or define the analog pin if using ACS712
const int CURRENT_SENSOR_PIN = A0;  // e.g., for ACS712 on Arduino

// Battery capacity in mAh
float batteryCapacity_mAh = 1500.0;  // Example 1500mAh battery

// Variables for integration
volatile float consumed_mAh = 0.0;  // will track how much capacity used
unsigned long lastUpdateTime = 0;   // in milliseconds

// For flight-time estimation
float averageCurrentDraw_A = 0.0;  // track average current
float flightTimeLeft_minutes = 0.0;  // estimated

// Constants
const float samplingInterval_ms = 100.0;  // read current every 100ms
const bool use80PercentRule = true;       // only use 80% of total capacity?

void setup() {
  Serial.begin(115200);
  Wire.begin();  // If using I2C sensor
  // ina219.begin();  // If using INA219 library

  lastUpdateTime = millis();
  // Optionally, calibrate the sensor or zero offsets if needed.
}

void loop() {
  unsigned long currentTime = millis();
  
  // Check if it's time to sample
  if(currentTime - lastUpdateTime >= samplingInterval_ms) {
    // Step 1: Read current (in amperes)
    float current_A = 0.0;

    // --- If using INA219 ---
    // current_A = ina219.getCurrent_mA() / 1000.0; // convert mA to A

    // --- If using ACS712 (example) ---
    // int sensorValue = analogRead(CURRENT_SENSOR_PIN);
    // float voltage = (sensorValue / 1023.0) * 5.0; // for Arduino 5V reference
    // Convert 'voltage' to 'current_A' based on ACS712 calibration.
    // e.g., for ACS712 5A module, 185 mV/A sensitivity, offset at ~2.5V
    // current_A = (voltage - 2.5) / 0.185; 

    // [Replace with actual calibration formula for your sensor]

    // Step 2: Time elapsed in hours since last update
    float elapsed_s = (currentTime - lastUpdateTime) / 1000.0; // in seconds
    float elapsed_h = elapsed_s / 3600.0; // convert to hours

    // Step 3: Integrate to find how many Ah used in this interval
    float used_Ah = current_A * elapsed_h;

    // Step 4: Convert to mAh
    float used_mAh = used_Ah * 1000.0;

    // Step 5: Add to total consumed
    consumed_mAh += used_mAh;

    // Step 6: Recalculate flight time left
    // (assuming average current remains about the same)
    float effectiveCapacity_mAh = (use80PercentRule) ? (batteryCapacity_mAh * 0.8) : batteryCapacity_mAh;
    float remaining_mAh = effectiveCapacity_mAh - consumed_mAh;
    if (remaining_mAh < 0) {
      remaining_mAh = 0; // can't be negative
    }

    // Current average usage: 
    // (We can do a rolling average or simply use current_A if we assume stable flight)
    // For simplicity, let's assume current_A is representative
    if(current_A > 0.1) {  // Avoid divide-by-zero if the drone is idle or sensor is noise
      // Flight time left (in hours) = remaining_mAh / 1000 / current_A
      float flightTimeLeft_h = (remaining_mAh / 1000.0) / current_A;
      flightTimeLeft_minutes = flightTimeLeft_h * 60.0;
    } else {
      // If current_A is almost 0, e.g. idle on ground
      flightTimeLeft_minutes = 9999; // or some large number
    }

    // Debug or telemetry output
    Serial.print("Current (A): ");
    Serial.print(current_A, 2);
    Serial.print(" | Used (mAh): ");
    Serial.print(consumed_mAh, 2);
    Serial.print(" | Remaining (mAh): ");
    Serial.print(effectiveCapacity_mAh - consumed_mAh, 2);
    Serial.print(" | Est. Flight Time Left (min): ");
    Serial.println(flightTimeLeft_minutes, 1);

    // Update timer
    lastUpdateTime = currentTime;
  }

  // Other code (e.g., controlling the drone, reading sensors, etc.) can go here.
}
```

**Key Points in the Code**

1. **Sampling Interval**  
   - We read the current every 100ms in this example (`samplingInterval_ms`). You can choose a faster or slower rate depending on how quickly your current draw changes.

2. **Converting ADC Value to Amperes**  
   - Each current sensor has its own sensitivity and offset. For example, the ACS712 5A module is around 185mV per amp with a 2.5V quiescent output at 0A. You’ll need to calibrate this formula for accurate readings.

3. **80% Rule**  
   - We apply `batteryCapacity_mAh * 0.8` to protect the battery from over-discharge. You can disable it by setting `use80PercentRule = false`.

4. **Average Current vs. Instantaneous Current**  
   - In the example, we use the instantaneous current from each cycle to estimate flight time. A more refined approach might maintain a rolling average of the last few seconds of current readings.

5. **Flight Time Calculation**  
   - We do a simple division: Remaining capacity (in Ah) / current draw (in A) → time in hours → then multiply by 60 for minutes.

---

## **4. Dealing with Voltage Readings**

- **Why Voltage?**  
  - Voltage alone isn’t always an accurate gauge of battery capacity under load, but it still helps to monitor cell voltages (especially for LiPo) to avoid going below safe thresholds (e.g., 3.5V per cell under load).

- **If Using INA219 or Another Sensor**  
  - Many of these sensors can measure bus voltage as well. You can read the battery voltage to ensure you don’t drop below safe limits, or to calibrate your capacity usage if you notice heavy voltage sag.

---

## **5. Practical Considerations**

1. **Calibration**  
   - **Hall-effect sensors** (like ACS712) have offsets that shift with temperature. You might want to calibrate (measure zero-current offset) at startup or occasionally in flight.

2. **Noise Filtering**  
   - Microcontrollers can pick up noise from high-current wires. Twisted wires, capacitors on sensor outputs, or software filtering can help stabilize readings.

3. **Safety Margin**  
   - Coulomb counting can drift over time if there’s any error in measurement. Periodically checking voltage can provide a reality check (e.g., if the voltage is about to reach your cutoff, even if your coulomb count says there’s capacity left).

4. **Integration in Drones**  
   - If your flight controller supports sensor inputs or if you have a separate microcontroller (like an onboard “battery monitor module”), you can feed the data into your main flight software or OSD (On-Screen Display) for real-time flight-time readouts.

5. **Data Display**  
   - Instead of printing to Serial, you could display real-time info on a small OLED, LCD screen, or transmit via a wireless link (e.g., telemetry radio, Bluetooth) to a ground station.

---

## **6. Summary**

Implementing flight-time estimation on a microcontroller using a current sensor is essentially about:

1. **Reading Current** – either via an analog or digital sensor.  
2. **Coulomb Counting** – integrating current over time to determine used capacity.  
3. **Estimating Remaining Capacity** – subtracting from your known (or adjusted) battery capacity.  
4. **Flight Time Calculation** – dividing remaining capacity by the current draw to determine how many minutes remain.

This approach gives you a more **real-time and accurate** estimation than voltage-based guesses alone, especially when your drone’s current draw fluctuates rapidly. By adding logic for voltage checks and some sensor calibration, you can further refine and safeguard your battery monitoring system.