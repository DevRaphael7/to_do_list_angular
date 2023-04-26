import { createReducer, on } from '@ngrx/store';
import { toastProps } from '../actions/ux.actions';
import { UxStoreI } from '../models/store.interface';

export const initialState: UxStoreI = {
  toast: {
    message: '',
    positionHorizontal: 'rigth',
    positionVertical: 'top',
    show: false,
    type: 'sucess'
  }
};

export const UxReducer = createReducer(
  initialState,
  on(toastProps, (state, { props }) => ({ ...state, toast: props })),
);
