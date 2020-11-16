import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";
import Books from '../views/Books.vue';
import NewBook from '../views/NewBook.vue';
import EditBook from '../views/EditBook.vue';
import Orders from '../views/Orders.vue';
import EditOrder from '../views/EditOrder.vue';
import Customers from '../views/Customers.vue';
import NewCustomer from '../views/NewCustomer.vue';
import EditCustomer from '../views/EditCustomer.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: '/login',
  },
  {
    path: "/logout",
    redirect: '/login',
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/books",
    name: "Books",
    component: Books,
  },
  {
    path: "/new-book",
    name: "NewBook",
    component: NewBook,
  },
  {
    path: "/edit-book",
    name: "EditBook",
    component: EditBook,
  },
  {
    path: "/orders",
    name: "Orders",
    component: Orders,
  },
  {
    path: "/edit-order",
    name: "EditOrder",
    component: EditOrder,
  },
  {
    path: "/customers",
    name: "Customers",
    component: Customers,
  },
  {
    path: "/new-customer",
    name: "NewCustomer",
    component: NewCustomer,
  },
  {
    path: "/edit-customer",
    name: "EditCustomer",
    component: EditCustomer,
  },
  
];

const router = new VueRouter({
  routes
});

export default router;
