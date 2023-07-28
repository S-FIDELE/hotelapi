import { Injectable } from '@angular/core';
import { RoomList } from './rooms/rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  private roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 1000,
      photos: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Ffr%2Fphotos%2Fh%25C3%25B4tel&psig=AOvVaw3WSZXWQobuip-q2asx5axX&ust=1691526952449000&source=images&cd=vfe&opi=89978449&ved=0CA4QjRxqFwoTCNjNr4izy4ADFQAAAAAdAAAAABAE',
      checkinTime: new Date('06-August-2023'),
      checkouTime: new Date('07-August-2023'),
      rating: 4.85558,
    },
    {
      roomNumber: 2,
      roomType: 'Private Suite',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 15000,
      photos: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Ffr%2Fphotos%2Fh%25C3%25B4tel&psig=AOvVaw3WSZXWQobuip-q2asx5axX&ust=1691526952449000&source=images&cd=vfe&opi=89978449&ved=0CA4QjRxqFwoTCNjNr4izy4ADFQAAAAAdAAAAABAE',
      checkinTime: new Date('06-August-2023'),
      checkouTime: new Date('07-August-2023'),
      rating: 3.44,
    },
    {
      roomNumber: 3,
      roomType: 'Palace',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 35000,
      photos: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Ffr%2Fphotos%2Fh%25C3%25B4tel&psig=AOvVaw3WSZXWQobuip-q2asx5axX&ust=1691526952449000&source=images&cd=vfe&opi=89978449&ved=0CA4QjRxqFwoTCNjNr4izy4ADFQAAAAAdAAAAABAE',
      checkinTime: new Date('06-August-2023'),
      checkouTime: new Date('07-August-2023'),
      rating: 5.656,
    }
    // Add more rooms as needed
  ];

  getRooms() {
    return this.roomList;
  }

  // Other methods and properties
}
