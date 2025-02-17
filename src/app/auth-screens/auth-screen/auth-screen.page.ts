import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-screen',
  templateUrl: './auth-screen.page.html',
  styleUrls: ['./auth-screen.page.scss'],
  standalone: false
})
export class AuthScreenPage implements OnInit {

  segmentValue = '1';

  constructor() { }

  ngOnInit() {
  }

  segmentChanged(event: any) {
    console.log(event);
    this.segmentValue = event.detail.value;
  }

}
