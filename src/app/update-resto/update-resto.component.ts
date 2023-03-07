import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { RestoService } from '../resto.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {
  editResto = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required)
  })
  get name() { return this.editResto.get('name') }
  get email() { return this.editResto.get('gmail') }
  get address() { return this.editResto.get('address') }

  responseItem: any;
  alert: Boolean = false;

  constructor(private router: ActivatedRoute, private resto: RestoService) { }
  ngOnInit(): void {
    this.getRestoValue()
  }

  getRestoValue() {
    console.log(this.router.snapshot.params['id']);
    this.resto.getCurrentResto(this.router.snapshot.params['id']).subscribe((result) => {
      this.responseItem = result
      console.log('2 responseItem: ', this.responseItem);

      this.setRestoValue()
    })
  }

  setRestoValue() {
    this.editResto.patchValue({
      name: this.responseItem.name,
      email: this.responseItem.email,
      address: this.responseItem.address
    })
  }

  updateResto(validData: any) {
    this.resto.updateRestoValue(this.router.snapshot.params['id'], this.editResto.value).subscribe((result) => {
      console.log(result);
      console.log(validData);
      this.alert = true;
      this.editResto.reset({});
    })
  }

  closeButton() {
    this.alert = false
  }
}
