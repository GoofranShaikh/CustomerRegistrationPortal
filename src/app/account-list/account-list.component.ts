import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ENOSPC } from 'node:constants';
import { endianness } from 'node:os';
import { AccountService } from '../account.service';



@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {
  
  
  

  constructor(private service: AccountService) { }
  AccountList: any = [];
  
  
 
 


  ngOnInit(): void {
    this.getAccountList();
  
    
  }
  getAccountList() {
    
    this.service.getAccountList().subscribe(data => {
      this.AccountList = data;
      // this.AccountList=data;

    });
  }



  

  submitFunction( NewCustomer:any){
    //console.log(NewCustomer);
    this.service.postAccountList(NewCustomer)
    .subscribe(
      data =>console.log('success', data),
      
      
    )
  };

  Delete(Id: any ){
   let del= confirm("Are you sure you want to Delete");
   
   if(Boolean(del)==true){
     console.log(Id);
     this.service.deleteCurrent(Id).subscribe(data=>{
       console.log(data,"deleted successfully")
     })

   }
  }
  
  }
  



