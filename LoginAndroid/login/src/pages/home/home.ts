import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  myForm: FormGroup;
  login=false;
  variable:string;
  constructor(
    public navCtrl: NavController,
    public formBuilder: FormBuilder
  ) {
    this.myForm = this.createMyForm();
  }
  
  saveData(){
    if(this.myForm.value.name == "Cris" && this.myForm.value.password == "123"  ){
      this.variable="Bienvenido "+this.myForm.value.name;
    }else {
      this.variable="Usuario o contraseña incorrecta";
    }
    this.login=true;
    //console.log(this.myForm.value);
  }
  regresar() {
    this.login=false;
    this.myForm.reset();
  }
  
  private createMyForm(){
    return this.formBuilder.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
}
