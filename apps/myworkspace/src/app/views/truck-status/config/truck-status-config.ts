import { Validators } from '@angular/forms';

import { FormConfig } from '../../../core/components/edit/edit.component';
import { TableConfig } from '../../../core/components/list/list.component';


export const TRUCK_STATUS_CONFIG: Array<TableConfig> = [
    {
      name: 'Truck Status',
      headerName: 'Truck Status',
      propName: 'name',
    },
    {
      name: 'Create Date',
      headerName: 'Create Date',
      propName: 'createdDate'
    },
];

export const FORM_TRUCK_STATUS: FormConfig[] = [
  {
    label: 'Truck Status Name',
    controlName: 'name',
    validator: [Validators.required],
  },
];
