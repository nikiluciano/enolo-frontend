import { Injectable } from '@angular/core';
import { User } from '../utilites/User';

@Injectable({
    providedIn: 'root'
})

export class DataService{

    idConfermentToView = '';
    

    constructor(private user: User){

    }


    setIdConfermentToView(id: string){
        this.idConfermentToView = id;

    }


    getIdConfermentToView(){
        return this.idConfermentToView

    }

    getUserDataStored(){
        this.user.getCurrentStorage();

    }

    getUser(){
        return this.user;
    }

}