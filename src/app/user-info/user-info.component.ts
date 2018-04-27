import { Component, OnInit } from '@angular/core';
import {HttpClientModule, HttpClient, HttpErrorResponse} from '@angular/common/http';
import {ObservableServiceService} from '../observable-service.service';
import {RedComponentComponent} from "../red-component/red-component.component";
import { NgProgress } from 'ngx-progressbar';
import{GridOptions} from 'ag-grid';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  userInfoData:any;
  errorMessage:string;
  private gridOptions:GridOptions;
  constructor(private objObs:ObservableServiceService) {
    /*this.gridOptions = <GridOptions>{};
        this.gridOptions.columnDefs = [
            {
                headerName: "ID",
                field: "id",
                width: 100
            },
            {
                headerName: "Value",
                field: "value",
                cellRendererFramework: RedComponentComponent,
                width: 100
            },

        ];
        this.gridOptions.rowData = [
            {id: 5, value: 10},
            {id: 10, value: 15},
            {id: 15, value: 20}
        ]*/
       
       // this.bindGrid();
   }

  ngOnInit() {
    this.getUserInfo();
   // this. bindGrid();
  }
  
  bindGrid()
  {
   // console.log(data);
    this.gridOptions = <GridOptions>{};
    this.gridOptions.columnDefs = [
        {
            headerName: "ID",
            field: "id",
            width: 100
        },
        {
            headerName: "Value",
            field: "value",
            cellRendererFramework: RedComponentComponent,
            width: 100
        },

    ];
    this.gridOptions.rowData = [
        {id: 5, value: 10},
        {id: 10, value: 15},
        {id: 15, value: 20}
    ]
  }
  getUserInfo()
  {
    console.log('calling User Info');
      this.objObs.getRegisterUser()
      .subscribe((responsedata:any)=>{
        this.userInfoData=responsedata;
      },
        err=>this.errorMessage=err
      )
  }
}
