// libs
import {MdToolbar} from '@angular2-material/toolbar';

// app
import {BaseComponent, LogService} from '../../frameworks/core.framework/index';
import {LangSwitcherComponent} from '../../frameworks/i18n.framework/index';
import {NavbarComponent} from './navbar.component';

@BaseComponent({
  selector: 'sd-toolbar',
  templateUrl: './app/components/app/toolbar.component.html',
  styleUrls: ['./app/components/app/toolbar.component.css'],
  directives: [MdToolbar, LangSwitcherComponent, NavbarComponent]
})
export class ToolbarComponent {
  
  constructor(private log: LogService) {}
  
  public openLanguages(e: any): void {
    this.log.debug('openLanguages');
  }
}
