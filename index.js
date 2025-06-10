import{a as $}from"./assets/vendor-B2YOV0tR.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();(()=>{const e={openModalBtn:document.querySelector("[data-menu-open]"),closeModalBtn:document.querySelector("[data-menu-close]"),modal:document.querySelector("[data-menu]"),menuLinks:document.querySelectorAll(".mob-menu-link")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t),e.menuLinks.forEach(n=>{n.addEventListener("click",()=>{t()})});function t(){e.modal.classList.toggle("is-open")}})();const w="https://sound-wave.b.goit.study/api";async function E(e){try{const t=await fetch(`${w}/artists/${e}`);if(!t.ok)throw new Error(`Failed to fetch artist details: ${t.status}`);return await t.json()}catch(t){throw console.error("API Error:",t),t}}function M(e){if(!e||typeof e!="object")return'<p class="error">No artist data available</p>';const t=e.startYear?e.endYear?`${e.startYear} - ${e.endYear}`:`${e.startYear} - present`:"Information missing",n=Array.isArray(e.genres)&&e.genres.length?`<ul class="genres-list-details">
        ${e.genres.map(s=>`<li class="genres-item-details">${s}</li>`).join("")}
      </ul>`:"<p>Genres not specified</p>",a=Array.isArray(e.albums)&&e.albums.length?`<ul class="albums-list">
        ${e.albums.map(s=>{const o=`
            <li class="tracks-header">
              <span>Track</span>
              <span>Time</span>
              <span>Link</span>
            </li>`,i=Array.isArray(s.tracks)?s.tracks.map(l=>{const u=l.youtube?`<a href="${l.youtube}" target="_blank" rel="noopener noreferrer" aria-label="YouTube: ${l.title}">
                      <svg width="16" height="16">
                        <use href="../img/symbol-defs.svg#icon-Youtube"></use>
                        <path d="M10 15l5-3-5-3v6z"/>
                        <path d="M21.8 7.2s-.2-1.4-.8-2c-.7-.8-1.5-.8-1.9-.9C15 4 12 4 12 4h0s-3 0-6 .3c-.8.1-1.6.6-2.1 1.4-.4.6-.5 1.4-.5 1.7-.1.5-.1 1.1-.1 1.7v1.8c0 .6 0 1.2.1 1.7 0 .3.1 1.1.5 1.7.5.8 1.3 1.3 2.1 1.4 1.5.1 6 .3 6 .3s3 0 6-.3c.7-.1 1.4-.6 1.9-1.4.6-.7.8-2 .8-2v-3.6z"/>
                      </svg>
                    </a>`:"";return`
                  <li class="track-item">
                    <span class="track-title">${l.title}</span>
                    <span class="track-duration">${l.duration}</span>
                    <span class="track-youtube">${u}</span>
                  </li>`}).join(""):"";return`
            <li class="album-item">
              <h4 class="album-title">${s.title}</h4>
              <ul class="tracks-list">
                ${o}
                ${i}
              </ul>
            </li>`}).join("")}
      </ul>`:"<p>There are no albums</p>";return`
    <div class="modal">
      <button class="close-modal-btn" type="button">
        <svg class="icon-close-btn" width="16" height="16">
          <use href="../img/symbol-defs.svg#icon-close-btn"></use>
        </svg>
      </button>

      <h2 class="artist-name">${e.name}</h2>
      <img class="img-details" src="${e.image}" alt="Photo ${e.name}" />

      <ul class="artist-info-list">
        <li><strong>Years active:</strong> ${t}</li>
        <li><strong>Sex:</strong> ${e.gender||"Unknown"}</li>
        <li><strong>Members:</strong> ${e.membersCount||"Unknown"}</li>
        <li><strong>Country:</strong> ${e.country||"Unknown"}</li>
      </ul>

      <div class="biography-div">
        <h3 class="title-biography">Biography</h3>
        <p class="text-biography">${e.biography||"Biography missing"}</p>
      </div>

      <div class="genres-div">
        <h3 class="title-genres">Genres</h3>
        ${n}
      </div>

      <div class="albums-div">
        <h3 class="title-album">Albums</h3>
        ${a}
      </div>
    </div>
  `}const r=document.querySelector(".modal-overlay");async function k(e){try{S();const t=await E(e);r.innerHTML=M(t),r.classList.add("is-open"),document.body.classList.add("modal-open"),A(),c.value=""}catch{I("Failed to load artist data.")}finally{q()}}function h(){r.classList.remove("is-open"),document.body.classList.remove("modal-open"),r.innerHTML="",B()}function g(e){e.target===r&&h()}function f(e){e.key==="Escape"&&h()}function A(){const e=r.querySelector(".close-modal-btn");e==null||e.addEventListener("click",h),r.addEventListener("click",g),window.addEventListener("keydown",f)}function B(){window.removeEventListener("keydown",f),r.removeEventListener("click",g)}function S(){r.innerHTML='<div class="loader">Loading...</div>'}function q(){const e=r.querySelector(".loader");e&&e.remove()}function I(e){alert(e)}const m=document.getElementById("testOpenBtn"),c=document.getElementById("artistIdInput");m==null||m.addEventListener("click",()=>{const e=c==null?void 0:c.value.trim();e?k(e):alert("Enter the artist ID.")});fetch("https://sound-wave.b.goit.study/api/artists").then(e=>e.json()).then(e=>{console.log(e),e.artists.forEach(t=>console.log(t._id,t.name))}).catch(console.error);async function T(e,t){const s="https://sound-wave.b.goit.study/api"+"/artists",o=await $(s,{params:{limit:t,page:e}});return{totalArtists:o.data.totalArtists,artists:o.data.artists}}const j=document.querySelector(".art-list-card"),y=document.querySelector(".art-btn-loadMore"),v=document.querySelector(".loader");function O(e){let n=document.documentElement.clientWidth<=768?50:145;const a=e.map(({_id:s,strArtist:o,strBiographyEN:i,strArtistThumb:l,genres:u})=>`
  <li class="art-item">
    <img class="art-img" src="${l}" alt="${o}" />
    <ul class="art-genre-list">
      ${u.map(L=>`<li class="art-genre-list-item">${L}</li>`).join("")}
    </ul>
    <h4 class="art-list-name">${o}</h4>
    <p class="art-list-biography">${i.slice(0,n)}...</p>
    <button 
      type="button" 
      class="art-btn-learnMore" 
      data-id="${s}">Learn More
      <svg class="icon" width="24" height="24">
        <use href="img/symbol-defs.svg#icon-caret-right"></use>
      </svg>
    </button>
  </li>
`).join("");j.insertAdjacentHTML("beforeend",a)}function C(){v.classList.add("loader")}function P(){v.classList.remove("loader")}function Y(e,t,n){Math.ceil(t/n)>e?U():x()}function U(){y.classList.remove("hidden")}function x(){y.classList.add("hidden")}function H(){let t=document.querySelector(".art-item").getBoundingClientRect();window.scrollBy({top:t.height*2,behavior:"smooth"})}document.querySelector(".art-btn-loadMore").addEventListener("click",N);document.getElementById("loader");let d=1;const p=8,b=async()=>{try{C();const e=await T(d,p);Y(d,e.totalArtists,p),P(),O(e.artists)}catch(e){console.error("Помилка в getListArtist:",e)}d>1&&H()};function N(e){e.preventDefault(),++d,b()}b();
//# sourceMappingURL=index.js.map
