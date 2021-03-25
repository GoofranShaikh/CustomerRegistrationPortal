import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable} from 'rxjs';
import { $ } from 'protractor';
import { __param } from 'tslib';



@Injectable({
  providedIn: 'root'
})
export class AccountService {
  readonly APIUrlCreate="http://127.0.0.1:8000/Accounts/create/";
  readonly APIUrlAccounts="http://127.0.0.1:8000/Accounts/";
  readonly APIUrlgetIndividual="http://127.0.0.1:8000/Accounts/get/";
  readonly APIUrlUpdate="http://127.0.0.1:8000/Accounts/updateAccount/";
  constructor(private http: HttpClient) { }

  getAccountList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrlAccounts);

  }
  postAccountList(NewCustomer:any):Observable<any>{
    return this.http.post<any>(this.APIUrlCreate,NewCustomer);
  }

  getCurrent(id:any):Observable<any[]>{
    return this.http.get<any[]>(this.APIUrlgetIndividual+ `${id}/`)

  }

  updateCurrent(id:any,data:any):Observable<any[]>{
    return this.http.put<any[]>(this.APIUrlgetIndividual+`updateAccount` +`/${id}/`,data)

  }
  deleteCurrent(id:any):Observable<any[]>{
    return this.http.delete<any[]>(this.APIUrlAccounts+`deleteAccount`+`/${id}/`)

  }
}

