import { WineService } from "../services/wine.service";
import data from '../utilites/ISO_alpha-2_codes.json';
import regionsData from '../utilites/Italian_regions.json'
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})

export class CountryProvider {

    url = "https://countryflagsapi.com/svg/"
    constructor(private wineService: WineService) {

    }
    countriesJson = data;
    italianRegions = regionsData
    getCountriesFlags(): Array<any> {
        interface Country {
            name: string;
            urlFlag;
        }

        var countries: Array<Country>
        countries = []

        this.countriesJson.countries.forEach(element => {
           let country = {} as Country
            console.log(element.name)
            country.urlFlag = this.url + element.code;
            country.name = element.name;
            countries.push(country);
        });
        return countries;
    }

    getFlag(ISOcode: string) {
        return this.wineService.getFromOtherServers(this.url, ISOcode)
    }

    getItalianRegions(){
        console.log(this.italianRegions);
        return this.italianRegions;

    }
}