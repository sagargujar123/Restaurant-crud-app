import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RestoService } from '../resto.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  alert: boolean = false

  register = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })
  get name() { return this.register.get('name') }
  get email() { return this.register.get('email') }
  get password() { return this.register.get('password') }

  constructor(private resto: RestoService) { }
  ngOnInit(): void {
  }

  registerUser(validData: any) {
    this.resto.saveRegisterUser(this.register.value).subscribe((result) => {
      console.log(result);
      console.log(validData)
      this.alert = true
      this.register.reset({})
    })
  }


  closeButton() {
    this.alert = false
  }
}
