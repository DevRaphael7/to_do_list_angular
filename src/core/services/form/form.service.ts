export class FormService<T> {

  private ignoreKeys: string[]

  private constructor(values?: string[]) {
    this.ignoreKeys = values ?? []
  }

  static create<T>(values?: string[]) {
    const formService = new FormService<T>(values)

    return formService
  }

  validator(input: Map<number | string, T>) {
    const iterator = input.keys()
    let values = iterator.next()
    let info = false;
    while(!values.done) {
      const field = input.get(values.value)

      if(this.verifyFieldIsNull(String(field)) && !this.ignoreKeys.includes(String(values.value))) {
          info = true
          break
      }

      values = iterator.next()
    }

    return info
  }

  verifyFieldIsNull = (field: string | number) => {
    return !field || field === 'null'
  }

}
