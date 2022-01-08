import { Component, OnInit } from '@angular/core';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  faArrowRight = faArrowRight;

  constructor() {}

  ngOnInit(): void {}
}
