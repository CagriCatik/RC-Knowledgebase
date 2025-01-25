# Guide to Printing with ASA Aero Filament for Aircraft Models  

## **Purpose**  
This guide provides detailed instructions for slicing and printing lightweight aircraft models using **ASA Aero filament**. Designed to optimize foaming properties, ASA Aero reduces print density while maintaining strength. Follow this guide to achieve high-quality prints and avoid common pitfalls.  

---

## **Tips and Considerations**  

### **1. Filament Pre-Drying**  
- **Why?** Moisture in the filament causes holes and inconsistent extrusion.  
- **Method**: Dry ASA Aero at **70–80°C for 4–6 hours** before printing. Use a filament dryer or heated build chamber.  

### **2. Temperature and Speed**  
- **Nozzle Temperature**: **260–280°C** (higher temps enhance foaming and layer adhesion).  
- **Bed Temperature**: **100–110°C** (prevents warping).  
- **Print Speed**: **≤80 mm/s** (slower speeds ensure proper foaming and adhesion).  

### **3. Build Plate Selection**  
- **Recommended**:  
  - **Engineering Plate** (e.g., Garolite)  
  - **Smooth PEI Plate** (high-temperature variant).  
- **Avoid**: **Textured PEI Plates** (uneven texture can cause over-adhesion, leading to bottom-layer damage during removal).  

### **4. Cooling Fan Settings**  
- **Fan Speed**: **20–40%** (balances cooling without weakening layer adhesion).  
- **Avoid**:  
  - **0% fan speed** (risks heat buildup and warping).  
  - **>50% fan speed** (causes rapid cooling and poor interlayer bonding).  

### **5. Odor Management**  
- ASA Aero emits pungent fumes during printing.  
- **Safety Steps**:  
  - Use an **enclosed printer**.  
  - Place the printer in a **well-ventilated area** (e.g., near a window, with exhaust fans).  

### **6. Warping Prevention**  
- **Causes**: Large models, high infill density, or uneven cooling.  
- **Solutions**:  
  1. **Avoid large/high-infill models** (optimize designs for lightweight structures).  
  2. **Use an enclosed printer** with a **glued build plate** (e.g., Magigoo, 3DLAC).  
  3. **Adjust settings**:  
     - Lower print speed (**≤60 mm/s**).  
     - Increase bed temperature (**110–120°C**).  
  - For advanced troubleshooting, refer to the [Common Print Quality Problems Wiki](#).  

### **7. Printing Multiple Models**  
- **Recommended**: Print **one model at a time** or use **"By Object" mode** (minimizes travel moves).  
- **Avoid**: **"By Layer" mode** (causes stringing and oozing due to frequent nozzle jumps).  

---

## **Print Parameters and Density Relationships**  

### **Key Factors Affecting Density**  
| Parameter              | Increase Leads To...       |  
|-------------------------|-----------------------------|  
| **Printing Temperature** | Lower density (enhanced foaming). |  
| **Print Speed**          | Unchanged or slight density increase. |  
| **Flow Ratio**           | Higher density (more material extruded). |  
| **Model Size**           | Lower density (larger models foam more). |  
| **Wall Thickness**       | Higher density (thicker walls use more material). |  
| **Infill Density**       | Higher density (more internal structure). |  

### **Temperature vs. Foaming & Density**  
The table below shows Bambu ASA Aero’s behavior at different temperatures (tested with a 0.4mm nozzle, 80mm/s speed, and 80x10x4mm³ model):  

| Temp (°C) | Min Flow Ratio | Max Foaming Ratio | Min Density (g/cm³) |  
|-----------|----------------|--------------------|----------------------|  
| 220       | ~0.93          | ~0%                | ~0.97                |  
| 230       | 0.90           | 6%                 | 0.92                 |  
| 240       | 0.74           | 28%                | 0.78                 |  
| 250       | 0.60           | 58%                | 0.61                 |  
| 260       | 0.51           | 86%                | 0.52                 |  
| 270       | 0.45           | 111%               | 0.46                 |  
| 280       | 0.44           | 116%               | 0.45                 |  

**Notes**:  
- Flow ratios and densities vary with model geometry.  
- Adjust flow ratio between **0.42–0.7** based on test prints.  

---

## **Slicing Parameter Settings**  

### **1. Default Bambu ASA Aero Profile**  
- Start with the included **ASA-Aero.3mf** file for Bambu X1C (0.4mm nozzle).  
- **Flow Ratio**: Adjust between **0.42–0.7** based on model tests.  

### **2. Quality Adjustments**  
- **Line Width**: **0.48mm** (improves surface finish).  
- **Gap Closing Radius**: **0.02mm** (rejects tiny gaps).  
- **Bridge Flow**: **70%** (prevents sagging).  
- **Avoid Crossing Walls**: Enabled with **90% max detour length**.  

### **3. Strength Adjustments**  
- **Walls**: **1 loop** (lightweight focus).  
- **Top Layers**: **0 layers** (disable unless required; set thickness to **0mm**).  
- **Bottom Layers**: **2 layers** (ensures adhesion).  
- **Infill**: **0%** (hollow structure for weight reduction).  

### **4. Speed/Acceleration Settings**  
- **Speeds**:  
  - Outer/Inner Walls, Infill, Top Surface: **80mm/s**.  
- **Acceleration**:  
  - Normal: **5000mm/s²**.  
  - Outer Wall: **3000mm/s²** (improves surface quality).  

### **5. Support Settings**  
- **Threshold Angle**: **50°** (supports only severe overhangs).  
- **Top/Bottom Z Distance**: **0.26mm**.  
- **Top Interface Layers**: **3 layers** at **0.2mm spacing**.  
- **XY Distance**: **0.6mm** (eases removal).  

### **6. Other Adjustments**  
- **Brim**: **3mm width**, **0.2mm gap** (prevents warping without sticking).  
- **Slicing Mode**: **Even-Odd** (alternates layer directions for stability).  
- **Disable**: **Prime Tower** (reduces waste).  

---

## **Default Profiles**  
1. Download **ASA-Aero.3mf** for Bambu X1C (0.4mm nozzle).  
2. Import into your slicer to apply pre-configured settings.  
3. For other printers, manually transfer:  
   - **Filament Settings**: Temp, cooling, flow ratio.  
   - **Process Parameters**: Speeds, acceleration, support rules.  

---

## **Final Notes**  
- **Test Prints**: Always run small-scale tests to calibrate flow ratio and density.  
- **Safety**: Prioritize ventilation and enclosed printing to mitigate fumes.  
- **Design**: Optimize aircraft models for thin walls and minimal infill to leverage ASA Aero’s foaming benefits.  

By following this guide, you’ll achieve lightweight, durable aircraft models with consistent quality. Adjust parameters iteratively based on test results and model requirements.