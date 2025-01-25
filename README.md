# ✈️ RC Engineering Hub 🚗

[![WTFPL License](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/) [![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen.svg)](CONTRIBUTING.md)  ![Deploy Docusaurus](https://github.com/CagriCatik/RC-Knowledgebase/actions/workflows/deploy.yml/badge.svg)

**Universal Toolkit for RC Vehicles - Master Planes, Cars & More!**  

The definitive resource for RC enthusiasts designing high-performance vehicles. Contains cross-disciplinary tools and specialized guides for both aerial and ground RC systems.

![RC Vehicles](https://via.placeholder.com/800x400.png?text=RC+Plane+and+Car+Components)  
*(Example image - replace with your graphic)*

## 🌟 Universal Features

- **Multi-Platform Calculators**: Flight/drive time estimation, power system analysis
- **Dual-Use Tools**: Python GUI supporting both plane and car configurations
- **Shared Physics Engine**: Common core for aerodynamic/terrain dynamics
- **Modular Design**: Mix-and-match components between vehicle types

## 🛠️ Table of Contents

### Shared Core Components
| Component              | Resources |
|------------------------|-----------|
| **Brushless Motors**   | [Cross-Platform Guide](01_selecting_brushless_motor.md) • [KV Ratings Explained](brushless-motor.md) |
| **LiPo Batteries**     | [Capacity vs C-Rating](04_selecting_lipo_battery.md) • [Safety Handbook](battery-safety.md) |
| **Speed Controllers**  | [ESC Selection Matrix](03_selecting_esc.md) • [Waterproofing Guide](esc-waterproofing.md) |

### Plane-Specific Systems
- 🛩️ [Propeller Aerodynamics](02_selecting_propeller.md)
- ✈️ [Wing Loading Calculator](wing-loading.md)
- 🪂 [Flight Stability Systems](flight-stability.md)

### Car-Specific Systems
- 🏎️ [Gear Ratio Calculator](gear-ratios.md)
- 🚗 [Differential Setup Guide](differential-settings.md)
- 🏁 [Suspension Tuning Handbook](suspension-tuning.md)

### Universal Tools
```bash
📊 Cross-Platform GUI          → gui.py
⏱️ Runtime Calculator          → runtime-calculator.md
🔋 Power System Analyzer       → power-analysis.py
```

## 🚀 Getting Started

**For RC Planes:**
1. Start with [Aircraft System Setup](00_selecting_parts_for_rc_plane.md)
2. Use [Flight Time Calculator](flight-time.md)

**For RC Cars:**
1. Begin with [Ground Vehicle Power Systems](car_power_systems.md)
2. Run [Torque Calculation Script](torque-calculator.py)

## 🌍 Documentation Portal

Our **[Live Portal](https://yourdomain.com)** features vehicle-specific interfaces:

### Local Development
```bash
yarn install   # Install dependencies
yarn start     # Launch local server @ http://localhost:3000
```

## 🤝 Contribution Guidelines

1. Fork repository
2. Use branch naming:  
   `feat/planes/[feature]` or `feat/cars/[feature]`
3. Follow [Style Guide](STYLEGUIDE.md)

## License
This project is licensed under the [![WTFPL License](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)

