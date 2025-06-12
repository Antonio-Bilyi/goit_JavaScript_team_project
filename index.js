import{a as g,S as $,N as A,P as M}from"./assets/vendor-CD5jJkp3.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(a){if(a.ep)return;a.ep=!0;const r=n(a);fetch(a.href,r)}})();(()=>{const e={openModalBtn:document.querySelector("[data-menu-open]"),closeModalBtn:document.querySelector("[data-menu-close]"),modal:document.querySelector("[data-menu]"),menuLinks:document.querySelectorAll(".mob-menu-link")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t),e.menuLinks.forEach(n=>{n.addEventListener("click",()=>{t()})});function t(){e.modal.classList.toggle("is-open"),e.modal.classList.contains("is-open")?document.body.classList.add("body-lock"):document.body.classList.remove("body-lock")}})();const E="https://sound-wave.b.goit.study/api";async function S(e){console.log("id:",e);try{return(await fetch(`${E}/artists/${e}`)).json()}catch(t){throw console.error("API Error:",t),t}}function B(e){if(!e||typeof e!="object")return'<p class="error">No artist data available</p>';const t=e.intFormedYear?e.intDiedYear?`${e.intFormedYear} - ${e.intDiedYear}`:`${e.intFormedYear} - present`:"information missing",n=Array.isArray(e.genres)?e.genres:typeof genres=="string"?genres.split(",").map(s=>s.trim()):[];function o(s){if(!s||isNaN(s))return"N/A";const i=Math.floor(s/1e3),c=Math.floor(i/60),u=i%60;return`${c}:${u.toString().padStart(2,"0")}`}const a=n.length>0?`<ul class="genres-list-details">
        ${n.map(s=>`<li class="genres-item-details">${s}</li>`).join("")}
      </ul>`:"<p>Genres not specified</p>",r=s=>{const i=s.movie?`<a href="${s.movie}" target="_blank" rel="noopener noreferrer" aria-label="YouTube: ${s.strTrack}">
            <svg width="16" height="16">
              <use href="/img/symbol-defs.svg#icon-Youtube"></use>
            </svg>
         </a>`:"";return`
      <li class="track-item">
        <span class="track-title">${s.strTrack}</span>
        <span class="track-duration">${o(s.intDuration)}</span>
        <span class="track-youtube">${i}</span>
      </li>`};let l="";if(Array.isArray(e.albumsList)&&e.albumsList.length>0)l=`<ul class="albums-list">
      ${e.albumsList.map(s=>{const i=Array.isArray(s.tracks)?s.tracks:[],c=`
          <li class="tracks-header">
            <span>Track</span>
            <span>Time</span>
            <span>Link</span>
          </li>`,u=i.length>0?i.map(r).join(""):'<li class="track-item">No tracks available</li>';return`
          <li class="album-item">
            <h4 class="album-title">${s.strAlbum} (${s.intYearReleased||"Unknown Year"})</h4>
            <ul class="tracks-list">
              ${c}
              ${u}
            </ul>
          </li>`}).join("")}
    </ul>`;else if(Array.isArray(e.tracksList)&&e.tracksList.length>0){const s={};e.tracksList.forEach(i=>{const c=i.strAlbum||"Unknown Album";s[c]||(s[c]=[]),s[c].push(i)}),l=`<ul class="albums-list">
      ${Object.entries(s).map(([i,c])=>{const u=`
          <li class="tracks-header">

            <span class="span-track">Track</span>
            <span class="span-time">Time</span>
            <span class="span-link">Link</span>
          </li>`,w=c.map(r).join("");return`
          <li class="album-item">
            <h4 class="album-title">${i}</h4>
            <ul class="tracks-list">
              ${u}
              ${w}
            </ul>
          </li>`}).join("")}
    </ul>`}else l="<p>There are no albums</p>";return`<div class="modal">
    <button class="close-modal-btn" type="button">
      <svg class="icon-close-btn" width="16" height="16">
        <use href="/img/symbol-defs.svg#icon-close-btn"></use>
      </svg>
    </button>

    <h2 class="artist-name">${e.strArtist||"Unknown Artist"}</h2>
    <img class="img-details" src="${e.strArtistThumb||"placeholder-image.jpg"}" alt="Photo ${e.strArtist||"Unknown Artist"}" />

    <ul class="artist-info-list">
      <li class="item-info">
        <span class="info-label"><strong>Years active</strong></span>
        <span class="info-value">${t}</span>
      </li>
      <li class="item-info">
        <span class="info-label"><strong>Sex</strong></span>
        <span class="info-value">${e.strGender||"Unknown"}</span>
      </li>
      <li class="item-info">
        <span class="info-label"><strong>Members</strong></span>
        <span class="info-value">${e.intMembers||"Unknown"}</span>
      </li>
      <li class="item-info">
        <span class="info-label"><strong>Country</strong></span>
        <span class="info-value">${e.strCountry||"Unknown"}</span>
      </li>
    </ul>


    <div class="biography-div">
      <h3 class="title-biography">Biography</h3>
      <p class="text-biography">${e.strBiographyEN||"Biography missing"}</p>
    </div>


    <div class="genres-div">
      <h3 class="title-genres"></h3>
      ${a}
    </div>

    <div class="albums-div">
      <h3 class="albums">Albums</h3>
      ${l}
    </div>
  </div>`}const d=document.querySelector(".modal-overlay");async function q(e){e.preventDefault();const t=e.target.closest(".art-btn-learnMore");if(console.log(t),!t)return;const n=t.dataset.id;try{N();const o=await S(n);d.innerHTML=B(o),d.classList.add("is-open"),document.body.classList.add("modal-open"),T()}catch{U("Failed to load artist data.")}finally{P()}}function m(){d.classList.remove("is-open"),document.body.classList.remove("modal-open"),j()}function h(e){e.target===d&&m()}function b(e){e.key==="Escape"&&m()}function T(){const e=d.querySelector(".close-modal-btn");e==null||e.addEventListener("click",m),d.addEventListener("click",h),window.addEventListener("keydown",b)}function j(){window.removeEventListener("keydown",b),d.removeEventListener("click",h)}function N(){d.innerHTML='<div class="loader">Loading...</div>'}function P(){const e=d.querySelector(".loader");e&&e.remove()}function U(e){alert(e)}async function C(e,t){const a="https://sound-wave.b.goit.study/api"+"/artists",r=await g(a,{params:{limit:t,page:e}});return{totalArtists:r.data.totalArtists,artists:r.data.artists}}const D="/goit_JavaScript_team_project/assets/symbol-defs-DrsLeCxm.svg",F=document.querySelector(".art-list-card"),y=document.querySelector(".art-btn-loadMore"),v=document.querySelector(".loader");function O(e){let n=document.documentElement.clientWidth<=768?50:145;const o=e.map(({_id:a,strArtist:r,strBiographyEN:l,strArtistThumb:s,genres:i})=>`
  <li class="art-item">
    <img class="art-img" src="${s}" alt="${r}" />
    <ul class="art-genre-list">
      ${i.map(c=>`<li class="art-genre-list-item">${c}</li>`).join("")}
    </ul>
    <h4 class="art-list-name">${r}</h4>
    <p class="art-list-biography">${l.slice(0,n)}...</p>
    <button 
      type="button" 
      class="art-btn-learnMore" 
      data-id="${a}" 
      >Learn More
      <svg class="icon" width="24" height="24">
        <use href="${D}#icon-caret-right"></use>
      </svg>
    </button>
  </li>
`).join("");F.insertAdjacentHTML("beforeend",o)}function Y(){v.classList.add("loader")}function _(){v.classList.remove("loader")}function x(e,t,n){Math.ceil(t/n)>e?H():L()}function H(){y.classList.remove("hidden")}function L(){y.classList.add("hidden")}function R(){let t=document.querySelector(".art-item").getBoundingClientRect();window.scrollBy({top:t.height*2,behavior:"smooth"})}document.querySelector(".art-btn-loadMore").addEventListener("click",I);document.getElementById("loader");let p=1;const f=8,k=async()=>{try{Y();const e=await C(p,f);_(),x(p,e.totalArtists,f),O(e.artists),document.querySelectorAll(".art-btn-learnMore").forEach(n=>n.addEventListener("click",q))}catch(e){console.error("Помилка в getListArtist:",e)}p>1&&R()};function I(e){e.preventDefault(),++p,L(),k()}k();const W="https://sound-wave.b.goit.study/api";async function G(){try{const t=(await g.get(`${W}/feedbacks`)).data.data;return Array.isArray(t)?t:[]}catch(e){return console.error("Ошибка при загрузке отзывов:",e),[]}}function K({rating:e,descr:t,name:n}){return`
    <div class="feedback-card">
      <div class="star-rating star-rating--sm" data-rating="${Math.round(e)}">
        ${'<span class="star-rating__star"></span>'.repeat(5)}
      </div>
      <p class="feedback-text">${t}</p>
      <p class="feedback-author">— ${n}</p>
    </div>
  `}async function J(){const e=document.querySelector("#feedback-list");if(!e)return;const t=await G();Array.isArray(t)&&(e.innerHTML=t.map(n=>`<div class="swiper-slide">${K(n)}</div>`).join(""),await new Promise(n=>setTimeout(n,0)),new $(".feedback-swiper",{modules:[A,M],loop:!0,slidesPerView:1,spaceBetween:20,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0}}),document.querySelectorAll(".star-rating").forEach(n=>{const o=Number(n.dataset.rating)||0;n.querySelectorAll(".star-rating__star").forEach((r,l)=>{r.style.backgroundColor=l<o?"#FFD700":"#555"})}))}window.addEventListener("DOMContentLoaded",()=>{J()});
//# sourceMappingURL=index.js.map
