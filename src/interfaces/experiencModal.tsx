export interface ExperienceModalItem {
  isLink: boolean;
  title: string;
  description: string;
  image: string;
}

export interface GalleryItem {
  image: string;
  title: string;
  description: string;
}

export interface FeaturedItem {
  title: string;
  description: string;
  image: string;
}

export interface ExperienceModal {
  title: string;
  subtitle: string;
  description: string;
  carouselImages: string[];
  experiences: ExperienceModalItem[];
  items: GalleryItem[];
  featured: FeaturedItem[];
}
