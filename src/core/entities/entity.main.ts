export abstract class Entity<T> {

    protected _id: string | number;

    public props: T;

    constructor(props: T, id?: string | number) {
      this._id = id ?? Math.floor(Math.random() * 100)
      this.props = props
    }

    get getId() {
      return this._id
    }
}
