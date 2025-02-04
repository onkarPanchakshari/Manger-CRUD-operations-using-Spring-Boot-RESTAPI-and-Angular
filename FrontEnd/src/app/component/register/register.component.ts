import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { ActivatedRoute, RedirectCommand, RouterLink, RouterModule } from '@angular/router';
import { Manager } from '../../model/manager';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ManagerService } from '../../manager.service';
import { LoginComponent } from "../login/login.component";

@Component({
  selector: 'app-register',
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  model :any;
  m1 = new Manager();
  
 constructor(private ms:ManagerService,private rs:ActivatedRoute){}

  public SaveManagerInfo(mm:Manager)
  {
  console.log(mm);
  
  let a=document.getElementsByName('mpass');
  let b= document.getElementsByName('mcpass');

  if(a == b){
  this.ms.one(mm).subscribe();
  alert("Registertion Sucessfull");
  }else
  {
    alert("password missMatch");
  }
  }

}
