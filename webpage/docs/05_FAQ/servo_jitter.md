# Servo Jitter

Servo jitter (unwanted oscillation) stems from electrical, mechanical, or software issues. This guide outlines universal causes and solutions, with additional focus on Arduino implementations.  

---

## **General Causes & Solutions**  

### 1. **Electrical Noise/Interference**  
   - **Causes:**  
     EMI from motors/power lines, long unshielded wires acting as antennas.  
   - **Solutions:**  
     - Use shielded cables, ferrite beads, or twisted signal/ground wires.  
     - Add bypass capacitors (0.1 µF ceramic) near servo power pins.  

### 2. **Insufficient Power Supply**  
   - **Causes:**  
     Voltage drops under load, shared power with controllers.  
   - **Solutions:**  
     - Use a dedicated servo power supply (5–6V).  
     - Add bulk capacitors (100–1000 µF electrolytic) to stabilize voltage.  

### 3. **Mechanical Issues**  
   - **Causes:**  
     Worn gears, excessive friction, or overloaded servos.  
   - **Solutions:**  
     - Lubricate gears; replace damaged parts.  
     - Use higher-torque servos or reduce mechanical load.  

### 4. **Feedback System Problems**  
   - **Causes:**  
     Dirty/faulty potentiometers or poorly tuned PID control.  
   - **Solutions:**  
     - Clean/replace feedback sensors.  
     - Adjust PID gains (reduce proportional gain).  

### 5. **Software/Timing Issues**  
   - **Causes:**  
     Non-real-time PWM signals, code delays.  
   - **Solutions:**  
     - Use hardware PWM or real-time OS.  
     - Avoid blocking code (e.g., `delay()` in Arduino).  

### 6. **Environmental Factors**  
   - **Causes:**  
     Temperature changes, physical vibrations.  
   - **Solutions:**  
     - Use vibration dampers; select temperature-rated servos.  

### 7. **Low-Quality Components**  
   - **Causes:**  
     Cheap servos with plastic gears or poor feedback.  
   - **Solutions:**  
     - Upgrade to metal-gear servos (e.g., MG90S).  

### 8. **Extreme Positioning/External Forces**  
   - **Causes:**  
     Servo operating at mechanical limits or against forces like wind.  
   - **Solutions:**  
     - Avoid prolonged use at extreme angles; add physical stops.  

---

## **Arduino-Specific Considerations**  

### **Common Causes in Arduino Setups**  
1. **Weak 5V Pin:** Arduino’s 5V pin cannot sustain servo current, causing voltage drops.  
2. **Software PWM Jitter:** The `Servo.h` library uses timers vulnerable to code delays.  
3. **Shared Ground Noise:** EMI from servo motors affecting signal integrity.  

---

### **Tailored Solutions for Arduino**  

#### **Power Supply Fixes**  
- **External Power:**  
  - Power servos via a dedicated 5V supply (e.g., UBEC, battery). Share only ground with Arduino.  
- **Capacitors:**  
  - Add 100–470 µF electrolytic capacitor across servo power leads.  
  - Place 0.1 µF ceramic capacitor between signal line and ground.  

#### **Signal Stability**  
- **Hardware PWM Pins:**  
  - Use pins 9/10 (Uno/Nano) with `analogWrite()` for smoother signals.  
  - Example:  
    ```cpp
    #include <Servo.h>
    Servo myservo;
    void setup() {
      myservo.attach(9);  // Hardware PWM pin
    }
    ```  
- **Non-Blocking Code:** Replace `delay()` with `millis()` for timing.  

#### **Noise Reduction**  
- **Shorten Wires:** Keep servo cables ≤6 inches.  
- **Ferrite Beads:** Attach to servo power leads near the motor.  

#### **Advanced Fixes**  
- **PCA9685 PWM Driver:** Offload PWM generation from Arduino.  
- **Opto-Isolation:** Use optocouplers to separate servo power from logic.  

---

## **Implementation Guide**  

### **Components Needed**  
- External 5V power supply (e.g., LiPo battery).  
- Capacitors (100–470 µF electrolytic, 0.1 µF ceramic).  
- Ferrite beads, PCA9685 module (optional).  

### **Wiring Example**  
```plaintext
Arduino Uno       Servo  
GND ------------- GND (shared)  
Pin 9 ----------- Signal  
External 5V+ ---- V+ (servo power)  
```  
Add capacitors across servo power and signal lines.  

---

## **Diagnostics & Troubleshooting**  
1. **Isolate Components:** Test servo without load.  
2. **Check Signals:** Use an oscilloscope to verify PWM stability.  
3. **Monitor Power:** Measure voltage under load with a multimeter.  
4. **Code Test:** Run minimal code to rule out software issues.  
