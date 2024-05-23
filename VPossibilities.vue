<script setup>

import Swiper from 'swiper'; //импортируем swiper из библиотеки
import { onMounted } from 'vue';
import {Pagination} from "swiper/modules";

onMounted(() => { //хук жизненного цикла (когда все элементы смонтируются лишь тогда будет инициализирован swiper)
    const swiper = new Swiper(".swiper",{ //прописываем родительский класс (swiper)
        modules:[Pagination], //конфигурация модулей для свайпера (подключение точек)
        spaceBetween: 20,
        pagination: {
            el: ".swiper-pagination", //el - это просто идентификатор, и он ссылается на элемент
            clickable:true, 
        },
    });
})

const possibilities = [ //определили массив со значениями для наших карточек (всего 4 элемента)
    {
        class : 'possibilities__card1', //класс
        text : 'Общение с классом', //текст
        description : 'Видеосвязь <br> Чат с классом', //описание
        src : '/p1.svg' //путь до картинки
    },
    {
        class : 'possibilities__card2',
        text : 'Проведение занятий',
        description : 'Презентация файлов <br> Демонстрация экрана',
        src : '/p2.svg'
    },
    {
        class : 'possibilities__card3',
        text : 'Посещаемость',
        description : 'Автоматическое <br> отслеживание <br> присутствующих',
        src : '/p3.svg',
    },
    {
        class : 'possibilities__card4',
        text : 'История занятий',
        description : 'Материалы урока',
        src : '/p4.svg',
    }
]

</script>

<template>
        <section class="possibilities">
            <div class="container">
                <div class="possibilities1">
                    <h2>
                        Возможности
                    </h2>
                    <div class="row"> <!--в массиве у нас 4 эемента, поэтому item от 0 до 3-->
                        <div class="col-3" 
                            v-for="(item,index) in possibilities" 
                            :key="index" 
                            >   <!--адресуем элементы из массива possibilities   KEY требуется для компонентов и их поддержания-->

                            <div :class="item.class">
                                <img :src="item.src" alt="">
                                <div class="possibilities__card-item">
                                    {{ item.text }}
                                </div>
                                <p v-html="item.description"></p> <!--краткое описание содержимого страницы сайта-->
                            </div>
                        </div>
                    </div>
                </div>
                <div class="possibilitites2">
                    <h2>
                        Возможности
                    </h2>
                    <div class="swiper"> <!--РОДИТЕЛЬСКИЙ КЛСС вместо row и прописываем его в MySwiper-->
                        <div class="swiper-wrapper"> <!--инициализируем свайпер (используем БЭМ чтобы указать что это за элемент-->
                            <div class="swiper-slide" v-for="(i,key) in possibilities" :key="key"> <!--директиву и for вставляем в slide-->
                                <div :class="'image-slider__card' + key"> <!--конкатенацией - склеивание строк-->
                                    <img :src="i.src" alt="">
                                    <div class="image-slider__card-text">
                                        {{ i.text }}
                                    </div>
                                    <p class="image-slider__card-p" v-html="i.description"> </p>  <!--краткое описание содержимого страницы сайта-->
                                </div>
                            </div>
                        </div>
                        <div class="swiper-pagination"></div>  <!--пагинация (когда иницилизируется swiper он автоматически вставляет нужное кол-во точек, поэтому не нужен bullet)-->
                    </div>
                </div>
            </div>
        </section>
</template>

<style scoped>

</style>