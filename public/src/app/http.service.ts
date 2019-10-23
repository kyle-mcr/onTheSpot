import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(private _http: HttpClient) { }

    // getRecipes2() {
    //     let recipes = this._http.get('http://www.recipepuppy.com/api/?i=chocolate,fudge&q=dessert&p=1')
    //     recipes.subscribe(data => console.log(data))
    // }
    getRecipes(istr,qstr) {
        let recipes = this._http.get(`/api/${istr}/${qstr}`)
        recipes.subscribe(data => console.log(data))
    }
}
