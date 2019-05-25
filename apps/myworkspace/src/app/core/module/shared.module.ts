import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from '../components/toolbar/toolbar.component';
import { FooterComponent } from '../components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from '../components/list/list.component';
import { DetailComponent } from '../components/detail/detail.component';
import { EditComponent } from '../components/edit/edit.component';

@NgModule({
  declarations: [
    ToolbarComponent,
    FooterComponent, 
    ListComponent, 
    DetailComponent, 
    EditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    ToolbarComponent,
    FooterComponent, 
    ListComponent, 
    DetailComponent, 
    EditComponent
  ]
})
export class SharedModule { }
