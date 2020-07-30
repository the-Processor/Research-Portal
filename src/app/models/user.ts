export class User{

  constructor(
    public _id: string,
    public emailId: string,
    public password: string,
    public name: string,
    public type: string,
    public contact: number,
    public address: {
      building: string,
      street: string,
      city: string,
      district: string,
      pincode: number
    },
    public institute: string
  ){}
}
