import Employee from "../components/employee/Employee";
import VueRouter from "vue-router";
const routes = [
    {
        path: "/employee",
        name: "Employee",
        component: Employee
    },
    {
        path: "/home",
        name: "Home",
        component: Employee
    },
    {
        path: "/about",
        name: "About",
        component: Employee
    },
    {
        path: "/contact",
        name: "Contact",
        component: Employee
    }
];
const router = new VueRouter({
    mode: "history",
    routes
})
export default router;