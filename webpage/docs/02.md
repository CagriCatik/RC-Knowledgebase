# Brushless Motor

This document provides a rigorous technical overview and interpretation of the labeling and performance metrics commonly found on brushless motors, particularly in the context of radio-controlled (RC) applications. The discussion is intended to clarify the meaning of the numerical designations and other specifications provided on motor “cans” (the housings that enclose the rotor) and to relate these numbers to practical performance characteristics such as torque, rotational speed, current draw, and thrust. The document also addresses considerations for matching motors with appropriate speed controllers and propellers.

---

## 1. Overview of Brushless Motor Construction

Brushless motors in RC applications are typically designed as three-phase alternating current (AC) machines. Key characteristics include:

- **Absence of Brushes:** The elimination of mechanical brushes reduces wear and increases the motor’s service life. The primary mechanical wear components are the bearings.
- **Wiring for Commutation:** Brushless motors employ three wires (one for each phase) that interface with an Electronic Speed Controller (ESC). Reversing the connection of any two wires will reverse the direction of rotation.

Additionally, brushless motors can be broadly classified as either **inrunners** or **outrunners**:

- **Outrunners:** In these designs, the “can” (or outer housing) rotates along with the propeller. They typically provide higher torque and are mounted with the motor placed at the bottom.
- **Inrunners:** Here, the stator (and its can) remains fixed while the rotor (typically mounted on the shaft) rotates. Inrunners are often used in applications such as RC helicopters.

---

## 2. Interpretation of Motor Labeling

Manufacturers typically label brushless motors with a series of numbers. Although there is no universal standard for these numbers, a representative example might be:  

**“2822 12 1450 kV”**

Each element in the designation conveys specific information about the motor’s physical and electrical characteristics:

### 2.1 Motor (Rotor) Diameter

- **First Number (e.g., 28):** This figure represents the motor’s diameter, which is the physical width of the can or the rotor inside the can.  
- **Implications:** A larger diameter generally translates to greater torque production because the rotational force is applied over a larger radius.

### 2.2 Motor (Rotor) Height

- **Second Number (e.g., 22):** This number indicates the height of the motor’s can or the rotor housed within the can.  
- **Considerations:** The height, in combination with the diameter, contributes to the overall volume and thus the power capacity and thermal characteristics of the motor.

### 2.3 Number of Turns Per Pole

- **Third Number (e.g., 12):** This value specifies the number of wire turns wrapped around each magnetic pole in the motor.  
- **Performance Trade-Off:**  
  - A **smaller number of turns** typically allows the motor to achieve higher rotational speeds but with reduced torque.
  - A **higher number of turns** increases the strength of the magnetic field, thereby enhancing torque; however, this comes at the expense of a slower maximum rotational speed due to the time required to establish the magnetic field.

### 2.4 kV Rating (Revolutions Per Volt)

- **kV Value (e.g., 1450 kV):** The “kV” rating denotes the number of revolutions per minute (RPM) that the motor will turn per volt applied under no-load conditions.  
- **Calculation Example:**  
  - A motor rated at 1450 kV supplied with 10 volts is expected to achieve approximately 14,500 RPM (i.e., 10 × 1450).  
- **Implications:** The kV rating is fundamental in selecting a motor for a given application, as it directly influences both the speed and the type of propeller that should be used.

---

## 3. Additional Performance Metrics

Beyond the primary numbers printed on the motor housing, several additional parameters are critical when evaluating motor performance and compatibility with system components.

### 3.1 Power (Wattage)

- **Definition:** The power output of a motor can be approximated by the product of the operating voltage and the current draw.  
- **Usage:** This metric is essential in determining the overall power capability and the expected performance envelope of the motor.

### 3.2 Current Draw (Amperage)

- **Importance:** The current draw, usually specified in amperes (amps), indicates the amount of electrical current the motor requires during operation.  
- **ESC Compatibility:**  
  - It is imperative that the selected speed controller has a current rating that exceeds the motor’s peak current draw by at least 20% to provide sufficient overhead.  
  - For instance, if a motor draws a peak current of 22 A, the ESC should be rated for at least 25 A.  
- **Reliability Considerations:** Using an ESC with a lower rating than the motor’s requirement may lead to premature failure or inconsistent performance, regardless of the throttle levels applied.

### 3.3 Thrust

- **Definition:** Thrust is the force generated by the motor-propeller combination and is typically measured in grams or kilograms.  
- **Matching Motor to Airframe:**  
  - For fixed-wing applications, the motor should provide a thrust-to-weight ratio that meets or exceeds the design requirements. For example, a 500-gram model may be adequately powered by a motor setup generating approximately 500 g for a basic flight envelope or 750 g to 1000 g for sport or high-performance operation.
  - In multicopter designs, the cumulative thrust of all motors is compared to the total weight of the aircraft. A common guideline is that the total thrust should be at least twice the weight of the airframe to ensure agile and stable flight.

### 3.4 Battery Voltage and Propeller Compatibility

- **Battery Voltage:**  
  - Motors are often matched with battery packs specified by the number of cells (e.g., 1S, 2S, 3S, etc.). For example, a 1S battery typically provides 7.4 V, a 2S battery about 7.4 V (or a similar nominal value depending on chemistry), and so on.
- **Propeller Selection:**  
  - As battery voltage increases (with more cells), the recommended propeller size typically decreases. This is because a larger or higher-pitch propeller under a higher voltage supply can impose an exponentially larger load on the motor, leading to excessive current draw and potential damage.
  - The specifications provided by manufacturers usually indicate the optimal propeller size for each battery configuration, and adherence to these recommendations is critical to avoid overloading the motor.

---

## 4. Practical Considerations for System Integration

### 4.1 Motor and ESC Matching

- **Current Headroom:**  
  - Always select an ESC with a current rating that exceeds the motor’s maximum current draw. This approach minimizes the risk of electrical stress and extends the lifespan of both the motor and the ESC.
- **Thermal Management:**  
  - Since high current and excessive load can result in increased heat, ensure that both the motor and the ESC are adequately cooled. This is particularly important in high-performance or extended-duration flight conditions.

### 4.2 Propeller and Battery Configuration

- **System Design:**  
  - The choice of propeller and battery must be consistent with the motor’s design parameters. A mismatch may result in inefficient performance, reduced flight time, or even damage due to overcurrent.
- **Performance Testing:**  
  - Empirical testing, including comparisons of efficiency between different motor kV ratings paired with appropriately sized propellers, can provide valuable insights. Such tests often reveal that lower kV motors with larger props may offer better efficiency under certain load conditions, while higher kV motors with smaller props might be more suitable for applications requiring high RPM.

---

## 5. Conclusion

The labeling on brushless motors encapsulates critical information regarding physical dimensions, electrical characteristics, and performance expectations. The primary numbers indicate:

- **Rotor Diameter and Height:**  
  - These measurements are correlated with torque and overall power capacity.
- **Number of Turns Per Pole:**  
  - This affects the trade-off between speed and torque.
- **kV Rating:**  
  - Defines the motor’s no-load RPM per volt and influences the choice of battery and propeller.

Additional performance metrics such as power (wattage), current draw (amperage), and thrust are essential for ensuring that the motor is properly matched to the ESC, battery, and propeller. Adherence to manufacturer recommendations and the careful calculation of performance parameters are fundamental to optimizing system reliability and efficiency.

This documentation aims to provide a thorough and technical understanding of brushless motor specifications for professionals and enthusiasts in the RC hobby and related engineering fields. Rigorous evaluation of these parameters is essential for achieving the desired balance of performance, efficiency, and durability in RC models and similar applications.