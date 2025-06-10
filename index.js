import{a as b}from"./assets/vendor-B2YOV0tR.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();(()=>{const e={openModalBtn:document.querySelector("[data-menu-open]"),closeModalBtn:document.querySelector("[data-menu-close]"),modal:document.querySelector("[data-menu]"),menuLinks:document.querySelectorAll(".mob-menu-link")};e.openModalBtn.addEventListener("click",s),e.closeModalBtn.addEventListener("click",s),e.menuLinks.forEach(r=>{r.addEventListener("click",()=>{s()})});function s(){e.modal.classList.toggle("is-open")}})();async function L(e,s){const t="https://sound-wave.b.goit.study/api"+"/artists",o=await b(t,{params:{limit:s,page:e}});return{totalArtists:o.data.totalArtists,artists:o.data.artists}}const w=document.querySelector(".art-list-card"),g=document.querySelector(".art-btn-loadMore"),f=document.querySelector(".loader");function $(e){let r=document.documentElement.clientWidth<=768?50:145;const a=e.map(({strArtist:t,strBiographyEN:o,strArtistThumb:i,genres:l})=>`
      <li class="art-item">
        <img class="art-img" src="${i}" alt="${t}" />
        <ul class="art-genre-list">
          ${l.map(c=>`<li class="art-genre-list-item">${c}</li>`).join("")}
        </ul>
        <h4 class="art-list-name">${t}</h4>
        <p class="art-list-biography">${o.slice(0,r)}...</p>
        <button type="button" class="art-btn-learnMore">Learn More
          <svg class="icon" width="24" height="24">
            <use href="./../../img/symbol-defs.svg#icon-caret-right"></use>
          </svg>
        </button>
      </li>
    `).join("");w.insertAdjacentHTML("beforeend",a)}function E(){f.classList.add("loader")}function M(){f.classList.remove("loader")}function k(e,s,r){Math.ceil(s/r)>e?A():B()}function A(){g.classList.remove("hidden")}function B(){g.classList.add("hidden")}function S(){let s=document.querySelector(".art-item").getBoundingClientRect();window.scrollBy({top:s.height*2,behavior:"smooth"})}document.querySelector(".art-btn-loadMore").addEventListener("click",q);document.getElementById("loader");let u=1;const p=8,y=async()=>{try{E();const e=await L(u,p);k(u,e.totalArtists,p),M(),$(e.artists)}catch(e){console.error("Помилка в getListArtist:",e)}u>1&&S()};function q(e){e.preventDefault(),++u,y()}y();const I="https://sound-wave.b.goit.study/api";async function O(e){try{const s=await fetch(`${I}/artists/${e}`);if(!s.ok)throw new Error(`Failed to fetch artist details: ${s.status}`);return await s.json()}catch(s){throw console.error("API Error:",s),s}}function T(e){if(!e||typeof e!="object")return'<p class="error">No artist data available</p>';const s=e.startYear?e.endYear?`${e.startYear} - ${e.endYear}`:`${e.startYear} - present`:"Information missing",r=Array.isArray(e.genres)&&e.genres.length?`<ul class="genres-list-details">
        ${e.genres.map(t=>`<li class="genres-item-details">${t}</li>`).join("")}
      </ul>`:"<p>Genres not specified</p>",a=Array.isArray(e.albums)&&e.albums.length?`<ul class="albums-list">
        ${e.albums.map(t=>{const o=`
            <li class="tracks-header">
              <span>Track</span>
              <span>Time</span>
              <span>Link</span>
            </li>`,i=Array.isArray(t.tracks)?t.tracks.map(l=>{const c=l.youtube?`<a href="${l.youtube}" target="_blank" rel="noopener noreferrer" aria-label="YouTube: ${l.title}">
                      <svg width="16" height="16">
                        <use href="../img/symbol-defs.svg#icon-Youtube"></use>
                        <path d="M10 15l5-3-5-3v6z"/>
                        <path d="M21.8 7.2s-.2-1.4-.8-2c-.7-.8-1.5-.8-1.9-.9C15 4 12 4 12 4h0s-3 0-6 .3c-.8.1-1.6.6-2.1 1.4-.4.6-.5 1.4-.5 1.7-.1.5-.1 1.1-.1 1.7v1.8c0 .6 0 1.2.1 1.7 0 .3.1 1.1.5 1.7.5.8 1.3 1.3 2.1 1.4 1.5.1 6 .3 6 .3s3 0 6-.3c.7-.1 1.4-.6 1.9-1.4.6-.7.8-2 .8-2v-3.6z"/>
                      </svg>
                    </a>`:"";return`
                  <li class="track-item">
                    <span class="track-title">${l.title}</span>
                    <span class="track-duration">${l.duration}</span>
                    <span class="track-youtube">${c}</span>
                  </li>`}).join(""):"";return`
            <li class="album-item">
              <h4 class="album-title">${t.title}</h4>
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
        <li><strong>Years active:</strong> ${s}</li>
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
        ${r}
      </div>

      <div class="albums-div">
        <h3 class="title-album">Albums</h3>
        ${a}
      </div>
    </div>
  `}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".modal-overlay");async function s(n){try{l();const h=await O(n);e.innerHTML=T(h),e.classList.add("is-open"),document.body.classList.add("modal-open"),o(),d.value=""}catch{v("Failed to load artist data.")}finally{c()}}function r(){e.classList.remove("is-open"),document.body.classList.remove("modal-open"),e.innerHTML="",i()}function a(n){n.target===e&&r()}function t(n){n.key==="Escape"&&r()}function o(){const n=e.querySelector(".close-modal-btn");n==null||n.addEventListener("click",r),e.addEventListener("click",a),window.addEventListener("keydown",t)}function i(){window.removeEventListener("keydown",t),e.removeEventListener("click",a)}function l(){e.innerHTML='<div class="loader">Loading...</div>'}function c(){const n=e.querySelector(".loader");n&&n.remove()}function v(n){alert(n)}const m=document.getElementById("testOpenBtn"),d=document.getElementById("artistIdInput");m==null||m.addEventListener("click",()=>{const n=d==null?void 0:d.value.trim();n?s(n):alert("Enter the artist ID.")})});fetch("https://sound-wave.b.goit.study/api/artists").then(e=>e.json()).then(e=>{console.log(e),e.artists.forEach(s=>console.log(s._id,s.name))}).catch(console.error);
//# sourceMappingURL=index.js.map
