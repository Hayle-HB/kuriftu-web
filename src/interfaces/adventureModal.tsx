interface AdventureItem {
  title: string;
  description: string;
  image: string;
  subTitle:string;
}

export interface AdventureModal {
  title: string;
  description: string;
  carouselImages: string[];
  adventures: AdventureItem[];
}
