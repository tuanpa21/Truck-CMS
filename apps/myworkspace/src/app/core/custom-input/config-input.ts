import { INPUT_TYPE } from '../components/edit/edit.component';
import { InputAutocompleteComponent } from './input-autocomplete/input-autocomplete.component';
import { InputTextComponent } from './input-text/input-text.component';

export const CONFIG_INPUT = [
    {
        type: INPUT_TYPE.TEXT,
        component: InputTextComponent
    },
    {
        type: INPUT_TYPE.AUTOCOMPLETE,
        component: InputAutocompleteComponent
    }
]
