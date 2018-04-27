import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HobiesPipe } from './hobies.pipe';
import {PromiseServiceService} from './promise-service.service'
import{ObservableServiceService} from './observable-service.service';
import { RegisterComponent } from './register/register.component';
import { MenuComponent } from './menu/menu.component';
import {Routes,RouterModule} from '@angular/router'
import {AuthService} from './auth-service.service';
import { AsyncComponent } from './async/async.component'
import {HttpClientModule} from '@angular/common/http'
import { NgProgressModule } from 'ngx-progressbar';
import { UserInfoComponent } from './user-info/user-info.component';
import {AgGridModule} from "ag-grid-angular/main";
import { RedComponentComponent } from './red-component/red-component.component'
import { DataTablesModule } from 'angular-datatables';
import { AngularTableComponent } from './angular-table/angular-table.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {
    path: 'home',
    component:HomeComponent,canActivate:[AuthService]
  },
  {
    path: 'register',
    component:RegisterComponent,canActivate:[AuthService]
  },
  {
    path: 'Async',
    component:AsyncComponent ,canActivate:[AuthService]
  },
  {
    path: 'userInfo',
    component:UserInfoComponent
  },
  {
    path: 'AngTable',
    component:AngularTableComponent
  }
 
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HobiesPipe,
    RegisterComponent,
    MenuComponent,
    AsyncComponent,
    UserInfoComponent,
    RedComponentComponent,
    AngularTableComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgProgressModule,
    DataTablesModule,
    AgGridModule.withComponents(
      [RedComponentComponent]),
    RouterModule.forRoot(routes),
    
  ],
  providers: [PromiseServiceService,ObservableServiceService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
