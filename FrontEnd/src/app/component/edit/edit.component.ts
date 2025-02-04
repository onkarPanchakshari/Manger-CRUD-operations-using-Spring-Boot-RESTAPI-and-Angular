import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';
import { Manager } from '../../model/manager';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ManagerService } from '../../manager.service';

@Component({
  selector: 'app-edit',
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',

})
export class EditComponent implements OnInit {

  @Input() id!:number;

  model:any;
 
     m2:Manager[]=[];
    m3 =new Manager();
   
  
  
  constructor(private rs:ActivatedRoute,private ms:ManagerService,private re:Router){}

  ngOnInit(){
     this.id = Number(this.rs.snapshot.paramMap.get('id'));
     this.ms.four(this.id).subscribe(signalcue => {this.m3=signalcue});
  }

  public disp()
  {
    return this.ms.two().subscribe(data=>{this.m2=data});
  }

  

  public editedData(mid:number,mm:Manager)
  {
    this.ms.five(mid,mm).subscribe();
  }


  // public navigatetodisplay()
  // {
  //   setTimeout(()=>(5000));
  //   this.re.navigate(["/MangDisplay"])
  // }


}
