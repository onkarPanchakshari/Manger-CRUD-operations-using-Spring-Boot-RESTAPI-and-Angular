import { Component, Input, OnInit } from '@angular/core';
import { Manager } from '../../model/manager';
import { ManagerService } from '../../manager.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { EditComponent } from '../edit/edit.component';

@Component({
  selector: 'app-display',
  imports: [CommonModule, FormsModule, RouterModule,EditComponent],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent implements OnInit
 {
  // @Input data number;
  // @Input() x: any.mid!:Manager;

  model:any;
  m1:Manager[]=[];
  m2 =new Manager();
  m3 =new Manager();
  selectedId?:number;
  // SelectedId =this.edit.mid;

  constructor(private ms:ManagerService,private rs:Router){}
 


  ngOnInit(): void {
    this.disp();
    
  }

  public disp()
  {
    return this.ms.two().subscribe(data=>{this.m1=data});
  }

  public del(mid:number)
  {
    this.ms.three(mid).subscribe();
    this.disp()
  }

  public edit(mid:number)
  {
    this.selectedId=mid;
    // this.ms.four(mid).subscribe(signalcue => {this.m2=signalcue});
    this.disp();
  }

  navigateToEdit()
  {
    if(this.selectedId != undefined){
     this.rs.navigate(['/MageEdit',this.selectedId]);
    }
  }

  public editedData(mm:Manager,mid:number)
  {
    // this.ms.five(mid,mm).subscribe();


  }
}
