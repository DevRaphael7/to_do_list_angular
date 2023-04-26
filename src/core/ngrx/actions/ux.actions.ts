import { createAction, props } from '@ngrx/store';
import { ToastStoreI } from '../models/store.interface';

export const toastProps = createAction('[UX] TOAST_PROPS', props<{ props: ToastStoreI }>());
