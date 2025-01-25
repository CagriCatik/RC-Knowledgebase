"use strict";(self.webpackChunkmy_document=self.webpackChunkmy_document||[]).push([[6947],{3649:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>t,metadata:()=>n,toc:()=>m});const n=JSON.parse('{"id":"rc-plane/brushless-motor/drone_motor_size","title":"Drone Motor Sizes","description":"This tutorial provides an in-depth explanation of drone motor sizes, focusing on the numerical designations, their functional significance, and the calculations necessary to evaluate motor performance. This discussion will include detailed insights into motor KV (kilovolt rating), RPM (rotations per minute) calculations, and their implications for drone flight dynamics. The content is tailored for individuals with a foundational understanding of drone technology and aims to enhance technical competence in selecting and optimizing motors for specific applications.","source":"@site/docs/01_rc-plane/01_brushless-motor/drone_motor_size.md","sourceDirName":"01_rc-plane/01_brushless-motor","slug":"/rc-plane/brushless-motor/drone_motor_size","permalink":"/RC-Knowledgebase/docs/rc-plane/brushless-motor/drone_motor_size","draft":false,"unlisted":false,"editUrl":"https://github.com/CagriCatik/RC-Knowledgebase/tree/main/docs/01_rc-plane/01_brushless-motor/drone_motor_size.md","tags":[],"version":"current","frontMatter":{},"sidebar":"planeSidebar","previous":{"title":"brushless_motor","permalink":"/RC-Knowledgebase/docs/rc-plane/brushless-motor/brushless_motor"},"next":{"title":"Selecting the Optimal Motor for an RC Plane: A Technical Overview","permalink":"/RC-Knowledgebase/docs/rc-plane/brushless-motor/optimal_motor_rc_plane"}}');var l=a(4848),i=a(8453);const t={},r="Drone Motor Sizes",c={},m=[{value:"Decoding Motor Numbers",id:"decoding-motor-numbers",level:2},{value:"Motor KV Rating",id:"motor-kv-rating",level:2},{value:"RPM Calculation",id:"rpm-calculation",level:2},{value:"Example Calculation:",id:"example-calculation",level:3},{value:"Battery Voltage and Performance",id:"battery-voltage-and-performance",level:2},{value:"Comparing RPMs:",id:"comparing-rpms",level:3},{value:"Stator Volume and Its Impact",id:"stator-volume-and-its-impact",level:2},{value:"Example:",id:"example",level:3},{value:"Small Motors and High KV Ratings",id:"small-motors-and-high-kv-ratings",level:2},{value:"Example Calculation for a 1507 Motor:",id:"example-calculation-for-a-1507-motor",level:3},{value:"Factors Influencing Motor Performance",id:"factors-influencing-motor-performance",level:2},{value:"Advanced Considerations: Efficiency and Durability",id:"advanced-considerations-efficiency-and-durability",level:2},{value:"Conclusion",id:"conclusion",level:2}];function h(s){const e={annotation:"annotation",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",mtext:"mtext",ol:"ol",p:"p",semantics:"semantics",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...s.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.header,{children:(0,l.jsx)(e.h1,{id:"drone-motor-sizes",children:"Drone Motor Sizes"})}),"\n",(0,l.jsx)(e.p,{children:"This tutorial provides an in-depth explanation of drone motor sizes, focusing on the numerical designations, their functional significance, and the calculations necessary to evaluate motor performance. This discussion will include detailed insights into motor KV (kilovolt rating), RPM (rotations per minute) calculations, and their implications for drone flight dynamics. The content is tailored for individuals with a foundational understanding of drone technology and aims to enhance technical competence in selecting and optimizing motors for specific applications."}),"\n",(0,l.jsx)(e.h2,{id:"decoding-motor-numbers",children:"Decoding Motor Numbers"}),"\n",(0,l.jsx)(e.p,{children:"Drone motors are typically classified using a four-digit number, such as 2207 or 2405, which defines the physical dimensions of the motor\u2019s stator:"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"First Two Digits"}),": Represent the stator diameter in millimeters. For instance, in a 2207 motor, the stator has a diameter of 22 mm."]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"Last Two Digits"}),": Represent the stator height in millimeters. For example, a 2207 motor has a stator height of 7 mm."]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"The stator\u2019s dimensions directly influence key motor characteristics:"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"Larger Diameter"}),": Generates higher torque, beneficial for lifting heavier payloads or providing greater stability."]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"Greater Height"}),": Enhances thrust output but can lead to increased current draw and heat generation."]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"motor-kv-rating",children:"Motor KV Rating"}),"\n",(0,l.jsx)(e.p,{children:"The KV rating of a motor specifies its RPM per volt under no-load conditions. A higher KV rating results in higher RPM but reduced torque, making it suitable for lightweight or high-speed applications. Conversely, lower KV motors provide greater torque, ideal for larger propellers or heavier drones."}),"\n",(0,l.jsx)(e.h2,{id:"rpm-calculation",children:"RPM Calculation"}),"\n",(0,l.jsx)(e.p,{children:"To calculate a motor\u2019s RPM, use the formula:"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.code,{className:"language-math math-inline",children:(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mtext,{children:"RPM"}),(0,l.jsx)(e.mo,{children:"="}),(0,l.jsx)(e.mtext,{children:"KV"}),(0,l.jsx)(e.mo,{children:"\xd7"}),(0,l.jsx)(e.mtext,{children:"Voltage"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\text{RPM} = \\text{KV} \\times \\text{Voltage}"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,l.jsx)(e.span,{className:"mord text",children:(0,l.jsx)(e.span,{className:"mord",children:"RPM"})}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"="}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.7667em",verticalAlign:"-0.0833em"}}),(0,l.jsx)(e.span,{className:"mord text",children:(0,l.jsx)(e.span,{className:"mord",children:"KV"})}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"\xd7"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,l.jsx)(e.span,{className:"mord text",children:(0,l.jsx)(e.span,{className:"mord",children:"Voltage"})})]})]})]})})}),"\n",(0,l.jsx)(e.h3,{id:"example-calculation",children:"Example Calculation:"}),"\n",(0,l.jsx)(e.p,{children:"For a 2207 motor with a KV rating of 1750 on a 6S (6-cell) battery:"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["Battery voltage: ",(0,l.jsx)(e.code,{className:"language-math math-inline",children:(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mn,{children:"4.2"}),(0,l.jsx)(e.mtext,{children:"\xa0V/cell"}),(0,l.jsx)(e.mo,{children:"\xd7"}),(0,l.jsx)(e.mn,{children:"6"}),(0,l.jsx)(e.mtext,{children:"\xa0cells"}),(0,l.jsx)(e.mo,{children:"="}),(0,l.jsx)(e.mn,{children:"25.2"}),(0,l.jsx)(e.mtext,{children:"\xa0V"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"4.2 \\text{ V/cell} \\times 6 \\text{ cells} = 25.2 \\text{ V}"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord",children:"4.2"}),(0,l.jsx)(e.span,{className:"mord text",children:(0,l.jsx)(e.span,{className:"mord",children:"\xa0V/cell"})}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"\xd7"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6944em"}}),(0,l.jsx)(e.span,{className:"mord",children:"6"}),(0,l.jsx)(e.span,{className:"mord text",children:(0,l.jsx)(e.span,{className:"mord",children:"\xa0cells"})}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"="}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,l.jsx)(e.span,{className:"mord",children:"25.2"}),(0,l.jsx)(e.span,{className:"mord text",children:(0,l.jsx)(e.span,{className:"mord",children:"\xa0V"})})]})]})]})})]}),"\n",(0,l.jsxs)(e.li,{children:["RPM: ",(0,l.jsx)(e.code,{className:"language-math math-inline",children:(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mn,{children:"1750"}),(0,l.jsx)(e.mo,{children:"\xd7"}),(0,l.jsx)(e.mn,{children:"25.2"}),(0,l.jsx)(e.mo,{children:"="}),(0,l.jsx)(e.mn,{children:"44"}),(0,l.jsx)(e.mo,{separator:"true",children:","}),(0,l.jsx)(e.mn,{children:"100"}),(0,l.jsx)(e.mtext,{children:"\xa0RPM"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"1750 \\times 25.2 = 44,100 \\text{ RPM}"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,l.jsx)(e.span,{className:"mord",children:"1750"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"\xd7"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,l.jsx)(e.span,{className:"mord",children:"25.2"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"="}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8778em",verticalAlign:"-0.1944em"}}),(0,l.jsx)(e.span,{className:"mord",children:"44"}),(0,l.jsx)(e.span,{className:"mpunct",children:","}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsx)(e.span,{className:"mord",children:"100"}),(0,l.jsx)(e.span,{className:"mord text",children:(0,l.jsx)(e.span,{className:"mord",children:"\xa0RPM"})})]})]})]})})]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"For the same motor on a 4S (4-cell) battery:"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["Battery voltage: ",(0,l.jsx)(e.code,{className:"language-math math-inline",children:(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mn,{children:"4.2"}),(0,l.jsx)(e.mtext,{children:"\xa0V/cell"}),(0,l.jsx)(e.mo,{children:"\xd7"}),(0,l.jsx)(e.mn,{children:"4"}),(0,l.jsx)(e.mtext,{children:"\xa0cells"}),(0,l.jsx)(e.mo,{children:"="}),(0,l.jsx)(e.mn,{children:"16.8"}),(0,l.jsx)(e.mtext,{children:"\xa0V"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"4.2 \\text{ V/cell} \\times 4 \\text{ cells} = 16.8 \\text{ V}"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord",children:"4.2"}),(0,l.jsx)(e.span,{className:"mord text",children:(0,l.jsx)(e.span,{className:"mord",children:"\xa0V/cell"})}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"\xd7"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6944em"}}),(0,l.jsx)(e.span,{className:"mord",children:"4"}),(0,l.jsx)(e.span,{className:"mord text",children:(0,l.jsx)(e.span,{className:"mord",children:"\xa0cells"})}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"="}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,l.jsx)(e.span,{className:"mord",children:"16.8"}),(0,l.jsx)(e.span,{className:"mord text",children:(0,l.jsx)(e.span,{className:"mord",children:"\xa0V"})})]})]})]})})]}),"\n",(0,l.jsxs)(e.li,{children:["RPM: ",(0,l.jsx)(e.code,{className:"language-math math-inline",children:(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mn,{children:"1750"}),(0,l.jsx)(e.mo,{children:"\xd7"}),(0,l.jsx)(e.mn,{children:"16.8"}),(0,l.jsx)(e.mo,{children:"="}),(0,l.jsx)(e.mn,{children:"29"}),(0,l.jsx)(e.mo,{separator:"true",children:","}),(0,l.jsx)(e.mn,{children:"400"}),(0,l.jsx)(e.mtext,{children:"\xa0RPM"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"1750 \\times 16.8 = 29,400 \\text{ RPM}"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,l.jsx)(e.span,{className:"mord",children:"1750"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"\xd7"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,l.jsx)(e.span,{className:"mord",children:"16.8"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"="}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8778em",verticalAlign:"-0.1944em"}}),(0,l.jsx)(e.span,{className:"mord",children:"29"}),(0,l.jsx)(e.span,{className:"mpunct",children:","}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsx)(e.span,{className:"mord",children:"400"}),(0,l.jsx)(e.span,{className:"mord text",children:(0,l.jsx)(e.span,{className:"mord",children:"\xa0RPM"})})]})]})]})})]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"battery-voltage-and-performance",children:"Battery Voltage and Performance"}),"\n",(0,l.jsx)(e.p,{children:"Battery configurations (e.g., 4S, 6S) determine the voltage supplied to the motor. Higher voltage (greater cell count) enables increased RPM and power output but requires careful matching with the motor\u2019s KV rating to avoid inefficiencies or potential damage."}),"\n",(0,l.jsx)(e.h3,{id:"comparing-rpms",children:"Comparing RPMs:"}),"\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"Motor KV"}),(0,l.jsx)(e.th,{children:"Battery Voltage"}),(0,l.jsx)(e.th,{children:"RPM"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"1750 KV"}),(0,l.jsx)(e.td,{children:"16.8 V (4S)"}),(0,l.jsx)(e.td,{children:"29,400 RPM"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"1750 KV"}),(0,l.jsx)(e.td,{children:"25.2 V (6S)"}),(0,l.jsx)(e.td,{children:"44,100 RPM"})]})]})]}),"\n",(0,l.jsx)(e.h2,{id:"stator-volume-and-its-impact",children:"Stator Volume and Its Impact"}),"\n",(0,l.jsx)(e.p,{children:"Stator volume is a critical metric that influences torque and efficiency. It can be calculated using the formula for the volume of a cylinder:"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.code,{className:"language-math math-inline",children:(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"V"}),(0,l.jsx)(e.mo,{children:"="}),(0,l.jsx)(e.mi,{children:"\u03c0"}),(0,l.jsxs)(e.msup,{children:[(0,l.jsx)(e.mi,{children:"r"}),(0,l.jsx)(e.mn,{children:"2"})]}),(0,l.jsx)(e.mi,{children:"h"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"V = \\pi r^2 h"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.22222em"},children:"V"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"="}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8141em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"\u03c0"}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsx)(e.span,{className:"vlist-t",children:(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,l.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"2"})})]})})})})})]}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"h"})]})]})]})})}),"\n",(0,l.jsx)(e.p,{children:"Where:"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{className:"language-math math-inline",children:(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsx)(e.mrow,{children:(0,l.jsx)(e.mi,{children:"r"})}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"r"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"})]})})]})})," is the stator\u2019s radius."]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{className:"language-math math-inline",children:(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsx)(e.mrow,{children:(0,l.jsx)(e.mi,{children:"h"})}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"h"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6944em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"h"})]})})]})})," is the stator\u2019s height."]}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"example",children:"Example:"}),"\n",(0,l.jsx)(e.p,{children:"For a 2207 motor:"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["Radius: ",(0,l.jsx)(e.code,{className:"language-math math-inline",children:(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mn,{children:"11"}),(0,l.jsx)(e.mtext,{children:"\xa0mm"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"11 \\text{ mm}"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,l.jsx)(e.span,{className:"mord",children:"11"}),(0,l.jsx)(e.span,{className:"mord text",children:(0,l.jsx)(e.span,{className:"mord",children:"\xa0mm"})})]})})]})})]}),"\n",(0,l.jsxs)(e.li,{children:["Height: ",(0,l.jsx)(e.code,{className:"language-math math-inline",children:(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mn,{children:"7"}),(0,l.jsx)(e.mtext,{children:"\xa0mm"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"7 \\text{ mm}"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,l.jsx)(e.span,{className:"mord",children:"7"}),(0,l.jsx)(e.span,{className:"mord text",children:(0,l.jsx)(e.span,{className:"mord",children:"\xa0mm"})})]})})]})})]}),"\n",(0,l.jsxs)(e.li,{children:["Volume: ",(0,l.jsx)(e.code,{className:"language-math math-inline",children:(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"\u03c0"}),(0,l.jsx)(e.mo,{children:"\xd7"}),(0,l.jsxs)(e.msup,{children:[(0,l.jsx)(e.mn,{children:"11"}),(0,l.jsx)(e.mn,{children:"2"})]}),(0,l.jsx)(e.mo,{children:"\xd7"}),(0,l.jsx)(e.mn,{children:"7"}),(0,l.jsx)(e.mo,{children:"\u2248"}),(0,l.jsx)(e.mn,{children:"2"}),(0,l.jsx)(e.mo,{separator:"true",children:","}),(0,l.jsx)(e.mn,{children:"662"}),(0,l.jsxs)(e.msup,{children:[(0,l.jsx)(e.mtext,{children:"\xa0mm"}),(0,l.jsx)(e.mn,{children:"3"})]})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\pi \\times 11^2 \\times 7 \\approx 2,662 \\text{ mm}^3"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"\u03c0"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"\xd7"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8974em",verticalAlign:"-0.0833em"}}),(0,l.jsx)(e.span,{className:"mord",children:"1"}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord",children:"1"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsx)(e.span,{className:"vlist-t",children:(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,l.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"2"})})]})})})})})]}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"\xd7"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,l.jsx)(e.span,{className:"mord",children:"7"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"\u2248"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1.0085em",verticalAlign:"-0.1944em"}}),(0,l.jsx)(e.span,{className:"mord",children:"2"}),(0,l.jsx)(e.span,{className:"mpunct",children:","}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsx)(e.span,{className:"mord",children:"662"}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord text",children:(0,l.jsx)(e.span,{className:"mord",children:"\xa0mm"})}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsx)(e.span,{className:"vlist-t",children:(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,l.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"3"})})]})})})})})]})]})]})]})})]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"For a 2405 motor:"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["Radius: ",(0,l.jsx)(e.code,{className:"language-math math-inline",children:(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mn,{children:"12"}),(0,l.jsx)(e.mtext,{children:"\xa0mm"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"12 \\text{ mm}"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,l.jsx)(e.span,{className:"mord",children:"12"}),(0,l.jsx)(e.span,{className:"mord text",children:(0,l.jsx)(e.span,{className:"mord",children:"\xa0mm"})})]})})]})})]}),"\n",(0,l.jsxs)(e.li,{children:["Height: ",(0,l.jsx)(e.code,{className:"language-math math-inline",children:(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mn,{children:"5"}),(0,l.jsx)(e.mtext,{children:"\xa0mm"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"5 \\text{ mm}"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,l.jsx)(e.span,{className:"mord",children:"5"}),(0,l.jsx)(e.span,{className:"mord text",children:(0,l.jsx)(e.span,{className:"mord",children:"\xa0mm"})})]})})]})})]}),"\n",(0,l.jsxs)(e.li,{children:["Volume: ",(0,l.jsx)(e.code,{className:"language-math math-inline",children:(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"\u03c0"}),(0,l.jsx)(e.mo,{children:"\xd7"}),(0,l.jsxs)(e.msup,{children:[(0,l.jsx)(e.mn,{children:"12"}),(0,l.jsx)(e.mn,{children:"2"})]}),(0,l.jsx)(e.mo,{children:"\xd7"}),(0,l.jsx)(e.mn,{children:"5"}),(0,l.jsx)(e.mo,{children:"\u2248"}),(0,l.jsx)(e.mn,{children:"2"}),(0,l.jsx)(e.mo,{separator:"true",children:","}),(0,l.jsx)(e.mn,{children:"261"}),(0,l.jsxs)(e.msup,{children:[(0,l.jsx)(e.mtext,{children:"\xa0mm"}),(0,l.jsx)(e.mn,{children:"3"})]})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\pi \\times 12^2 \\times 5 \\approx 2,261 \\text{ mm}^3"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"\u03c0"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"\xd7"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8974em",verticalAlign:"-0.0833em"}}),(0,l.jsx)(e.span,{className:"mord",children:"1"}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord",children:"2"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsx)(e.span,{className:"vlist-t",children:(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,l.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"2"})})]})})})})})]}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"\xd7"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,l.jsx)(e.span,{className:"mord",children:"5"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"\u2248"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1.0085em",verticalAlign:"-0.1944em"}}),(0,l.jsx)(e.span,{className:"mord",children:"2"}),(0,l.jsx)(e.span,{className:"mpunct",children:","}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsx)(e.span,{className:"mord",children:"261"}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord text",children:(0,l.jsx)(e.span,{className:"mord",children:"\xa0mm"})}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsx)(e.span,{className:"vlist-t",children:(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,l.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"3"})})]})})})})})]})]})]})]})})]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"The 2207 motor has a larger stator volume, offering increased torque compared to the 2405 motor."}),"\n",(0,l.jsx)(e.h2,{id:"small-motors-and-high-kv-ratings",children:"Small Motors and High KV Ratings"}),"\n",(0,l.jsx)(e.p,{children:"Smaller motors, such as 1507 with KV ratings as high as 3600, operate at significantly higher RPMs to compensate for their reduced size and torque. These motors are ideal for lightweight drones with smaller propellers."}),"\n",(0,l.jsx)(e.h3,{id:"example-calculation-for-a-1507-motor",children:"Example Calculation for a 1507 Motor:"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"KV rating: 3600"}),"\n",(0,l.jsx)(e.li,{children:"Voltage: 16.8 V (4S)"}),"\n",(0,l.jsxs)(e.li,{children:["RPM: ",(0,l.jsx)(e.code,{className:"language-math math-inline",children:(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mn,{children:"3600"}),(0,l.jsx)(e.mo,{children:"\xd7"}),(0,l.jsx)(e.mn,{children:"16.8"}),(0,l.jsx)(e.mo,{children:"="}),(0,l.jsx)(e.mn,{children:"60"}),(0,l.jsx)(e.mo,{separator:"true",children:","}),(0,l.jsx)(e.mn,{children:"480"}),(0,l.jsx)(e.mtext,{children:"\xa0RPM"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"3600 \\times 16.8 = 60,480 \\text{ RPM}"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,l.jsx)(e.span,{className:"mord",children:"3600"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"\xd7"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,l.jsx)(e.span,{className:"mord",children:"16.8"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"="}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8778em",verticalAlign:"-0.1944em"}}),(0,l.jsx)(e.span,{className:"mord",children:"60"}),(0,l.jsx)(e.span,{className:"mpunct",children:","}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsx)(e.span,{className:"mord",children:"480"}),(0,l.jsx)(e.span,{className:"mord text",children:(0,l.jsx)(e.span,{className:"mord",children:"\xa0RPM"})})]})]})]})})]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"factors-influencing-motor-performance",children:"Factors Influencing Motor Performance"}),"\n",(0,l.jsx)(e.p,{children:"Several additional factors impact motor performance beyond KV and stator dimensions:"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"Magnet Quality and Design"}),":","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"High-quality, curved magnets reduce the air gap between the stator and rotor, improving efficiency and torque."}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"Bearings"}),":","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"Larger, durable bearings enhance motor longevity and reduce friction."}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"Air Gap"}),":","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"A smaller air gap increases electromagnetic efficiency and torque output."}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"Propeller Size"}),":","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"Larger propellers demand higher torque, requiring motors with larger stators."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"advanced-considerations-efficiency-and-durability",children:"Advanced Considerations: Efficiency and Durability"}),"\n",(0,l.jsx)(e.p,{children:"Efficiency and durability are crucial for long-term performance. To optimize these:"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"Select ESCs (Electronic Speed Controllers) compatible with the motor\u2019s current and voltage requirements."}),"\n",(0,l.jsx)(e.li,{children:"Use high-quality materials for the motor shaft and bearings to minimize wear."}),"\n",(0,l.jsx)(e.li,{children:"Optimize cooling mechanisms to dissipate heat generated during high RPM operations."}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,l.jsx)(e.p,{children:"A thorough understanding of motor sizes, KV ratings, and their interplay with battery voltage is essential for optimizing drone performance. By leveraging calculations for RPM and considering factors like stator volume, air gap, and propeller size, you can tailor your drone\u2019s motor setup for specific applications such as racing, freestyle flying, or cinematography. Advanced users may also explore thrust-to-weight ratios and ESC tuning for further optimization."})]})}function d(s={}){const{wrapper:e}={...(0,i.R)(),...s.components};return e?(0,l.jsx)(e,{...s,children:(0,l.jsx)(h,{...s})}):h(s)}},8453:(s,e,a)=>{a.d(e,{R:()=>t,x:()=>r});var n=a(6540);const l={},i=n.createContext(l);function t(s){const e=n.useContext(i);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function r(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(l):s.components||l:t(s.components),n.createElement(i.Provider,{value:e},s.children)}}}]);