export class Query{

  constructor(
    // tslint:disable-next-line: variable-name
    public _id: string,
    public email: string,
    public date: string,
    public type: string,
    public question: string,
    public response?: string
  ){}
}
