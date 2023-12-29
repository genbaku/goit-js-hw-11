import{S as u,i as d}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const f="41526510-fe2a9843669a4013cb75574c6",p="https://pixabay.com/api/",i=document.querySelector(".gallery"),y=document.querySelector(".search-form"),c=document.querySelector(".loader-container");y.addEventListener("submit",function(o){o.preventDefault();const r=document.querySelector(".search-query").value;h(r)});function h(o){c.style.display="flex",fetch(`${p}?key=${f}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>{if(!r.ok)throw new Error(`Network response was not ok: ${r.statusText}`);return r.json()}).then(r=>{m(r.hits)}).catch(r=>{l("An error occurred. Please try again."),console.error("Fetch error:",r)}).finally(()=>{c.style.display="none"})}function m(o){if(i.innerHTML="",o.length===0){l("Sorry, there are no images matching your search query. Please try again!");return}o.forEach(function(n){const a=document.createElement("div");a.classList.add("image-card"),a.innerHTML=`
            <a href="${n.largeImageURL}" data-lightbox="gallery">
                <img src="${n.webformatURL}" alt="${n.tags}">
            </a>
            <div class="image-info">
                <p>Likes: ${n.likes}</p>
                <p>Views: ${n.views}</p>
                <p>Comments: ${n.comments}</p>
                <p>Downloads: ${n.downloads}</p>
            </div>
        `,i.appendChild(a)}),new u(".image-card a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()}function l(o){d.error({title:"Error",message:o||"An error occurred. Please try again."})}
//# sourceMappingURL=commonHelpers.js.map
