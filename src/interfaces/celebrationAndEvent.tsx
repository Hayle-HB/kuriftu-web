export interface CelebrationItem {
  title: string;
  description: string;
  image: string;
  link: string;
  isEnquiryForm: boolean;
  linkText: string;
}

export interface VenueDetail {
  title: string;
  image: string;
  description: string;
}

export interface PersonalizationDetail {
  title: string;
  image: string;
  description: string;
}

export interface CelebrationAndEventModal {
  title: string;
  subtitle: string;
  description: string;
  carouselImages: string[];
  celebrations: CelebrationItem[];
  venus: VenueDetail[];
  personalizations: PersonalizationDetail[];
  facilities?:string[];
}
