import { FormReducer } from "./reducers/form.reducer";
import { UxReducer } from "./reducers/ux.reducer";

const StoreReducer = {
  ux: UxReducer,
  form: FormReducer
}

export { StoreReducer }
