import { Component, OnInit,NgZone } from '@angular/core';
import {HttpClientModule, HttpClient, HttpErrorResponse} from '@angular/common/http';
import {ObservableServiceService} from '../observable-service.service';
import { Subject } from 'rxjs/Subject';

class Person {
  id: number;
  Email: string;
  Password: string;
  language:string;
}
@Component({
  selector: 'app-angular-table',
  templateUrl: './angular-table.component.html',
  styleUrls: ['./angular-table.component.css']
})
export class AngularTableComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  persons: Person[] = [];
  message:string = '';
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject();

  constructor(private ObjObs:ObservableServiceService,private zone: NgZone) { }

  ngOnInit() {

    this.ObjObs.getRegisterUser()
    .subscribe(persons => {
      this.persons = persons;
      // Calling the DT trigger to manually render the table
      this.dtTrigger.next();
    });
    this.dtOptions={
      rowCallback: (row: Node, data: any[] | Object, index: number) => {
        const self = this;
        // Unbind first in order to avoid any duplicate handler
        // (see https://github.com/l-lin/angular-datatables/issues/87)
        $('td', row).unbind('click');
        $('td', row).bind('click', () => {
          self.someClickHandler(data);
        });
        return row;
      }
    };
  }
  someClickHandler(info: any): void {
    console.log(info);
    this.message = info[0] + ' - ' + info[1];
  }
  /*private extractData(res: Response) {
    const body = res.json();
    return body.data || {};
  }*/

}
