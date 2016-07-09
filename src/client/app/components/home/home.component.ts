// libs
import {Store} from '@ngrx/store';
import {MdButton} from '@angular2-material/button';
import {MdCard} from '@angular2-material/card';
import {MdInput} from '@angular2-material/input';
import {MdList} from '@angular2-material/list';

// app
import {FormComponent} from '../../frameworks/core.framework/index';
import {NameListService} from '../../frameworks/app.framework/index';

@FormComponent({
  selector: 'sd-home',
  templateUrl: './app/components/home/home.component.html',
  styleUrls: ['./app/components/home/home.component.css'],
  directives: [MdButton, MdCard, MdInput, MdList]
})
export class HomeComponent {
  public newName: string = '';
  constructor(private store: Store<any>, public nameListService: NameListService) { 

  }
  
  /*
   * @param newname  any text as input.
   * @returns return false to prevent default form submit behavior to refresh the page.
   */
  addName(): boolean {
    this.nameListService.add(this.newName);
    this.newName = '';
    return false;
  }
}
