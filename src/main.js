import { createApp } from 'vue'
import './style.css'
import domtoimage from 'dom-to-image-more';

import App from './App.vue'

const app = createApp(App);
app.use(domtoimage);

app.mount('#app');

