import { ModelMain } from "./model.main";

type InputI = {
  label: string;
  type: "text" | "textarea" | "password" | "phone" | "date" | "email";
  placeholder: string;
  name?: string;
  value: string | number | Date;
  errorM?: string;
  indexStep?: number //Atributo usado para identificar a página no FormStep
  required?: boolean
  icon?: string;
}

export class InputModel extends ModelMain<InputI> {

  private constructor(props: InputI, id?: string | number) {
    super(props, id)
  }

  static create(props: InputI, id?: string | number) {
    const input = new InputModel(props, id)

    return input;
  }
}
