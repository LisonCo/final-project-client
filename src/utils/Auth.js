import axios from "axios";
import qs from "querystring";

export default class Auth {
    constructor(domain) {
        this.domain = domain || process.env.REACT_APP_API;
        this.login = this.login.bind(this);
    }

    signup({firstName, lastName, phone, emailAddress, password}) {
        return axios({
            method: "POST",
            url: "/signup",
            baseURL: this.domain,
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            data: qs.stringify({firstName, lastName, phone, emailAddress, password}),
            withCredentials: true
        })
        .then((response)=> {
            this.setUser(response.data.user);
        })
        .catch(error => {
            console.log(error)
        })
    }

    login(emailAddress, password) {
        return axios({
            method: "POST",
            url: "/login",
            baseURL: this.domain,
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            data: qs.stringify({emailAddress, password}),
            withCredentials: true
        })
        .then((response)=> {
            this.setUser(response.data.user)
        })
        .catch(error => {
            console.log(error)
        })
    }

    loggedIn(){
        const user = this.getUser()
        return !!user; 
    }

    setUser(user){
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('total', 0);
    }

    getUser(){
        try {
            return JSON.parse(localStorage.getItem('user'));
        } catch(error) {
            return undefined;
        }
    }

    logout(){
       return axios({
            baseURL: this.domain,
            url: "/logout"
        })
        .then((res)=> {
            localStorage.clear()
        })
        .catch(error => {
            console.log(error)
        })
    }    
}
