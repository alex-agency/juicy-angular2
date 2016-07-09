// app
import {RouteComponent} from '../../frameworks/core.framework/index';
import {MdButton} from '@angular2-material/button';

@RouteComponent({
  selector: 'sd-navbar',
  templateUrl: './app/components/app/navbar.component.html',
  styleUrls: ['./app/components/app/navbar.component.css'],
  directives: [MdButton]
})
export class NavbarComponent {
}
