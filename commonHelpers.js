import{i as a}from"./assets/vendor-ad859c2f.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}})();const s=document.querySelector("#searchImg"),u=document.querySelector("#searchBtn");u.addEventListener("click",o=>{o.preventDefault(),l()&&f().then(t=>d(t)).catch(t=>console.log(t))});function l(){return s.value===""?a.error({timeout:3e3,position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}):!0}function f(){const o=new URLSearchParams({key:"45320962-957458a2920d861910609dde6",q:`${s.value}`,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${o}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function d(o){console.log(o)}
//# sourceMappingURL=commonHelpers.js.map
