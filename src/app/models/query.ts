export class Query{

  constructor(
    public _id: string,
    public emailId: string,
    public question: string,
    public response?: string
  ){}
}
