/* Задания на урок:

1) Удалить все рекламные блоки при клике на кнопку "Скрыть рекламу"  и добавить кноку которая вернет рекламу на странице (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';





let hideAdBtn = document.createElement("button");
hideAdBtn.textContent = "Скрыть рекламу";
document.body.append(hideAdBtn);

let adv = document.querySelector(".promo__adv");

hideAdBtn.addEventListener("click", () => {
    adv.style.display = "none";
});




let genre = document.querySelector('.promo__genre');
genre.textContent = 'драма';




let bg = document.querySelector('.promo__bg');
bg.style.backgroundImage = 'url("A:/yer4ss/Work/im java script/task 6/img/bg.jpg")';




const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

movieDB.movies.sort();

let movie = document.querySelectorAll('.promo__interactive-item');

for (let i = 0; i < movieDB.movies.length; i++) {
    movie[i].textContent = `${i + 1} ${movieDB.movies[i]}`;
}


