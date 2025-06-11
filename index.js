import{a as $}from"./assets/vendor-B2YOV0tR.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function o(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=o(s);fetch(s.href,a)}})();(()=>{const e={openModalBtn:document.querySelector("[data-menu-open]"),closeModalBtn:document.querySelector("[data-menu-close]"),modal:document.querySelector("[data-menu]"),menuLinks:document.querySelectorAll(".mob-menu-link")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t),e.menuLinks.forEach(o=>{o.addEventListener("click",()=>{t()})});function t(){e.modal.classList.toggle("is-open")}})();const w="https://sound-wave.b.goit.study/api";async function A(e){try{return(await fetch(`${w}/artists/${e}`)).json()}catch(t){throw console.error("API Error:",t),t}}function E(e,t){if(!e||typeof e!="object")return'<p class="error">No artist data available</p>';const o=e.intFormedYear?e.intDiedYear?`${e.intFormedYear} - ${e.intDiedYear}`:`${e.intFormedYear} - present`:"information missing",r=Array.isArray(t)?t:typeof t=="string"?t.split(",").map(n=>n.trim()):[],s=r.length>0?`<ul class="genres-list-details">
        ${r.map(n=>`<li class="genres-item-details">${n}</li>`).join("")}
      </ul>`:"<p>Genres not specified</p>",a=n=>{const i=n.movie?`<a href="${n.movie}" target="_blank" rel="noopener noreferrer" aria-label="YouTube: ${n.strTrack}">
            <svg width="16" height="16">
              <use href="../img/symbol-defs.svg#icon-Youtube"></use>
            </svg>
         </a>`:"";return`
      <li class="track-item">
        <span class="track-title">${n.strTrack}</span>
        <span class="track-duration">${n.intDuration||"N/A"}</span>
        <span class="track-youtube">${i}</span>
      </li>`};let l="";if(Array.isArray(e.albumsList)&&e.albumsList.length>0)l=`<ul class="albums-list">
      ${e.albumsList.map(n=>{const i=Array.isArray(n.tracks)?n.tracks:[],c=`
          <li class="tracks-header">
            <span>Track</span>
            <span>Time</span>
            <span>Link</span>
          </li>`,m=i.length>0?i.map(a).join(""):'<li class="track-item">No tracks available</li>';return`
          <li class="album-item">
            <h4 class="album-title">${n.strAlbum} (${n.intYearReleased||"Unknown Year"})</h4>
            <ul class="tracks-list">
              ${c}
              ${m}
            </ul>
          </li>`}).join("")}
    </ul>`;else if(Array.isArray(e.tracksList)&&e.tracksList.length>0){const n={};e.tracksList.forEach(i=>{const c=i.strAlbum||"Unknown Album";n[c]||(n[c]=[]),n[c].push(i)}),l=`<ul class="albums-list">
      ${Object.entries(n).map(([i,c])=>{const m=`
          <li class="tracks-header">
            <span>Track</span>
            <span>Time</span>
            <span>Link</span>
          </li>`,k=c.map(a).join("");return`
          <li class="album-item">
            <h4 class="album-title">${i}</h4>
            <ul class="tracks-list">
              ${m}
              ${k}
            </ul>
          </li>`}).join("")}
    </ul>`}else l="<p>There are no albums</p>";return`<div class="modal">
    <button class="close-modal-btn" type="button">
      <svg class="icon-close-btn" width="16" height="16">
        <use href="../img/symbol-defs.svg#icon-close-btn"></use>
      </svg>
    </button>
    <h2 class="artist-name">${e.strArtist||"Unknown Artist"}</h2>
    <img class="img-details" src="${e.strArtistThumb||"placeholder-image.jpg"}" alt="Photo ${e.strArtist||"Unknown Artist"}" />
    <ul class="artist-info-list">
      <li class="item-info">
        <span class="info-label"><strong>Years active:</strong></span>
        <span class="info-value">${o}</span>
      </li>
      <li class="item-info">
        <span class="info-label"><strong>Sex:</strong></span>
        <span class="info-value">${e.strGender||"Unknown"}</span>
      </li>
      <li class="item-info">
        <span class="info-label"><strong>Members:</strong></span>
        <span class="info-value">${e.intMembers||"Unknown"}</span>
      </li>
      <li class="item-info">
        <span class="info-label"><strong>Country:</strong></span>
        <span class="info-value">${e.strCountry||"Unknown"}</span>
      </li>
    </ul>
    <div class="biography-div">
      <h3 class="title-biography">Biography</h3>
      <p class="text-biography">${e.strBiographyEN||"Biography missing"}</p>
    </div>
    <div class="genres-div">
      <h3 class="title-genres">Genres</h3>
      ${s}
    </div>
    <div class="albums-div">
      <h3 class="albums">Albums</h3>
      ${l}
    </div>
  </div>`}const d=document.querySelector(".modal-overlay");async function M(e){e.preventDefault();let t=e.target.dataset.id,o=e.target.dataset.style;console.log("ganre:",o);try{q();const r=await A(t);d.innerHTML=E(r,o),d.classList.add("is-open"),document.body.classList.add("modal-open"),S()}catch{j("Failed to load artist data.")}finally{T()}}function p(){d.classList.remove("is-open"),document.body.classList.remove("modal-open"),B()}function h(e){e.target===d&&p()}function g(e){e.key==="Escape"&&p()}function S(){const e=d.querySelector(".close-modal-btn");e==null||e.addEventListener("click",p),d.addEventListener("click",h),window.addEventListener("keydown",g)}function B(){window.removeEventListener("keydown",g),d.removeEventListener("click",h)}function q(){d.innerHTML='<div class="loader">Loading...</div>'}function T(){const e=d.querySelector(".loader");e&&e.remove()}function j(e){alert(e)}async function U(e,t){const s="https://sound-wave.b.goit.study/api"+"/artists",a=await $(s,{params:{limit:t,page:e}});return{totalArtists:a.data.totalArtists,artists:a.data.artists}}const Y=document.querySelector(".art-list-card"),y=document.querySelector(".art-btn-loadMore"),b=document.querySelector(".loader");function O(e){let o=document.documentElement.clientWidth<=768?50:145;const r=e.map(({_id:s,strArtist:a,strBiographyEN:l,strArtistThumb:n,genres:i})=>`
  <li class="art-item">
    <img class="art-img" src="${n}" alt="${a}" />
    <ul class="art-genre-list">
      ${i.map(c=>`<li class="art-genre-list-item">${c}</li>`).join("")}
    </ul>
    <h4 class="art-list-name">${a}</h4>
    <p class="art-list-biography">${l.slice(0,o)}...</p>
    <button 
      type="button" 
      class="art-btn-learnMore" 
      data-id="${s}"
      data-style="${i}"
      >Learn More
      <svg class="icon" width="24" height="24">
        <use href="/img/symbol-defs.svg#icon-caret-right"></use>
      </svg>
    </button>
  </li>
`).join("");Y.insertAdjacentHTML("beforeend",r)}function N(){b.classList.add("loader")}function P(){b.classList.remove("loader")}function C(e,t,o){Math.ceil(t/o)>e?I():v()}function I(){y.classList.remove("hidden")}function v(){y.classList.add("hidden")}function D(){let t=document.querySelector(".art-item").getBoundingClientRect();window.scrollBy({top:t.height*2,behavior:"smooth"})}document.querySelector(".art-btn-loadMore").addEventListener("click",H);document.getElementById("loader");let u=1;const f=8,L=async()=>{try{N();const e=await U(u,f);P(),C(u,e.totalArtists,f),O(e.artists),document.querySelectorAll(".art-btn-learnMore").forEach(o=>o.addEventListener("click",M))}catch(e){console.error("Помилка в getListArtist:",e)}u>1&&D()};function H(e){e.preventDefault(),++u,v(),L()}L();const x=document.querySelector(".hero-btn");x.addEventListener("click",()=>{document.getElementById("artists").scrollIntoView({behavior:"smooth",block:"start"})});
//# sourceMappingURL=index.js.map
