import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DetailComponent } from '../components/detail/detail.component';
import { EditComponent } from '../components/edit/edit.component';
import { FooterComponent } from '../components/footer/footer.component';
import { ListComponent } from '../components/list/list.component';
import { ToolbarComponent } from '../components/toolbar/toolbar.component';
import { CustomInputModule } from '../custom-input/custom-input.module';
import { PipeModule } from '../pipe/pipe.module';
import { HelperService } from '../services/helper.service';

@NgModule({
  declarations: [
    ToolbarComponent,
    FooterComponent, 
    ListComponent, 
    DetailComponent, 
    EditComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    CustomInputModule,
    PipeModule
  ],
  exports: [
    ToolbarComponent,
    FooterComponent, 
    ListComponent, 
    DetailComponent, 
    EditComponent,
    PipeModule
  ],
  providers: [
    HelperService
  ]
})
export class SharedModule { }
