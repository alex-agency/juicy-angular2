import {t} from '../../test.framework/index';
import {AppConfigService} from './app-config.service';

export function main() {
  t.describe('app.framework: AppConfigService', () => {
    
    t.it('SUPPORTED_LANGUAGES', () => {
      t.e(AppConfigService.SUPPORTED_LANGUAGES.length).toBe(1);
      t.e(AppConfigService.SUPPORTED_LANGUAGES[0].code).toBe('en');
    });
  });
}
