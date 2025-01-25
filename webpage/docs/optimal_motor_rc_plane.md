# Selecting the Optimal Motor for an RC Plane: A Technical Overview

This guide provides a methodical framework for choosing the most suitable motor for your RC plane. It draws upon basic physics principles to explain how brushless motors generate torque and how motor shape (tall vs. wide), cooling, and kV rating influence flight performance and efficiency. Where possible, it notes real-world complexities that can make certain formulas more illustrative than definitive. The goal is to help you make informed decisions about stator volume, motor responsiveness, and kV selection for your specific airplane design and flying style.

---

## 1. How Brushless Motors Generate Torque

### 1.1 Fundamental Principles

In a brushless motor used for RC planes:

- The **rotor** contains permanent magnets.  
- The **stator** carries coil windings that, when energized, create an electromagnetic field.

As the stator’s magnetic field interacts with the rotor’s permanent magnets, a force is produced at a particular radius, generating torque. A simplified expression for the force between magnetized surfaces is:

\[
F = \frac{B^2 \, A}{2 \, \mu_0},
\]

where  
- \(B\) is the magnetic flux density (in teslas),  
- \(A\) is the area of interaction (in square meters),  
- \(\mu_0\) is the permeability of free space (\(\approx 4\pi \times 10^{-7} \,\text{H/m}\)).

> **Note:** This equation is an approximation based on Maxwell stress considerations. Real-world motors have more complex factors like air gap, geometry, and magnetic materials, so use it primarily for conceptual understanding, not exact design.

### 1.2 From Force to Torque

Torque \(\tau\) in a motor is:

\[
\tau = F \times r,
\]

where \(r\) is the distance from the motor’s rotational axis. By substituting the approximate force expression, it becomes evident that **stator volume** (i.e., the cross-sectional area times stator height) is a key factor in determining torque capacity.

---

## 2. The Role of Stator Volume

### 2.1 A Primary Determinant of Torque

In modern brushless motors, **stator volume** typically serves as the main driver of raw torque potential. Reputable brands often use similarly high-quality materials—such as N52 magnets, oxygen-free copper windings, and laminated silicon steel—leading to only minor variations in maximum flux density \(B\). Hence, if you want more torque, look first to **increasing stator volume**.

### 2.2 Geometry vs. Volume

A common misconception is that a “wide” motor automatically produces more torque than a “tall” motor. If both motors have the same overall stator volume and use equivalent materials, they should theoretically offer comparable torque. In practice, slight differences in build quality, real stator dimensions, or winding configurations tend to explain observed performance variations—not mere shape.

---

## 3. Motor Geometry and Flight Responsiveness

### 3.1 Reserve Torque and Acceleration

For RC planes, having enough **reserve torque** is crucial for maneuvers such as steep climbs, loops, or rapid throttle transitions. One way to quantify motor responsiveness is via angular acceleration \(\dot{\omega}\):

\[
\dot{\omega} = \frac{\tau_\text{reserve}}{I},
\]

where:  
- \(\tau_\text{reserve}\) is the torque available beyond what is needed to sustain a given RPM (e.g., straight-and-level flight),  
- \(I\) is the total rotational inertia of the system (the motor’s rotor plus the propeller).

### 3.2 Wide (Pancake) Motors: Pros and Cons

Wider-diameter motors can enhance cooling and sometimes accommodate larger stator volumes, but they also **increase the rotor’s moment of inertia**. A simplified approximation for rotor inertia, \(I_\text{bell}\), is:

\[
I_\text{bell} \propto \rho \, V_{\text{bell}} \, r^2,
\]

where  
- \(\rho\) is material density,  
- \(V_{\text{bell}}\) is the rotor (bell) volume,  
- \(r\) is the rotor radius.

Because \(r\) appears as a squared factor, a bigger diameter can substantially raise rotational inertia, potentially reducing how quickly the motor can spool up or slow down. If the stator volume (and thus the motor’s torque output) does not increase enough to counterbalance this added inertia, the motor may feel sluggish during aggressive maneuvers.

### 3.3 Cooling Considerations

Narrow, taller motors sometimes run hotter because air may not flow as efficiently around the stator. Wider motors typically allow better heat dissipation, which is especially valuable for high-power or sustained operations (e.g., pattern flying, high-speed runs). Some motors incorporate finned designs or internal “turbine” blades to aid in cooling regardless of shape.

---

## 4. Guidelines on Motor Dimensions

1. **Diameter-to-Height (D:H) Ratio**  
   - Ratios around **3:1** are typical in general sport-flying motors.  
   - Slightly higher ratios like **4:1** benefit planes that require sustained power (e.g., heavier models or extended aerobatic flight).  
2. **Too Wide Can Be Counterproductive**  
   - Ratios over **6:1** can diminish responsiveness if the increase in rotor inertia is not offset by greater torque capacity.

In essence, **stator volume** dictates torque. Geometry should serve heat management, aircraft mounting requirements, or design preferences—not the misguided notion that wider automatically means “more torque.”

---

## 5. Matching Motor Volume to Propeller Size

### 5.1 Propeller Diameter, Pitch, and Weight

Choosing the right motor starts with the propeller. A large-diameter, high-pitch, or heavier prop typically needs a larger stator volume to provide ample torque and maintain efficiency without overheating. Conversely, smaller or lightweight props can get by with a smaller motor volume.

> **Tip:** If you’re flying a big warbird with a large prop, opt for a motor with a suitably higher stator volume. If you have a lighter trainer plane or a small foamy, a more modest motor volume may suffice.

---

## 6. Understanding kV and Its Effects

### 6.1 Defining kV

A motor’s kV rating specifies its **RPM per volt** under no-load conditions. The kV rating helps predict how the motor will behave in terms of:

1. **Torque vs. RPM** – Higher kV motors produce more RPM but draw more current for the same torque.  
2. **Current Draw** – High kV often increases current draw, leading to potential thermal or battery-related constraints.

A **high kV motor** generally spins the prop faster (assuming the same battery voltage) but may suffer in overall efficiency if you need a lot of thrust at lower RPM. A **lower kV motor** may provide better torque at modest RPM and be more efficient under heavier load, albeit with a lower theoretical top-end speed unless you increase voltage or change the prop.

### 6.2 I\(^2\)R Losses and Efficiency

High kV motors demand larger currents to achieve a given torque, producing more heat (I\(^2\)R losses) in motor windings and in the ESC. Consequently, higher kV motors can suffer in thrust-per-watt efficiency if you tend to fly at higher torque settings. On the other hand, lower kV motors can sustain higher torques more efficiently, making them a frequent choice for heavier models or slower-flying aircraft that need ample thrust without excessive RPM.

### 6.3 Battery Constraints

Your battery’s **current delivery** capabilities (often given by its C-rating and capacity) limit the benefits of a high kV motor. If the battery cannot meet the motor’s current demands, voltage sag may occur, negating any theoretical power gains. Always confirm that your battery can reliably provide the amperage your motor-prop setup requires.

---

## 7. Empirical Methods for kV Selection

### 7.1 Bench Testing

For pilots who primarily fly at varied throttle settings—like aerobatics, 3D, or general sport flying—bench tests can offer valuable insight:

1. Find published thrust and current draw data for your chosen prop and motor combination.  
2. Check if your battery can handle the maximum current (e.g., if each motor run draws 40 A at full throttle, make sure your battery can supply that consistently).  
3. If the battery struggles, a lower kV (or smaller prop) may yield better overall performance in practice.

### 7.2 In-Flight Telemetry

Serious competitors or speed enthusiasts might gather real-time telemetry during full-throttle runs:

1. Measure current draw under actual flight conditions.  
2. If higher kV significantly increases current draw and causes battery voltage sag, down-sizing your prop or choosing a lower kV motor might be more effective.

---

## 8. Throttle Resolution and Control

### 8.1 Sensitivity Challenges

When motors produce significantly more thrust than anticipated, small throttle movements can result in big power changes. This can make slow-speed handling tricky—especially if you’re used to a motor with less torque.

### 8.2 Transmitter Throttle Curves

Modern RC transmitters allow **throttle curves** or **expo** adjustments:

- **Throttle Curves** can flatten the mid-stick region, offering more fine-grained control for gentle cruising or landings.  
- **Expo** adjusts sensitivity around certain stick positions to suit pilot preference.

These features let you keep the higher power potential for takeoffs or vertical maneuvers while still enjoying smooth control at lower throttle inputs.

---

## 9. Summary and Practical Guidance

1. **Determine Appropriate Stator Volume**  
   - Tailor the motor size to your airplane’s prop diameter, pitch, and weight. Larger or heavier setups require a bigger stator volume for adequate torque.  
2. **Consider Motor Geometry**  
   - Tall, narrower motors can be more responsive but may run hotter.  
   - Short, wider motors often cool better but can add rotational inertia, affecting spool-up times.  
3. **Choose the Right kV**  
   - High kV can offer higher RPM and potentially more speed—but at the cost of increased current draw and potential battery stress.  
   - Lower kV may be more efficient and provide better torque for heavier aircraft or moderate RPM flight.  
4. **Fine-Tune Throttle Feel**  
   - If your plane’s throttle response is too aggressive, use transmitter-based throttle curves or expo to soften it around mid-stick or near idle.

Ultimately, there is no single “best” motor or kV rating that suits every RC plane. The optimal solution emerges from carefully matching motor dimensions, stator volume, and kV to your propeller, battery, flight style, and cooling requirements. By combining these guidelines with practical testing, you can arrive at a power system that delivers the performance, efficiency, and reliability you need—whether you’re flying leisurely circuits or pushing the limits of 3D aerobatics.