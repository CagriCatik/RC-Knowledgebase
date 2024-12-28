# Flight Time Calculation

## **1. Basic Formula**

1. **Convert mAh to Ah**  
   - Battery capacity is often stated in milliamp-hours (mAh). To work in amperes (A), we convert mAh to amp-hours (Ah):  
     \[
     \text{Ah} = \frac{\text{mAh}}{1000}
     \]

2. **Determine Average Current Draw**  
   - Suppose your drone (including motors, electronics, etc.) pulls an **average current** of \(I_\text{avg}\) amperes during flight. This average might come from flight tests, online thrust/battery current charts, or an onboard power meter.

3. **Calculate Theoretical Flight Time**  
   - The theoretical flight time in hours is then:  
     \[
     \text{Flight Time (hours)} = \frac{\text{Battery Capacity (Ah)}}{I_\text{avg} (\text{A})}
     \]
   - To convert to minutes, multiply by 60:  
     \[
     \text{Flight Time (minutes)} = \frac{\text{Battery Capacity (Ah)}}{I_\text{avg} (\text{A})} \times 60
     \]

---

### **Example Calculation**

- **Battery Capacity**: 1500mAh (which is 1.5Ah)  
- **Average Current Draw**: 15A in flight

\[
\text{Flight Time (hours)} = \frac{1.5 \,\text{Ah}}{15 \,\text{A}} = 0.1 \,\text{hours} 
\]  

\[
\text{Flight Time (minutes)} = 0.1 \,\text{hours} \times 60 = 6 \,\text{minutes}
\]

This means you can **theoretically** fly for about 6 minutes at a consistent 15A draw.

---

## **2. Practical Considerations**

1. **80% Rule**  
   - To prolong battery life and avoid damaging LiPo batteries, many pilots refrain from using the battery’s full capacity, stopping at around **80%** usage.  
   - If you apply the 80% rule, you only count 80% of the total capacity in your calculation. For a 1500mAh pack, you’d use 1200mAh (1.2Ah) as your effective capacity.

2. **Varying Current Draw**  
   - Current draw isn’t constant—it changes with throttle position, flight maneuvers, payload, and wind conditions. The “average current draw” is just that: an average.  
   - Aggressive flights (punch-outs, flips, or heavy loads) raise the average current draw, shortening the flight time.

3. **Battery Health & Voltage Sag**  
   - Over time, LiPo batteries experience capacity loss and increased internal resistance, affecting real-world flight times.  
   - Voltage sag under load may cause the battery to hit the drone’s voltage cutoff earlier than expected.

4. **Environmental Factors**  
   - Cold weather reduces battery performance.  
   - Wind and aerodynamic inefficiencies can increase current draw.

5. **Reserve and Safety Margin**  
   - Pilots typically land before the battery is fully depleted to maintain a safe voltage margin.  
   - This margin ensures electronics and motors don’t cut out abruptly in midair.

---

## **3. Summary**

1. **Estimate Your Average Current Draw**: Gather data from flight tests or from motor thrust/current charts.  
2. **Use the Basic Formula**:  
   \[
   \text{Flight Time (minutes)} \approx \frac{\text{mAh}/1000}{I_\text{avg} (\text{A})} \times 60
   \]  
3. **Apply Real-World Adjustments**:  
   - Consider the 80% rule or add a buffer if you want to preserve battery health.  
   - Factor in aggressive flight maneuvers or external conditions that can increase your drone’s current draw.

By following these guidelines, you’ll get a reasonable ballpark figure for how long your drone can stay airborne on a particular battery pack. However, always remember that actual flight time can vary widely based on flight style, conditions, and battery health.