import { Component } from '@angular/core';
import {
  faFacebookSquare,
  faGithubSquare,
  faInstagramSquare,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import {
  faArrowRight,
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  faArrowRight = faArrowRight;
  faFacebookSquare = faFacebookSquare;
  faGithub = faGithubSquare;
  faInstagram = faInstagramSquare;
  faLinkedIn = faLinkedin;
  faPhone = faPhone;
  faMail = faEnvelope;
  faLocation = faMapMarkerAlt;
  constructor() {}
}
