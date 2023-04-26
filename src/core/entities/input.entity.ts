import { Entity } from "./entity.main";

type InputI = {
  label: string;
  type: "text" | "textarea" | "password" | "phone" | "date" | "email";
  placeholder: string;
  name?: string;
  value: any;
  errorM?: string;
  indexStep?: number //Atributo usado para identificar a página no FormStep
  required?: boolean
  icon?: string;
}

export class InputEntity extends Entity<InputI> {

  private constructor(props: InputI, id?: string | number) {
    super(props, id)
  }

  static create(props: InputI, id?: string | number) {
    const input = new InputEntity(props, id)

    return input;
  }
}
