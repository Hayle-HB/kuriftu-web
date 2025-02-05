interface AccommodationDetail {
  image: string;
  accomdationId: number;
  subtitle: string;
  title: string;
  isLinked: boolean;
  description: string;
}

export interface ResortAccommodationModal {
  title: string;
  description: string;
  accomodations: AccommodationDetail[];
}
