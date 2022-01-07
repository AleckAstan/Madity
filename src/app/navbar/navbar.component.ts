import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';

declare var navbar_js : any;
function test(){
  const nav = document.getElementById('navbar');
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
export class NavbarComponent implements AfterViewInit {
  navy = 'navy';
  constructor(@Inject(DOCUMENT) private document: any) { 
    
  }

  ngAfterViewInit() {
    
    const navbar  = document.querySelector('.navbar') ;

    if(window.scrollY<100){
      navbar?.setAttribute("style", "background-color: transparent;");
      navbar?.classList .remove("navbar_scrolled");
    }else{
      navbar?.classList .add("navbar_scrolled");
    }

    window.addEventListener('scroll',() => {
      // console.log(e);
      
    let scroll =  window.scrollY;
    // console.log(scroll);
    if(scroll<150){
      navbar?.setAttribute("style", "background-color: transparent;");
      navbar?.classList .remove("navbar_scrolled");
    }else{
      navbar?.classList .add("navbar_scrolled");
    }
    })
  }

}
