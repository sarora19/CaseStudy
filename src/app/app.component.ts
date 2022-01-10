import { Component } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiServiceService } from './api-service.service';
import { Case } from './model/Case';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private casesUrl = 'https://reqres.in/api/products';  
  rowData: any = [];

  title = 'home-page';

  columnDefs = [
    // {headerName:"Case No", field:"case_no", width:90,
    // menuTabs: ['filterMenuTab'], filter: true },
    // {headerName:"Branch", field:"branch", width:90, filter: true },
    // {headerName:"Reporting Method", field:"reporting_method", width:120, filter: true },
    // {headerName:"Date", field:"date", width:120, filter: true },
    // {headerName:"Time", field:"time", width:90, filter: true }, 
    // {headerName:"Category", field:"category", width:90, filter: true }, 
    // {headerName:"Sub Category", field:"sub-category", width:120, filter: true }, 
    // {headerName:"Priority", field:"priority", width:120, filter: true },
    // {headerName:"Nature", field:"nature", width:120, filter: true },
    // {headerName:"Case Manager", field:"case-manager", width:120, filter: true },
    // {headerName:"Case Reporter", field:"case-reporter", width:120, filter: true },
    // {headerName:"Case Status", field:"case-status", width:120, filter: true }
    
    {headerName:"ID", field:"id", width:100,
    menuTabs: ['filterMenuTab'], filter: true },
    {headerName:"Name", field:"name", width:100, filter: true },
    {headerName:"Year", field:"year", width:100, filter: true },
    {headerName:"Color", field:"color", width:100, filter: true },
    {headerName:"Pantone Value", field:"pantone_value", width:100, filter: true }
  ];

  constructor(private apiService: ApiServiceService)
  {
      apiService.getProductData().subscribe(data => {
        console.log(data.data);
        this.rowData = data.data;
      });
  }   
  }
