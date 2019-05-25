import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'myworkspace-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  @Input() contact: any = {
    id: undefined,
    name: '',
    email: '',
    phone: ''
  };

  @Output() save = new EventEmitter<any>();

  form: FormGroup;

  constructor(public formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      id: [this.contact.id],
      name: [this.contact.name, Validators.required],
      email: [this.contact.email, Validators.required],
      phone: [this.contact.phone]
    });
  }

  ngOnInit() {

  }

  submit() {
    if (this.form.valid) {
      this.save.emit(this.form.value);
    }

  }

}
