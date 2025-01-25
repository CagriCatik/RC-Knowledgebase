"use strict";(self.webpackChunkmy_document=self.webpackChunkmy_document||[]).push([[1578],{8388:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"rc-plane/servo/servo","title":"Introduction","description":"---","source":"@site/docs/01_rc-plane/04_servo/01_servo.md","sourceDirName":"01_rc-plane/04_servo","slug":"/rc-plane/servo/servo","permalink":"/RC-Knowledgebase/docs/rc-plane/servo/servo","draft":false,"unlisted":false,"editUrl":"https://github.com/CagriCatik/RC-Knowledgebase/tree/main/docs/01_rc-plane/04_servo/01_servo.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{},"sidebar":"planeSidebar","previous":{"title":"Servo","permalink":"/RC-Knowledgebase/docs/category/servo"},"next":{"title":"Choosing the Right Servo","permalink":"/RC-Knowledgebase/docs/rc-plane/servo/choosing_servo"}}');var i=r(4848),t=r(8453);const o={},l="Introduction",c={},d=[{value:"<strong>1. Introduction</strong>",id:"1-introduction",level:2},{value:"<strong>2. Core Components</strong>",id:"2-core-components",level:2},{value:"<strong>Electric Motor</strong>",id:"electric-motor",level:3},{value:"<strong>Gearbox</strong>",id:"gearbox",level:3},{value:"<strong>Feedback System</strong>",id:"feedback-system",level:3},{value:"<strong>Control Circuitry</strong>",id:"control-circuitry",level:3},{value:"<strong>3. Working Principles</strong>",id:"3-working-principles",level:2},{value:"<strong>Signal Input (PWM)</strong>",id:"signal-input-pwm",level:3},{value:"<strong>Closed-Loop Operation</strong>",id:"closed-loop-operation",level:3},{value:"<strong>4. Types of Servos</strong>",id:"4-types-of-servos",level:2},{value:"<strong>5. Critical Specifications</strong>",id:"5-critical-specifications",level:2},{value:"<strong>Torque</strong>",id:"torque",level:3},{value:"<strong>Speed</strong>",id:"speed",level:3},{value:"<strong>Voltage Range</strong>",id:"voltage-range",level:3},{value:"<strong>Physical Attributes</strong>",id:"physical-attributes",level:3},{value:"<strong>6. Installation Best Practices</strong>",id:"6-installation-best-practices",level:2},{value:"<strong>Mounting</strong>",id:"mounting",level:3},{value:"<strong>Linkages</strong>",id:"linkages",level:3},{value:"<strong>Power Management</strong>",id:"power-management",level:3},{value:"<strong>7. Maintenance &amp; Troubleshooting</strong>",id:"7-maintenance--troubleshooting",level:2},{value:"<strong>Routine Care</strong>",id:"routine-care",level:3},{value:"<strong>Calibration</strong>",id:"calibration",level:3},{value:"<strong>Common Issues</strong>",id:"common-issues",level:3},{value:"<strong>8. Advanced Techniques</strong>",id:"8-advanced-techniques",level:2},{value:"<strong>Programmable Servos</strong>",id:"programmable-servos",level:3},{value:"<strong>Telemetry Integration</strong>",id:"telemetry-integration",level:3},{value:"<strong>Redundancy</strong>",id:"redundancy",level:3},{value:"<strong>Power Distribution</strong>",id:"power-distribution",level:3},{value:"<strong>Conclusion</strong>",id:"conclusion",level:2}];function a(e){const n={em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"introduction",children:"Introduction"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"1-introduction",children:(0,i.jsx)(n.strong,{children:"1. Introduction"})}),"\n",(0,i.jsx)(n.p,{children:"Servo motors are precision electromechanical actuators that translate electronic signals into controlled mechanical motion. In RC aircraft, they are indispensable for adjusting flight surfaces (ailerons, elevators, rudders) and auxiliary functions (landing gear, flaps). Their closed-loop feedback system ensures accurate angular positioning, enabling stable flight and dynamic maneuvers."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"2-core-components",children:(0,i.jsx)(n.strong,{children:"2. Core Components"})}),"\n",(0,i.jsx)(n.h3,{id:"electric-motor",children:(0,i.jsx)(n.strong,{children:"Electric Motor"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Coreless Motors"}),": Lightweight design with a hollow rotor for rapid response."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Brushless Motors"}),": High efficiency, minimal wear, and superior performance in demanding applications."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"gearbox",children:(0,i.jsx)(n.strong,{children:"Gearbox"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Converts motor RPM into torque using gears.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"Nylon Gears"}),": Quiet, lightweight, and cost-effective."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"Metal Gears"})," (steel/titanium): Durable for high-stress environments."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"feedback-system",children:(0,i.jsx)(n.strong,{children:"Feedback System"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Potentiometer"}),": Measures shaft position (common in analog servos)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Magnetic Encoder"}),": Higher precision and lifespan (used in advanced digital servos)."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"control-circuitry",children:(0,i.jsx)(n.strong,{children:"Control Circuitry"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Utilizes PID control loops to compare input signals with real-time feedback, minimizing positional error."}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"3-working-principles",children:(0,i.jsx)(n.strong,{children:"3. Working Principles"})}),"\n",(0,i.jsx)(n.h3,{id:"signal-input-pwm",children:(0,i.jsx)(n.strong,{children:"Signal Input (PWM)"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Pulse Cycle"}),": 20 ms (50 Hz standard)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Pulse Width"}),": Dictates angular position:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"1.0 ms"})," \u2192 0\xb0 (minimum position)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"1.5 ms"})," \u2192 90\xb0 (neutral/centered)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"2.0 ms"})," \u2192 180\xb0 (maximum position)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"Extended range"}),": Some servos accept 0.5\u20132.5 ms pulses for 270\xb0 rotation."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"closed-loop-operation",children:(0,i.jsx)(n.strong,{children:"Closed-Loop Operation"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Receiver sends PWM signal."}),"\n",(0,i.jsx)(n.li,{children:"Control circuitry compares target position (from signal) with actual position (from feedback device)."}),"\n",(0,i.jsx)(n.li,{children:"Motor adjusts direction/speed until positional error is eliminated."}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"4-types-of-servos",children:(0,i.jsx)(n.strong,{children:"4. Types of Servos"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Type"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Key Features"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Best For"})})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Analog"})}),(0,i.jsx)(n.td,{children:"50 Hz update rate, budget-friendly."}),(0,i.jsx)(n.td,{children:"Basic trainers, small models."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Digital"})}),(0,i.jsx)(n.td,{children:"300\u2013500 Hz updates, faster response, higher torque."}),(0,i.jsx)(n.td,{children:"3D aerobatics, large-scale models."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Brushless"})}),(0,i.jsx)(n.td,{children:"No commutator, efficient, low maintenance."}),(0,i.jsx)(n.td,{children:"High-performance competition aircraft."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"High-Voltage (HV)"})}),(0,i.jsx)(n.td,{children:"Operates at 7.4\u20138.4V, enhanced power output."}),(0,i.jsx)(n.td,{children:"Systems with LiPo/LiFe batteries."})]})]})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"5-critical-specifications",children:(0,i.jsx)(n.strong,{children:"5. Critical Specifications"})}),"\n",(0,i.jsx)(n.h3,{id:"torque",children:(0,i.jsx)(n.strong,{children:"Torque"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Measurement"}),": kg-cm (force exerted 1 cm from the shaft)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Example"}),": A 12 kg-cm servo can hold 12 kg at a 1 cm lever arm."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"speed",children:(0,i.jsx)(n.strong,{children:"Speed"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Measurement"}),": Time to rotate 60\xb0 (e.g., 0.15 sec/60\xb0)."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"voltage-range",children:(0,i.jsx)(n.strong,{children:"Voltage Range"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Standard"}),": 4.8\u20136.0V (NiMH/NiCd batteries)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"High-Voltage"}),": 6.0\u20138.4V (2S LiPo)."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"physical-attributes",children:(0,i.jsx)(n.strong,{children:"Physical Attributes"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Weight"}),": Ranges from 5g (micro) to 100g (large)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Dimensions"}),": Match servo size to airframe constraints."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"6-installation-best-practices",children:(0,i.jsx)(n.strong,{children:"6. Installation Best Practices"})}),"\n",(0,i.jsx)(n.h3,{id:"mounting",children:(0,i.jsx)(n.strong,{children:"Mounting"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Secure servos with screws or industrial adhesive."}),"\n",(0,i.jsx)(n.li,{children:"Isolate vibrations using rubber grommets."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"linkages",children:(0,i.jsx)(n.strong,{children:"Linkages"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Use ball bearings or titanium clevises for slop-free connections."}),"\n",(0,i.jsx)(n.li,{children:"Opt for carbon fiber pushrods to prevent flexing."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"power-management",children:(0,i.jsx)(n.strong,{children:"Power Management"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Deploy a BEC (Battery Eliminator Circuit) for systems with >3 servos."}),"\n",(0,i.jsx)(n.li,{children:"Avoid voltage sag by using capacitors or dedicated receiver packs."}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"7-maintenance--troubleshooting",children:(0,i.jsx)(n.strong,{children:"7. Maintenance & Troubleshooting"})}),"\n",(0,i.jsx)(n.h3,{id:"routine-care",children:(0,i.jsx)(n.strong,{children:"Routine Care"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Inspect gears post-crash; replace worn components."}),"\n",(0,i.jsx)(n.li,{children:"Lubricate metal gears with silicone-based grease."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"calibration",children:(0,i.jsx)(n.strong,{children:"Calibration"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Center servos using a tester before attaching linkages."}),"\n",(0,i.jsx)(n.li,{children:"Set endpoints via transmitter to prevent gear stripping."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"common-issues",children:(0,i.jsx)(n.strong,{children:"Common Issues"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Jittering"}),": Clean or replace the potentiometer."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Overheating"}),": Check for binding linkages or excessive load."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"No Motion"}),": Verify wiring (signal, ground, power) and test with a servo tester."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"8-advanced-techniques",children:(0,i.jsx)(n.strong,{children:"8. Advanced Techniques"})}),"\n",(0,i.jsx)(n.h3,{id:"programmable-servos",children:(0,i.jsx)(n.strong,{children:"Programmable Servos"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Customize deadband, speed, and rotation limits via programming interfaces."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"telemetry-integration",children:(0,i.jsx)(n.strong,{children:"Telemetry Integration"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Monitor real-time servo load, temperature, and voltage via transmitter telemetry."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"redundancy",children:(0,i.jsx)(n.strong,{children:"Redundancy"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Dual-servo setups on elevators/rudders for failsafe operation."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"power-distribution",children:(0,i.jsx)(n.strong,{children:"Power Distribution"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Use power distribution boards in giant-scale models to handle 10+ servos."}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"conclusion",children:(0,i.jsx)(n.strong,{children:"Conclusion"})}),"\n",(0,i.jsx)(n.p,{children:"Servo selection hinges on balancing torque, speed, voltage, and physical constraints with the aircraft\u2019s performance requirements. Regular maintenance and advanced configurations\u2014such as programmable endpoints or telemetry\u2014enhance reliability and control fidelity. By mastering servo mechanics and integration, RC pilots optimize both precision and durability, ensuring peak performance in every flight envelope."})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>l});var s=r(6540);const i={},t=s.createContext(i);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);