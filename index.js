import{a as v,S,i as c}from"./assets/vendor-SA7bT8CU.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();async function g(a,r){return(await v.get("https://pixabay.com/api/",{params:{key:"55008864-d5a1decafbeed91a0d2a4411c",q:a,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:100,page:r}})).data}const C=new S(".gallery a"),p=document.querySelector(".gallery"),y=document.querySelector(".loader"),m=document.querySelector(".load-btn");function f(a){const r=a.map(e=>`<li class="gallery-item">
    <a class="gallery-link" href="${e.largeImageURL}">
      <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" />
    </a>
    <ul class="gallery-description">
  <li>
    <p class="gallery-text">Likes</p>
    <p class="gallery-value">${e.likes}</p>
  </li>
  <li>
    <p class="gallery-text">Views</p>
    <p class="gallery-value">${e.views}</p>
  </li>
  <li>
    <p class="gallery-text">Comments</p>
    <p class="gallery-value">${e.comments}</p>
  </li>
  <li>
    <p class="gallery-text">Downloads</p>
    <p class="gallery-value">${e.downloads}</p>
  </li>
</ul>
  </li>`).join("");p.insertAdjacentHTML("beforeend",r),C.refresh()}function q(){p.innerHTML=""}function h(){y.classList.add("is-visible")}function w(){y.classList.remove("is-visible")}function b(){m.classList.add("is-visible")}function u(){m.classList.remove("is-visible")}const i={gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),userForm:document.querySelector(".form"),loadBtn:document.querySelector(".load-btn")};let s=1,x=100,L,n="";i.userForm.addEventListener("submit",async a=>{if(a.preventDefault(),n=new FormData(a.target).get("search-text").trim(),!!n){q(),h();try{s=1;const e=await g(n,s);if(L=e.totalHits,!e.hits.length){c.show({message:"Sorry, there are no images matching your search query.",position:"topRight",backgroundColor:"#e03710",messageColor:"white"});return}f(e.hits),b()}catch{c.show({message:"Something went wrong. Please try again later.",position:"topRight",backgroundColor:"#ef4040",messageColor:"white"})}finally{w()}}});i.loadBtn.addEventListener("click",async a=>{a.preventDefault(),s+=1,i.gallery.appendChild(i.loader),h(),u();try{const r=await g(n,s);f(r.hits),b();const e=document.querySelector(".gallery-item");if(e){const l=e.getBoundingClientRect().height;window.scrollBy({top:2*l,behavior:"smooth"})}if(s*x>=L)return u(),c.show({position:"topRight",message:"We're sorry, there are no more posts to load",backgroundColor:"#33e917",messageColor:"white"})}catch{c.show({message:"Something went wrong. Please try again later.",position:"topRight",backgroundColor:"#ef4040",messageColor:"white"})}finally{w()}});
//# sourceMappingURL=index.js.map
