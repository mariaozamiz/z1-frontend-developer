(this["webpackJsonpz1-frontend-developer"]=this["webpackJsonpz1-frontend-developer"]||[]).push([[0],{21:function(e,t,c){},22:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),s=c(15),i=c.n(s),r=(c(21),c(2)),o=(c(22),c(7)),l=c.p+"static/media/id-bg.a826b8dc.svg",j=c(1),d=function(){return Object(j.jsxs)("div",{className:"scan",children:[Object(j.jsxs)("header",{className:"header",children:[Object(j.jsx)("h1",{className:"logo",children:"BankClient"}),Object(j.jsx)("hr",{})]}),Object(j.jsxs)("main",{className:"main",children:[Object(j.jsx)("h2",{className:"title",children:"Scan your ID"}),Object(j.jsx)("p",{className:"text",children:"Take a picture. It may take time to validate your personal information."}),Object(j.jsx)("div",{className:"card-frame",children:Object(j.jsx)("img",{className:"id-image",alt:"",src:l})}),Object(j.jsx)(o.b,{to:"/cam",children:Object(j.jsx)("button",{className:"btn btn-action",children:"take picture"})})]})]})},b=c.p+"static/media/bulb-icon.4e33b28b.svg",m=function(){var e,t,c;Object(a.useEffect)((function(){var t;return navigator.mediaDevices.getUserMedia({video:!0,audio:!1}).then((function(c){e.srcObject=c,t=c.getTracks()[0]})).catch((function(e){window.alert("Sorry! Could not access to your camera")})),function(){t&&t.stop()}}),[]);return Object(j.jsx)("div",{className:"camera",children:Object(j.jsxs)("main",{className:"main",children:[Object(j.jsx)("h2",{className:"title",children:"Take picture"}),Object(j.jsx)("p",{className:"text",children:"Fit your ID card inside the frame. The picture will be taken automatically."}),Object(j.jsxs)("div",{className:"camera-frame",children:[Object(j.jsx)("video",{className:"player",ref:function(t){return e=t},autoPlay:!0}),Object(j.jsx)("canvas",{ref:function(e){(t=e)&&(c=t.getContext("2d"))}})]}),Object(j.jsx)("img",{className:"icon",alt:"",src:b}),Object(j.jsx)("p",{className:"text",children:"Room lighting is too low"}),Object(j.jsx)("button",{className:"btn btn-shot",onClick:function(){var a=e.videoWidth,n=e.videoHeight;t.width=a,t.height=n,c.drawImage(e,0,0,a,n);t.toDataURL("image/jpeg")},children:"shoot"}),Object(j.jsx)(o.b,{to:"/",children:Object(j.jsx)("button",{className:"btn btn-cancel",children:"cancel"})})]})})};var h=function(){return Object(j.jsx)("div",{className:"app",children:Object(j.jsxs)(r.c,{children:[Object(j.jsx)(r.a,{exact:!0,path:"/",component:d}),Object(j.jsx)(r.a,{exact:!0,path:"/cam",component:m})]})})},u=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,30)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),s(e),i(e)}))};i.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(o.a,{children:Object(j.jsx)(h,{})})}),document.getElementById("root")),u()}},[[29,1,2]]]);
//# sourceMappingURL=main.8b30445e.chunk.js.map