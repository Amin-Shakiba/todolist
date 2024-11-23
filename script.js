// const todoForm = document.getElementById("todo-form");
// const todoInput = document.getElementById("todo-input");
// const todoList = document.getElementById("todo-list");

// // شمارنده وظایف
// let taskCounter = 1;

// // افزودن وظیفه جدید
// todoForm.addEventListener("submit", (event) => {
//     event.preventDefault();

//     // گرفتن متن وارد شده
//     const task = todoInput.value;

//     // اگر ورودی خالی بود، کاری انجام نده
//     if (!task) return;

//     // ساخت یک آیتم جدید برای لیست
//     const listItem = document.createElement("li");

//     // افزودن متن وظیفه با شماره
//     listItem.textContent = `${taskCounter}- ${task}`;

//     // دکمه حذف
//     const deleteButton = document.createElement("button");
//     deleteButton.textContent = "Delete";
//     deleteButton.classList.add("delete-btn");

//     // اضافه کردن دکمه حذف به آیتم لیست
//     listItem.appendChild(deleteButton);

//     // افزودن آیتم به لیست
//     todoList.appendChild(listItem);

//     // پاک کردن ورودی
//     todoInput.value = "";

//     // افزایش شمارنده
//     taskCounter++;

//     // رویداد حذف برای دکمه
//     deleteButton.addEventListener("click", () => {
//         listItem.remove();
//         updateTaskNumbers(); // به‌روزرسانی شماره‌ها
//     });
// });

// // به‌روزرسانی شماره وظایف بعد از حذف یک آیتم
// function updateTaskNumbers() {
//     const tasks = document.querySelectorAll("#todo-list li");
//     taskCounter = 1; // بازنشانی شمارنده
//     tasks.forEach((task) => {
//         task.firstChild.textContent = `${taskCounter}. ${task.firstChild.textContent.split('. ')[1]}`;
//         taskCounter++;
//     });
// }

const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const task = input.value;
    if(!task) return;

    const listItem = document.createElement("li");
    listItem.textContent = input.value;
    list.appendChild(listItem);
    
    input.value = "";

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    listItem.appendChild(delBtn);

    delBtn.addEventListener("click", () => {
        listItem.remove()
    })
});