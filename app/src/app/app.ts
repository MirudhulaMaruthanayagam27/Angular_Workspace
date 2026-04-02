import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Navbar } from './Component/navbar/navbar';
import { Videopage } from './Component/videopage/videopage';
import { Bind } from './Binding/bind/bind';
import { Classbind } from './Binding/classbind/classbind';

//ngifLogin
import { Loginif } from './Directive/loginif/loginif';

//messagecheck-ngf,ngfor
import { Msgif } from './Directive/msgif/msgif';

//ngfor
import { Listngfor } from './Directive/listngfor/listngfor';

//ngfor-Table
import { Tablefor } from './Directive/tablefor/tablefor';

//ngswitch-role,orderstatus
import { Switchrole } from './Directive/switchrole/switchrole';

//Strcutural Directive
import { Allstrc } from './Directive/allstrc/allstrc';

//directive
import { Direct } from './Directive/direct/direct';

//Custom pipe
import { Pipe1 } from './Pipes/pipe1/pipe1';

//async1-fetch data 
import { Async1 } from './Pipes/async1/async1';

//timer-async pipe
import { Timer } from './Pipes/timer/timer';

//parent-child
import { ParentCard } from './CompCommuication/code1/parent-card/parent-card';

//parent-child-code2
import { Parent } from './CompCommuication/code2/parent/parent';

//parent-child-code3
import { Parentcc } from './CompCommuication/code3/parentcc/parentcc';

//parent1,parent2
//import { Parent1 } from './CompCommunication2/parent1/parent1';
//import { Parent2 } from './CompCommunication2/parent2/parent2';

import { Productdata } from './Services/service1/productdata/productdata';
import { Productlist } from './Services/service2/productlist/productlist';

//service-MiniProject
import { ProductPage } from './Services/Miniproject/product-page/product-page';
import { IconC } from './Services/Miniproject/icon-c/icon-c';
import { FinalPage } from './Services/Miniproject/final-page/final-page';

//useclass
import { Userscompenent } from './useclass/Compon/userscompenent/userscompenent';
//usevalue
import { Productlistvalue } from './usevalue/productlistvalue/productlistvalue';
//get1
import { Httpsg1 } from './Http/1.get1/httpsg1/httpsg1';
import { Appgit } from './Http/2.get2/appgit/appgit';
import { Appgit2 } from './Http/appgit2/appgit2';
import { Appgit3 } from './Http/3.get3/appgit3/appgit3';
import { Post1 } from './Http/4.post1/post1/post1';
//get with post
import { Authentication } from './Http/5.GetwithPost/authentication/authentication';
import { UserListComponent } from './Http2-Put/user-list-component/user-list-component';
//Post client
@Component({
  selector: 'app-root',
  imports: [
    //RouterOutlet,
    Videopage,Navbar,Bind,
    Classbind,FormsModule,
    Loginif,
    Msgif,
    Listngfor,
    Tablefor,
    Switchrole,
    Allstrc,
    Direct,
    Pipe1,
    Async1,
    Timer,
    ParentCard,
    Parent,
    Parentcc,
    //Parent1,
    //Parent2
    Productdata,
    Productlist,
    //MiniProject
    ProductPage,
    IconC,
    FinalPage,
    Userscompenent,
    Productlistvalue,
    Httpsg1,
    Appgit,
    Appgit2,
    Appgit3,
    Post1,
    Authentication,
    //put
    UserListComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('app');
}
