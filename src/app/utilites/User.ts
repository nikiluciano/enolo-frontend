import { UserService } from "../services/user.service";
import { get, set, remove } from '../storage/data-storage'
import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { ToastService } from "../services/toast.service";


@Injectable({
    providedIn: 'root'
})

/**
 *  Class used to store user data, make login and logout.
 * The data is stored on the user's device, through the capacitor storage
 */
export class User {

    name: string;
    surname: string;
    username: string;
    address: string;
    role: string;
    phone: string;
    email: string;
    id: string;
    session: boolean;

    constructor(private userService: UserService,
        private router: Router,
        private authService: AuthService,
        private toastService: ToastService
    ) {

    }

    /**
     * 
     * @param username Given the username, the function will do a call to the server
     * to get the user data and store it on the user's device
     */
    async setUser(username: string) {
        await this.userService.getUser(username).then((res) => {
            this.name = res.name;
            this.surname = res.surname;
            this.address = res.address;
            this.role = res.role;
            this.id = res._id;
            this.username = res.username;
            this.phone = res.phone;
            this.email = res.email
            this.saveLogin();
            console.log(JSON.stringify(res))


        })

    }


    /**
     * for each key, stores on the device of the user his own data
     */
    async saveLogin() {
        set('session', true);
        set('name', this.name);
        set('surname', this.surname);
        set('address', this.address);
        set('role', this.role);
        set('id', this.id);
        set('username', this.username);
        set('phone', this.phone);
        set('email', this.email)

    }


    /**
     * removes the user data from the device
     */
    async makeLogout() {

        set('session', false);
        remove('name');
        remove('surname');
        remove('address');
        remove('role');
        remove('id');
        remove('username');
        remove('phone');
        remove('token')
        this.name = ""
        this.surname = ""
        this.username = ""
        this.address = ""
        this.role = ""
        this.phone = ""
        this.email = ""
        this.id = ""
        this.session = false



        this.router.navigate(['/login'])
    }

    /**
     * If true, the user is logged on the device checked.
     * 
     */
    async checkSession() {
        return get('session')
    }


    /**
     * 
     * @returns ADMIN or WORKER, based on the role of the user stored in the DB
     */
    async getRole() {
        return get("role")

    }

    /**
     * 
     * @returns the username of the user saved on the device
     */
    async getSavedUsername() {
        return get('username')
    }


    /**
     * 
     * @returns the name of the user saved on the device
     */
    getName() {
        return this.name
    }

    getUsername() {
        return this.username
    }

    getSurname() {
        return this.surname
    }

    getEmail() {
        return this.email
    }


    /**
     * sets the class variables with the data saved on the user's device
     */
    async getCurrentStorage() {
        if (get('session')) {
            this.session = await get('session');
            this.name = await get('name');
            this.surname = await get('surname');
            this.address = await get('address');
            this.role = await get('role');
            this.id = await get('id');
            this.username = await get('username');
            this.phone = await get('phone');
            this.email = await get('email');

            console.log(this.session)
            console.log(this.name)
            console.log(this.surname)
        }
    }
}