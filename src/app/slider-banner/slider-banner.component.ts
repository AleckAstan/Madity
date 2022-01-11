import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slider-banner',
  templateUrl: './slider-banner.component.html',
  styleUrls: ['./slider-banner.component.scss']
})
export class SliderBannerComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

}
