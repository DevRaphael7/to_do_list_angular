import { Store } from "@ngrx/store";
import { StoreI, ToastStoreI } from "../ngrx/models/store.interface"
import { alertProps, toastProps } from "../ngrx/actions/ux.actions";
import { formProps } from "../ngrx/actions/form.actions";
import { FormModel } from "./form.model";
import { Router } from "@angular/router";

//Será a interface que vai conter todos os métodos para usar os components relacionados a experiência do usuário.
interface UxPropsI {
  toast: {
    emitterToast(props: ToastStoreI): void
  },
  form: {
    emitterForm(validated: boolean): void;
  },
  alert: {
    emitterAlert(key: string, value: boolean): void
  }
}


interface PageMainI {
  navegateToPage(route: string): void
}

export abstract class PageMain implements PageMainI {

  protected ux: UxPropsI;

  //Meus formulários
  protected forms: { [key: string]: FormModel }

  constructor(
    private store: Store<StoreI>,
    private router: Router
  ) {
    this.forms = { }

    this.ux = {
      toast: {
        emitterToast(props) {
          store.dispatch(toastProps({ props }))
        }
      },
      form: {
        emitterForm(validated: boolean) {
          store.dispatch(formProps({ props: { validated }}))
        }
      },
      alert: {
        emitterAlert(key: string, value: boolean) {
          store.dispatch(alertProps({ props: { key, value }}))
        },
      }
    }
  }

  navegateToPage(route: string): void {
    this.router.navigateByUrl(route)
  }


}
