import{S as c,i as l}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function u(i){const r="https://pixabay.com/api/",o="44735338-079c6790302f7dc185545e42d",n=new URLSearchParams({key:o,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${r}?${n}`;return fetch(e).then(t=>{if(t.ok)return t.json();throw new Error(t.status)}).catch(t=>`Error in FETCH: ${t}`)}function m({largeImageURL:i,webformatURL:r,tags:o,likes:n,views:e,comments:t,downloads:a}){return console.log(r),`
    <li>
    <a href="${i}> 
      <img src="${r}" alt="${o}"> 
      </a>
      <div class="'params">
      <div><h3>Likes</h3><p>${n}</p></div>
      <div><h3>Views</h3><p>${e}</p></div>
      <div><h3>Comments</h3><p>${t}</p></div>
      <div><h3>Downloads</h3><p>${a}</p></div>
      </div>
      
      </li>
      `}function p(i){return i.map(m).join("")}//! All logic for Web-Site
const s={form:document.querySelector(".search-form"),btnSubmit:document.querySelector(".js-submit"),input:document.querySelector("input"),list:document.querySelector(".gallery"),images:document.querySelector("img")},d=new c(".gallery li a",{captionDelay:250,captionsData:"alt"});s.form.addEventListener("submit",f);function f(i){i.preventDefault();const r=s.input.value.trim();r.length!==0&&r!==""&&u(r).then(o=>{if(o.total===0)s.input.value="",s.list.textContent="",l.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",messageColor:"white",position:"topRight",class:"error"});else{const n=p(o.hits);s.list.innerHTML=n,d.refresh(),s.input.value=""}}).catch(o=>console.error(o))}
//# sourceMappingURL=commonHelpers.js.map
