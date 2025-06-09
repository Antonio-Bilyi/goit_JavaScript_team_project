import{a as p}from"./assets/vendor-B2YOV0tR.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();(()=>{const e={openModalBtn:document.querySelector("[data-menu-open]"),closeModalBtn:document.querySelector("[data-menu-close]"),modal:document.querySelector("[data-menu]"),menuLinks:document.querySelectorAll(".mob-menu-link")};e.openModalBtn.addEventListener("click",r),e.closeModalBtn.addEventListener("click",r),e.menuLinks.forEach(n=>{n.addEventListener("click",()=>{r()})});function r(){e.modal.classList.toggle("is-open")}})();async function g(e,r){const t="https://sound-wave.b.goit.study/api"+"/artists",o=await p(t,{params:{limit:r,page:e}});return{totalArtists:o.data.totalArtists,artists:o.data.artists}}const h=document.querySelector(".art-list-card"),l=document.querySelector(".art-btn-loadMore"),d=document.querySelector(".loader");function y(e){let n=document.documentElement.clientWidth<=768?50:145;const s=e.map(({strArtist:t,strBiographyEN:o,strArtistThumb:i,genres:m})=>`
      <li class="art-item">
        <img class="art-img" src="${i}" alt="${t}" />
        <ul class="art-genre-list">
          ${m.map(f=>`<li class="art-genre-list-item">${f}</li>`).join("")}
        </ul>
        <h4 class="art-list-name">${t}</h4>
        <p class="art-list-biography">${o.slice(0,n)}...</p>
        <button type="button" class="art-btn-learnMore">Learn More
          <svg class="icon" width="24" height="24">
            <use href="./../../img/symbol-defs.svg#icon-caret-right"></use>
          </svg>
        </button>
      </li>
    `).join("");h.insertAdjacentHTML("beforeend",s)}function L(){d.classList.add("loader")}function b(){d.classList.remove("loader")}function M(e,r,n){Math.ceil(r/n)>e?v():w()}function v(){l.classList.remove("hidden")}function w(){l.classList.add("hidden")}function B(){let r=document.querySelector(".art-item").getBoundingClientRect();window.scrollBy({top:r.height*2,behavior:"smooth"})}document.querySelector(".art-btn-loadMore").addEventListener("click",q);document.getElementById("loader");let a=1;const c=8,u=async()=>{try{L();const e=await g(a,c);M(a,e.totalArtists,c),b(),y(e.artists)}catch(e){console.error("Помилка в getListArtist:",e)}a>1&&B()};function q(e){e.preventDefault(),++a,u()}u();
//# sourceMappingURL=index.js.map
