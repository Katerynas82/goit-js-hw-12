import{a as f,S as g,i as n}from"./assets/vendor-BPs2jpei.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const y="https://pixabay.com/api/",L="38315380-10eeb0cf3b6e9a9ad49e9c507";async function v(e,a=1){try{return(await f.get(y,{params:{key:L,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:a,per_page:15}})).data}catch(o){throw console.error("Error fetching data from Pixabay API",o),o}}const u=document.querySelector(".gallery-list");function b(e){const a=e.map(s=>`<li class="image-wrapper">
    <a href="${s.largeImageURL}">
    <img class="gallery-img" src="${s.webformatURL}" alt="${s.tags}"></img>
    </a>
    <div class="text-wrapper">
    <div class="text-item"><h5 class="text-header">Likes</h5><p class="text-paragraph">${s.likes}</p></div>
    <div class="text-item"><h5 class="text-header">Views</h5><p class="text-paragraph">${s.views}</p></div>
    <div class="text-item"><h5 class="text-header">Comments</h5><p class="text-paragraph">${s.comments}</p></div>
    <div class="text-item"><h5 class="text-header">Downloads</h5><p class="text-paragraph">${s.downloads}</p></div>
    </div>
    </li>`).join("");u.insertAdjacentHTML("beforeend",a)}function w(){u.innerHTML=""}const p=document.querySelector(".form"),x=document.querySelector(".form-input"),h=document.querySelector(".loader"),i=document.querySelector(".load-btn");let c=1,l="";const P=new g(".gallery-list a",{captions:!0,captionsData:"alt",captionDelay:250});p.addEventListener("submit",S);i.addEventListener("click",q);async function S(e){if(e.preventDefault(),w(),c=1,l=x.value.trim(),!l){n.warning({position:"bottomRight",message:"Please enter a search term"}),i.classList.add("hidden");return}await m(),p.reset()}async function q(){l&&(c+=1,await m(),R())}async function m(){h.classList.remove("hidden"),i.classList.add("hidden");try{const e=await v(l,c);e.totalHits===0?n.warning({position:"bottomRight",message:"Sorry, there are no images matching your search query. Please try again!"}):(b(e.hits),P.refresh(),e.hits.length<15||c*15>=e.totalHits?(i.classList.add("hidden"),n.info({position:"bottomRight",message:"We're sorry, but you've reached the end of search results."})):i.classList.remove("hidden"))}catch(e){n.error({position:"bottomRight",message:"Failed to fetch images."}),console.error(e)}finally{h.classList.add("hidden")}}function R(){const{height:e}=document.querySelector(".gallery-list").firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
