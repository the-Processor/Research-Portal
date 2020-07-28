export interface Paper{
  _id: string;
  title: string;
  keywords: string[];
  areaOfResearch: string;
  author: {
    name: string,
    email: string,
    institute: string,
    contact: number
  };
  coAuthors: {
    name: string,
    email: string,
    institute: string,
    contact: number
  }[];
  publisher: string;
  publicationDate: string;
  paperPath: string;
  paperStatusCode: number;
}
