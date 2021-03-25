import { Component, OnInit } from '@angular/core';
import {AccountService} from '../account.service';
import { FormGroup, FormControl } from '@angular/forms';

import{ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-account-update',
  templateUrl: './account-update.component.html',
  styleUrls: ['./account-update.component.css']
})
export class AccountUpdateComponent implements OnInit {

  updateForm = new FormGroup({
    name: new FormControl(''),
    CreatedDate: new FormControl(''),
    address: new FormControl(''),
    CreatedBy: new FormControl(''),
    ModifiedDate: new FormControl(''),
    ModifiedBy: new FormControl(''),
    Gender: new FormControl(''),
    Active: new FormControl(''),
    MobileNo: new FormControl('')
  });
  
  constructor(private service:AccountService, private route:ActivatedRoute) { }
  Individual:any=[];
  ngOnInit(): void {
    this.service.getCurrent(this.route.snapshot.params.id).subscribe((result)=>{
     // console.log(data);
    // this.Individual=data;
    
      this.updateForm = new FormGroup({
        name: new FormControl(result [<any>'name']),
        CreatedDate: new FormControl(result [<any>'CreatedDate']),
        address: new FormControl(result [<any>'address']),
        CreatedBy: new FormControl(result [<any>'CreatedBy']),
        ModifiedDate: new FormControl(result [<any>'ModifiedDate']),
        ModifiedBy: new FormControl(result [<any>'ModifiedBy']),
        Gender: new FormControl(result [<any>'Gender']),
        Active: new FormControl(result [<any>'Active']),
        MobileNo: new FormControl(result [<any>'MobileNo']),
      });
    })
  }

  Update(){
    this.service.updateCurrent(this.route.snapshot.params.id,this.updateForm.value).subscribe((result)=>{
      console.log(result,'successfullyUpdated')
      
    })
  }

}
