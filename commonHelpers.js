import{i as a}from"./assets/vendor-ad859c2f.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const c={btnSubmit:document.querySelector(".js-submit"),input:document.querySelector("input")};c.btnSubmit.addEventListener("click",n=>{n.preventDefault();const r=c.input.value;r.trim(),r.length!==0&&r!==""&&u(r).then(o=>{o.total===0&&a.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"red",messageColor:"white",position:"topRight"})}).catch(o=>`Err in Fetch: ${o}`)});function u(n){const r="https://pixabay.com/api/",o="44735338-079c6790302f7dc185545e42d",i=new URLSearchParams({key:o,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${r}?${i}`;//! Return massiv with a lot ob Object. I think that to pass something
return console.log(fetch(e).then(t=>t.json())),fetch(e).then(t=>t.json())}
//# sourceMappingURL=commonHelpers.js.map
