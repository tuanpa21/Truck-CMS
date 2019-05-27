import { Validators } from '@angular/forms';

import { FormConfig } from '../../../core/components/edit/edit.component';
import { TableConfig } from '../../../core/components/list/list.component';


export const DRIVER_CONFIG: Array<TableConfig> = [
    {
      name: 'Driver Name',
      headerName: 'Driver Name',
      propName: 'name',
    },
    {
      name: 'Age',
      headerName: 'Age',
      propName: 'age',
    },
    {
      name: 'Email',
      headerName: 'Email',
      propName: 'email',
    },
    {
      name: 'Create Date',
      headerName: 'Create Date',
      propName: 'createdDate'
    },
];

export const FORM_DRIVER: FormConfig[] = [
  {
    label: 'Driver Name',
    controlName: 'name',
    validator: [Validators.required],
  },
  {
    label: 'Age',
    controlName: 'age',
    validator: [Validators.required],
  },
  {
    label: 'Email',
    controlName: 'email',
    validator: [Validators.required],
  },
];
