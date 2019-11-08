import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FirstProject';
  Name="Reena";
  Roll_no=2914004417;
  buttonState=true;
  serverStatus="offline";
  flag=true;


  //property binding
  constructor(){
    setTimeout(()=>{
      this.buttonState=false;
    },3000);
  }

  toggleserverStatus(){
    if (this.serverStatus==="offline"){
      this.serverStatus="online";
    }
    else{
      this.serverStatus="offline";
    }
    return this.serverStatus;
  }
  //directives
  toggleFlag(){
    this.flag=!this.flag;
    return this.flag;
  }

  //ngFor
  studentNames=['Reena Garg','Prachi sharma','Satyam Dhawan'];
  newName="";
  addNewName(){
    if (this.newName!="")
    {
      this.studentNames.push(this.newName);
     }
    
   }
}
