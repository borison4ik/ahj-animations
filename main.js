(()=>{"use strict";var t={90:(t,e,n)=>{t.exports=n.p+"be0d860e775accf30d67.png"}},e={};function n(i){var r=e[i];if(void 0!==r)return r.exports;var o=e[i]={exports:{}};return t[i](o,o.exports,n),o.exports}n.p="",(()=>{function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var e=function(){function e(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.elemet=document.querySelector(".collapse__widget"),this.body=document.querySelector(".collapse__body"),this.btn=document.querySelector(".collapse__btn"),this.btn.addEventListener("click",this.toggle.bind(this))}var n,i;return n=e,(i=[{key:"toggle",value:function(){this.body.classList.toggle("open")}}])&&t(n.prototype,i),Object.defineProperty(n,"prototype",{writable:!1}),e}();function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var r=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.open=!1,this.chatBody=document.querySelector(".chat__body"),this.closeChatBtn=document.querySelector(".chat__close"),this.chatBtn=document.querySelector(".chat__btn"),this.chatBtn.addEventListener("click",this.showChat.bind(this)),this.closeChatBtn.addEventListener("click",this.closeChat.bind(this)),this.renderChat()}var e,n;return e=t,(n=[{key:"renderChat",value:function(){this.chatBody.classList.add("transition")}},{key:"showChat",value:function(){this.chatBody.classList.add("shown"),this.chatBtn.classList.add("hidden")}},{key:"closeChat",value:function(){this.chatBody.classList.contains("shown")&&this.chatBody.classList.remove("shown"),this.chatBtn.classList.contains("hidden")&&this.chatBtn.classList.remove("hidden")}}])&&i(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function o(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var a=function(){function t(e){var n=this;if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.img=new Image,null==e||!e.src)throw new Error("must have src for img");return this.img.src=null==e?void 0:e.src,this.animations=["first","second","third","fourth"],this.img.className="heart ".concat(this.animations[this.rnd()]),this.img.addEventListener("animationend",(function(){n.img.remove()})),this.img}var e,n;return e=t,(n=[{key:"rnd",value:function(){return Math.floor(Math.random()*this.animations.length)}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),s=n(90);function c(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var l=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.wrapper=document.createElement("div"),this.wrapper.className="like",this.btn=document.createElement("button"),this.btn.className="like__btn",this.btn.textContent="Like",this.btn.addEventListener("click",this.onBtnClick.bind(this)),this.wrapper.appendChild(this.btn),this.height=(null==e?void 0:e.height)||200,this.delta=(null==e?void 0:e.delta)||50,this.speed=(null==e?void 0:e.speed)||500,this.ease=(null==e?void 0:e.ease)||"ease-out",document.body.appendChild(this.wrapper)}var e,n;return e=t,(n=[{key:"onBtnClick",value:function(){var t=new a({src:s});this.wrapper.appendChild(t),console.log(t)}}])&&c(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();window.onload=function(){new e,new r,new l}})()})();
//# sourceMappingURL=main.js.map