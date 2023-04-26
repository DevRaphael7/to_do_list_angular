import { Store } from "@ngrx/store";
import { StoreI, ToastStoreI } from "../ngrx/models/store.interface"
import { toastProps } from "../ngrx/actions/ux.actions";
import { formProps } from "../ngrx/actions/form.actions";
import { InputEntity } from "./input.entity";
import { FormService } from "../services/form/form.service";

//Será a interface que vai conter todos os métodos para usar os components relacionados a experiência do usuário.
interface UxPropsI {
  toast: {
    emitterToast(props: ToastStoreI): void
  }
}

interface FormsPropsI {
  inputFields: Map<string | number, InputEntity>,
  validator(props: Map<string | number, string | number>): boolean,
  emitterForm(validated: boolean): void;
}

export abstract class PageMain {

  protected ux: UxPropsI;
  protected form: FormsPropsI

  constructor(private store: Store<StoreI>) {
    this.form = {
      inputFields: new Map<string | number, InputEntity>(),
      validator(props: Map<string | number, string | number>) {
        const validated = FormService.create()
        const status = validated.validator(props)
        return status
      },
      emitterForm(validated: boolean) {
        store.dispatch(formProps({ props: { validated }}))
      }
    }

    this.ux = {
      toast: {
        emitterToast(props) {
          store.dispatch(toastProps({ props }))
        },
      }
    }
  }

  createValuesFields(): Map<string | number, string | number> {
    const fieldsValues = new Map()

    const iterator = this.form.inputFields.keys()
    let values = iterator.next()

    while(!values.done) {
      const field = this.form.inputFields.get(values.value)

      fieldsValues.set(values.value, field.props.value)

      values = iterator.next()
    }

    return fieldsValues
  }

}
