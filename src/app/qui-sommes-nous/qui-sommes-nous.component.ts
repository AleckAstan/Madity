import { Component, OnInit } from '@angular/core';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-qui-sommes-nous',
  templateUrl: './qui-sommes-nous.component.html',
  styleUrls: ['./qui-sommes-nous.component.scss'],
})
export class QuiSommesNousComponent implements OnInit {
  faArrowRight = faArrowRight;

  constructor() {}

  ngOnInit(): void {}
}
