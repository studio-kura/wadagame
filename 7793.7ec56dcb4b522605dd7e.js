(self.webpackChunkwadaGame=self.webpackChunkwadaGame||[]).push([[7793],{7793:(e,t,i)=>{"use strict";i.r(t),i.d(t,{KEYBOARD_DID_CLOSE:()=>s,KEYBOARD_DID_OPEN:()=>a,copyVisualViewport:()=>D,keyboardDidClose:()=>f,keyboardDidOpen:()=>g,keyboardDidResize:()=>c,resetKeyboardAssist:()=>h,setKeyboardClose:()=>b,setKeyboardOpen:()=>w,startKeyboardAssist:()=>n,trackViewportChanges:()=>u});const a="ionKeyboardDidShow",s="ionKeyboardDidHide";let o={},d={},r=!1;const h=()=>{o={},d={},r=!1},n=e=>{p(e),e.visualViewport&&(d=D(e.visualViewport),e.visualViewport.onresize=()=>{u(e),g()||c(e)?w(e):f(e)&&b(e)})},p=e=>{e.addEventListener("keyboardDidShow",t=>w(e,t)),e.addEventListener("keyboardDidHide",()=>b(e))},w=(e,t)=>{l(e,t),r=!0},b=e=>{y(e),r=!1},g=()=>!r&&o.width===d.width&&(o.height-d.height)*d.scale>150,c=e=>r&&!f(e),f=e=>r&&d.height===e.innerHeight,l=(e,t)=>{const i=new CustomEvent(a,{detail:{keyboardHeight:t?t.keyboardHeight:e.innerHeight-d.height}});e.dispatchEvent(i)},y=e=>{const t=new CustomEvent(s);e.dispatchEvent(t)},u=e=>{o=Object.assign({},d),d=D(e.visualViewport)},D=e=>({width:Math.round(e.width),height:Math.round(e.height),offsetTop:e.offsetTop,offsetLeft:e.offsetLeft,pageTop:e.pageTop,pageLeft:e.pageLeft,scale:e.scale})}}]);