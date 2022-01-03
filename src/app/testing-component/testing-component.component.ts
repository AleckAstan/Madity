import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing-component',
  templateUrl: './testing-component.component.html',
  styleUrls: ['./testing-component.component.scss']
})
export class TestingComponentComponent implements AfterViewInit {

  constructor(@Inject(DOCUMENT) private document: any) { 
    
  }

  ngAfterViewInit() {
    let el_autohide = document.querySelector(".autohide");
    
      let last_scroll_top = 0;
      window.addEventListener('scroll', ()=>{
        let scroll_top = window.scrollY;
        if(last_scroll_top > scroll_top){
          el_autohide?.classList .remove('scrolled-down');
          el_autohide?.classList .add('scrolled_up');
        }
        else{
          el_autohide?.classList .add('scrolled-down');
          el_autohide?.classList .remove('scrolled_up');         
        }
        last_scroll_top = scroll_top;
      })

    
  }

}
