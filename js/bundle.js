!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t),document.addEventListener("DOMContentLoaded",(function(e){!function(){const e=document.querySelectorAll('a[href^="#"]');for(let t of e)t.addEventListener("click",(function(e){e.preventDefault();let r=document.querySelector(".header__burger");if(r.classList.contains("menu-opened")&&(r.classList.remove("menu-opened"),document.body.classList.remove("lock")),!this.classList.contains("open-popup")){const e=t.getAttribute("href");document.querySelector(e).scrollIntoView({behavior:"smooth",block:"start"})}}))}(),function(){const e=document.querySelectorAll(".card__review");e.forEach(t=>{t.addEventListener("click",r=>{let n=t.querySelector(".card__video"),o=document.querySelectorAll(".card__video"),c=t.querySelector(".card__info"),i=document.querySelectorAll(".card__info");n.paused?(o.forEach(e=>{e.pause()}),n.play(),i.forEach(e=>{e.classList.remove("hidden")}),c.classList.add("hidden"),e.forEach(e=>{e.classList.remove("hidden")}),t.classList.add("hidden")):(n.pause(),c.classList.remove("hidden"),t.classList.remove("hidden"))})})}(),function(){let e=document.querySelector(".slider-qq");new Swiper(e,{direction:"vertical",loop:!0,autoplay:{delay:1200,disableOnInteraction:!1},centeredSlides:!1,slidesPerView:5,spaceBetween:10,breakpoints:{480:{spaceBetween:25,centeredSlides:!0}}});let t=document.querySelector(".reviews__slider");new Swiper(t,{loop:!0,slidesPerView:"auto",spaceBetween:15,centeredSlides:!0,pagination:{el:".swiper__pagination",dynamicBullets:!0},navigation:{nextEl:".swiper__arrow_right",prevEl:".swiper__arrow_left"},breakpoints:{480:{spaceBetween:30}}})}(),function(){let e=document.querySelector(".burger-container"),t=document.querySelector(".header__burger");e.onclick=function(){t.classList.toggle("menu-opened"),document.body.classList.toggle("lock")}}()}))}]);