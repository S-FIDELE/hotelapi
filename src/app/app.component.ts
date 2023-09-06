import { LoggerService } from './logger.service';
import { AfterViewInit, Component, ElementRef, OnInit, Optional, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  //template: `<h1>Hello World from inline template!</h1>
  //<p>Angular is Awesome</p>

  //`
    styleUrls: ['./app.component.css'],
//  styles: [
//    `
//      h1 {
//        color: red;
//      }
//    `,
  
})
export class AppComponent implements OnInit {
	
  title = 'hotelinventoryapp';

//  loginTypes = 'Admin';

@ViewChild('name',  { static: true}) name! : ElementRef; 
constructor(@Optional() private loggerService: LoggerService){

}

ngOnInit() {
	this.loggerService?.log('AppComponent.ngOnInit()'); 
	this.name.nativeElement.innerText = "Hilton Hotel"; 
	//Called after the constructor, initializing input properties, and the first call to ngOnChanges.
	//Add 'implements OnInit' to the class.
	//console.log(this.name.nativeElement.innerText = "Hilton Hotel")
}

//  @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;

//  ngAfterViewInit(){
//	  const ComponentRef = this.vcr.createComponent(RoomsComponent); 
//	  ComponentRef.instance.numberOfRooms = 50; 
//  }
 
}
