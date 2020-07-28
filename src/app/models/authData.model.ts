export class AuthData{
  constructor(
    public uid: string,
    public email: string,
    public name: string,
    public type: string,
    // tslint:disable-next-line: variable-name
    private _tokenId: string,
    public expDate: Date
  ){}

  get token(){
    if (!this.expDate || new Date() > this.expDate){
      return null;
    }
    return this._tokenId;
  }
}
