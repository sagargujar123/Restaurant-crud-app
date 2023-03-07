import { Component, OnInit } from '@angular/core';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registerData: any = [];

  constructor(private resto: RestoService) { }
  ngOnInit(): void {
    this.getUserData()
  }

  getUserData() {
    this.resto.getRegisterUser().subscribe((result) => {
      this.registerData = result;
      console.log(this.registerData)
    });
  }

}
