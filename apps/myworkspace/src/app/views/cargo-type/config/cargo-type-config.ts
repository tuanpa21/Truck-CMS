import { Validators } from '@angular/forms';

import { FormConfig } from '../../../core/components/edit/edit.component';
import { TableConfig } from '../../../core/components/list/list.component';


export const CARGO_TYPE_CONFIG: Array<TableConfig> = [
    {
      name: 'Cargo Type',
      headerName: 'Cargo Type',
      propName: 'name',
    },
    {
      name: 'Create Date',
      headerName: 'Create Date',
      propName: 'createdDate'
    },
];

export const FORM_CARGO_TYPE: FormConfig[] = [
  {
    label: 'Cargo Type Name',
    controlName: 'name',
    validator: [Validators.required],
  },
];
