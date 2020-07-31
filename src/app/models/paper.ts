export class Paper{
  constructor(
    public _id: string,
    public title: string,
    public keywords: string[],
    public areaOfResearch: string,
    public author: {
      name: string,
      email: string,
      institute: string,
      contact: number
    },
    public coAuthor1: {
      name1: string,
      email1: string,
      institute1: string,
      contact1: number
    },
    public coAuthor2: {
      name2: string,
      email2: string,
      institute2: string,
      contact2: number
    },
    public publisher: string,
    public publicationDate: string,
    public paperPath: string,
    public paperStatusCode: number
  ){}
}
