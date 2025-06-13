import{a as b,S as M,N as E,P as S}from"./assets/vendor-CD5jJkp3.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function r(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(s){if(s.ep)return;s.ep=!0;const n=r(s);fetch(s.href,n)}})();(()=>{const t={openModalBtn:document.querySelector("[data-menu-open]"),closeModalBtn:document.querySelector("[data-menu-close]"),modal:document.querySelector("[data-menu]"),menuLinks:document.querySelectorAll(".mob-menu-link")};t.openModalBtn.addEventListener("click",e),t.closeModalBtn.addEventListener("click",e),t.menuLinks.forEach(r=>{r.addEventListener("click",()=>{e()})});function e(){t.modal.classList.toggle("is-open"),t.modal.classList.contains("is-open")?document.body.classList.add("body-lock"):document.body.classList.remove("body-lock")}})();const q="https://sound-wave.b.goit.study/api";async function B(t){console.log("id:",t);try{return(await fetch(`${q}/artists/${t}`)).json()}catch(e){throw console.error("API Error:",e),e}}const f="/goit_JavaScript_team_project/assets/symbol-defs-DwKGnhvG.svg";function T(t,e){if(!t||typeof t!="object")return'<p class="error">No artist data available</p>';const r=t.intFormedYear?t.intDiedYear?`${t.intFormedYear} - ${t.intDiedYear}`:`${t.intFormedYear} - present`:"information missing",o=Array.isArray(e)?e:typeof e=="string"?e.split(",").map(a=>a.trim()):[];function s(a){if(!a||isNaN(a))return"N/A";const i=Math.floor(a/1e3),c=Math.floor(i/60),p=i%60;return`${c}:${p.toString().padStart(2,"0")}`}const n=o.length>0?`<ul class="genres-list-details">
        ${o.map(a=>`<li class="genres-item-details">${a}</li>`).join("")}
      </ul>`:"<p>Genres not specified</p>",l=a=>{const i=a.movie?`<a href="${a.movie}" target="_blank" rel="noopener noreferrer" aria-label="YouTube: ${a.strTrack}">
            <svg width="16" height="16">
              <use href="${f}#icon-Youtube"></use>
            </svg>
         </a>`:"";return`
      <li class="track-item">
        <span class="track-title">${a.strTrack}</span>
        <span class="track-duration">${s(a.intDuration)}</span>
        <span class="track-youtube">${i}</span>
      </li>`};let d="";if(Array.isArray(t.albumsList)&&t.albumsList.length>0)d=`<ul class="albums-list">
      ${t.albumsList.map(a=>{const i=Array.isArray(a.tracks)?a.tracks:[],c=`
          <li class="tracks-header">
            <span>Track</span>
            <span>Time</span>
            <span>Link</span>
          </li>`,p=i.length>0?i.map(l).join(""):'<li class="track-item">No tracks available</li>';return`
          <li class="album-item">
            <h4 class="album-title">${a.strAlbum} (${a.intYearReleased||"Unknown Year"})</h4>
            <ul class="tracks-list">
              ${c}
              ${p}
            </ul>
          </li>`}).join("")}
    </ul>`;else if(Array.isArray(t.tracksList)&&t.tracksList.length>0){const a={};t.tracksList.forEach(i=>{const c=i.strAlbum||"Unknown Album";a[c]||(a[c]=[]),a[c].push(i)}),d=`<ul class="albums-list">
      ${Object.entries(a).map(([i,c])=>{const p=`
          <li class="tracks-header">

            <span class="span-track">Track</span>
            <span class="span-time">Time</span>
            <span class="span-link">Link</span>
          </li>`,A=c.map(l).join("");return`
          <li class="album-item">
            <h4 class="album-title">${i}</h4>
            <ul class="tracks-list">
              ${p}
              ${A}
            </ul>
          </li>`}).join("")}
    </ul>`}else d="<p>There are no albums</p>";return`<div class="modal">
    <button class="close-modal-btn" type="button">
      <svg class="icon-close-btn" width="16" height="16">
        <use href="${f}#icon-close-btn"></use>
      </svg>
    </button>

    <h2 class="artist-name">${t.strArtist||"Unknown Artist"}</h2>
    <img class="img-details" src="${t.strArtistThumb||"placeholder-image.jpg"}" alt="Photo ${t.strArtist||"Unknown Artist"}" />

    <ul class="artist-info-list">
      <li class="item-info">
        <span class="info-label"><strong>Years active</strong></span>
        <span class="info-value">${r}</span>
      </li>
      <li class="item-info">
        <span class="info-label"><strong>Sex</strong></span>
        <span class="info-value">${t.strGender||"Unknown"}</span>
      </li>
      <li class="item-info">
        <span class="info-label"><strong>Members</strong></span>
        <span class="info-value">${t.intMembers||"Unknown"}</span>
      </li>
      <li class="item-info">
        <span class="info-label"><strong>Country</strong></span>
        <span class="info-value">${t.strCountry||"Unknown"}</span>
      </li>
    </ul>


    <div class="biography-div">
      <h3 class="title-biography">Biography</h3>
      <p class="text-biography">${t.strBiographyEN||"Biography missing"}</p>
    </div>


    <div class="genres-div">
      <h3 class="title-genres"></h3>
      ${n}
    </div>

    <div class="albums-div">
      <h3 class="albums">Albums</h3>
      ${d}
    </div>
  </div>`}const u=document.querySelector(".modal-overlay");async function j(t){t.preventDefault();const e=t.target.closest(".art-btn-learnMore");if(!e)return;const r=e.dataset.id,o=e.dataset.style;let s=o?o.split(",").map(n=>n.trim()):[];console.log("artistGenres:",s);try{F();const n=await B(r);u.innerHTML=T(n,s),u.classList.add("is-open"),document.body.classList.add("modal-open"),N()}catch{C("Failed to load artist data.")}finally{U()}}function h(){u.classList.remove("is-open"),document.body.classList.remove("modal-open"),P()}function y(t){t.target===u&&h()}function v(t){t.key==="Escape"&&h()}function N(){const t=u.querySelector(".close-modal-btn");t==null||t.addEventListener("click",h),u.addEventListener("click",y),window.addEventListener("keydown",v)}function P(){window.removeEventListener("keydown",v),u.removeEventListener("click",y)}function F(){u.innerHTML='<div class="loader">Loading...</div>'}function U(){const t=u.querySelector(".loader");t&&t.remove()}function C(t){alert(t)}async function O(t,e){const s="https://sound-wave.b.goit.study/api"+"/artists",n=await b(s,{params:{limit:e,page:t}});return{totalArtists:n.data.totalArtists,artists:n.data.artists}}const Y=document.querySelector(".art-list-card"),L=document.querySelector(".art-btn-loadMore"),k=document.querySelector(".loader");function _(t){let r=document.documentElement.clientWidth<=768?50:145;const o=t.map(({_id:s,strArtist:n,strBiographyEN:l,strArtistThumb:d,genres:a})=>`
  <li class="art-item">
    <img class="art-img" src="${d}" alt="${n}" />
    <ul class="art-genre-list">
      ${a.map(i=>`<li class="art-genre-list-item">${i}</li>`).join("")}
    </ul>
    <h4 class="art-list-name">${n}</h4>
    <p class="art-list-biography">${l.slice(0,r)}...</p>
    <button 
      type="button" 
      class="art-btn-learnMore" 
      data-id="${s}" 
      data-style="${a}"
      >Learn More
      <svg class="icon" width="24" height="24">
        <use href="${f}#icon-caret-right"></use>
        </svg>
    </button>
  </li>
`).join("");Y.insertAdjacentHTML("beforeend",o)}function x(){k.classList.add("loader")}function D(){k.classList.remove("loader")}function H(t,e,r){Math.ceil(e/r)>t?R():$()}function R(){L.classList.remove("hidden")}function $(){L.classList.add("hidden")}function G(){let e=document.querySelector(".art-item").getBoundingClientRect();window.scrollBy({top:e.height*2,behavior:"smooth"})}document.querySelector(".art-btn-loadMore").addEventListener("click",I);document.getElementById("loader");let m=1;const g=8,w=async()=>{try{x();const t=await O(m,g);D(),H(m,t.totalArtists,g),_(t.artists),document.querySelectorAll(".art-btn-learnMore").forEach(r=>r.addEventListener("click",j))}catch(t){console.error("Помилка в getListArtist:",t)}m>1&&G()};function I(t){t.preventDefault(),++m,$(),w()}w();const K="https://sound-wave.b.goit.study/api";async function W(){try{const e=(await b.get(`${K}/feedbacks`)).data.data;return Array.isArray(e)?e:[]}catch(t){return console.error("Ошибка при загрузке отзывов:",t),[]}}function z({rating:t,descr:e,name:r}){return`
    <div class="feedback-card">
      <div class="star-rating star-rating--sm" data-rating="${Math.round(t)}">
        ${'<span class="star-rating__star"></span>'.repeat(5)}
      </div>
      <p class="feedback-text">${e}</p>
      <p class="feedback-author">— ${r}</p>
    </div>
  `}async function J(){const t=document.querySelector("#feedback-list");if(!t)return;const e=await W();if(!Array.isArray(e))return;const r=e.slice(0,10);t.innerHTML=r.map(o=>`<div class="swiper-slide">${z(o)}</div>`).join(""),await new Promise(o=>setTimeout(o,0)),new M(".feedback-swiper",{modules:[E,S],loop:!0,slidesPerView:1,spaceBetween:20,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},on:{slideChange:function(){const o=this,s=o.slides.length,n=o.realIndex,l=Math.ceil(s/3),d=Math.floor(n/l);document.querySelectorAll(".custom-bullet").forEach((i,c)=>i.classList.toggle("custom-bullet-active",c===d))}}}),document.querySelectorAll(".star-rating").forEach(o=>{const s=Number(o.dataset.rating)||0;o.querySelectorAll(".star-rating__star").forEach((l,d)=>{l.style.backgroundColor=d<s?"#A259FF":"#555"})})}window.addEventListener("DOMContentLoaded",()=>{J()});
//# sourceMappingURL=index.js.map
