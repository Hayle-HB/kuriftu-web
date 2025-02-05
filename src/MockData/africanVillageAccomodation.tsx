interface Accommodation {
  accomdationId: number;
  subtitle: string;
  title: string;
  isLinked: boolean;
  description: string;
  image: string;
}

interface AfricanVillage {
  title: string;
  subtitle: string;
  description: string;
  accomodations: Accommodation[];
}

export const africanVillageAccomdations: AfricanVillage = {
  title: "Cultural Haven in the Diplomatic Capital",
  subtitle: "Cultural Oasis",
  description:
    "With a backdrop of Addis Ababa, this cultural village includes 2 Restaurants, a Conference Facility and Multipurpose Halls that can accommodate up to 1,000, a full-scale spa and fitness center and a one-of-a-kind wedding venue overlooking the city. Our upcoming project is set to become a must-visit destination in Addis Ababa, the diplomatic capital of Africa. We are thrilled to introduce a unique resort that will showcase the rich diversity and cultural heritage of the African continent. Spanning an impressive 50,000 square meters of land in Burayu, Oromia Special Zone, our resort offers a breathtaking 360-degree view of Addis Ababa's entire expanse and beyond. In addition to the resort is 50,000 square meters of land dedicated to maintaining natural greenery and private trekking paths for our guests. You'll be able to witness stunning panoramas, witnessing the vibrant cityscape alongside the tranquil beauty of the surrounding nature.",
  accomodations: [
    {
      accomdationId: 1,
      subtitle: "A CELEBRATION OF AFRICAN BEAUTY AND DIVERSITY",
      title: "Crafting Unforgettable Experiences",
      isLinked: false,
      description:
        "At Kuriftu Resorts & Spa African Village, we strive to go beyond the ordinary and create an extraordinary experience for our guests. Whether you are a local or international visitor, our resort promises to deliver an unforgettable stay that celebrates the beauty and diversity of Africa.",
      image: "https://kurifturesorts.com/_nuxt/img/AfricaRoomBed.28e54c2.jpg",
    },
    {
      accomdationId: 2,
      subtitle: "CELEBRATING AFRICA'S CULTURAL DIVERSITY",
      title: "Unifying Nations",
      isLinked: false,
      description:
        "For us to reach this goal of exhibiting the rich culture and heritage of each African country and reversing the negative stereotype in order to re-write Africa’s narrative, it is imperative that African nations unite. As every African country is considered a key stakeholder, it is our responsibility to collaborate with African Embassies and the African Union to create an authentic experience for our guests.",
      image:
        "https://kurifturesorts.com/_nuxt/img/AfricaRestaurant.36863f2.jpg",
    },
    {
      accomdationId: 3,
      subtitle: "CRAFTING AUTHENTIC EXPERIENCES FOR OUR VALUED GUESTS",
      title: "Building Bridges",
      isLinked: false,
      description:
        "As every African country is considered a key stakeholder, it is our responsibility to collaborate with African Embassies and the African Union to create an authentic experience for our guests.",
      image: "https://kurifturesorts.com/_nuxt/img/AfricaMassage.ff8ac7b.jpg",
    },
  ],
};
