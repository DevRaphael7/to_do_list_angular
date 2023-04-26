import { createAction, props } from '@ngrx/store';
import { FormStoreI } from '../models/store.interface';

export const formProps = createAction('[FORM] FORM_PROPS', props<{ props: FormStoreI }>());
