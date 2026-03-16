import{a as u,S as d,i}from"./assets/vendor-SA7bT8CU.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function f(s){return u.get("https://pixabay.com/api/",{params:{key:"55008864-d5a1decafbeed91a0d2a4411c",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"}}).then(o=>o.data)}const p=new d(".gallery a"),n=document.querySelector(".gallery"),c=document.querySelector(".loader"),g=document.querySelector(".load-btn");function m(s){const o=s.map(t=>`<li class="gallery-item">
    <a class="gallery-link" href="${t.largeImageURL}">
      <img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}" />
    </a>
    <ul class="gallery-description">
  <li>
    <p class="gallery-text">Likes</p>
    <p class="gallery-value">${t.likes}</p>
  </li>
  <li>
    <p class="gallery-text">Views</p>
    <p class="gallery-value">${t.views}</p>
  </li>
  <li>
    <p class="gallery-text">Comments</p>
    <p class="gallery-value">${t.comments}</p>
  </li>
  <li>
    <p class="gallery-text">Downloads</p>
    <p class="gallery-value">${t.downloads}</p>
  </li>
</ul>
  </li>`).join("");n.insertAdjacentHTML("beforeend",o),p.refresh()}function y(){n.innerHTML=""}function h(){c.classList.add("is-visible")}function L(){c.classList.remove("is-visible")}function w(){g.classList.add("is-visible")}const b=document.querySelector(".form");b.addEventListener("submit",async s=>{s.preventDefault();const t=new FormData(s.target).get("search-text").trim();if(t){y(),h(),w();try{const a=await f(t);if(!a.hits.length){i.show({message:"Sorry, there are no images matching your search query.",position:"topRight",backgroundColor:"#ef4040",messageColor:"white"});return}m(a.hits)}catch{i.show({message:"Something went wrong. Please try again later.",position:"topRight",backgroundColor:"#ef4040",messageColor:"white"})}finally{L()}}});
//# sourceMappingURL=index.js.map
