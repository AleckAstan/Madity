import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';

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
export class NavbarComponent implements AfterViewInit {
  navy = 'navy';
  constructor(@Inject(DOCUMENT) private document: any) { 
    
  }

  ngAfterViewInit() {
    
    const a_navbar  = document.querySelector('.a_navbar') ;

    if(window.scrollY<150){
      a_navbar?.setAttribute("style", "background-color: transparent;");
      a_navbar?.classList .remove("navbar_scrolled");
    }else{
      a_navbar?.classList .add("navbar_scrolled");
    }

    window.addEventListener('scroll',(e)=>{
      console.log(e);
      
    let scroll =  window.scrollY;
    console.log(scroll);
    if(scroll<150){
      a_navbar?.setAttribute("style", "background-color: transparent;");
      a_navbar?.classList .remove("navbar_scrolled");
    }else{
      a_navbar?.classList .add("navbar_scrolled");
    }
    })
  }

}
