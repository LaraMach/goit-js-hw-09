import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{S as o}from"./assets/vendor-CgTBfC_f.js";console.log("SimpleLightbox:",o);const s=[{preview:"https://picsum.photos/id/1015/400/300",original:"https://picsum.photos/id/1015/1200/900",description:"Mountain lake"},{preview:"https://picsum.photos/id/1011/400/300",original:"https://picsum.photos/id/1011/1200/900",description:"Sea coast"},{preview:"https://picsum.photos/id/1025/400/300",original:"https://picsum.photos/id/1025/1200/900",description:"Cute dog"},{preview:"https://picsum.photos/id/1035/400/300",original:"https://picsum.photos/id/1035/1200/900",description:"Forest road"},{preview:"https://picsum.photos/id/1043/400/300",original:"https://picsum.photos/id/1043/1200/900",description:"Beach sunset"},{preview:"https://picsum.photos/id/1050/400/300",original:"https://picsum.photos/id/1050/1200/900",description:"City view"}],p=document.querySelector(".gallery");p.innerHTML=s.map(i=>`
  <li class="gallery-item">
    <a class="gallery-link" href="${i.original}">
      <img class="gallery-image" src="${i.preview}" alt="${i.description}" />
    </a>
  </li>
`).join("");window.lightbox=new o(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});document.querySelector(".gallery").addEventListener("click",i=>{i.preventDefault();const t=i.target.closest("a");t&&window.lightbox.open(t)});
//# sourceMappingURL=1-gallery.js.map
