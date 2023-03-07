import { Component} from '@angular/core';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent {
  constructor(private resto: RestoService) { }
  //create empty collection array
  collection:any=[]
  
  ngOnInit() :void{                         //get api data, store in collection array and display
    this.getListData()
  }

  getListData(){
    this.resto.getList().subscribe((result)=>{
      this.collection=result;
      console.log(this.collection)
    });
  }

  deleteResto(item:any) :any{               //delete selected id restaurant, display list
    this.collection.splice(item-1,1)
    this.resto.deleteResto(item).subscribe((result: any)=>{
      console.log("result: ",result)
    });
  }  
}