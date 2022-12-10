// Реалізувати перемикання вкладок (таби) на чистому Javascript.

// Технічні вимоги:
// У папці tabs лежить розмітка для вкладок. Потрібно, щоб після натискання на вкладку відображався конкретний текст для потрібної вкладки. 
//При цьому решта тексту повинна бути прихована. У коментарях зазначено, який текст має відображатися для якої вкладки.
// Розмітку можна змінювати, додавати потрібні класи, ID, атрибути, теги.
// Потрібно передбачити, що текст на вкладках може змінюватись, і що вкладки можуть додаватися та видалятися. 
//При цьому потрібно, щоб функція, написана в джаваскрипті, через такі правки не переставала працювати.

const tabs = document.querySelector(".tabs")
const content = document.querySelectorAll(".tabs-content li")
tabs.addEventListener("click", function(event){
 tabs.querySelector(".active").classList.remove("active")
event.target.classList.add("active")
content.forEach(item => {
    item.hidden = true
    console.log(item.dataset.filter)
    if(event.target.id === item.dataset.filter){
        item.hidden = false
    }
})
})