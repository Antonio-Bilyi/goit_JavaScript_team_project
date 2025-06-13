import{a as g,S as M,N as E,P as S}from"./assets/vendor-CD5jJkp3.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function o(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=o(s);fetch(s.href,a)}})();(()=>{const t={openModalBtn:document.querySelector("[data-menu-open]"),closeModalBtn:document.querySelector("[data-menu-close]"),modal:document.querySelector("[data-menu]"),menuLinks:document.querySelectorAll(".mob-menu-link")};t.openModalBtn.addEventListener("click",e),t.closeModalBtn.addEventListener("click",e),t.menuLinks.forEach(o=>{o.addEventListener("click",()=>{e()})});function e(){t.modal.classList.toggle("is-open"),t.modal.classList.contains("is-open")?document.body.classList.add("body-lock"):document.body.classList.remove("body-lock")}})();const B="https://sound-wave.b.goit.study/api";async function q(t){try{return(await fetch(`${B}/artists/${t}`)).json()}catch(e){throw console.error("API Error:",e),e}}const f="/goit_JavaScript_team_project/assets/symbol-defs-D1hQFZbe.svg";function T(t,e){if(!t||typeof t!="object")return'<p class="error">No artist data available</p>';const o=t.intFormedYear?t.intDiedYear?`${t.intFormedYear} - ${t.intDiedYear}`:`${t.intFormedYear} - present`:"information missing",r=Array.isArray(e)?e:typeof e=="string"?e.split(",").map(n=>n.trim()):[];function s(n){if(!n||isNaN(n))return"N/A";const i=Math.floor(n/1e3),c=Math.floor(i/60),p=i%60;return`${c}:${p.toString().padStart(2,"0")}`}const a=r.length>0?`<ul class="genres-list-details">
        ${r.map(n=>`<li class="genres-item-details">${n}</li>`).join("")}
      </ul>`:"<p>Genres not specified</p>",l=n=>{const i=n.movie?`<a href="${n.movie}" target="_blank" rel="noopener noreferrer" aria-label="YouTube: ${n.strTrack}">
            <svg width="24" height="24">
              <use href="${f}#icon-Youtube"></use>
            </svg>
         </a>`:"";return`
      <li class="track-item">
        <span class="track-title">${n.strTrack}</span>
        <span class="track-duration">${s(n.intDuration)}</span>
        <span class="track-youtube">${i}</span>
      </li>`};let d="";if(Array.isArray(t.albumsList)&&t.albumsList.length>0)d=`<ul class="albums-list">
      ${t.albumsList.map(n=>{const i=Array.isArray(n.tracks)?n.tracks:[],c=`
          <li class="tracks-header">
            <span>Track</span>
            <span>Time</span>
            <span>Link</span>
          </li>`,p=i.length>0?i.map(l).join(""):'<li class="track-item">No tracks available</li>';return`
          <li class="album-item">
            <h4 class="album-title">${n.strAlbum} (${n.intYearReleased||"Unknown Year"})</h4>
            <ul class="tracks-list">
              ${c}
              ${p}
            </ul>
          </li>`}).join("")}
    </ul>`;else if(Array.isArray(t.tracksList)&&t.tracksList.length>0){const n={};t.tracksList.forEach(i=>{const c=i.strAlbum||"Unknown Album";n[c]||(n[c]=[]),n[c].push(i)}),d=`<ul class="albums-list">
      ${Object.entries(n).map(([i,c])=>{const p=`
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
      <svg class="icon-close-btn" width="32" height="32">
        <use href="${f}#icon-close-btn"></use>
      </svg>
    </button>

    <h2 class="artist-name">${t.strArtist||"Unknown Artist"}</h2>
    <img class="img-details" src="${t.strArtistThumb||"placeholder-image.jpg"}" alt="Photo ${t.strArtist||"Unknown Artist"}" />

    <ul class="artist-info-list">
      <li class="item-info">
        <span class="info-label"><strong>Years active</strong></span>
        <span class="info-value">${o}</span>
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
      ${a}
    </div>

    <div class="albums-div">
      <h3 class="albums">Albums</h3>
      ${d}
    </div>
  </div>`}const u=document.querySelector(".modal-overlay");async function j(t){t.preventDefault();const e=t.target.closest(".art-btn-learnMore");if(!e)return;const o=e.dataset.id,r=e.dataset.style;let s=r?r.split(",").map(a=>a.trim()):[];try{u.classList.add("is-open"),document.body.classList.add("modal-open"),F();const a=await q(o);u.innerHTML=T(a,s),N()}catch{U("Failed to load artist data.")}finally{P()}}function h(){u.classList.remove("is-open"),document.body.classList.remove("modal-open"),C()}function y(t){t.target===u&&h()}function v(t){t.key==="Escape"&&h()}function N(){const t=u.querySelector(".close-modal-btn");t==null||t.addEventListener("click",h),u.addEventListener("click",y),window.addEventListener("keydown",v)}function C(){window.removeEventListener("keydown",v),u.removeEventListener("click",y)}function F(){u.innerHTML='<div class="loader"></div>'}function P(){const t=u.querySelector(".loader");t&&t.remove()}function U(t){alert(t)}async function O(t,e){const s="https://sound-wave.b.goit.study/api"+"/artists",a=await g(s,{params:{limit:e,page:t}});return{totalArtists:a.data.totalArtists,artists:a.data.artists}}const Y=document.querySelector(".art-list-card"),L=document.querySelector(".art-btn-loadMore"),k=document.querySelector(".loader");function _(t){let o=document.documentElement.clientWidth<=768?50:145;const r=t.map(({_id:s,strArtist:a,strBiographyEN:l,strArtistThumb:d,genres:n})=>`
  <li class="art-item">
    <img class="art-img" src="${d}" alt="${a}" />
    <ul class="art-genre-list">
      ${n.map(i=>`<li class="art-genre-list-item">${i}</li>`).join("")}
    </ul>
    <h4 class="art-list-name">${a}</h4>
    <p class="art-list-biography">${l.slice(0,o)}...</p>
    <button 
      type="button" 
      class="art-btn-learnMore" 
      data-id="${s}" 
      data-style="${n}"
      >Learn More
      <svg class="icon" width="24" height="24">
        <use href="${f}#icon-caret-right"></use>
        </svg>
    </button>
  </li>
`).join("");Y.insertAdjacentHTML("beforeend",r)}function x(){k.classList.add("loader")}function D(){k.classList.remove("loader")}function H(t,e,o){Math.ceil(e/o)>t?R():$()}function R(){L.classList.remove("hidden")}function $(){L.classList.add("hidden")}function I(){let e=document.querySelector(".art-item").getBoundingClientRect();window.scrollBy({top:e.height*2,behavior:"smooth"})}document.querySelector(".art-btn-loadMore").addEventListener("click",G);document.getElementById("loader");let m=1;const b=8,w=async()=>{try{x();const t=await O(m,b);D(),H(m,t.totalArtists,b),_(t.artists),document.querySelectorAll(".art-btn-learnMore").forEach(o=>o.addEventListener("click",j))}catch(t){console.error("Помилка в getListArtist:",t)}m>1&&I()};function G(t){t.preventDefault(),++m,$(),w()}w();const W="https://sound-wave.b.goit.study/api";async function K(){try{const e=(await g.get(`${W}/feedbacks`)).data.data;return Array.isArray(e)?e:[]}catch(t){return console.error("Ошибка при загрузке отзывов:",t),[]}}function z({rating:t,descr:e,name:o}){return`
    <div class="feedback-card">
      <div class="star-rating star-rating--sm" data-rating="${Math.round(t)}">
        ${'<span class="star-rating__star"></span>'.repeat(5)}
      </div>
      <p class="feedback-text">${e}</p>
      <p class="feedback-author">— ${o}</p>
    </div>
  `}async function J(){const t=document.querySelector("#feedback-list");if(!t)return;const e=await K();if(!Array.isArray(e))return;const o=e.slice(0,10);t.innerHTML=o.map(r=>`<div class="swiper-slide">${z(r)}</div>`).join(""),await new Promise(r=>setTimeout(r,0)),new M(".feedback-swiper",{modules:[E,S],loop:!0,slidesPerView:1,spaceBetween:20,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0,bulletClass:"custom-bullet",bulletActiveClass:"custom-bullet-active",renderBullet:function(r,s){return r>2?"":`<span class="${s}"></span>`}},on:{slideChange:function(){const r=this,s=r.slides.length,a=r.realIndex,l=Math.ceil(s/3),d=Math.floor(a/l);document.querySelectorAll(".custom-bullet").forEach((i,c)=>i.classList.toggle("custom-bullet-active",c===d))}}}),document.querySelectorAll(".star-rating").forEach(r=>{const s=Number(r.dataset.rating)||0;r.querySelectorAll(".star-rating__star").forEach((l,d)=>{l.style.backgroundColor=d<s?"#A259FF":"#555"})})}window.addEventListener("DOMContentLoaded",()=>{J()});
//# sourceMappingURL=index.js.map
