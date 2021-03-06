import { Component, OnInit, ViewChild } from '@angular/core';
import { GetBanksService } from '../get-banks.service';
import { bankDetail } from '../models/bank.model';
import { MatPaginator } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  collection = [];
  rowsOnPage = 5;
  public rowsOnPageSet = [5, 15, 30, 50, 100, 500, 1000];
  p;
  city;
  bankDetail: bankDetail[] = [];
  showSpinner = false;
  showData = false;
  spinner: string;
  searchText: string;

  constructor(private bankService: GetBanksService) { }

  ngOnInit() {
    this.bankDetail = this.bankService.getBankDetaiObj();
    if (JSON.parse(localStorage.getItem('bankdetails'))) {
      this.bankDetail = JSON.parse(localStorage.getItem('bankdetails'));
      this.city = this.bankDetail[0].city;
      this.showSpinner = false;
      this.showData = true;
    }
  }

  bankDetails(event: any) {
    this.showSpinner = true;
    this.showData = false;
    if (JSON.parse(localStorage.getItem(this.city))) {
      this.bankDetail = JSON.parse(localStorage.getItem(this.city));
      this.showSpinner = false;
      this.showData = true;
    } else {
      this.bankService.getBankMethod(this.city).subscribe(data => {
        this.bankDetail = <bankDetail[]>data;
        localStorage.setItem('bankdetails', JSON.stringify(this.bankDetail));
        localStorage.setItem(this.city, JSON.stringify(this.bankDetail));
        this.showSpinner = false;
        this.showData = true;
      })
    }
  }
}
