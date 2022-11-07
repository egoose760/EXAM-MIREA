import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

export let isSignin: boolean = false;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isCorrect = false

  login(myForm2: NgForm) {
    let myForm1:any = JSON.parse(String(window.localStorage.getItem('myForm')));
    if (myForm2.value.email == myForm1.email && myForm2.value.password1 == myForm1.password1){
      isSignin = true;
      this.isCorrect = true
      
    } else {
      this.isCorrect = false
      console.log(this.isCorrect)
    }
    console.log(myForm2.value.email, myForm1.email, myForm2.value.password1,myForm1.password1, myForm1)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
