//module-07 5:31 PM 2018-07-09
'use strict';
/*
  1. Модифицируйте готовую функцию createPostCard() из задания
    номер 6 (https://codepen.io/goit-fe-adv/pen/MVPaeZ) так,
    чтобы она принимала объект post с данными для заполнения полей
    в карточке.

  2. Создайте функцию createCards(posts), которая принимает массив
    объектов-карточек, вызывает функцию createPostCard(post) столько
    раз, сколько объектов в массиве, сохраняя общий результат и возвращает
    массив DOM-элементов всех постов.

  3. Повесьте все посты в какой-то уже существующий DOM-узел.
*/

const posts = [
    {
        img: "https://placeimg.com/400/150/arch",
        title: "Post title 1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
        link: 'link-1.com'
    },
    {
        img: "https://placeimg.com/400/150/nature",
        title: "Post title 2",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
        link: 'link-2.com'
    },
    {
        img: "https://placeimg.com/400/150/arch",
        title: "Post title 3",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
        link: 'link-3.com'
    }
];

let container = document.querySelector('.post-2');
const elements = createCards(posts);
container.append(...elements);
// console.log(elements);

function createCards(arr){
    const elements = [];
    arr.forEach(item => {
        const el = createPostCard(item);
        elements.push(el);
    });
    return elements;
}

function createPostCard({img, title, text, link}) {
    const note = document.createElement('div');
    note.classList.add('post');

    const image = document.createElement('img');
    image.classList.add('post__image');
    image.setAttribute('src', img);
    image.setAttribute('alt', title);

    const h2 = document.createElement('h2');
    h2.classList.add('post__title');
    h2.textContent = title;


    const textCont = document.createElement('p');
    textCont.classList.add('post__text');
    textCont.textContent = text;


    const alink = document.createElement('a');
    alink.classList.add('button');
    alink.setAttribute('href', link);
    alink.textContent = link;

    note.append(image);
    note.append(h2);
    note.append(textCont);
    note.append(alink);


    return note;
}
































/*function createCards(arr) {
    let frag = document.createDocumentFragment();

    for (let el of  arr) {
        frag.innerHTML = (createPostCard(el));

    }
    console.log(frag);
    // return frag;
}

createCards(posts);*/
// ------------------------------------------------------------------------------------
