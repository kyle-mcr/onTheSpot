import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, FormControl, FormArray } from "@angular/forms";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    igs: any = [
        { id: 1, name: "All Purpose Flour", value: "all purpose flour", isChecked: false },
        { id: 2, name: "Bread Flour", value: "bread flour", isChecked: false },
        { id: 3, name: "Baking Powder", value: "baking powder", isChecked: false },
    ]
    igsinform: any = {

    }
    constructor(
        private http: HttpService,
        private router: Router,
        private route: ActivatedRoute,
    ) { }

    ngOnInit() {
        // populates ngModel for twowaybinding with fields of igs
        for (let i = 0; i < this.igs.length; i++) {
            this.igsinform[this.igs[i].name] = this.igs[i].isChecked
        }
    }

    getClicked(form) {
        console.log(this.igsinform)

    }
    getAll() {
        let istr = "chocolate,fudge"
        let qstr = "dessert"
        let recipes = this.http.getRecipes(istr, qstr)

    }
    findRecipes() {
        console.log();
    }
}