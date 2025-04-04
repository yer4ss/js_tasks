// Задание 1: Сортировка списка
// При клике на кнопку "Перемешать список" случайным образом перемешайте элементы списка
// Используйте методы createElement, appendChild или insertBefore


document.getElementById("sort-list-btn").addEventListener("click", function() {
    let sortable_list = document.getElementById("sortable-list");

    let lishki = [];
    for (let i = 0; i < sortable_list.children.length; i++) {
        lishki.push(sortable_list.children[i]);
    }

    let new_sortable_list = [];

    while (lishki.length > 0) {
        let random = Math.floor(Math.random() * lishki.length);
        new_sortable_list.push(lishki.splice(random, 1)[0]);
    }

    sortable_list.innerHTML = "";
    new_sortable_list.forEach(item => sortable_list.appendChild(item));

    showNotification("это 6 задание");
});


// Задание 2: Динамическая форма
// При клике на кнопку "Добавить поле" создавайте новое поле ввода (input) с кнопкой удаления
// Каждое новое поле должно добавляться перед кнопкой "Добавить поле"
// При клике на кнопку удаления - удаляйте соответствующее поле


document.getElementById("add-field-btn").addEventListener("click", function() {
    let pole = document.getElementById("dynamic-form-container");

    let input = document.createElement("input");
    input.type = "text";

    let deleted = document.createElement("button");
    deleted.textContent = "Удалить";
    deleted.classList.add("btn");

    deleted.addEventListener("click", function() {
        input.remove();
        deleted.remove();
    });

    pole.insertBefore(input, document.getElementById("add-field-btn"));
    pole.insertBefore(deleted, document.getElementById("add-field-btn"));
});


// Задание 3: Система комментариев с ответами
// 1. При отправке формы добавляйте новый комментарий в контейнер для комментариев
// 2. При клике на кнопку "Ответить" создавайте форму для ответа ПОД выбранным комментарием
// 3. Ответы должны добавляться как вложенные комментарии (с классом "reply")


// Задание 4: Работа с таблицей
// 1. При клике на кнопку "Добавить строку" добавляйте новую строку в таблицу
// 2. Новая строка должна содержать случайные данные (используйте функцию getRandomData)
// 3. При клике на кнопку "Удалить" в строке - удаляйте соответствующую строку


document.getElementById("add-row-btn").addEventListener("click", function() {
    let data_table = document.getElementById("data-table");
    let new_row = data_table.insertRow();

    let id = data_table.rows.length - 1;
    new_row.insertCell(0).textContent = id;
    
    let name = "имя";
    new_row.insertCell(1).textContent = name;
    
    let age = Math.floor(Math.random() * 10);
    new_row.insertCell(2).textContent = age;

    new_row.insertCell(3).innerHTML = "<button class='delete-row-btn'>Удалить</button>";

    new_row.querySelector(".delete-row-btn").addEventListener("click", function() {
        new_row.remove();
    });
});



// Задание 5: Работа с деревом элементов
// 1. При клике на кнопку "Добавить узел" добавляйте новый узел в дерево
// 2. Новый узел должен добавляться как дочерний для последнего выбранного узла
// 3. При клике на кнопку "Переместить узел" перемещайте последний узел в начало дерева


document.getElementById("add-node-btn").addEventListener("click", function() {
    let derevo = document.getElementById("element-tree");
    let vetka = document.createElement("div");
    vetka.classList.add("node");
    vetka.textContent = "новая ветка";
    derevo.appendChild(vetka);
});

document.getElementById("move-node-btn").addEventListener("click", function() {
    let derevo = document.getElementById("element-tree");
    if (derevo.lastElementChild) {
        derevo.insertBefore(derevo.lastElementChild, derevo.firstElementChild);
    }
});


// Задание 6: Система уведомлений
// Создайте функцию showNotification, которая будет отображать уведомление
// в notification-area. Уведомление должно автоматически исчезать через 3 секунды


function showNotification(message) {
    let notification = document.createElement("div");
    notification.textContent = message;
    notification.className = "notification";
    document.getElementById("notification-area").appendChild(notification);
    
    setTimeout(() => notification.remove(), 3000);
}
