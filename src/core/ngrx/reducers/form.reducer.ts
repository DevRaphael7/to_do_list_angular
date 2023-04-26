import { createReducer, on } from '@ngrx/store';
import { formProps } from '../actions/form.actions';
import {  FormStoreI } from '../models/store.interface';

export const initialState: FormStoreI = {
  validated: false
};

export const FormReducer = createReducer(
  initialState,
  on(formProps, (state, { props }) => ({ ...state, validated: props.validated })),
);
