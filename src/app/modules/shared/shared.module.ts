import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxMaskModule, IConfig } from 'ngx-mask';

const maskConfig: Partial<IConfig> = {
  validation: false,
};


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxMaskModule.forRoot(maskConfig)
  ],
  exports: [
    NgxMaskModule
  ]
})
export class SharedModule { }
