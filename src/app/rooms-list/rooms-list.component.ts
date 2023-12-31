import { outputAst } from '@angular/compiler';
import { RoomList } from './../rooms/rooms';
import { Component, EventEmitter, Input, OnInit, Output, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';



@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit,OnChanges {
  @Input() rooms: RoomList[] = [];
  @Input() title : string = ''; 

  @Output() selectedRoom = new EventEmitter<RoomList>(); 

  constructor() {}

	ngOnChanges(changes: SimpleChanges): void {
		console.log(changes); 
		if(changes['title']){
			this.title = changes['title'].currentValue.toUpperCase(); 
		}
	}

  ngOnInit(): void {}

  selectRoom(room: RoomList){
	this.selectedRoom.emit(room); 
}
}
