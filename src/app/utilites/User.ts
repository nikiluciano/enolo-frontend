import { UserService } from "../services/user.service";
import { get, set, remove } from '../storage/data-storage'
import { Injectable } from '@angular/core';
import { Router } from "@angular/router";


@Injectable({
    providedIn: 'root'
})

export class User {

    name: string;
    surname: string;
    username: string;
    address: string;
    role: string;
    phone: string;
    email: string;
    id: string;

    constructor(private userService: UserService,
            private router: Router) {

    }

    setUser(username: string) {

        this.userService.getUser(username).then((res) => {
     
            this.name = res.name;
            this.surname = res.surname;
            this.address = res.address;
            this.role = res.role;
            this.id = res._id;
            this.username = res.username;
            this.phone = res.phone;
            console.log(JSON.stringify(res))
            this.saveLogin();
        })
      
    }


     saveLogin() {
       set('session', true);
        set('name', this.name);
        set('surname', this.surname);
        set('address', this.address);
        set('role', this.role);
        set('id', this.id);
        set('username', this.username);
        set('phone', this.phone);

    }


   async makeLogout() {
         set('session', false);
         remove('name');
         remove('surname');
         remove('address');
         remove('role');
         remove('id');
         remove('username');
         remove('phone');
         this.router.navigate(['/login'])
    }

    async checkSession(){
        return get('session')
    }

}