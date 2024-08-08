import{i as a}from"./assets/vendor-ad859c2f.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const l=document.querySelector("#searchImg"),u=document.querySelector("#searchBtn"),o=document.querySelector(".listImages");u.addEventListener("click",i=>{i.preventDefault(),f(),d().then(t=>{t.hits.length===0?a.error({timeout:3e3,position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}):m(t.hits)}).catch(t=>console.log(t))});function d(){const i=new URLSearchParams({key:"45320962-957458a2920d861910609dde6",q:`${l.value}`,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${i}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function m(i){const t=i.map(s=>`<li>
        <img src="${s.webformatURL}" alt="${s.tags}" style="width:360px; height:200px;"/>
        <div class="descr-wrapper">
        <p class="descr"><b>Tags</b>: ${s.tags}</p>
        <p class="descr"><b>Likes</b>: ${s.likes}</p>
        <p class="descr"><b>Views</b>: ${s.views}</p>
        <p class="descr"><b>Comments</b>: ${s.comments}</p>
        <p class="descr"><b>Downloads</b>: ${s.downloads}</p>
        </div>
      </li>`).join("");o.insertAdjacentHTML("beforeend",t)}function f(){o.innerHTML=""}
//# sourceMappingURL=commonHelpers.js.map
