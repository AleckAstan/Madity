import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';

declare var navbar_js: any;
function test() {
  const nav = document.getElementById('navbar');
  console.log(nav);

  window.addEventListener('scroll', () => {
    console.log('test');
  });
}
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements AfterViewInit {
  constructor(@Inject(DOCUMENT) private document: any) {}

  ngAfterViewInit() {
    const navbar = document.querySelector('.navbar');
    const collapse = document.querySelector('.navbar-toggler');
    const icon = document.querySelector('.navbar-toggler-icon');
    const main_nav = document.getElementById('main_nav');

    // if (window.scrollY < 100) {
    //   navbar?.setAttribute('style', 'background-color: transparent;');
    //   navbar?.classList.remove('navbar_scrolled');
    // } else {
    //   navbar?.classList.add('navbar_scrolled');
    // }

    window.addEventListener('scroll', () => {
      // console.log(e);

      let scroll = window.scrollY;
      // console.log(scroll);
      if (scroll < 150) {
        navbar?.setAttribute('style', 'background-color: transparent;');
        navbar?.classList.remove('navbar_scrolled');
      } else {
        navbar?.classList.add('navbar_scrolled');
      }
    });
    icon?.addEventListener('click', () => {
      if (collapse?.getAttribute('aria-expanded') == 'true') {
        navbar?.setAttribute('style', 'background-color: #f4623a;');
      } else {
        navbar?.setAttribute('style', 'background-color: transparent;');
      }
    });

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        navbar?.setAttribute('style', 'top:0');
        main_nav?.classList.remove('show');
        // navbar.style.top = "0";
      } else {
        // navbar.style.top = "-50px";
        main_nav?.classList.remove('show');
        navbar?.setAttribute('style', 'top:-5rem');
      }
      prevScrollpos = currentScrollPos;
    };
  }
}
