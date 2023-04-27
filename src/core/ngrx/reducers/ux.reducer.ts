import { createReducer, on } from '@ngrx/store';
import { toastProps, alertProps } from '../actions/ux.actions';
import { UxStoreI } from '../models/store.interface';

export const initialState: UxStoreI = {
  toast: {
    message: '',
    positionHorizontal: 'rigth',
    positionVertical: 'top',
    show: false,
    type: 'sucess'
  },
  alert: { }
};

export const UxReducer = createReducer(
  initialState,
  on(toastProps, (state, { props }) => ({ ...state, toast: props })),
  on(alertProps, (state, { props }) => ({
    ...state,
    alert: { ...state.alert, [props.key]: props.value }
  })),

);
