import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/app/Login.vue';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        // {
        //     name: "test1",
        //     path: '/',
        //     component: resolve => void(require(['../components/ExampleComponent.vue'], resolve))
        // },
        {
            name: 'Login',
            path: '/app/login',
            component: Login
        }
    ]
})