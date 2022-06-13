import { WineService } from "../services/wine.service";
import data from '../utilites/ISO_alpha-2_codes.json';
import regionsData from '../utilites/Italian_regions.json'
import { Injectable } from '@angular/core';
import typologiesData from '../utilites/typologies_wine.json'

@Injectable({
    providedIn: 'root'
})


/**
 * Class used to retrieve informations from the jsons containing 
 * code of countries, name of all the italian regions
 * and all the most known italian wine typologies in the world
 */
export class CountryProvider {

    url = "https://countryflagsapi.com/svg/"
    constructor(private wineService: WineService) {

    }
    countriesJson = data;
    italianRegions = regionsData


    /**
     * Gets from the json ISO_alpha-2_codes.json the ISO codes of the states.
     * This codes will be later used to be attached to the URL @url https://countryflagsapi.com/svg/
     * to get the corresponding flag image
     * @returns array of countries with the flag to retrieve the url from and the name of the state
     */
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


    /**
     * 
     * @returns the complete list of italian regions and the URL for each region logo
     */
    getItalianRegions() {
        return this.italianRegions;

    }


    /**
     * 
     * @returns all the italian most known wine typologiess
     */
    getTypologies() {
        interface Typology {
            name: string;
            region: string
        }
        var typologies: Array<Typology>
        typologies = []
        typologies = typologiesData.typology
        return typologies;

    }

}