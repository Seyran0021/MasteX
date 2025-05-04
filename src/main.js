import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/css/app.css';
import BackToTop from 'vue-backtotop';
import i18n from './i18n';

const feather = require('feather-icons');
feather.replace();

createApp(App)
	.use(router)
	.use(i18n)
	.use(BackToTop)
	.mount('#app');

const appTheme = localStorage.getItem('theme');
if (
	appTheme === 'dark' &&
	document.querySelector('body').classList.contains('app-theme')
) {
	document.querySelector('body').classList.add('bg-primary-dark');
} else {
	document.querySelector('body').classList.add('bg-secondary-light');
}
