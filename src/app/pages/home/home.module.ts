import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { homeComponent } from './home.component';






@NgModule({
  imports: [
    ThemeModule
  ],
  declarations: [
    homeComponent
  ],
  providers: [

  ],
})
export class homeModule { }
