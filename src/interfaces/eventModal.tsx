export interface EventItem {
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

export interface EventModal {
  title: string;
  subtitle: string;
  description: string;
  carouselImages: string[];
  events: EventItem[];
  venus: VenueDetail[];
  personalizations: PersonalizationDetail[];
}
