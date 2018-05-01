import { Component, OnInit } from '@angular/core';
import {ObservableServiceService} from '../observable-service.service';
import {Person} from '../Person'
import {DataTableModule} from 'primeng/datatable';
@Component({
  selector: 'app-material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.css']
})
export class MaterialTableComponent implements OnInit {
  persons: Person[] = [];
  cols:any[];

  constructor(private ObjObs:ObservableServiceService) {

   }

  ngOnInit() {
    this.ObjObs.getRegisterUser()
    .subscribe(persons => {
      this.persons = persons;
    });

    this.cols = [
      {field: 'id', header: 'ID'},
      {field: 'Email', header: 'Email'},
      {field: 'Password', header: 'Password'},
      {field: 'language', header: 'Language'}
  ];
  }

}
