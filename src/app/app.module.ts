import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatPaginatorModule, MatProgressSpinnerModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GetBanksService } from './get-banks.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FilterPipe } from './filter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatPaginatorModule
  ],
  providers: [GetBanksService, HttpClientModule],
  bootstrap: [AppComponent],

})
export class AppModule { }
