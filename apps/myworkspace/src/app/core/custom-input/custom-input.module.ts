import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { InputAutocompleteComponent } from './input-autocomplete/input-autocomplete.component';
import { InputLoaderComponent } from './input-loader/input-loader.component';
import { InputTextComponent } from './input-text/input-text.component';

@NgModule({
  declarations: [
    InputLoaderComponent, InputTextComponent, InputAutocompleteComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    InputTextComponent, InputAutocompleteComponent
  ],
  exports: [
    InputLoaderComponent, InputTextComponent, InputAutocompleteComponent
  ]
})
export class CustomInputModule { }
