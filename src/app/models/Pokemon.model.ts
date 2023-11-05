import { Collection } from "./collection.model";

export class Pokemon {
  constructor(
   public id: string,
   public name: string,
   public number: string,
   public image: string,
   public collection: Collection,
  ) { }
}
