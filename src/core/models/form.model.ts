import { FormService } from "../services/form/form.service";
import { InputModel } from "./input.model";
import { ModelMain } from "./model.main";

export class FormModel extends ModelMain<Map<string | number, InputModel>> {

  private constructor(inputFields: Map<string | number, InputModel>, id?: string | number) {
    super(inputFields, id)
  }

  static create(inputFields: Map<string | number, InputModel>) {
    const form = new FormModel(inputFields);

    return form;
  }

  createValuesFields(): Map<string | number, string | number> {
    const fieldsValues = new Map()

    const iterator = this.props.keys()
    let values = iterator.next()

    while(!values.done) {
      const field = this.props.get(values.value)

      fieldsValues.set(values.value, field.props.value)

      values = iterator.next()
    }

    return fieldsValues
  }

  validator(props: Map<string | number, string | number>) {
    const validated = FormService.create()
    const status = validated.validator(props)
    return status
  }
}
