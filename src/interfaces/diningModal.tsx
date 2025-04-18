export interface DiningModal {
  title: string;
  subtitle: string;
  description: string;
  detailDescription?:string;
  carouselImages: string[];
  diningOptions: {
    title: string;
    description: string;
    image: string;
    menuLink: string;
  }[];
  diningExperiences: {
    title: string;
    description: string;
    image: string;
  }[];
}
