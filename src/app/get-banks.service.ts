import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { bankDetail } from './models/bank.model';

const httpOptions = {
  headers: new HttpHeaders({ 'content-type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class GetBanksService {
  constructor(private http: HttpClient) { }

  url = 'https://vast-shore-74260.herokuapp.com/banks?city='

  getBankMethod(city: String) {
    const getUrl = `${this.url}` + city;

    return this.http.get<any>(getUrl, httpOptions);
  }

  getBankDetaiObj(){
    var bankDetailObj: bankDetail[] = {
      ifsc: null,
      bank_id: null,
      branch: null,
      address: null,
      city: null,
      district: null,
      state: null,
      bank_name: null
    }as any;
    return bankDetailObj;
  }
}
