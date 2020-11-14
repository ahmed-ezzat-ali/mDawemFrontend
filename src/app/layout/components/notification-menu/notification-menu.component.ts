import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'md-notification-menu',
  templateUrl: './notification-menu.component.html',
  styleUrls: ['./notification-menu.component.scss']
})
export class NotificationMenuComponent implements OnInit {
  public notifications = [
    {
      text: 'You have 3 new orders as asd asd asd .',
      time: 'just now',
      isRead: true
    }, {
      text: 'Database error asd as',
      time: '1 min',
      isRead: false
    }, {
      text: 'The Death Star is built!we wef',
      time: '2 hours',
      isRead: true
    }, {
      text: 'sdf wef wefwe',
      time: '5 days',
      isRead: false
    },
  ];
  constructor() { }

  ngOnInit(): void {
    
  }

}
