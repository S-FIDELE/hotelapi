import { HeaderComponent } from './../header/header.component';
import { AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit, QueryList,
	 ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomList } from './rooms';
import { RoomsService } from '../rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent implements OnInit, AfterViewInit, AfterViewChecked, OnDestroy {
  hotelName = 'Hilton Hotel';
  numberOfRooms = 10;
  hideRooms = false;

  selectedRoom!: RoomList;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  title: string = 'Room List';
  roomList: RoomList[] = [];
	headerComponent: any;

  constructor(private roomsService: RoomsService) {}
	ngAfterViewInit(): void {
		throw new Error('Method not implemented.');
	}
	ngAfterViewChecked(): void {
		throw new Error('Method not implemented.');
	}
	ngOnDestroy(): void {
		throw new Error('Method not implemented.');
	}

  ngOnInit(): void {
    console.log(this.headerComponent);
    this.roomList = this.roomsService.getRooms();
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'Rooms List';
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: 4,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 500,
      photos:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Ffr%2Fphotos%2Fh%25C3%25B4tel&psig=AOvVaw3WSZXWQobuip-q2asx5axX&ust=1691526952449000&source=images&cd=vfe&opi=89978449&ved=0CA4QjRxqFwoTCNjNr4izy4ADFQAAAAAdAAAAABAE',
      checkinTime: new Date('09-Jan-2022'),
      checkouTime: new Date('11-Jan-2022'),
      rating: 4.5,
    };

    this.roomList.push(room);
  }

  // Other lifecycle hooks and methods
}
