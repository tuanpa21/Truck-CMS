import { Validators } from '@angular/forms';

import { FormConfig } from '../../../core/components/edit/edit.component';
import { TableConfig } from '../../../core/components/list/list.component';


export const TRUCK_TYPE_CONFIG: Array<TableConfig> = [
    {
      name: 'Truck Type',
      headerName: 'Truck Type',
      propName: 'name',
    },
    {
      name: 'Create Date',
      headerName: 'Create Date',
      propName: 'createdDate'
    },
];

export const FORM_TRUCK_TYPE: FormConfig[] = [
  {
    label: 'Truck Type Name',
    controlName: 'name',
    validator: [Validators.required],
  },
];
