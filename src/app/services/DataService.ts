import { Injectable } from '@angular/core';
import { User } from '../utilites/User';

@Injectable({
    providedIn: 'root'
})


/**
 * Service used to provide global variables 
 * like the id of a conferment,
 * which more pages in certain cases need to share.
 * It's accessible the User instance from here too.
 */
export class DataService {

    idConfermentToView = '';


    constructor(private user: User) {

    }

    setIdConfermentToView(id: string) {
        this.idConfermentToView = id;

    }


    getIdConfermentToView() {
        return this.idConfermentToView

    }

    getUserDataStored() {
        this.user.getCurrentStorage();

    }

    getUser() {
        return this.user;
    }

}