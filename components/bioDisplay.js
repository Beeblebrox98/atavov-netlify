app.component("bio-display", {
    template:
        /*html*/
        `<div class="bio-display">
        <div class="bio-container">
        <div class="menu-container">
        <div class="menu-parent">
        <div class="menu-body">
        <div class="my-logo">
        <img class="logo-png" v-bind:src="image">
        <div class="bio-info">
        <h1 class="title1">Atavov Marat</h1>
        <h3>frontend</h3>
        </div>
        </div>
        <transition name="fade" mode="out-in">        
        <div class="menu-button" v-if="!show" @click="show = !show" key="menu-button">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        </div>
        <div class="close" v-else @click="show = !show" v-show="hide" key="close" id="close">
        </div>        
        </transition>
        <transition name="fade" mode="out-in">
        <ul class="menu-list" v-if="show" id="menu-list">
        <img class="logo-mini" src="css/image/letter-m(Black).png">
        <transition name="fade" mode="out-in">
        <li v-if="!about" @click="(about = !about), (hide = !hide)" key="about" class="menuItem">Обо мне</li>
        </transition>
        <transition name="fade" mode="out-in">
        <li v-if="!portfolio" @click="(portfolio = !portfolio), (hide = !hide)" key="portfolio" class="menuItem">Портфолио</li>
        </transition>
        <transition name="fade" mode="out-in">
        <li v-if="!contacts" @click="(contacts = !contacts), (hide = !hide)" key="contacts" class="menuItem">Контакты</li> 
        </transition>       
        </ul>       
        </transition>
        <transition name="fade" mode="out-in">
        <div class="info-child" v-if="about">
        <p>Меня зовут Атавов Марат. <br> Я занимаюсь фронтэнд-разработкой веб-сайтов <br> и последующим сопровождением.</p>
        <img class="logo-mini" src="css/image/letter-m(Black).png" alt="">
        <div class="back" v-else="hide" @click="(about = !about), (hide = !hide)" key="back">
        </div>
        </div>
        </transition> 
        <transition name="fade" mode="out-in">
        <div class="info-child" v-if="portfolio">
        <div class="portfolio-container">
        <a href="https://alumaster.netlify.app/" target="_blank"><img src="/css/image/alumaster.png" alt=""></a><p>Сайт-каталог компании</p>
        <a href="https://kidney-pol.netlify.app/" target="_blank"><img src="/css/image/kidney.png" alt=""></a><p>Страница детской поликлиники, свёрстаная с применением «flex-box» элементов</p>
        <a href="https://vuemasterysocks.netlify.app/" target="_blank"><img src="/css/image/vueSite.png" alt=""></a><p>Страница интернет-магазина, написанная при помощи фреймворка «Vue.js»</p>
        </div>        
        <div class="back" v-else @click="(portfolio = !portfolio), (hide = !hide)" key="back">        
        </div>
        </div>
        </transition>
        <transition name="fade" mode="out-in">
        <div class="info-child" v-if="contacts">
        <div class="info-wrapper">
        <div class="info-main">
        <div class="links">
        <a href="https://github.com/Beeblebrox98?tab=repositories" target="blank"><img class="logo-git" v-bind:src="logogit" alt=""><p>Github</p></a>
        </div>
        <div class="links">
        <a href="https://t.me/dofaZ" target="blank"><img class="logo-tg" v-bind:src="logotg" alt=""><p>Telegram</p></a>
        </div>
        <div class="links">
        <a href="https://wa.me/qr/FV2LY6NMTDV7F1" target="blank"><img class="logo-wp" v-bind:src="logowp" alt=""><p>Whatsapp</p></a>
        </div>
        </div>
        </div>
        <img class="logo-mini" src="css/image/letter-m(Black).png" alt="">        
        <div class="back" v-else @click="(contacts = !contacts), (hide = !hide)" key="back">
        </div>
        </div>       
        </transition>
        </div>
        </div>
        </div>                       
        </div>
        </div>`,

    data() {
        return {
            image: "./css/image/letter-m(White).png",
            logogit: "./css/image/github-logo.png",
            logotg: "./css/image/telegram-logo.png",
            logowp: "./css/image/whatsapp-logo.png",
            vue: "./css/image/vueSite.png",
            show: false,
            about: false,
            portfolio: false,
            contacts: false,
            hide: true
        }

    },

})