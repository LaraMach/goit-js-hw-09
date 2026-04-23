// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';

// const images = [
//   {
//     preview: 'https://picsum.photos/id/1015/400/300',
//     original: 'https://picsum.photos/id/1015/1200/900',
//     description: 'Mountain lake',
//   },
//   {
//     preview: 'https://picsum.photos/id/1011/400/300',
//     original: 'https://picsum.photos/id/1011/1200/900',
//     description: 'Sea coast',
//   },
//   {
//     preview: 'https://picsum.photos/id/1025/400/300',
//     original: 'https://picsum.photos/id/1025/1200/900',
//     description: 'Cute dog',
//   },
//   {
//     preview: 'https://picsum.photos/id/1035/400/300',
//     original: 'https://picsum.photos/id/1035/1200/900',
//     description: 'Forest road',
//   },
//   {
//     preview: 'https://picsum.photos/id/1043/400/300',
//     original: 'https://picsum.photos/id/1043/1200/900',
//     description: 'Beach sunset',
//   },
//   {
//     preview: 'https://picsum.photos/id/1050/400/300',
//     original: 'https://picsum.photos/id/1050/1200/900',
//     description: 'City view',
//   },
// ];

// const gallery = document.querySelector('.gallery');

// const galleryMarkup = images
//   .map(
//     image => `
// <li class="gallery-item">
//   <a class="gallery-link" href="${image.original}">
//     <img
//       class="gallery-image"
//       src="${image.preview}"
//       alt="${image.description}"
//     />
//   </a>
// </li>
// `
//   )
//   .join('');

// gallery.insertAdjacentHTML('beforeend', galleryMarkup);

// const lightbox = new SimpleLightbox('.gallery a', {
//   captionsData: 'alt',
//   captionDelay: 250,
//   captionPosition: 'bottom',
// });

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log('SimpleLightbox:', SimpleLightbox);

const images = [
  {
    preview: 'https://picsum.photos/id/1015/400/300',
    original: 'https://picsum.photos/id/1015/1200/900',
    description: 'Mountain lake',
  },
  {
    preview: 'https://picsum.photos/id/1011/400/300',
    original: 'https://picsum.photos/id/1011/1200/900',
    description: 'Sea coast',
  },
  {
    preview: 'https://picsum.photos/id/1025/400/300',
    original: 'https://picsum.photos/id/1025/1200/900',
    description: 'Cute dog',
  },
  {
    preview: 'https://picsum.photos/id/1035/400/300',
    original: 'https://picsum.photos/id/1035/1200/900',
    description: 'Forest road',
  },
  {
    preview: 'https://picsum.photos/id/1043/400/300',
    original: 'https://picsum.photos/id/1043/1200/900',
    description: 'Beach sunset',
  },
  {
    preview: 'https://picsum.photos/id/1050/400/300',
    original: 'https://picsum.photos/id/1050/1200/900',
    description: 'City view',
  },
];

const gallery = document.querySelector('.gallery');

gallery.innerHTML = images
  .map(
    image => `
  <li class="gallery-item">
    <a class="gallery-link" href="${image.original}">
      <img class="gallery-image" src="${image.preview}" alt="${image.description}" />
    </a>
  </li>
`
  )
  .join('');

window.lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});

document.querySelector('.gallery').addEventListener('click', e => {
  e.preventDefault();
  const link = e.target.closest('a');
  if (link) {
    window.lightbox.open(link);
  }
});
