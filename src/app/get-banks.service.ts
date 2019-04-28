import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { tap } from 'rxjs/Operators';

const httpOptions = {
  headers: new HttpHeaders({ 'content-type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class GetBanksService {

  constructor(private http: HttpClient) { }

  url = 'https://vast-shore-74260.herokuapp.com/banks?city='

  getBankMethod(city: string) {
    const getUrl = `${this.url}`+ city;
    
    return this.http.get<any>(getUrl, httpOptions).pipe(
      tap(data => {
        localStorage.setItem("BankDetail", JSON.stringify(data));
      })
    )
  }
}
