import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TagInterface } from 'src/app/core/interfaces/tag.interface';

@Component({
  selector: 'app-create-tag',
  templateUrl: './create-tag.component.html',
  styleUrls: ['./create-tag.component.scss']
})
export class CreateTagComponent implements OnInit {

  public form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl()
    });
  }

  onSubmit(): void{
    console.log(this.form.value);
  }

}

// 6 : créer un formulaire de création de tag
// avec un unique champ : 'name'
// avec l'api : admin/tag ( post ) qui accepte un objet {​​​​​ name : string }
