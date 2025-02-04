import { Routes } from '@angular/router';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { DisplayComponent } from './component/display/display.component';
import { EditComponent } from './component/edit/edit.component';


export const routes: Routes = [

     
    {path:"MangReg",component:RegisterComponent},
    {path:"MangLogin",component:LoginComponent},
    {path:"MangDisplay",component:DisplayComponent},
    {path:"MageEdit/:id",component:EditComponent}

    
    
];
