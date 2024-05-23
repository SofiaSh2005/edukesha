import './assets/style.scss'
import './assets/vendor.scss'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

var body = document.getElementById("body");
var modal = document.getElementById("menu-content"); //переменная modal отвечает за элемент с id menu-content и возвращает объект глобальный атрибут id которого соответствует указанной строке.
var btn1 = document.getElementById("navigation__menu-button"); //bnt - кнопка открытия меню
var btn2 = document.getElementById("button-close"); //bnt2 - кнопка закрытия меню
btn1.onclick = function(){ //при нажатии на кнопку меняется стиль с ID menu-content на display = "block (изначально было none)
    modal.style.display = "block";
    body.style.position = "fixed";
    body.style.overflow = "scroll";
    
}

btn2.onclick = function(){ //снова становить дислей нан при нажатии на крестик
    modal.style.display = "none";
    body.style.position = "static";
    body.style.overflow = "auto";

}