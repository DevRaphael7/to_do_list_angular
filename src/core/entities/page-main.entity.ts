import { Store } from "@ngrx/store";
import { StoreI, ToastStoreI } from "../ngrx/models/store.interface"
import { toastProps } from "../ngrx/actions/ux.actions";

//Será a interface que vai conter todos os métodos para usar os components relacionados a experiência do usuário.
interface UxPropsI {
  toast: {
    emitterToast(props: ToastStoreI): void
  }
}

export abstract class PageMain {

  protected ux: UxPropsI;

  constructor(private store: Store<StoreI>) {
    this.ux = {
      toast: {
        emitterToast(props) {
          store.dispatch(toastProps({ props }))
        },
      }
    }
  }

}
