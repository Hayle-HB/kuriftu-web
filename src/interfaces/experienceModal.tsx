export interface ExperienceModal {
  title: string;
  subtitle: string;
  description: string;
  carouselImages: string[];
  experiences: ExperienceItem[];
  gallery: string[];
  items: Item[];
  featured: FeaturedItem[];
}

interface ExperienceItem {
  isLink: boolean;
  title: string;
  description: string;
  image: string;
}

interface Item {
  title: string;
  description: string;
}

interface FeaturedItem {
  title: string;
  description: string;
  image: string;
}
