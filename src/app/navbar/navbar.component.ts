import { Component, OnInit } from '@angular/core';

declare var navbar_js : any;
function test(){
  const nav = document.getElementById('a_navbar');
  console.log(nav);
  
  window.addEventListener('scroll', () => {
      console.log("test");
  });
}
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navy = 'navy';
  constructor() { }

  ngOnInit() {

  }

}
