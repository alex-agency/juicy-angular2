import {BaseComponent} from '../../frameworks/core.framework/index';
import {MdCard} from '@angular2-material/card';

@BaseComponent({
  selector: 'sd-about',
  templateUrl: './app/components/about/about.component.html',
  styleUrls: ['./app/components/about/about.component.css'],
  directives: [MdCard]
})
export class AboutComponent  {
  
}
