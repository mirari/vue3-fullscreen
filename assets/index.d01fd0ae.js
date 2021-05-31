var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,o=(t,n,l)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[n]=l,c=(e,t)=>{for(var n in t||(t={}))r.call(t,n)&&o(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&o(e,n,t[n]);return e},i=(e,l)=>t(e,n(l));import{d as a,r as u,a as p,c as f,w as d,t as m,s as b,b as g,e as v,f as y,m as h,T as x,o as w,g as k,v as O,h as F,p as E,i as C,j,k as _,l as I,n as q,F as P,q as S,u as A}from"./vendor.cdb7b8fa.js";const B=b;var L=a({props:{fullscreen:{type:Boolean,default:!1},exitOnClickWrapper:{type:Boolean,default:!0},fullscreenClass:{type:String,default:"fullscreen"},pageOnly:{type:Boolean,default:!1},teleport:{type:Boolean,default:!1}},emits:["change","update:fullscreen"],setup(e,{emit:t}){const n=u(),l=p({isFullscreen:!1,isEnabled:B.isEnabled}),r=f((()=>e.pageOnly||!B.isEnabled));function s(){t("change",l.isFullscreen),t("update:fullscreen",l.isFullscreen)}function o(){B.isFullscreen||B.off("change",o),l.isFullscreen=B.isFullscreen,s()}function a(e){"Escape"===e.key&&g()}function b(){r.value?(l.isFullscreen=!0,s(),document.removeEventListener("keyup",a),document.addEventListener("keyup",a)):(B.on("change",o),B.request(n.value))}function g(){l.isFullscreen&&(r.value?(l.isFullscreen=!1,s(),document.removeEventListener("keyup",a)):B.exit())}return d((()=>e.fullscreen),(e=>{e!==l.isFullscreen&&(e?b():g())})),i(c({wrapper:n,wrapperStyle:"{\n      'position': 'fixed !important',\n      'z-index': '100000 !important',\n      'left': '0 !important',\n      'top': '0 !important',\n      'width': '100% !important',\n      'height': '100% !important',\n    }"},m(l)),{toggle:function(e){void 0===e?l.isFullscreen?g():b():e?b():g()},request:b,exit:g,shadeClick:function(t){t.target===n.value&&e.exitOnClickWrapper&&g()}})}});L.render=function(e,t,n,l,r,s){return w(),g(x,{to:"body",disabled:!e.teleport||!e.fullscreen},[v("div",h({ref:"wrapper"},e.$attrs,{style:e.isFullscreen?e.wrapperStyle:void 0,class:{[e.fullscreenClass]:e.isFullscreen},onClick:t[1]||(t[1]=t=>e.shadeClick(t)),onKeyup:t[2]||(t[2]=(...t)=>e.exit&&e.exit(...t))}),[y(e.$slots,"default")],16)],8,["disabled"])};const G="undefined"!=typeof window&&null!==window;!function(){if(G&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype)return"isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get(){return this.intersectionRatio>0}}),!0}();const H=Object.prototype.propertyIsEnumerable,U=Object.getOwnPropertySymbols;function V(e){return"function"==typeof e||"[object Object]"===toString.call(e)}function D(e){return"__proto__"!==e&&"constructor"!==e&&"prototype"!==e}function R(e,...t){if(!V(e))throw new TypeError("expected the first argument to be an object");if(0===t.length||"function"!=typeof Symbol||"function"!=typeof U)return e;for(const n of t){const t=U(n);for(const l of t)H.call(n,l)&&(e[l]=n[l])}return e}function T(e,...t){let n=0;var l;for(("object"==typeof(l=e)?null===l:"function"!=typeof l)&&(e=t[n++]),e||(e={});n<t.length;n++)if(V(t[n])){for(const l of Object.keys(t[n]))D(l)&&(V(e[l])&&V(t[n][l])?T(e[l],t[n][l]):e[l]=t[n][l]);R(e,t[n])}return e}const W=b;class ${constructor(e){this.fullscreenClass="fullscreen",this.teleport=!1,e&&T(this,e)}}const z={isFullscreen:!1,isEnabled:!0,toggle(e,t,n){return void 0===n?W.isFullscreen?this.exit():this.request(e,t):n?this.request(e,t):this.exit()},request(e,t){if(W.isFullscreen)return Promise.resolve();e||(e=document.body);const n=new $(t);let l;e===document.body&&(n.teleport=!1),e.classList.add(n.fullscreenClass);const r=e.parentNode;n.teleport&&(l=document.createComment("fullscreen-token"),r.insertBefore(l,e),document.body.appendChild(e));const s=()=>{W.isFullscreen||(W.off("change",s),null==e||e.classList.remove(n.fullscreenClass),n.teleport&&(r.insertBefore(e,l),r.removeChild(l))),n.callback&&n.callback(W.isFullscreen)};return W.on("change",s),W.request(e)},exit:()=>W.isFullscreen?W.exit():Promise.resolve()};Object.defineProperties(z,{isFullscreen:{get:()=>W.isFullscreen},element:{enumerable:!0,get:()=>W.element},isEnabled:{enumerable:!0,get:()=>W.isEnabled}});var K=a({name:"ComponentExample",components:{fullscreen:L},setup(){const e=p({fullscreen:!1,teleport:!0,pageOnly:!1});return i(c({},m(e)),{toggle:function(){e.fullscreen=!e.fullscreen}})}});const N=F();E("data-v-7be38319");const J={class:"checkbox"},M=C(" pageOnly "),Q={class:"checkbox"},X=C(" teleport "),Y={class:"fullscreen-wrapper"};j();const Z=N(((e,t,n,l,r,s)=>{const o=_("fullscreen");return w(),g("div",null,[v("label",J,[k(v("input",{"onUpdate:modelValue":t[1]||(t[1]=t=>e.pageOnly=t),type:"checkbox",name:"button"},null,512),[[O,e.pageOnly]]),M]),v("label",Q,[k(v("input",{"onUpdate:modelValue":t[2]||(t[2]=t=>e.teleport=t),type:"checkbox",name:"button"},null,512),[[O,e.teleport]]),X]),v(o,{fullscreen:e.fullscreen,"onUpdate:fullscreen":t[4]||(t[4]=t=>e.fullscreen=t),teleport:e.teleport,"page-only":e.pageOnly},{default:N((()=>[v("div",Y,[v("button",{type:"button",class:"button",onClick:t[3]||(t[3]=(...t)=>e.toggle&&e.toggle(...t))},I(e.fullscreen?"exit fullscreen":"request fullscreen"),1),k(v("img",{src:"//picsum.photos/640/360"},null,8,["src"]),[[q,!e.fullscreen]]),k(v("img",{src:"//picsum.photos/1280/720"},null,8,["src"]),[[q,e.fullscreen]])])])),_:1},8,["fullscreen","teleport","page-only"])])}));K.render=Z,K.__scopeId="data-v-7be38319";var ee=a({name:"ApiExample",setup(){const e=u(),t=p({fullscreen:!1,teleport:!0});return i(c({root:e},m(t)),{toggle:async function(){await z.toggle(e.value.querySelector(".fullscreen-wrapper"),{teleport:t.teleport,callback:e=>{t.fullscreen=e}}),t.fullscreen=z.isFullscreen}})}});const te=F();E("data-v-f6487386");const ne={ref:"root"},le={class:"checkbox"},re=C(" teleport "),se={class:"fullscreen-wrapper"};j();const oe=te(((e,t,n,l,r,s)=>(w(),g("div",ne,[v("label",le,[k(v("input",{"onUpdate:modelValue":t[1]||(t[1]=t=>e.teleport=t),type:"checkbox",name:"button"},null,512),[[O,e.teleport]]),re]),v("div",se,[v("button",{type:"button",class:"button",onClick:t[2]||(t[2]=(...t)=>e.toggle&&e.toggle(...t))},I(e.fullscreen?"exit fullscreen":"request fullscreen"),1),k(v("img",{src:"//picsum.photos/640/360"},null,8,["src"]),[[q,!e.fullscreen]]),k(v("img",{src:"//picsum.photos/1280/720"},null,8,["src"]),[[q,e.fullscreen]])])],512))));ee.render=oe,ee.__scopeId="data-v-f6487386";var ce=a({components:{ComponentExample:K,ApiExample:ee}});const ie=v("h1",{class:"title"}," Demo ",-1),ae=v("hr",null,null,-1),ue={style:{"margin-bottom":"6em"}},pe=v("h2",{class:"title is-4"}," Component ",-1),fe=v("p",{class:"subtitle"},[v("a",{href:"https://github.com/mirari/vue-fullscreen/blob/next/example/views/example/ComponentExample.vue",target:"_blank"},"Source")],-1),de=v("h2",{class:"title is-4"}," Api ",-1),me=v("p",{class:"subtitle"},[v("a",{href:"https://github.com/mirari/vue-fullscreen/blob/next/example/views/example/ApiExample.vue",target:"_blank"},"Source")],-1);ce.render=function(e,t,n,l,r,s){const o=_("component-example"),c=_("api-example");return w(),g("div",null,[ie,ae,v("div",ue,[pe,fe,v(o)]),v("div",null,[de,me,v(c)])])};var be=a({name:"App",components:{Example:ce}});const ge=S('<a class="github-fork-ribbon" href="https://github.com/mirari/vue-fullscreen" title="Fork me on GitHub">Fork me on GitHub</a><section class="hero is-primary" style="margin-bottom:2em;"><div class="hero-body"><div class="container"><div class="columns is-vcentered"><div class="column"><p class="title is-1"> vue-fullscreen </p><p class="subtitle is-4"> A simple Vue 3.x component for fullscreen, based on <a href="https://sindresorhus.com/screenfull.js/" target="_blank">screenfull</a></p></div></div></div></div></section>',2),ve={class:"container",style:{"margin-bottom":"30px"}},ye=S('<footer class="footer"><div class="container"><div class="content has-text-centered"><p><a href="http://mirari.cc" target="_blank" title="mirari.cc"><strong>mirari.cc</strong></a> · GitHub <a href="https://github.com/mirari" target="_blank" title="GitHub"> @mirari </a></p></div></div></footer>',1);be.render=function(e,t,n,l,r,s){const o=_("example");return w(),g(P,null,[ge,v("div",ve,[v(o)]),ye],64)};A(be).mount("#app");
