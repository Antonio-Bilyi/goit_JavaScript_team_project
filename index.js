import{a as w}from"./assets/vendor-B2YOV0tR.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function o(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=o(s);fetch(s.href,a)}})();(()=>{const t={openModalBtn:document.querySelector("[data-menu-open]"),closeModalBtn:document.querySelector("[data-menu-close]"),modal:document.querySelector("[data-menu]"),menuLinks:document.querySelectorAll(".mob-menu-link")};t.openModalBtn.addEventListener("click",e),t.closeModalBtn.addEventListener("click",e),t.menuLinks.forEach(o=>{o.addEventListener("click",()=>{e()})});function e(){t.modal.classList.toggle("is-open")}})();const A="https://sound-wave.b.goit.study/api";async function M(t){console.log("id:",t);try{return(await fetch(`${A}/artists/${t}`)).json()}catch(e){throw console.error("API Error:",e),e}}function E(t,e){if(!t||typeof t!="object")return'<p class="error">No artist data available</p>';const o=t.intFormedYear?t.intDiedYear?`${t.intFormedYear} - ${t.intDiedYear}`:`${t.intFormedYear} - present`:"information missing",i=Array.isArray(e)?e:typeof e=="string"?e.split(",").map(n=>n.trim()):[];function s(n){if(!n||isNaN(n))return"N/A";const r=Math.floor(n/1e3),l=Math.floor(r/60),m=r%60;return`${l}:${m.toString().padStart(2,"0")}`}const a=i.length>0?`<ul class="genres-list-details">
        ${i.map(n=>`<li class="genres-item-details">${n}</li>`).join("")}
      </ul>`:"<p>Genres not specified</p>",d=n=>{const r=n.movie?`<a href="${n.movie}" target="_blank" rel="noopener noreferrer" aria-label="YouTube: ${n.strTrack}">
            <svg width="16" height="16">
              <use href="../img/symbol-defs.svg#icon-Youtube"></use>
            </svg>
         </a>`:"";return`
      <li class="track-item">
        <span class="track-title">${n.strTrack}</span>
        <span class="track-duration">${s(n.intDuration)}</span>
        <span class="track-youtube">${r}</span>
      </li>`};let u="";if(Array.isArray(t.albumsList)&&t.albumsList.length>0)u=`<ul class="albums-list">
      ${t.albumsList.map(n=>{const r=Array.isArray(n.tracks)?n.tracks:[],l=`
          <li class="tracks-header">
            <span>Track</span>
            <span>Time</span>
            <span>Link</span>
          </li>`,m=r.length>0?r.map(d).join(""):'<li class="track-item">No tracks available</li>';return`
          <li class="album-item">
            <h4 class="album-title">${n.strAlbum} (${n.intYearReleased||"Unknown Year"})</h4>
            <ul class="tracks-list">
              ${l}
              ${m}
            </ul>
          </li>`}).join("")}
    </ul>`;else if(Array.isArray(t.tracksList)&&t.tracksList.length>0){const n={};t.tracksList.forEach(r=>{const l=r.strAlbum||"Unknown Album";n[l]||(n[l]=[]),n[l].push(r)}),u=`<ul class="albums-list">
      ${Object.entries(n).map(([r,l])=>{const m=`
          <li class="tracks-header">

            <span class="span-track">Track</span>
            <span class="span-time">Time</span>
            <span class="span-link">Link</span>
          </li>`,$=l.map(d).join("");return`
          <li class="album-item">
            <h4 class="album-title">${r}</h4>
            <ul class="tracks-list">
              ${m}
              ${$}
            </ul>
          </li>`}).join("")}
    </ul>`}else u="<p>There are no albums</p>";return`<div class="modal">
    <button class="close-modal-btn" type="button">
      <svg class="icon-close-btn" width="16" height="16">
        <use href="../img/symbol-defs.svg#icon-close-btn"></use>
      </svg>
    </button>

    <h2 class="artist-name">${t.strArtist||"Unknown Artist"}</h2>
    <img class="img-details" src="${t.strArtistThumb||"placeholder-image.jpg"}" alt="Photo ${t.strArtist||"Unknown Artist"}" />

    <ul class="artist-info-list">
      <li class="item-info">
        <span class="info-label"><strong>Years active:</strong></span>
        <span class="info-value">${o}</span>
      </li>
      <li class="item-info">
        <span class="info-label"><strong>Sex:</strong></span>
        <span class="info-value">${t.strGender||"Unknown"}</span>
      </li>
      <li class="item-info">
        <span class="info-label"><strong>Members:</strong></span>
        <span class="info-value">${t.intMembers||"Unknown"}</span>
      </li>
      <li class="item-info">
        <span class="info-label"><strong>Country:</strong></span>
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
      ${u}
    </div>
  </div>`}const c=document.querySelector(".modal-overlay");async function S(t){t.preventDefault();let e=t.target.dataset.id,o=t.target.dataset.style,i=o?o.split(",").map(s=>s.trim()):[];console.log("artistGenres:",i);try{T();const s=await M(e);c.innerHTML=E(s,i),c.classList.add("is-open"),document.body.classList.add("modal-open"),B()}catch{N("Failed to load artist data.")}finally{j()}}function f(){c.classList.remove("is-open"),document.body.classList.remove("modal-open"),q()}function g(t){t.target===c&&f()}function y(t){t.key==="Escape"&&f()}function B(){const t=c.querySelector(".close-modal-btn");t==null||t.addEventListener("click",f),c.addEventListener("click",g),window.addEventListener("keydown",y)}function q(){window.removeEventListener("keydown",y),c.removeEventListener("click",g)}function T(){c.innerHTML='<div class="loader">Loading...</div>'}function j(){const t=c.querySelector(".loader");t&&t.remove()}function N(t){alert(t)}async function U(t,e){const s="https://sound-wave.b.goit.study/api"+"/artists",a=await w(s,{params:{limit:e,page:t}});return{totalArtists:a.data.totalArtists,artists:a.data.artists}}const Y=document.querySelector(".art-list-card"),b=document.querySelector(".art-btn-loadMore"),v=document.querySelector(".loader");function O(t){let o=document.documentElement.clientWidth<=768?50:145;const i=t.map(({_id:s,strArtist:a,strBiographyEN:d,strArtistThumb:u,genres:n})=>`
  <li class="art-item">
    <img class="art-img" src="${u}" alt="${a}" />
    <ul class="art-genre-list">
      ${n.map(r=>`<li class="art-genre-list-item">${r}</li>`).join("")}
    </ul>
    <h4 class="art-list-name">${a}</h4>
    <p class="art-list-biography">${d.slice(0,o)}...</p>
    <button 
      type="button" 
      class="art-btn-learnMore" 
      data-id="${s}" 
      data-style="${n}"
      >Learn More
      <svg class="icon" width="24" height="24">
        <use href="img/symbol-defs.svg#icon-caret-right"></use>
      </svg>
    </button>
  </li>
`).join("");Y.insertAdjacentHTML("beforeend",i)}function P(){v.classList.add("loader")}function C(){v.classList.remove("loader")}function D(t,e,o){Math.ceil(e/o)>t?I():L()}function I(){b.classList.remove("hidden")}function L(){b.classList.add("hidden")}function H(){let e=document.querySelector(".art-item").getBoundingClientRect();window.scrollBy({top:e.height*2,behavior:"smooth"})}document.querySelector(".art-btn-loadMore").addEventListener("click",x);document.getElementById("loader");let p=1;const h=8,k=async()=>{try{P();const t=await U(p,h);C(),D(p,t.totalArtists,h),O(t.artists),document.querySelectorAll(".art-btn-learnMore").forEach(o=>o.addEventListener("click",S))}catch(t){console.error("Помилка в getListArtist:",t)}p>1&&H()};function x(t){t.preventDefault(),++p,L(),k()}k();const F=document.querySelector(".hero-btn");F.addEventListener("click",()=>{document.getElementById("artists").scrollIntoView({behavior:"smooth",block:"start"})});
//# sourceMappingURL=index.js.map
