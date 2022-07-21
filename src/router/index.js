import Employee from "../components/employee/Employee";
import Home from "../components/home/Home";
import About from "../components/about/About";
import Contact from "../components/contact/Contact"
import VueRouter from "vue-router";
const routes = [
    {
        path: "/employee",
        name: "Employees",
        component: Employee
    },
    {
        path: "/home",
        name: "Home",
        component: Home
    },
    {
        path: "/about",
        name: "About",
        component: About
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact
    }
];
const router = new VueRouter({
    mode: "history",
    routes
})
export default router;