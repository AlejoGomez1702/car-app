import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
  standalone: false
})
export class IntroPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goToLogin() {
    this.router.navigateByUrl('/auth-screen', { replaceUrl: true });
  }

}
