# How To select a brushless motor, ESC, LiPo battery, and propeller for your RC airplane.

This guide incorporates relevant aerodynamic and electrical theory, references to fundamental formulas, and best practices for ensuring optimal flight performance and component reliability.

---

## **1. Introduction**

Electric propulsion for RC airplanes has grown in popularity due to high power density, improved battery technology, and the inherent simplicity compared to nitro/gas engines. Achieving a balanced powertrain, however, involves understanding the interplay between key physical and electrical parameters: power (Watts), voltage (Volts), current (Amps), rotational speed (RPM), thrust, and aerodynamic efficiency.  

The primary objective is to select components (motor, ESC, battery, propeller) that (1) deliver the required thrust and power for your aircraft’s intended flight envelope, and (2) stay within safe operating limits (i.e., no overheating, excessive draw, or mechanical stress).  

---

## **2. Power Requirements: Aerodynamic and Weight Considerations**

One of the earliest steps is determining how much power you need. Power requirements primarily depend on:

1. **Aircraft Weight (AUW – All-Up Weight)**  
2. **Desired Flight Regime (Trainer, Sport, 3D, High Speed, etc.)**  
3. **Wing Loading and Lift Requirements**  

### 2.1 Rule-of-Thumb Power Estimates

- **Trainer / Sport Flyers**: ~70–100 W per pound of aircraft weight (155–220 W/kg)  
- **Aerobatic Models**: ~120–150 W per pound (265–330 W/kg)  
- **3D / Extreme Performance**: 150–200+ W per pound (330–440+ W/kg)  

\[
\text{Power Required (W)} = \text{Aircraft Weight (lb)} \times \text{Watt/lb}
\]

For metric users:

\[
\text{Power Required (W)} = \text{Aircraft Mass (kg)} \times \text{Watt/kg}
\]

\[
\text{Example: For a 1.13 kg airplane desiring 220 W/kg} \implies 1.13 \times 220 \approx 248 \text{ W}
\]

### 2.2 Aerodynamic Efficiency and Excess Power

Beyond raw power, consider the aircraft’s aerodynamic profile (airfoil shape, drag coefficient, aspect ratio). A more efficient aircraft (thin airfoil, low frontal area) may require less power to maintain level flight but can exploit the same power for higher speeds. Excess power (beyond what is required to maintain level flight) provides climb rate and acceleration.  

---

## **3. Brushless Motors: The Core of Your Power System**

A brushless DC (BLDC) motor converts electrical power into mechanical power. The motor’s performance depends on several intrinsic parameters:

1. **Stator Dimensions (e.g., 28×14, 35×42)**  
2. **kV Rating**  
3. **Winding Resistance**  
4. **Magnetic Design (Number of poles, magnet strength)**  

### 3.1 Inrunner vs. Outrunner

- **Outrunner Motors**: The outer shell (can) rotates around a stationary stator. Outrunners typically have lower kV (fewer RPM per Volt) and higher torque for a given size. Perfect for direct-drive propellers.  
- **Inrunner Motors**: The rotor is inside a stationary shell. They generally have higher kV and are commonly used with ducted fans or gearboxes to achieve higher RPM.

For most traditional RC airplane applications (park flyers, trainers, sport planes), **outrunners** dominate due to their torque characteristics and simplicity.

### 3.2 Motor kV Rating and Its Effects

\[
\text{RPM (no-load)} = kV \times \text{Voltage}
\]

For a motor with \( kV = 1000 \):
- At 11.1 V (3S nominal), theoretical no-load RPM = \( 11.1 \times 1000 = 11{,}100 \) RPM.
- At 14.8 V (4S nominal), theoretical no-load RPM = \( 14.8 \times 1000 = 14{,}800 \) RPM.

However, under load, the actual RPM will be lower due to losses and propeller drag.  
- **Lower kV (e.g., 800–1000)**: Larger prop, higher torque, lower RPM.  
- **Higher kV (e.g., >1400)**: Smaller prop, higher RPM, suited for faster planes or EDFs.

### 3.3 Power Ratings and Efficiency

Manufacturers often provide a power rating (e.g., “300 W motor”) and recommended voltage range. The motor’s **efficiency** curve depends on load and RPM. Typically, BLDC motors have peak efficiencies around 80–90% at the correct propeller load. Operating the motor too far above or below its optimal current can cause overheating and wasted energy.

---

## **4. Electronic Speed Controller (ESC): Managing Voltage and Current**

The ESC regulates power delivery from the battery to the motor by rapidly switching the DC supply at high frequency (PWM – Pulse Width Modulation). Key specifications include:

1. **Current Rating (A)**: The maximum continuous current the ESC can handle without overheating.  
2. **Voltage Rating**: Typically given as the maximum number of LiPo cells (e.g., “2–4S”).  
3. **BEC (Battery Eliminator Circuit)**: A built-in regulator that provides 5–6 V to power the receiver and servos.

### 4.1 Selecting the Right Current Rating

\[
\text{ESC Current (safe)} = 1.2 \times \text{Max Motor Current Draw}
\]

A 20–30% overhead is recommended. For example, if your setup draws ~25 A peak, use at least a 30 A or 40 A ESC.

### 4.2 Cooling Considerations

Power MOSFETs within the ESC need adequate airflow. Mounting the ESC where air can pass over its heat sink is crucial. Insufficient cooling can lead to thermal shutdown or permanent damage.

---

## **5. LiPo Batteries: Voltage, Capacity, and Discharge**

### 5.1 Voltage (Number of Cells)

\[
\text{Nominal Voltage (3.7 V per cell)} \times \text{Number of cells (S)}
\]

- **3S** = 3 × 3.7 V = 11.1 V nominal  
- **4S** = 4 × 3.7 V = 14.8 V nominal  

Higher voltage (more cells in series) allows for higher power output at lower current draw (\( P = V \times I \)). However, it also increases the motor’s RPM for the same kV.

### 5.2 Capacity (mAh) and Flight Time

\[
\text{Flight Time (min)} \approx \frac{\text{Battery Capacity (mAh)} / 1000}{\text{Average Current Draw (A)}} \times 60
\]

For example, a 2200 mAh battery at 25 A average current:
\[
\approx \frac{2.2\,\text{Ah}}{25\,\text{A}} \times 60 \approx 5.3\,\text{min}
\]

In practice, flight times vary based on throttle usage and aerodynamic efficiency.

### 5.3 Discharge Rating (C-Rating)

The C-rating indicates how quickly a battery can deliver current relative to its capacity. A 2200 mAh (2.2 Ah) pack with 20C rating can theoretically deliver:
\[
20 \times 2.2 \text{ A} = 44 \text{ A continuously}
\]

For safety, choose a battery with ample headroom. A higher C-rating also reduces voltage sag (improves performance) but usually increases cost and sometimes weight.

### 5.4 Internal Resistance and Heat

Batteries have internal resistance (measured in milliohms). High internal resistance leads to increased voltage drop under load, reducing output power and generating heat within the pack. As LiPo packs age, internal resistance rises, thus decreasing overall performance.

---

## **6. Propellers: Aerodynamics, Thrust, and Efficiency**

The propeller is your interface between motor torque and thrust production. Its geometry (diameter, pitch, blade shape, airfoil) directly impacts thrust, speed, and current draw.

### 6.1 Basic Propeller Theory

1. **Diameter (D)**: Affects thrust production at a given RPM. Larger diameter generally increases static thrust but can also increase current draw.  
2. **Pitch (P)**: The theoretical distance the prop moves forward in one revolution in an “ideal” fluid. Higher pitch generally favors higher flight speed, but also increases the load on the motor.  
3. **Advance Ratio** (\(J\)): For a propeller, \( J = \frac{V}{nD} \), where \( V \) is aircraft velocity, \( n \) is rotational speed (rev/s), and \( D \) is diameter. This is a key parameter in advanced propeller theory for matching prop load to motor output.

### 6.2 Matching Propeller to Motor and Battery

Most motor manufacturers provide recommended prop ranges for a specific voltage (e.g., “10×6 on 3S draws 25 A”). Staying within these recommendations ensures safe operating current and efficient flight.  

A **wattmeter test** on the ground can confirm you’re not exceeding motor/ESC/battery limits. The reading at full throttle should align with (or be below) the motor and ESC ratings.

### 6.3 Material, Weight, and Balance

- **Electric-Only Props**: Thinner blades, optimized for higher RPM and less torque compared to nitro/gas props.  
- **Composite / Carbon Fiber**: Lighter, stiffer, more expensive. Can increase efficiency but must be carefully balanced.  
- **Balancing**: Always balance your prop to reduce vibrations. Unbalanced props stress the motor bearings and airframe, diminishing both performance and lifespan.

---

## **7. Integrating All Components: A Step-by-Step Method**

1. **Estimate Required Power**  
   - Based on weight, flight style, and performance goals.  
2. **Select Motor**  
   - Choose an outrunner (unless special circumstances call for inrunner).  
   - Confirm it can handle the required wattage and recommended voltage range.  
   - Pick a kV appropriate for the prop size you plan to use (lower kV = bigger prop, higher torque; higher kV = smaller prop, higher RPM).  
3. **Choose Battery**  
   - Pick the number of cells (voltage) that matches the motor’s recommendations.  
   - Select a capacity (mAh) to yield your desired flight time and a C-rating to safely supply peak current.  
4. **Select ESC**  
   - Ensure the ESC’s continuous current rating is well above the motor’s peak draw (with ~20–30% overhead).  
   - Confirm it supports your battery’s cell count (voltage).  
   - BEC or OPTO? Decide based on your receiver/servo needs and overall wiring simplicity.  
5. **Propeller Selection**  
   - Start with manufacturer recommendations for diameter/pitch.  
   - Perform a bench test or wattmeter test to verify current draw, power, and RPM.  
6. **Fine-Tune and Test**  
   - Check motor, ESC, and battery temperatures after your first flights.  
   - If components run too hot, reduce prop load (smaller diameter or pitch) or increase cooling.  
   - If you want more thrust, carefully step up prop size, re-check current draw, and watch for overheating.

---

## **8. Scientific and Practical Considerations**

1. **Use a Wattmeter**  
   - Empirical measurement is the best way to confirm your theoretical calculations.  
   - Wattmeter readings of volts, amps, and watts at various throttle settings help diagnose potential issues.  

2. **Thermal Management**  
   - Power electronics (MOSFETs in ESCs and windings in motors) are sensitive to heat. Doubling the current roughly quadruples power loss \((I^2R)\) in conductors. Good airflow keeps components cool.  

3. **Aerodynamic Efficiency**  
   - The propeller’s efficiency is typically 40–65% in practical RC applications; better designs and matching can push this higher.  
   - Wing design, drag, and flight speed interplay with propeller load.  

4. **Battery Degradation**  
   - LiPo chemistry degrades with extreme discharge currents, overcharging, deep discharges, and temperature extremes. Proper care and balanced charging extend pack life.  

5. **System Resonance and Vibrations**  
   - Unbalanced props or loose motor mounts induce vibrations. Over time, these can degrade structural components, cause stress cracks, or lead to motor bearing failure.

---

## **9. Example Setup: Detailed Calculation**

**Scenario**  
- Airplane AUW: 2.5 lb (1.13 kg)  
- Desired flight style: Sport (~100 W/lb)  
- Target power: 2.5 lb × 100 W/lb = 250 W (approx. 220–250 W)

**Chosen Components**  
1. **Motor**: 3542-size outrunner, 1000 kV, rated for 300 W continuous on 3S.  
2. **Battery**: 3S, 2200 mAh, 25C.  
   - Continuous current capability: \( 25 \times 2.2 = 55 \) A (headroom above the expected 25–30 A).  
3. **ESC**: 40 A ESC (2–4S capable), with a 5 V, 3 A BEC.  
4. **Propeller**: 10×6 (manufacturer’s recommended for 3S).

**Wattmeter Test**  
- Full throttle static test: 26 A, 10.8 V under load, ~280 W. This is within motor and ESC limits.  
- Temperature check: Motor and ESC remain under ~50 °C after a 30 s full-throttle test (good sign).  

This setup should provide ample thrust for a sport-style flight, with sufficient headroom for the ESC and battery. Flight times might be in the 5–7 minute range, depending on throttle usage.

---

## **10. Conclusion**

Selecting the right brushless motor, ESC, LiPo battery, and propeller combination involves a balance of theoretical knowledge and practical testing. By understanding key electrical and aerodynamic principles—such as \( P = V \times I \), propeller thrust equations, and system efficiency—you can design a powertrain that meets your flight objectives without risking component damage.

**Key Takeaways**  

- **Power Requirements**: Determine by aircraft weight and flight performance goals (Watts per unit weight).  
- **Motor & Prop Matching**: Choose a motor kV and prop diameter/pitch combination that keeps the system within safe current limits.  
- **Battery Selection**: Ensure the voltage (number of cells) and C-rating can sustain the load.  
- **ESC Overhead**: Provide enough amperage margin and adequate cooling.  
- **Test and Validate**: Use a wattmeter, measure temperatures, and adjust components as needed.
