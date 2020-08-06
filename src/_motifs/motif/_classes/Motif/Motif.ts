export default class {

  private _id: string;
  private _name: string;
  private _create: Object;
  private _parents: Object[];

  constructor(
    id: string,
    name: string,
    create: Object,
    parents: Object[]
  ) {

    this._id = id;
    this._name = name;
    this._create = create;
    this._parents = parents;
  }
}