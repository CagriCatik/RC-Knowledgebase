"use strict";(self.webpackChunkmy_document=self.webpackChunkmy_document||[]).push([[7947],{1029:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>c,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"04_3d-printing/asa_aero","title":"ASA Aero","description":"This guide provides detailed instructions for slicing and printing lightweight aircraft models using ASA Aero filament. Designed to optimize foaming properties, ASA Aero reduces print density while maintaining strength. Follow this guide to achieve high-quality prints and avoid common pitfalls.","source":"@site/docs/04_3d-printing/04_asa_aero.md","sourceDirName":"04_3d-printing","slug":"/04_3d-printing/asa_aero","permalink":"/RC-Knowledgebase/docs/04_3d-printing/asa_aero","draft":false,"unlisted":false,"editUrl":"https://github.com/CagriCatik/RC-Knowledgebase/tree/main/docs/04_3d-printing/04_asa_aero.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{},"sidebar":"threeDimSidebar","previous":{"title":"LW-PLA","permalink":"/RC-Knowledgebase/docs/04_3d-printing/lwa-pla"},"next":{"title":"PLA Aero","permalink":"/RC-Knowledgebase/docs/04_3d-printing/pla-aero"}}');var i=s(4848),t=s(8453);const l={},d="ASA Aero",o={},h=[{value:"<strong>Tips and Considerations</strong>",id:"tips-and-considerations",level:2},{value:"<strong>1. Filament Pre-Drying</strong>",id:"1-filament-pre-drying",level:3},{value:"<strong>2. Temperature and Speed</strong>",id:"2-temperature-and-speed",level:3},{value:"<strong>3. Build Plate Selection</strong>",id:"3-build-plate-selection",level:3},{value:"<strong>4. Cooling Fan Settings</strong>",id:"4-cooling-fan-settings",level:3},{value:"<strong>5. Odor Management</strong>",id:"5-odor-management",level:3},{value:"<strong>6. Warping Prevention</strong>",id:"6-warping-prevention",level:3},{value:"<strong>7. Printing Multiple Models</strong>",id:"7-printing-multiple-models",level:3},{value:"<strong>Print Parameters and Density Relationships</strong>",id:"print-parameters-and-density-relationships",level:2},{value:"<strong>Key Factors Affecting Density</strong>",id:"key-factors-affecting-density",level:3},{value:"<strong>Temperature vs. Foaming &amp; Density</strong>",id:"temperature-vs-foaming--density",level:3},{value:"<strong>Slicing Parameter Settings</strong>",id:"slicing-parameter-settings",level:2},{value:"<strong>1. Default Bambu ASA Aero Profile</strong>",id:"1-default-bambu-asa-aero-profile",level:3},{value:"<strong>2. Quality Adjustments</strong>",id:"2-quality-adjustments",level:3},{value:"<strong>3. Strength Adjustments</strong>",id:"3-strength-adjustments",level:3},{value:"<strong>4. Speed/Acceleration Settings</strong>",id:"4-speedacceleration-settings",level:3},{value:"<strong>5. Support Settings</strong>",id:"5-support-settings",level:3},{value:"<strong>6. Other Adjustments</strong>",id:"6-other-adjustments",level:3},{value:"<strong>Default Profiles</strong>",id:"default-profiles",level:2},{value:"<strong>Final Notes</strong>",id:"final-notes",level:2}];function a(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"asa-aero",children:"ASA Aero"})}),"\n",(0,i.jsxs)(n.p,{children:["This guide provides detailed instructions for slicing and printing lightweight aircraft models using ",(0,i.jsx)(n.strong,{children:"ASA Aero filament"}),". Designed to optimize foaming properties, ASA Aero reduces print density while maintaining strength. Follow this guide to achieve high-quality prints and avoid common pitfalls."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"tips-and-considerations",children:(0,i.jsx)(n.strong,{children:"Tips and Considerations"})}),"\n",(0,i.jsx)(n.h3,{id:"1-filament-pre-drying",children:(0,i.jsx)(n.strong,{children:"1. Filament Pre-Drying"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Why?"})," Moisture in the filament causes holes and inconsistent extrusion."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Method"}),": Dry ASA Aero at ",(0,i.jsx)(n.strong,{children:"70\u201380\xb0C for 4\u20136 hours"})," before printing. Use a filament dryer or heated build chamber."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"2-temperature-and-speed",children:(0,i.jsx)(n.strong,{children:"2. Temperature and Speed"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Nozzle Temperature"}),": ",(0,i.jsx)(n.strong,{children:"260\u2013280\xb0C"})," (higher temps enhance foaming and layer adhesion)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Bed Temperature"}),": ",(0,i.jsx)(n.strong,{children:"100\u2013110\xb0C"})," (prevents warping)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Print Speed"}),": ",(0,i.jsx)(n.strong,{children:"\u226480 mm/s"})," (slower speeds ensure proper foaming and adhesion)."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"3-build-plate-selection",children:(0,i.jsx)(n.strong,{children:"3. Build Plate Selection"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Recommended"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Engineering Plate"})," (e.g., Garolite)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Smooth PEI Plate"})," (high-temperature variant)."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Avoid"}),": ",(0,i.jsx)(n.strong,{children:"Textured PEI Plates"})," (uneven texture can cause over-adhesion, leading to bottom-layer damage during removal)."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"4-cooling-fan-settings",children:(0,i.jsx)(n.strong,{children:"4. Cooling Fan Settings"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Fan Speed"}),": ",(0,i.jsx)(n.strong,{children:"20\u201340%"})," (balances cooling without weakening layer adhesion)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Avoid"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"0% fan speed"})," (risks heat buildup and warping)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:">50% fan speed"})," (causes rapid cooling and poor interlayer bonding)."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"5-odor-management",children:(0,i.jsx)(n.strong,{children:"5. Odor Management"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"ASA Aero emits pungent fumes during printing."}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Safety Steps"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Use an ",(0,i.jsx)(n.strong,{children:"enclosed printer"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Place the printer in a ",(0,i.jsx)(n.strong,{children:"well-ventilated area"})," (e.g., near a window, with exhaust fans)."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"6-warping-prevention",children:(0,i.jsx)(n.strong,{children:"6. Warping Prevention"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Causes"}),": Large models, high infill density, or uneven cooling."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Solutions"}),":","\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Avoid large/high-infill models"})," (optimize designs for lightweight structures)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Use an enclosed printer"})," with a ",(0,i.jsx)(n.strong,{children:"glued build plate"})," (e.g., Magigoo, 3DLAC)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Adjust settings"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Lower print speed (",(0,i.jsx)(n.strong,{children:"\u226460 mm/s"}),")."]}),"\n",(0,i.jsxs)(n.li,{children:["Increase bed temperature (",(0,i.jsx)(n.strong,{children:"110\u2013120\xb0C"}),")."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["For advanced troubleshooting, refer to the ",(0,i.jsx)(n.a,{href:"#",children:"Common Print Quality Problems Wiki"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"7-printing-multiple-models",children:(0,i.jsx)(n.strong,{children:"7. Printing Multiple Models"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Recommended"}),": Print ",(0,i.jsx)(n.strong,{children:"one model at a time"})," or use ",(0,i.jsx)(n.strong,{children:'"By Object" mode'})," (minimizes travel moves)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Avoid"}),": ",(0,i.jsx)(n.strong,{children:'"By Layer" mode'})," (causes stringing and oozing due to frequent nozzle jumps)."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"print-parameters-and-density-relationships",children:(0,i.jsx)(n.strong,{children:"Print Parameters and Density Relationships"})}),"\n",(0,i.jsx)(n.h3,{id:"key-factors-affecting-density",children:(0,i.jsx)(n.strong,{children:"Key Factors Affecting Density"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Increase Leads To..."})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Printing Temperature"})}),(0,i.jsx)(n.td,{children:"Lower density (enhanced foaming)."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Print Speed"})}),(0,i.jsx)(n.td,{children:"Unchanged or slight density increase."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Flow Ratio"})}),(0,i.jsx)(n.td,{children:"Higher density (more material extruded)."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Model Size"})}),(0,i.jsx)(n.td,{children:"Lower density (larger models foam more)."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Wall Thickness"})}),(0,i.jsx)(n.td,{children:"Higher density (thicker walls use more material)."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Infill Density"})}),(0,i.jsx)(n.td,{children:"Higher density (more internal structure)."})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"temperature-vs-foaming--density",children:(0,i.jsx)(n.strong,{children:"Temperature vs. Foaming & Density"})}),"\n",(0,i.jsx)(n.p,{children:"The table below shows Bambu ASA Aero\u2019s behavior at different temperatures (tested with a 0.4mm nozzle, 80mm/s speed, and 80x10x4mm\xb3 model):"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Temp (\xb0C)"}),(0,i.jsx)(n.th,{children:"Min Flow Ratio"}),(0,i.jsx)(n.th,{children:"Max Foaming Ratio"}),(0,i.jsx)(n.th,{children:"Min Density (g/cm\xb3)"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"220"}),(0,i.jsx)(n.td,{children:"~0.93"}),(0,i.jsx)(n.td,{children:"~0%"}),(0,i.jsx)(n.td,{children:"~0.97"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"230"}),(0,i.jsx)(n.td,{children:"0.90"}),(0,i.jsx)(n.td,{children:"6%"}),(0,i.jsx)(n.td,{children:"0.92"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"240"}),(0,i.jsx)(n.td,{children:"0.74"}),(0,i.jsx)(n.td,{children:"28%"}),(0,i.jsx)(n.td,{children:"0.78"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"250"}),(0,i.jsx)(n.td,{children:"0.60"}),(0,i.jsx)(n.td,{children:"58%"}),(0,i.jsx)(n.td,{children:"0.61"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"260"}),(0,i.jsx)(n.td,{children:"0.51"}),(0,i.jsx)(n.td,{children:"86%"}),(0,i.jsx)(n.td,{children:"0.52"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"270"}),(0,i.jsx)(n.td,{children:"0.45"}),(0,i.jsx)(n.td,{children:"111%"}),(0,i.jsx)(n.td,{children:"0.46"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"280"}),(0,i.jsx)(n.td,{children:"0.44"}),(0,i.jsx)(n.td,{children:"116%"}),(0,i.jsx)(n.td,{children:"0.45"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Notes"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Flow ratios and densities vary with model geometry."}),"\n",(0,i.jsxs)(n.li,{children:["Adjust flow ratio between ",(0,i.jsx)(n.strong,{children:"0.42\u20130.7"})," based on test prints."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"slicing-parameter-settings",children:(0,i.jsx)(n.strong,{children:"Slicing Parameter Settings"})}),"\n",(0,i.jsx)(n.h3,{id:"1-default-bambu-asa-aero-profile",children:(0,i.jsx)(n.strong,{children:"1. Default Bambu ASA Aero Profile"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Start with the included ",(0,i.jsx)(n.strong,{children:"ASA-Aero.3mf"})," file for Bambu X1C (0.4mm nozzle)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Flow Ratio"}),": Adjust between ",(0,i.jsx)(n.strong,{children:"0.42\u20130.7"})," based on model tests."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"2-quality-adjustments",children:(0,i.jsx)(n.strong,{children:"2. Quality Adjustments"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Line Width"}),": ",(0,i.jsx)(n.strong,{children:"0.48mm"})," (improves surface finish)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Gap Closing Radius"}),": ",(0,i.jsx)(n.strong,{children:"0.02mm"})," (rejects tiny gaps)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Bridge Flow"}),": ",(0,i.jsx)(n.strong,{children:"70%"})," (prevents sagging)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Avoid Crossing Walls"}),": Enabled with ",(0,i.jsx)(n.strong,{children:"90% max detour length"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"3-strength-adjustments",children:(0,i.jsx)(n.strong,{children:"3. Strength Adjustments"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Walls"}),": ",(0,i.jsx)(n.strong,{children:"1 loop"})," (lightweight focus)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Top Layers"}),": ",(0,i.jsx)(n.strong,{children:"0 layers"})," (disable unless required; set thickness to ",(0,i.jsx)(n.strong,{children:"0mm"}),")."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Bottom Layers"}),": ",(0,i.jsx)(n.strong,{children:"2 layers"})," (ensures adhesion)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Infill"}),": ",(0,i.jsx)(n.strong,{children:"0%"})," (hollow structure for weight reduction)."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"4-speedacceleration-settings",children:(0,i.jsx)(n.strong,{children:"4. Speed/Acceleration Settings"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Speeds"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Outer/Inner Walls, Infill, Top Surface: ",(0,i.jsx)(n.strong,{children:"80mm/s"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Acceleration"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Normal: ",(0,i.jsx)(n.strong,{children:"5000mm/s\xb2"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Outer Wall: ",(0,i.jsx)(n.strong,{children:"3000mm/s\xb2"})," (improves surface quality)."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"5-support-settings",children:(0,i.jsx)(n.strong,{children:"5. Support Settings"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Threshold Angle"}),": ",(0,i.jsx)(n.strong,{children:"50\xb0"})," (supports only severe overhangs)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Top/Bottom Z Distance"}),": ",(0,i.jsx)(n.strong,{children:"0.26mm"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Top Interface Layers"}),": ",(0,i.jsx)(n.strong,{children:"3 layers"})," at ",(0,i.jsx)(n.strong,{children:"0.2mm spacing"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"XY Distance"}),": ",(0,i.jsx)(n.strong,{children:"0.6mm"})," (eases removal)."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"6-other-adjustments",children:(0,i.jsx)(n.strong,{children:"6. Other Adjustments"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Brim"}),": ",(0,i.jsx)(n.strong,{children:"3mm width"}),", ",(0,i.jsx)(n.strong,{children:"0.2mm gap"})," (prevents warping without sticking)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Slicing Mode"}),": ",(0,i.jsx)(n.strong,{children:"Even-Odd"})," (alternates layer directions for stability)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Disable"}),": ",(0,i.jsx)(n.strong,{children:"Prime Tower"})," (reduces waste)."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"default-profiles",children:(0,i.jsx)(n.strong,{children:"Default Profiles"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Download ",(0,i.jsx)(n.strong,{children:"ASA-Aero.3mf"})," for Bambu X1C (0.4mm nozzle)."]}),"\n",(0,i.jsx)(n.li,{children:"Import into your slicer to apply pre-configured settings."}),"\n",(0,i.jsxs)(n.li,{children:["For other printers, manually transfer:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Filament Settings"}),": Temp, cooling, flow ratio."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Process Parameters"}),": Speeds, acceleration, support rules."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"final-notes",children:(0,i.jsx)(n.strong,{children:"Final Notes"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Test Prints"}),": Always run small-scale tests to calibrate flow ratio and density."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Safety"}),": Prioritize ventilation and enclosed printing to mitigate fumes."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Design"}),": Optimize aircraft models for thin walls and minimal infill to leverage ASA Aero\u2019s foaming benefits."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"By following this guide, you\u2019ll achieve lightweight, durable aircraft models with consistent quality. Adjust parameters iteratively based on test results and model requirements."})]})}function c(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>d});var r=s(6540);const i={},t=r.createContext(i);function l(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);