export interface UxStoreI {
  toast: ToastStoreI
  alert: { [key: string]: boolean }
}

export interface ToastStoreI {
  show: boolean
  message: string;
  type: ToastType;
  positionVertical: ToastVerticalType;
  positionHorizontal: ToastHorizontalType
}

export type ToastType = 'warning' | 'sucess' | 'error'
export type ToastVerticalType = 'top' | 'middle' | 'bottom'
export type ToastHorizontalType = 'left' | 'middle' | 'rigth'

export interface FormStoreI {
  validated: boolean
}

export interface StoreI {
  ux: UxStoreI,
  form: FormStoreI
}
