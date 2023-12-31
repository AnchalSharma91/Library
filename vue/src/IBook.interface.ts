export enum Genre {
  Modernism = 'Modernism',
  Realism = 'Realism'
};

export interface IBook {
  id: string;
  title: string;
  author: string;
  genre: Genre;
  numberOfPages: number;
  selected: boolean;
};