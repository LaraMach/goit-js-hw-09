import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{S as t}from"./assets/vendor-CgTBfC_f.js";console.log("SimpleLightbox:",t);const o=[{preview:"https://picsum.photos/id/1015/400/300",original:"https://picsum.photos/id/1015/1200/900",description:"Mountain lake"},{preview:"https://picsum.photos/id/1011/400/300",original:"https://picsum.photos/id/1011/1200/900",description:"Sea coast"},{preview:"https://picsum.photos/id/1025/400/300",original:"https://picsum.photos/id/1025/1200/900",description:"Cute dog"},{preview:"https://picsum.photos/id/1035/400/300",original:"https://picsum.photos/id/1035/1200/900",description:"Forest road"},{preview:"https://picsum.photos/id/1043/400/300",original:"https://picsum.photos/id/1043/1200/900",description:"Beach sunset"},{preview:"https://picsum.photos/id/1050/400/300",original:"https://picsum.photos/id/1050/1200/900",description:"City view"}],s=document.querySelector(".gallery");s.innerHTML=o.map(i=>`
  <li class="gallery-item">
    <a class="gallery-link" href="${i.original}">
      <img class="gallery-image" src="${i.preview}" alt="${i.description}" />
    </a>
  </li>
`).join("");new t(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});
//# sourceMappingURL=1-gallery.js.map
