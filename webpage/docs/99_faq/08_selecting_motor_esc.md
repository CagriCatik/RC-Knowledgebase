# Selecting Brushless-Motor and ESC

Selecting the appropriate power system components—brushless motor, Electronic Speed Controller (ESC), Lithium Polymer (LiPo) battery, and propeller—is crucial for the optimal performance, efficiency, and safety of your radio-controlled (RC) airplane. This comprehensive guide provides a step-by-step approach to determining the ideal specifications for each component, ensuring both beginners and advanced hobbyists can make informed decisions tailored to their specific aircraft and performance requirements.

## Overview

This documentation primarily focuses on trainer-style RC airplanes, characterized by their high-wing design and suitability for beginners. However, the principles and calculations presented are versatile and can be adapted for other types of RC airplanes, including sport, pattern-flying, and 3D performance models. Fixed-wing RC airplanes rely on the synergy between the motor and propeller to generate thrust, control speed, and ensure stable flight characteristics. Unlike multi-rotor setups, fixed-wing models require careful calibration of thrust-to-weight ratios, propeller sizing, and motor specifications to meet the desired flight performance.

---

## Determining Required Wattage

### Understanding Wattage in RC Airplanes

Wattage is a measure of electrical power and is critical in determining the motor's ability to provide sufficient thrust and control for your RC airplane. Calculating the required wattage ensures that your motor and other power system components are appropriately sized for your aircraft's weight and desired performance level.

### Formula for Calculating Wattage

$$
\text{Wattage} = \text{Weight (lbs)} \times \text{Watts per Pound (W/lb)}
$$

### Selecting the Appropriate Watts per Pound

The watts per pound (W/lb) metric varies based on the performance characteristics you desire for your airplane:

- **Gliders:** 50–60 W/lb
- **General Aviation (Trainer Style):** 85–100 W/lb
- **Sport/Pattern Flying:** 100–120 W/lb
- **3D Performance:** 150+ W/lb

**Example Calculation:**

**Specifications:**
- **Wingspan:** 82 inches
- **All-Up Weight (AUW):** 11 lbs
- **Performance Level:** Trainer Style (100 W/lb)

$$
\text{Wattage} = 11 \, \text{lbs} \times 100 \, \text{W/lb} = 1,100 \, \text{W}
$$

**Interpretation:**
An RC airplane with an 82-inch wingspan and an AUW of 11 lbs operating at a trainer performance level requires a motor capable of delivering approximately 1,100 watts.

### Considerations

- **Accuracy of Weight:** The AUW includes the weight of all components—airframe, motor, ESC, battery, servos, and any payload. It's essential to estimate this accurately; discrepancies can lead to underpowered or overburdened systems.
- **Flexibility:** If initial calculations suggest insufficient power, reassess component weights or adjust performance expectations accordingly.

---

## Selecting the Power System Components

### Motor Selection

#### Understanding Motor Specifications

Two critical specifications for brushless motors are RPM (revolutions per minute) and KV (RPM per volt). These determine how fast the motor spins and how much torque it can produce, directly affecting the airplane's performance.

#### Calculating Required RPM and KV

**Formula for RPM:**

$$
\text{RPM} = 4,896 \times \text{(Wingspan in feet)}^2 - 162.56
$$

**Conversion:**

$$
\text{Wingspan (ft)} = \frac{82 \, \text{in}}{12} \approx 6.83 \, \text{ft}
$$

**Calculation:**

$$
\text{RPM} = 4,896 \times (6.83)^2 - 162.56 \approx 10,740 \, \text{RPM}
$$

**KV Calculation:**

$$
\text{KV} = \frac{\text{RPM}}{\text{Nominal Voltage}}
$$

Given a 6S LiPo battery (22.2 V):

$$
\text{KV} = \frac{10,740 \, \text{RPM}}{22.2 \, \text{V}} \approx 484 \, \text{KV}
$$

#### Selecting the Motor

**Key Specifications:**
- **Power Rating:** At least 1,100 W
- **Current Rating:** Capable of handling 50 A continuously
- **KV Rating:** Approximately 484 KV (±5% tolerance is acceptable)
- **Voltage Compatibility:** Must operate efficiently at 6S (22.2 V)

**Additional Features:**
- **Cooling Mechanisms:** Motors with integrated cooling (e.g., heatsinks or fans) can sustain higher performance without overheating.
- **Durability:** Robust construction and quality bearings contribute to the motor's lifespan and reliability.

**Example Selection:**

**Chosen Motor:** 1,100 W Brushless Motor, 484 KV

**Reasoning:**
- Meets the calculated power and KV requirements.
- Compatible with a 6S battery setup.
- Rated to handle the necessary current without excessive heating.

---

### Electronic Speed Controller (ESC) Selection

#### Understanding Current (Amperage)

Current, measured in amperes (A), indicates the rate at which electrical charge flows from the battery to the motor. Properly calculating current ensures that the ESC and motor can handle the power demands without overheating or failing.

#### Calculating Required Current

$$
\text{Current (A)} = \frac{\text{Wattage (W)}}{\text{Nominal Voltage (V)}}
$$

**Example Calculation:**

$$
\text{Current} = \frac{1,100 \, \text{W}}{22.2 \, \text{V}} \approx 49.5 \, \text{A}
$$

**Interpretation:**
A motor requiring 1,100 watts at 22.2 volts will draw approximately 49.5 amps.

#### Selecting the ESC

**Safety Margin:**
To prevent overheating and ensure reliability, it's essential to select an ESC that can handle more current than the calculated maximum. A common practice is to add a 20% safety margin:

$$
\text{Safe ESC Current} = \text{Current} \times 1.2 = 49.5 \, \text{A} \times 1.2 = 59.4 \, \text{A}
$$

**Recommended ESC Rating:**
- **Minimum:** 60 A
- **Preferred:** 80–100 A for added headroom and longevity

**Additional Considerations:**
- **Battery Compatibility:** Ensure the ESC is compatible with a 6S LiPo battery.
- **BEC (Battery Eliminator Circuit):** If your ESC includes a BEC, verify that it provides sufficient voltage and current for your servos and receiver.
- **Firmware and Features:** Some ESCs offer programmable firmware, allowing for fine-tuning motor performance and responsiveness.

**Example Selection:**

**Chosen ESC:** 80 A 6S-Compatible ESC

**Reasoning:**
- Provides a comfortable safety margin above the minimum 60 A requirement.
- Compatible with the 6S battery, ensuring stable voltage delivery.
- Offers features such as programmable settings and reliable thermal performance.

---

### Battery Selection

#### Importance of Battery Selection

The LiPo battery is the heart of your RC airplane's power system, providing the necessary voltage and current to the motor via the ESC. Selecting the correct cell count (S) and capacity (mAh) is vital for ensuring sufficient power delivery and flight duration.

#### Cell Count (S)

LiPo batteries are rated by their cell count (S), which determines their nominal voltage:

$$
\text{Nominal Voltage} = \text{Cell Count (S)} \times 3.7 \, \text{V}
$$

**Common Configurations:**
- **2S (7.4 V):** Suitable for smaller airplanes with wingspans of 30–40 inches.
- **6S (22.2 V):** Ideal for medium-sized airplanes with wingspans of 68–84 inches.
- **8S to 12S:** Reserved for larger and high-performance airplanes, typically beyond the scope of trainer models.

**Selection for an 82-Inch Wingspan:**
Given an 82-inch wingspan falls within the 68–84 inch range, a **6S LiPo battery** is recommended, providing a nominal voltage of **22.2 V**.

#### Capacity (mAh)

Battery capacity, measured in milliampere-hours (mAh), indicates how much charge the battery can store, directly influencing flight time.

**Typical Capacity Range:**
- **2,200–5,000 mAh**

**Selection Guidelines:**
- **Higher Capacity (e.g., 5,000 mAh):** Offers longer flight times but increases overall weight.
- **Lower Capacity (e.g., 2,200 mAh):** Reduces weight but shortens flight duration.

**Example Selection:**
For an 82-inch wingspan, a **4,000–5,000 mAh** battery is suitable. Opting closer to 5,000 mAh maximizes flight time, provided the aircraft can accommodate the additional weight.

**Trade-Offs:**
- **Flight Time vs. Weight:** Higher capacity batteries extend flight time but add weight, potentially requiring stronger motors and larger props to maintain performance.
- **Cost Considerations:** Higher capacity batteries are generally more expensive. Balance your budget with your performance and flight duration needs.

**Capacity Selection Example:**

**Chosen Capacity:** 4,000 mAh

**Reasoning:**
- Balances flight duration with manageable weight.
- Fits within the physical constraints of most 82-inch trainer-style airplanes.

---

### Propeller Selection

#### Importance of Propeller Selection

The propeller converts the motor's rotational energy into thrust, enabling the airplane to fly. Selecting the appropriate propeller diameter and pitch is essential for achieving the desired performance without overloading the motor or draining the battery excessively.

#### Calculating Propeller Diameter and Pitch

**Propeller Diameter:**

$$
\text{Propeller Diameter (in)} = -0.002 \times \text{RPM} + 35.607
$$

**Calculation:**

$$
\text{Propeller Diameter} = -0.002 \times 10,740 + 35.607 = 14.127 \, \text{in}
$$

**Recommendation:**
- **Diameter:** Round down to **14 inches** to maintain a conservative and safe setup.

**Propeller Pitch:**

$$
\text{Propeller Pitch (in)} = \frac{\text{Diameter}}{1.57} = \frac{14}{1.57} \approx 9.0 \, \text{in}
$$

**Recommendation:**
- **Pitch:** Round to the nearest half-step, resulting in **9.0 inches**.

**Initial Propeller Selection:**
- **Propeller Size:** **14x9** inches

**Rationale:**
- Aligns with calculated diameter and pitch for the specified RPM and performance level.
- Serves as a starting point; adjustments may be necessary based on actual performance testing.

**Adjusting Propeller Specifications:**

**Performance-Based Adjustments:**

- **Higher Speed Desired:**
  - **Decrease Diameter:** Reduce by 1 inch.
  - **Increase Pitch:** Increase by 1 inch.
  - **Example:** From 14x9 to 13x10.

- **Higher Thrust or Lower Power Consumption:**
  - **Increase Diameter:** Increase by 1 inch.
  - **Decrease Pitch:** Decrease by 1 inch.
  - **Example:** From 14x9 to 15x8.

**Incremental Changes:**
- Make adjustments in small increments (typically 0.5–1 inch) to fine-tune performance.
- Always retest after each change to assess the impact on thrust, power consumption, and component temperatures.

**Example Selection:**

**Chosen Propeller:** 14x9

**Reasoning:**
- Matches the calculated diameter and pitch.
- Provides a balanced starting point for testing and further optimization.

**Propeller Efficiency:**
Larger propellers spinning at lower speeds tend to be more efficient than smaller props spinning faster. This efficiency translates to better thrust generation without excessive power draw, enhancing flight time and reducing battery consumption.

---

## Thrust-to-Weight Ratio

### Calculating Thrust Requirements

Thrust-to-weight ratio is crucial in determining how much thrust your airplane needs to achieve desired performance.

$$
\text{Thrust-to-Weight Ratio} = \frac{\text{Thrust (g)}}{\text{Weight (g)}}
$$

### Guidelines

- **Gliders:** Minimum thrust-to-weight ratio of 0.5 (i.e., thrust = 500 g for a 1 kg model).
- **General Aviation:** Approximately 1:1 (i.e., thrust = weight).
- **Sport/Pattern Flying:** 1.2–1.5:1 (i.e., 1200–1500 g thrust for a 1 kg model).
- **3D Performance:** 1.5–2:1 or higher (i.e., 1500–2000 g thrust for a 1 kg model).

**Example:**

For a 1 kg general aviation model:

$$
\text{Required Thrust} = 1 \, \text{kg} \times 1000 \, \text{g/kg} = 1000 \, \text{g}
$$

### Importance

A proper thrust-to-weight ratio ensures that the airplane can achieve desired maneuvers, maintain stability, and perform efficiently during flight. It directly influences acceleration, climb rate, and overall handling characteristics.

---

## Testing and Optimization

### Bench Testing Procedure

1. **Assemble the Power System:**
   - Install the motor, ESC, battery, and propeller onto the airplane.
   - Secure all components to prevent movement during testing.

2. **Prevent Movement:**
   - Ensure the airplane is fixed in place to avoid unintended flight or component damage.

3. **Initial Throttle Test:**
   - Gradually apply throttle while monitoring:
     - **Temperature:** Ensure motor, ESC, and battery do not exceed **60°C (140°F)**.
     - **Power Output:** Use a wattmeter or ESC data logging to verify that power output aligns with the calculated 1,100 W.

4. **Assess Performance:**
   - **Underperforming (e.g., 700 W):**
     - **Increase Propeller Size:** Move up by 1 inch in diameter and/or pitch.
   - **Overperforming (e.g., exceeding 1,100 W or overheating):**
     - **Decrease Propeller Size:** Move down by 1 inch in diameter and/or pitch.

5. **Iterative Testing:**
   - Make one adjustment at a time.
   - Retest after each change to evaluate the effect on performance and component temperatures.

6. **Final Validation:**
   - Once optimal performance is achieved without overheating, secure all components.
   - Allow all parts to cool before flight testing.

**Safety Precautions:**
- **Temperature Monitoring:** Overheating can damage components and pose safety risks.
- **Propeller Safety:** Ensure the propeller is securely attached and clear of obstructions during testing.
- **Emergency Stops:** Be prepared to cut power quickly if unexpected behavior occurs.

### Flight Testing Procedure

1. **Pre-Flight Checks:**
   - Ensure all connections are secure.
   - Verify that the airplane maintains proper balance and center of gravity.

2. **Controlled Flight:**
   - Conduct initial flights in calm conditions.
   - Monitor throttle response, stability, and overall performance.

3. **Post-Flight Analysis:**
   - Review performance metrics.
   - Make necessary adjustments based on flight behavior and power consumption data.

### Fine-Tuning

- **Data Logging:** Utilize ESC data logging features or external data loggers to track performance metrics.
- **Community Feedback:** Engage with RC forums and communities to gather insights and recommendations based on similar setups.
- **Manufacturer Specifications:** Always cross-reference with component manufacturers to ensure compatibility and adherence to specifications.

---

## Troubleshooting Common Issues

### 1. Low Thrust at High Throttle

**Possible Causes:**
- Inadequate motor power.
- Propeller mismatch (too small in diameter or pitch).
- Insufficient ESC capacity.

**Solutions:**
- Upgrade to a more powerful motor.
- Select a larger or higher-pitch propeller.
- Ensure the ESC can handle the increased current draw.

### 2. Excessive Heat Generation

**Possible Causes:**
- Overloaded ESC.
- Motor operating beyond its rated specifications.
- Propeller too large or with excessive pitch.

**Solutions:**
- Reduce throttle levels.
- Select a motor and propeller combination that aligns with power requirements.
- Upgrade to an ESC with a higher current rating.

### 3. Battery Drain Issues

**Possible Causes:**
- High current draw due to inefficient propeller sizing.
- Low-capacity battery not meeting power demands.

**Solutions:**
- Optimize propeller size for efficiency.
- Upgrade to a higher-capacity battery.
- Balance performance with power consumption needs.

---

## Summary of Components

To consolidate the selection process, here is a summary of the chosen components based on the calculations and considerations outlined above:

- **Battery:**
  - **Type:** 6S Lithium Polymer (LiPo)
  - **Capacity:** 4,000–5,000 mAh (preferably 4,000 mAh for balance)
  - **C Rating:** Minimum **25C**

- **Motor:**
  - **Power Rating:** 1,100 W
  - **Current Rating:** 50 A
  - **KV Rating:** Approximately **484 KV** (±5%)
  - **Voltage Compatibility:** Must operate efficiently at 6S (22.2 V)

- **Electronic Speed Controller (ESC):**
  - **Current Rating:** Minimum **60 A** (preferably 80–100 A)
  - **Compatibility:** Must support **6S LiPo** batteries
  - **Features:** Programmable settings, reliable thermal performance

- **Propeller:**
  - **Diameter x Pitch:** **14x9** inches (initial selection)
  - **Adjustments:** Based on performance testing, potentially varying to 13x10 or 15x8

---

## Final Checklist

Before finalizing your setup, ensure the following:

1. **Physical Fit:**
   - Confirm that the battery, motor, and ESC physically fit within the airplane's designated compartments.
   - Ensure that weight distribution maintains the airplane's balance and center of gravity.

2. **Electrical Compatibility:**
   - Verify that all components are electrically compatible (voltage, current ratings).
   - Ensure that connectors and wiring can handle the required current without excessive heat or voltage drops.

3. **Performance Goals:**
   - Align component selections with your desired flight characteristics—whether it's longer flight times, higher speeds, or greater maneuverability.

4. **Safety Considerations:**
   - Double-check all connections and secure all components to prevent in-flight failures.
   - Ensure that the ESC is programmed correctly to match the motor and battery specifications.

---

## Additional Resources

### 1. Thrust Calculators and Tools

- **[eCalc](https://www.ecalc.ch/):** An online tool for calculating motor, propeller, and battery configurations.
- **Thrust Meters:** Devices that measure the actual thrust produced by a motor-propeller setup for empirical analysis.

### 2. Manufacturer Recommendations

- **Motor and Propeller Charts:** Refer to manufacturer-provided charts that recommend compatible propellers based on motor specifications and battery configurations.
- **Community Forums:** Engage with platforms like RC Groups or relevant subreddits to seek advice and share experiences with other hobbyists.

### 3. Educational Content

- **Tutorial Videos:** Platforms like YouTube offer a plethora of tutorials and walkthroughs for motor and propeller selection.
- **RC Model Guides:** Comprehensive guides and manuals from reputable RC model manufacturers provide in-depth insights and best practices.

---

## Summary of Key Points

1. **Performance Alignment:** Match motor and propeller specifications with the airplane's weight and desired performance level using the W/lb scale and thrust-to-weight ratio guidelines.
2. **Propeller Optimization:** Favor larger propellers for greater efficiency and thrust while conserving battery life.
3. **ESC Compatibility:** Ensure the ESC can handle the motor's current draw with an adequate safety margin.
4. **Iterative Testing:** Conduct thorough bench and flight testing to validate and optimize the motor-propeller combination.
5. **Leverage Existing Designs:** Use manufacturer setups as reliable references to guide your component selection process.
6. **Balance and Stability:** Properly balance propeller blades and maintain the airplane's center of gravity for stable and smooth flight performance.
