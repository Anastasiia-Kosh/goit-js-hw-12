import{a as C,S,i as a}from"./assets/vendor-SA7bT8CU.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();async function g(s,o){return(await C.get("https://pixabay.com/api/",{params:{key:"55008864-d5a1decafbeed91a0d2a4411c",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:o}})).data}const q=new S(".gallery a"),p=document.querySelector(".gallery"),h=document.querySelector(".loader"),m=document.querySelector(".load-btn");function y(s){const o=s.map(e=>`<li class="gallery-item">
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
  </li>`).join("");p.insertAdjacentHTML("beforeend",o),q.refresh()}function x(){p.innerHTML=""}function f(){h.classList.add("is-visible")}function w(){h.classList.remove("is-visible")}function b(){m.classList.add("is-visible")}function c(){m.classList.remove("is-visible")}const L={userForm:document.querySelector(".form"),loadBtn:document.querySelector(".load-btn")};let l=1,v,d,n="";L.userForm.addEventListener("submit",async s=>{if(s.preventDefault(),c(),n=new FormData(s.target).get("search-text").trim(),!!n){x(),f();try{l=1;const e=await g(n,l);if(d=e.totalHits,v=e.hits.length,!e.hits.length){a.show({message:"Sorry, there are no images matching your search query.",position:"topRight",backgroundColor:"#e03710",messageColor:"white"});return}y(e.hits),e.hits.length>=d?(c(),a.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"#33e917",messageColor:"white"})):b()}catch{a.show({message:"Something went wrong. Please try again later.",position:"topRight",backgroundColor:"#ef4040",messageColor:"white"})}finally{w()}}});L.loadBtn.addEventListener("click",async s=>{s.preventDefault(),l+=1,f(),c();try{const o=await g(n,l);y(o.hits),b();const e=document.querySelector(".gallery-item");if(e){const i=e.getBoundingClientRect().height;window.scrollBy({top:2*i,behavior:"smooth"})}if(l*v>=d)return c(),a.show({position:"topRight",message:"We're sorry, there are no more posts to load",backgroundColor:"#33e917",messageColor:"white"});console.log(o)}catch{a.show({message:"Something went wrong. Please try again later.",position:"topRight",backgroundColor:"#ef4040",messageColor:"white"})}finally{w()}});
//# sourceMappingURL=index.js.map
