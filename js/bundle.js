!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t){document.addEventListener("DOMContentLoaded",(function(e){!function(){let e=document.querySelector(".burger-container"),t=document.querySelector(".header__burger");e.onclick=function(){t.classList.toggle("menu-opened"),document.body.classList.toggle("lock")}}();const t=document.querySelectorAll('a[href^="#"]');for(let e of t)e.addEventListener("click",(function(t){t.preventDefault();let r=document.querySelector(".header__burger");if(r.classList.contains("menu-opened")&&(r.classList.remove("menu-opened"),document.body.classList.remove("lock")),!this.classList.contains("open-popup")){const t=e.getAttribute("href");document.querySelector(t).scrollIntoView({behavior:"smooth",block:"start"})}}));let r=document.querySelector(".slider-qq");new Swiper(r,{direction:"vertical",loop:!0,autoplay:{delay:1200,disableOnInteraction:!1},centeredSlides:!1,slidesPerView:5,spaceBetween:15,breakpoints:{480:{spaceBetween:25,centeredSlides:!0}}});let n=document.querySelector(".reviews__slider");new Swiper(n,{loop:!0,slidesPerView:"auto",spaceBetween:15,centeredSlides:!0,pagination:{el:".swiper__pagination",dynamicBullets:!0},navigation:{nextEl:".swiper__arrow_right",prevEl:".swiper__arrow_left"},breakpoints:{480:{spaceBetween:30}}});const o=document.querySelectorAll(".card__review");o.forEach(e=>{e.addEventListener("click",t=>{let r=e.querySelector(".card__video"),n=document.querySelectorAll(".card__video"),c=e.querySelector(".card__info"),i=document.querySelectorAll(".card__info");r.paused?(n.forEach(e=>{e.pause()}),r.play(),i.forEach(e=>{e.classList.remove("hidden")}),c.classList.add("hidden"),o.forEach(e=>{e.classList.remove("hidden")}),e.classList.add("hidden")):(r.pause(),c.classList.remove("hidden"),e.classList.remove("hidden"))})}),window.addEventListener("load",(function(){document.querySelector(".image__circle").classList.add("rotate")}))}))}]);