import VueRouter from 'vue-router'
import Home from '../spa/Home.vue'
import Main from '../spa/Main.vue'

const routes = [
    { 
        path: '/', 
        component: Home,
        meta: {
            title: 'Facebook - Log In or Sign Up'
        }
    },
    { 
        path: '/main', 
        component: Main,
        meta: {
            title: 'Facebook'
        }
    },
]

const router = new VueRouter({
    mode: 'history',
    routes 
})

router.beforeEach(function (to, from, next) {
    if(to.meta && to.meta.title){
      document.title = to.meta.title;
    }
    return next();
});

export default router