import { Component, OnInit } from '@angular/core';

interface IRegisterForm {
  name: string;
  email: string;
  password: string;
  reapeatPass: string;
}

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.scss']
})
export class TemplateFormsComponent implements OnInit {

  register: IRegisterForm = {
    name: "",
    email: "",
    password: "",
    reapeatPass: ""
  }

  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    
  }

}
