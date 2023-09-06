import { RoomsService } from '../rooms.service';
import { EmployeeComponent } from './../employee/employee.component';
import {
  AfterContentInit,
  Component,
  ContentChild,
  Host,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  providers: [RoomsService]
})
export class ContainerComponent implements OnInit, AfterContentInit {
  @ContentChild(EmployeeComponent) employee!: EmployeeComponent;

  constructor(@Host() private roomsService: RoomsService) {}

  ngOnInit(): void {}
  
  ngAfterContentInit(): void {
    console.log(this.employee);
    this.employee.empName = 'Rick';
  }
}
{
}
