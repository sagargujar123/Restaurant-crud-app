import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { RestoService } from '../resto.service'

@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit {
  constructor(private resto: RestoService) { }
  
  addResto = new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    address: new FormControl('',Validators.required)
  })
  get name(){return this.addResto.get('name')}
  get email(){return this.addResto.get('email')}
  get address(){return this.addResto.get('address')}

  ngOnInit(): void {
  }

  alert:boolean=false
  collectResto(validData:any) {
    this.resto.saveResto(this.addResto.value).subscribe((result) => {
      console.log("result: ", result)
      console.log(validData)
      this.alert=true
      this.addResto.reset({})
    })
  }
  
  closeButton(){
    this.alert=false
  }
}
