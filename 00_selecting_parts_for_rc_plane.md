# Selecting a Brushless Motor, ESC, LiPo Battery and Propeller for an RC Airplane

## 1. Introduction

This tutorial outlines a structured methodology for selecting the core power-system components of a radio-controlled (RC) airplane:

1. **Brushless motor** (with an appropriate \(k_V\) rating and power handling)  
2. **Electronic speed controller (ESC)**  
3. **LiPo battery** (cell count, capacity, and C-rating)  
4. **Propeller** (diameter and pitch)

The objective is to:

- Determine how many cells (S) your battery should have  
- Select a suitable capacity (mAh) and C-rating  
- Calculate the necessary current and headroom for the ESC  
- Derive (or approximate) the required \(k_V\) for the motor  
- Identify an initial propeller size to test

Although this example focuses on a large trainer-style airplane, the same approach applies to a wide range of RC airplanes, provided any aerodynamic, load-bearing, or extreme performance differences are accounted for in the watt-per-pound and propeller considerations.

---

## 2. Defining the Airplane Parameters

In this example, the target airplane is a **trainer-style** design with:

- **Wingspan**: 82 inches  
- **All-up weight (AUW)**: 11 pounds  

> **All-up weight** (AUW) is the mass of the airplane including the airframe, motor, battery, electronics, servos, and any additional hardware. If any exact component weight is unknown, iteration is recommended. For instance, if the final chosen motor and battery weigh more than initially assumed, the calculations in later steps may need to be repeated.

### 2.1 Domain Constraints

The source transcript points out that the methods and formulas described have primarily been validated for airplanes within:

- **Wingspan**: approximately 30–115 (to ~120) inches  
- **All-up weight**: up to ~30–40 pounds  

This is a reasonably wide range covering many sport or trainer models. However, those with particularly large-scale aircraft (e.g., giant-scale 50–100 lb models) or extremely small micro-sized aircraft (~1–2 lb) should note that airframe aerodynamics and motor-efficiency assumptions can change significantly outside this range.

---

## 3. Determining Required Wattage (Step 1)

A long-standing rule in RC aviation is to plan for **Watts per pound** (W/lb) as a measure of flight performance. Common approximate values are:

- **60–85 W/lb**: Lightly loaded or basic trainer  
- **100 W/lb**: Trainer with more spirited flight, or moderate sport flying  
- **150+ W/lb**: 3D/aerobatic/pattern-level performance (capable of hovering, aggressive maneuvers)

### 3.1 Example Calculation

For the 11 lb trainer in this example:

\[
\text{Wattage per pound} = 100 \,\text{W/lb}
\]

\[
\text{Total required wattage} 
= 11 \,\text{lb} \times 100 \,\text{W/lb} 
= 1100 \,\text{W}
\]

This figure serves as the starting reference for determining motor size, ESC rating, battery voltage, and propeller load. It is neither a strict maximum nor minimum—actual in-flight wattage may vary, but staying near the calculated value helps ensure consistent performance.

---

## 4. Selecting the Battery Cell Count (Step 2)

### 4.1 Why Cell Count Is Crucial

Battery cell count affects **nominal voltage**. Since power \(P = VI\), a higher voltage (with the same required power) translates into lower current. This lower current reduces heat and stress on the ESC and wiring. However, more cells may also:

- Increase battery weight (higher mass of cells)  
- Increase battery cost  
- Require an ESC and motor that can handle higher voltage

### 4.2 Recommended Cell Count Ranges

From the transcript, there is a guideline associating wingspan ranges with appropriate battery packs. For an 82-inch wingspan, the suggested pack is **6S** (nominal 22.2 V). While these guidelines are not ironclad, they provide a useful baseline.

### 4.3 Capacity Considerations

RC airplane LiPo batteries commonly range between 2200 mAh and 5000 mAh. Heavier or larger airplanes often benefit from higher capacities (e.g., 4000–5000 mAh), primarily to increase flight duration. However:

1. **Larger capacity** \(\rightarrow\) more weight \(\rightarrow\) possibly higher wing loading  
2. **Smaller capacity** \(\rightarrow\) lighter but potentially reduced flight duration  

**Selected Approach for This Example**:
- Cell count: **6S** (22.2 V nominal)  
- Target capacity range: **4000–5000 mAh**

---

## 5. Current and ESC Selection (Step 3)

### 5.1 Calculating Current

From the required power:

\[
P = 1100 \,\text{W}
\]
\[
V_{\text{nom}} = 6 \times 3.7 \,\text{V} = 22.2 \,\text{V}
\]
\[
I = \frac{P}{V_{\text{nom}}}
  = \frac{1100 \,\text{W}}{22.2 \,\text{V}}
  \approx 49.5 \,\text{A}
\]

### 5.2 Adding a Safety Margin

An ESC running at its exact rated current can overheat or face reliability issues, especially under dynamic load changes (e.g., propeller unloading in flight, or brief bursts of throttle). A typical **20% headroom** is prudent:

\[
I_{\text{ESC, min}} = 49.5 \,\text{A} \times 1.2
                    \approx 59.4 \,\text{A}
\]

In practice, selecting a **60 A** (or higher) ESC is advisable for this application. For additional robustness—especially if the pilot plans on wide-open throttle or high-torque maneuvers—an **80 A** ESC might be appropriate.

### 5.3 Battery C-Rating and Capacity

#### 5.3.1 The C-Rating Definition

\[
I_{\text{max}}(\text{battery}) 
= (\text{C-rating}) \times (\text{battery capacity in Ah})
\]

For example, if the chosen capacity is 4000 mAh (4.0 Ah) and the current draw is about 50 A, the required C-rating is:

\[
\text{C-rating} \ge \frac{50 \,\text{A}}{4.0 \,\text{Ah}}
                = 12.5\,C
\]

Since battery manufacturers often sell 25C, 35C, 45C packs, a **25C (or higher)** 4000 mAh pack should comfortably handle 50 A. Actual flight conditions might generate bursts above or below 50 A, so some additional safety margin (e.g., using a 35C pack) can further reduce battery heating and voltage sag.

#### 5.3.2 Example with Smaller Capacity

If a builder attempts to use a 2200 mAh (2.2 Ah) pack, the necessary C-rating for 50 A becomes:

\[
\text{C-rating} \ge \frac{50 \,\text{A}}{2.2 \,\text{Ah}}
                \approx 22.7\,C
\]

While this is not unreasonable (25C or 35C packs are readily available), flight times will be significantly shorter, and the pack may be more stressed thermally. Such a setup is feasible for short flights or specific aircraft designs but is not typically preferred for an 82-inch, 11 lb trainer.

---

## 6. Determining Motor RPM and \(k_V\) (Step 4)

### 6.1 Target RPM (No-Load)

The transcript describes an example where the **desired no-load RPM** for this setup is approximately **10,740 RPM**. This estimate can come from aerodynamic calculations, desired flight speed, and empirical data for trainer aircraft of similar size.

### 6.2 \(k_V\) Calculation

Motor \(k_V\) (in RPM/V) can be approximated by dividing the target RPM by the nominal voltage:

\[
k_V 
= \frac{\text{Target RPM}}{\text{Nominal Voltage}}
= \frac{10{,}740 \,\text{RPM}}{22.2 \,\text{V}}
\approx 484 \,\text{RPM/V}
\]

> Since LiPo voltage in use may vary (e.g., ~25.2 V fully charged for 6S, and ~19.8 V when nearly depleted), the actual in-flight RPM will differ. The above is a reference point.

In practice, motors are rarely sold at exactly 484 kV. One might select a motor labeled 480 kV, 500 kV, or 520 kV; any of these should be workable with small adjustments in propeller size or pitch.

### 6.3 Verifying Motor Power and Voltage Ratings

It is critical to ensure the chosen motor can handle:

1. **Voltage**: Must be rated for 6S (often listed as “2–6S” or “up to 22.2 V”).
2. **Current**: \(\approx 50–60 \,\text{A}\) continuous. Check datasheets to confirm recommended current limits.
3. **Power**: \(\ge 1100 \,\text{W}\) continuous rating. Many motors list “maximum burst power” or “3-second peak power,” which is not the same as continuous rating. Be sure the motor’s **continuous** rating is sufficient for 1100 W to avoid overheating.

---

## 7. Selecting an Initial Propeller (Step 5)

### 7.1 Propeller Dimensions (Diameter × Pitch)

From the target RPM (10,740) and typical trainer flight parameters, the transcript suggests a **14 × 9** propeller. The diameter and pitch each have distinct influences:

1. **Diameter**: A larger diameter generally increases static thrust (moving more air) but also increases the load on the motor.  
2. **Pitch**: Higher pitch generally increases the pitch speed (potential airspeed), but also raises the current draw at higher RPMs.

The **14 × 9** is an **initial, conservative choice**. Actual performance should be validated by measuring real-world current draw and temperature. If the measured power is near 1100 W at full throttle and the temperatures stay below critical limits, the match is likely satisfactory.

### 7.2 Adjusting the Propeller

- **If the current is too high or components overheat**: Reduce diameter or pitch. For example, move to a 13 × 9 or 13 × 8.  
- **If performance is insufficient** (i.e., you measure significantly less than 1100 W, or the airplane feels underpowered): Increase diameter or pitch (e.g., 14 × 10, if the motor specifications allow higher load without overheating).

---

## 8. Summary of Chosen Components for the Example

For an 82-inch wingspan, 11 lb trainer aiming for around 1100 W:

1. **Battery**:  
   - **Voltage**: 6S LiPo (22.2 V nominal)  
   - **Capacity**: 4000–5000 mAh (typical for this size)  
   - **C-rating**: ≥25C (to supply ~50 A with margin)

2. **ESC**:  
   - **Voltage rating**: Must accept 6S  
   - **Current rating**: ≥60 A (preferably 60–80 A for margin)  
   - **Additional features**: Some ESCs include data logging or temperature protection, which can be extremely helpful for fine-tuning.

3. **Motor**:  
   - **\(k_V\)** ~ 480–500 RPM/V  
   - **Power rating**: ≥1100 W continuous  
   - **Current rating**: ~50–60 A continuous  
   - **Voltage rating**: Must safely handle 6S (check manufacturer specifications)

4. **Propeller**:  
   - Initial: **14 × 9**  
   - Adjust after measuring temperature, current draw, and flight performance

---

## 9. Practical Testing and Critical Checks

1. **Thermal Safety**  
   - Use an infrared thermometer or onboard telemetry (if available) to verify the battery, ESC, and motor remain below ~60 °C (140 °F). Prolonged operation above these levels can significantly reduce component lifespan or cause sudden failure.  
   - Check temperatures promptly after landing (or monitor in real time if telemetry is available).

2. **Power Measurement**  
   - A watt meter or data logger can indicate peak wattage and amperage at various throttle levels.  
   - Verify that peak power remains within the ~1100–1200 W target and that peak current does not exceed the ESC or motor’s rating. Brief spikes are usually acceptable, but sustained overcurrent situations can cause excessive heating.

3. **Propeller Tuning**  
   - If measured current exceeds safe limits, choose a smaller diameter or lower pitch.  
   - If power is below your target and flight performance is sluggish, consider increasing diameter or pitch in small increments (e.g., from 14 × 9 to 14 × 10, or from 14 × 9 to 15 × 8) while carefully monitoring current and heat.

4. **Repeated Iteration**  
   - After every change, re-measure temperatures and current. RC power systems must be tested holistically; changing one component (e.g., a slightly larger prop) can have cascading effects on the motor, ESC, and battery load.

5. **Flight Envelope and Center of Gravity (CG)**  
   - Additional weight from a larger battery or motor may affect the airplane’s CG. Rebalancing the aircraft is crucial for safe and predictable flight, especially for trainers.

---

## 10. Concluding Remarks

Selecting an appropriate power system for an RC airplane involves balancing voltage (cell count), current load, and propeller characteristics to match the airplane’s weight and desired flight performance. While this example centers on **100 W/lb** for an 11 lb trainer, the process applies to other aircraft categories if adjusted for:

- Different power density requirements (e.g., 3D flight often requires >150 W/lb)  
- Different aerodynamic characteristics (e.g., high-wing trainers vs. low-wing sport models vs. gliders)  
- Specific mechanical or structural constraints (e.g., maximum prop diameter due to ground clearance)

**In summary**:

1. **Determine Required Wattage** (e.g., 100 W/lb → 1100 W total).  
2. **Choose Battery Cell Count** (e.g., 6S for an 82-inch wingspan).  
3. **Calculate ESC Current Requirement and Battery C-rating** (account for ~50 A draw + margin).  
4. **Identify Suitable Motor \(k_V\) and Power Rating** (~480–500 kV, ≥1100 W continuous).  
5. **Select a Starting Propeller** (e.g., 14 × 9), then test under realistic conditions.

Always finalize the selection by practical bench and flight tests, measuring current, temperature, and flight performance. Minor deviations in any step may be required to optimize the system fully. By combining sound theoretical calculations with real-world validation, you can ensure reliable, efficient, and enjoyable flights without risking component damage.