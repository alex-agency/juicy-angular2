// angular
import {provide} from '@angular/core';

// libs
import {Store} from '@ngrx/store';

// app
import {WindowService, ConsoleService, LogService} from '../../index';

// mocks
import {StoreMock} from '../mocks/store.mock';
import {WindowMock} from '../mocks/window.mock';

export function TEST_CORE_PROVIDERS(options?: any): any[] {
  // options:
  // window:   = custom window mock (mainly for changing out language)

  let providers = [
    provide(ConsoleService, { useValue: console }),
    provide(WindowService, { useClass: (options && options.window) || WindowMock }),
    LogService,
    provide(Store, { useClass: StoreMock })
  ]; 
  
  return providers;
}
