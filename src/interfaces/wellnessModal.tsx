export interface WellnessItem {
  title: string;
  description: string;
  image: string;
}

export interface Item {
  title: string;
  description: string;
}

export interface WellnessModal {
  title: string;
  subtitle: string;
  description: string;
  carouselImages: string[];
  wellness: WellnessItem[];
  gallery: string[];
  isLink: boolean;
  spaMenuLink: string;
  items: Item[];
  facilities: string[];
}
