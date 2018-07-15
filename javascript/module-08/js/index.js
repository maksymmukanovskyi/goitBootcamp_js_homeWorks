//module-08 7:31 PM 2018-07-13
'use strict';
/*
  Создайте компонент галлереи изображений следующего вида.

    <div class="image-gallery js-image-gallery">
      <div class="fullview">
        <!-- Если выбран первый элемент из preview -->
        <img  src="img/fullview-1.jpeg" alt="alt text 1">
      </div>

      <ul class="preview">
        <li><img src="img/preview-1.jpeg" data-fullview="img/fullview-1.jpeg" alt="alt text 1"></li>
        <li><img src="img/preview-2.jpeg" data-fullview="img/fullview-2.jpeg" alt="alt text 2"></li>
        <li><img src="img/preview-3.jpeg" data-fullview="img/fullview-3.jpeg" alt="alt text 3"></li>
      </ul>
    </div>

    🔔 Превью компонента: https://monosnap.com/file/5rVeRM8RYD6Wq2Nangp7E4TkroXZx2


    Реализуйте функционал:

      - image-gallery есть изначально в HTML-разметке как контейнер для компонента.

      - fullview содержит в себе увеличенную версию выбранного изображения из preview, и
        создается динамически при загрузке страницы.

      - preview это список маленьких изображений, обратите внимание на атрибут data-fullview,
        он содержит ссылку на большое изображение. preview и его элементы, также создаются
        динамически, при загрузке страницы.

      - При клике в элемент preview, необходимо подменить src тега img внутри fullview
        на url из data-атрибута выбраного элемента.

      - По умолчанию, при загрузке страницы, активным должен быть первый элемент preview.

      - Изображений может быть произвольное количество.

      - Используйте делегирование для элементов preview.

      - При клике, выбраный элемент из preview должен получать произвольный эффект выделения.

      - CSS-оформление и имена классов на свой вкус.


    🔔 Изображения маленькие и большие можно взять с сервиса https://www.pexels.com/, выбрав при скачивании
      размер. Пусть маленькие изображения для preview будут 320px по ширине, большие для fullview 1280px.
      Подберите изображения одинаковых пропорций.
*/

/*
  Массив объектов с данными для создания компонента выглядит следующим образом.
  Замените пути на соотвествующие вашим, или назовите изображения аналогично.
*/

const galleryItems = [
    {preview: 'img/preview-1.jpg', fullview: 'img/fullview-1.jpeg', alt: "alt text 1"},
    {preview: 'img/preview-2.jpg', fullview: 'img/fullview-2.jpeg', alt: "alt text 2"},
    {preview: 'img/preview-3.jpg', fullview: 'img/fullview-3.jpeg', alt: "alt text 3"},
    {preview: 'img/preview-4.jpg', fullview: 'img/fullview-4.jpeg', alt: "alt text 4"},
    {preview: 'img/preview-5.jpg', fullview: 'img/fullview-5.jpeg', alt: "alt text 5"},
    {preview: 'img/preview-6.jpg', fullview: 'img/fullview-6.jpeg', alt: "alt text 6"},
];

// ---------------------------select elements----------------------
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.image-gallery');
    container.insertAdjacentHTML('afterbegin',mainViev(galleryItems[0]));


    const previewImages = document.querySelector('.preview');
    previewImages.insertAdjacentHTML('afterbegin',imageArray(galleryItems));


    const currentImage = document.querySelector('.current-img');
    const image = document.querySelectorAll('li img');
    const opacity = 0.3;

    currentImage.src = image[0].dataset.fullview;

    // ---------------------create elements---

function mainViev({fullview, alt}){
    return `<div class="image-gallery "><div class="fullview"><img class="current-img" src=${fullview} alt=${alt}></div><ul class="preview"></ul></div>`;
}


    function imageArray(arr){
        return arr.reduce((acc, el) => acc + `<li><img src=${el.preview} data-fullview=${el.fullview} alt=${el.alt}></li>`, '');
    }



    // ---------------------added event listener------------------


    previewImages.addEventListener('click', imgClick);

        image[0].style.opacity = opacity;

    function imgClick(e) {

        // reset the opacity

        image.forEach(img => (img.style.opacity = 1));


        // Change current img to src of clicked img
        if(!e.target.dataset.fullview)return;

        currentImage.src = e.target.dataset.fullview;
        // console.log(e.target.dataset.fullview);

        // ---------------------added fadeIn effect----------

        currentImage.classList.add('fade-in');
        setTimeout(() => currentImage.classList.remove('fade-in'), 500);

        // Change the opacity to opacity var

        e.target.style.opacity = opacity;
    }


});

