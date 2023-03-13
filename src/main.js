import { createApp } from 'vue'
import App from './App.vue'

import Echo from 'laravel-echo'
window.Pusher = require('pusher-js');

var token = "1|lY761Y7nt4T8ORHNuY7UAJ2EJPbm7igoHMResCu6";

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: process.env.VUE_APP_WEBSOCKETS_KEY,
    wsHost:process.env.VUE_APP_WEBSOCKETS_SERVER,
    wsPort: 6001,
    wssPort: 6001,
    disableStats: true,
    enabledTransports: ['ws', 'wss'],
    cluster: "mt1",
    forceTLS: false,
    authEndpoint :'http://127.0.0.1:8000/api/broadcasting/auth',
    auth:{
        headers: {
            Authorization: 'Bearer '+token, 
        }
    },
});

createApp(App).mount('#app')
