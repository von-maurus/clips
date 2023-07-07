import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';

/**
 * This module defines shared resoruces between our app components, like pipes, components and directives.
 */

@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ModalComponent]
})
export class SharedModule { }
