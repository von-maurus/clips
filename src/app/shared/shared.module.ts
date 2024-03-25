import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { ModalService } from '../services/modal.service';
import { TabsContainerComponent } from './tabs-container/tabs-container.component';
import { TabComponent } from './tab/tab.component';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, provideEnvironmentNgxMask } from 'ngx-mask';
import { AlertComponent } from './alert/alert.component';

/**
 * This module defines shared resoruces between our app components, like pipes, components and directives.
 */

@NgModule({
  declarations: [
    ModalComponent,
    TabsContainerComponent,
    TabComponent,
    InputComponent,
    AlertComponent
  ],
  imports: [CommonModule, ReactiveFormsModule, NgxMaskDirective],
  exports: [ModalComponent, TabsContainerComponent, TabComponent, InputComponent, AlertComponent],
  providers: [
    ModalService,
    provideEnvironmentNgxMask()
  ]
})
export class SharedModule { }
