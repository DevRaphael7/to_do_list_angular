import { randomUUID } from 'crypto'

export abstract class Entity<T> {

    protected _id: string | number;

    public props: T;

    constructor(props: T, id?: string | number) {
      this._id = id ?? randomUUID()
      this.props = props
    }
}
