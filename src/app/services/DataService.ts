import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class DataService{

    idConfermentToView = '';

    constructor(){

    }


    setIdConfermentToView(id: string){
        this.idConfermentToView = id;

    }


    getIdConfermentToView(){
        return this.idConfermentToView

    }

}