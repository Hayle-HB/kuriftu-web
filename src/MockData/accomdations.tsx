import { ResortAccommodationModal } from "../interfaces/accomdationModal";
import { AccommodationDetailModal } from "../interfaces/accomodationDetailModal";

export const ACCOMODATIONS: Record<string, ResortAccommodationModal> = {
  entoto: {
  title: "Accomodation at kuriftu resort & spa Entoto",
    description:
      "With a backdrop of the distinct wild and lush Entoto Forest, our Kuriftu Entoto Adventure Park offers an alternative hospitality experience. With locally sourced materials used to construct and furnish our Presidential Cabin and the interior of our Glamping facilties, guests are placed in a natural setting to simply relax and savour the peace and quiet.",
    accomodations: [
      {
        image: "https://kuriftu-public-media.s3.amazonaws.com/Entoto/entoto27.jpg",
        accomdationId: 1,
        subtitle: "Forest View",
        title: "Glamping Tents",
        isLinked: true,
        description:"Among Entoto’s quiet ridges, glamping invites stillness with the lightest touch, an intimate, low-impact retreat where nature is not escaped but respectfully embraced."
      },
      {
        image: "https://kuriftu-public-media.s3.amazonaws.com/Entoto/acc/1.webp",
        accomdationId: 2,
        subtitle: "Forest View",
        title: "Presidential Cabin",
        isLinked: true,
        description:"Embraced by towering trees, the glass-clad Oasis cabin floats in silence, where fire-grilled meals and starlit skies unfold across a terrace suspended in stillness."
      },
    ],
  },
  bishoftu: {
    title: "Accomodation At Kuriftu Resort & Spa Bishoftu",
    description:
      "Designed to enhance beauty of natural structures, Kuriftu Bishoftu accommodations provide a variety of rooms that showcase our ever growing woodwork craftsmanship and ability to experiment new styles with locally sourced materials, highlighting the rustic atmosphere that makes Kuriftu unique",
    accomodations: [
      {
        image: "https://kuriftu-public-media.s3.amazonaws.com/bishoftu/acc/4.webp",
        accomdationId: 4,
        subtitle: "ROOMS",
        title: "Royal Presidential Suite",
        isLinked: true,
        description:"A sanctuary above Lake Bishoftu, where light dances across earthen textures. Floor-to-ceiling windows frame the water’s whispers while a fireplace softens dusk’s embrace, creating timeless moments."
      },
      {
        image: "https://kuriftu-public-media.s3.amazonaws.com/bishoftu/acc/2.webp",
        accomdationId: 2,
        subtitle: "ROOMS",
        title: "Gateway Retreat",
        isLinked: true,
        description:"Awaken to birdsong among flowering gardens, where native blooms and quiet waters cradle the soul in Bishoftu’s soft morning light beneath a sky slowly unfolding."
      },
      {
        image: "https://kuriftu-public-media.s3.amazonaws.com/bishoftu/acc/1.webp",
        accomdationId: 1,
        subtitle: "ROOMS",
        title: "Lake Side",
        isLinked: true,
        description:"Lakefront rooms rest in quiet seclusion, where sunrise and sunset dance upon the water each view a tranquil encounter with the rhythms of Bishoftu’s serene light."
      },
      {
        image: "https://kuriftu-public-media.s3.amazonaws.com/bishoftu/acc/3.webp",
        accomdationId: 3,
        subtitle: "ROOMS",
        title: "Splash View Suite",
        isLinked: true,
        description:"Lofted spaces blend abstract form with color, where high ceilings and polished stone meet village soul—Kuriftu’s serene harmony between tradition and modern elegance."
      },
    ],
  },

  laketana: {
    title: "Accomodation At Kuriftu Resort & Spa Tana",
    description:
      "With only 28 rooms, Kuriftu Tana lives in its very own eosystem of greenery. As a staple for our brand, the use of natural materials is key to creating this tranquil environment",
    accomodations: [
      {
        image: "https://kuriftu-public-media.s3.amazonaws.com/tana/18.webp",
        accomdationId: 1,
        subtitle: "ROOMS",
        title: "Lake View",
        isLinked: true,
        description:"Discover serene lakeside rooms where sweeping views of Lake Tana and its pristine surroundings invite quiet reflection, offering a rare sense of harmony with nature.",
      },
      {
        image: "https://kuriftu-public-media.s3.amazonaws.com/tana/9.webp",
        accomdationId: 3,
        subtitle: "ROOMS",
        title: "PRESIDETIAL SUITE",
        isLinked: true,
        description:"Immerse yourself in the serene embrace of natural wood, where intimate spaces invite restful connection. Indulge in curated luxury with bespoke dining and a rejuvenating in-room massage."
      },
      {
        image: "https://kuriftu-public-media.s3.amazonaws.com/tana/3.webp",
        accomdationId: 2,
        subtitle: "ROOMS",
        title: "GARDEN VIEW",
        isLinked: true,
        description:"Awake to the symphony of birdsong as vibrant gardens embrace Kuriftu Tana’s tranquil landscape. The rising sun over the lake heralds a day steeped in serenity.",
      },
    ],
  },

  awash: {
    title: "Accomodation at Kuriftu Resort Awash Falls",
    description:
      "Premiering Kuriftu's boutique resort chain, Kuriftu Resort Awash Falls invites guests into the extraordinary landscape of Awash National Park, offering privacy, uncomprimising comfort and service.",
    accomodations: [
      {
        image: "https://kuriftu-public-media.s3.amazonaws.com/awash/acc/1.webp",
        accomdationId: 1,
        subtitle: "Waterfall Front",
        title: "Premium Suite",
        isLinked: true,
        description:
          "Curated to exude an air of exclusivity with spacious surroundings, personal dining, and a private balcony view of the waterfall, the Presidenrial Suite radiates luxury at its finest from the highest point of the cliff",
      },
      {
        image: "https://kuriftu-public-media.s3.amazonaws.com/awash/acc/2.webp",
        accomdationId: 2,
        subtitle: "Waterfall Front",
        title: "Junior Suite",
        isLinked: true,
        description:
          "Our Junior Suites provide guests with excellent views and an open environment complimenting the natural scenary",
      },
      {
        image: "https://kuriftu-public-media.s3.amazonaws.com/awash/acc/3.webp",
        accomdationId: 3,
        subtitle: "Waterfall Front",
        title: "Executive Suite",
        isLinked: true,
        description:
          "Enjoy this unique space with sunlight radiating from every direction - our Executive Suite is the perfect lovers nest where you can relax in solitude with the sounds of the waterfall filling the room",
      },
      {
        image: "https://kuriftu-public-media.s3.amazonaws.com/awash/acc/4.webp",
        accomdationId: 4,
        subtitle: "Waterfall Front",
        title: "Presidential Suite",
        isLinked: true,
        description:
          "Curated to exude an air of exclusivity with spacious surroundings, personal dining, and a private balcony view of the waterfall, the Presidenrial Suite radiates luxury at its finest from the highest point of the cliff",
      },
    ],
  },
};

export const ACCOMODATIONDETAIL: AccommodationDetailModal = {
  entoto: {
    1: {
      title: "Glamping Tents",
      carouselImages: [
        "https://kuriftu-public-media.s3.amazonaws.com/Entoto/entoto27.jpg",
        "https://kuriftu-public-media.s3.amazonaws.com/Entoto/entoto28.jpg",
      ],
      amenities: [
        "DOUBLE TWIN OR QUEEN SIZE BED / ELECTRIC BED WARMER",
        "TWO MOUNTAIN BICYCLES",
        "COFFEE / TEA BREWER",
        "OUTDOOR GRILL",
        "HAMMOCK",
        "MINI BAR",
        "UMBRELLA",
        "YOGA MAT",
        "BREAKFAST BUFFET (LOCATION?)",
        "STEAM, SAUNA & JACUZZI",
        "SHUTTLE SERVICES",
        "25% DISCOUNT FOR ADVENTURE PARK ACTIVITIES",
      ],
      otherAccomodation: [
        {
          id: 2,
          image:
            "https://kuriftu-public-media.s3.amazonaws.com/Entoto/acc/1.webp",
          title: "Presidential",
          description:
            "Tucked away in the depths of the forest lies a private Presidential Cabin, or what we like to call, t...",
        },
      ],
      booking: {
        images: [
           "https://kuriftu-public-media.s3.amazonaws.com/Entoto/entoto27.jpg",
        "https://kuriftu-public-media.s3.amazonaws.com/Entoto/entoto28.jpg",
        ],
        description:
          "Carefully hidden amongst the eucalyptus trees, our Kuriftu Glamping site offers guests a quiet escape from reality with nothing but the natural world surrounding. With hammocks suspended over the room decks, outdoor grilling stations and mountain bikes provided per room, guests can relax in pure nature.",
      },
    },
    2: {
      title: "Kuriftu Oases / Presedential Cabin",
      carouselImages: [
        "https://kuriftu-public-media.s3.amazonaws.com/Entoto/acc/1.webp",
        "https://kuriftu-public-media.s3.amazonaws.com/Entoto/acc/2.webp",
      ],
      booking: {
        images: [
          "https://kuriftu-public-media.s3.amazonaws.com/Entoto/acc/3.webp",
          "https://kuriftu-public-media.s3.amazonaws.com/Entoto/acc/4.webp",
        ],
        description:
          "Nestled deep in the forest, Kuriftu Oasis is your private escape—perfect for romance, adventure, or gathering with loved ones. Fire up the grill, stock the bar, and soak in starlit skies. Unwind, connect, and let the journey begin!",
      },
      amenities: [
        "KING SIZE BED / ELECTRIC BED WARMER",
        "TWO MOUNTAIN BICYCLES",
        "COFFEE / TEA BREWER",
        "OUTDOOR GRILL",
        "HAMMOCK",
        "MINI BAR",
        "UMBRELLA",
        "YOGA MAT",
        "BREAKFAST BUFFET (LOCATION?)",
        "STEAM, SAUNA & JACUZZI",
        "SHUTTLE SERVICES",
        "25% DISCOUNT FOR ADVENTURE PARK ACTIVITIES",
      ],
      otherAccomodation: [
        {
          id: 1,
          image: "https://kuriftu-public-media.s3.amazonaws.com/Entoto/entoto27.jpg",
          title: "Tented Camp Site",
          description:
            "Carefully hidden amongst the eucalyptus trees, our Kuriftu Glamping site offers guests a quiet escap...",
        },
      ],
    },
  },
  bishoftu: {
    1: {
      booking: {
        images: [
          "https://kuriftu-public-media.s3.amazonaws.com/bishoftu/acc/1.webp",
        ],
        description:
          "Overlooking the stunning Kuriftu Lake, these rooms are perfect for romance, relaxation, or family bonding. With breathtaking views and exceptional service, your escape awaits!",
      },
      title: "Lake View",
      carouselImages: [
        "https://kuriftu-public-media.s3.amazonaws.com/bishoftu/acc/5.webp",
        "https://kuriftu-public-media.s3.amazonaws.com/bishoftu/acc/6.webp",
        "https://kuriftu-public-media.s3.amazonaws.com/bishoftu/acc/7.webp",
        "https://kuriftu-public-media.s3.amazonaws.com/bishoftu/acc/1.webp",
      ],
      amenities: [
        "Private bathroom with a shower",
        "Wifi",
        "PBX Phone",
        "Adapters",
        "Hair-dryer",
        "COVID Kit",
        "32” HDTV",
        "Slippers",
        "Tea and Coffee Maker",
        "Mini Fridge",
        "Luggage Rack",
        "Safety Deposit Box",
        
      ],
      otherAccomodation: [
        {
          id: 2,
          image: "https://kuriftu-public-media.s3.amazonaws.com/bishoftu/acc/2.webp",
          title: "GARDEN VIEW",
          description:
            "Immerse yourself in colorful garden features that make up most of the natural landscape Kuriftu Bish...",
        },

        {
          id: 3,

          image:
            "https://kuriftu-public-media.s3.amazonaws.com/bishoftu/acc/3.webp",
          title: "VILLAGE",
          description:
            "Experience our lofted rooms featuring Kurfitu's new contemporary interior design - with a play on co...",
        },

        {
          id: 4,
          image: "https://kuriftu-public-media.s3.amazonaws.com/bishoftu/acc/4.webp",
          title: "PRESIDENTIAL",
          description:
            "Take in the earthy environment curated by our woodwork and design team in this spacious room. Plan a...",
        },
      ],
    },
    2: {
      title: "Garden View",
      carouselImages: [
        "https://kuriftu-public-media.s3.amazonaws.com/bishoftu/acc/2.webp",
        "https://kuriftu-public-media.s3.amazonaws.com/bishoftu/acc/8.webp",
        "https://kuriftu-public-media.s3.amazonaws.com/bishoftu/acc/9.webp",
        "https://kuriftu-public-media.s3.amazonaws.com/bishoftu/acc/10.webp",
      ],
      amenities: [
        "Private bathroom with a shower",
        "Wifi",
        "PBX Phone",
        "Adapters",
        "Hair-dryer",
        "COVID Kit",
        "32” HDTV",
        "Slippers",
        "Tea and Coffee Maker",
        "Mini Fridge",
        "Luggage Rack",
        "Safety Deposit Box",
        
      ],
      booking: {
        images: [
          "https://kuriftu-public-media.s3.amazonaws.com/bishoftu/acc/9.webp",
          "https://kuriftu-public-media.s3.amazonaws.com/bishoftu/acc/11.webp",
        ],
        description:
          "Immerse yourself in Bishoftu’s natural beauty with our Garden View rooms—lush mini-forests filled with vibrant flowers and birdsong. A true paradise, waiting for you to explore!",
      },
      otherAccomodation: [
        {
          id: 1,
          image: "https://kuriftu-public-media.s3.amazonaws.com/bishoftu/acc/1.webp",
          title: "LAKE VIEW",
          description:
            "Explore a variety of lake front rooms located in different sections of the resort - these rooms prov...",
        },

        {
          id: 3,

          image:
            "https://kuriftu-public-media.s3.amazonaws.com/bishoftu/acc/3.webp",
          title: "VILLAGE",
          description:
            "Experience our lofted rooms featuring Kurfitu's new contemporary interior design - with a play on co...",
        },

        {
          id: 4,
          image: "https://kuriftu-public-media.s3.amazonaws.com/bishoftu/acc/4.webp",
          title: "PRESIDENTIAL",
          description:
            "Take in the earthy environment curated by our woodwork and design team in this spacious room. Plan a...",
        },
      ],
    },
    3: {
      title: "Loft Village",
      carouselImages: [
        "https://kuriftu-public-media.s3.amazonaws.com/bishoftu/acc/12.webp",
        "https://kuriftu-public-media.s3.amazonaws.com/bishoftu/acc/13.webp",
        "https://kuriftu-public-media.s3.amazonaws.com/bishoftu/acc/14.webp",
        "https://kuriftu-public-media.s3.amazonaws.com/bishoftu/acc/15.webp",
      ],
      amenities: [
        "Private bathroom with a shower",
        "Wifi",
        "PBX Phone",
        "Adapters",
        "Hair-dryer",
        "COVID Kit",
        "32” HDTV",
        "Slippers",
        "Tea and Coffee Maker",
        "Mini Fridge",
        "Luggage Rack",
        "Safety Deposit Box",
       
      ],
      booking: {
        description:
          "Discover a new side of Kuriftu with the Loft Village—sleek screed floors, contemporary design, and bold abstract art. Centered around the Kuriftu Pool Bar, this vibrant escape offers a fresh, modern stay like never before!",
        images: [
          "https://kuriftu-public-media.s3.amazonaws.com/bishoftu/acc/14.webp",
          "https://kuriftu-public-media.s3.amazonaws.com/bishoftu/acc/12.webp",
        ],
      },
      otherAccomodation: [
        {
          id: 1,
          image: "https://kuriftu-public-media.s3.amazonaws.com/bishoftu/acc/1.webp",
          title: "LAKE VIEW",
          description:
            "Explore a variety of lake front rooms located in different sections of the resort - these rooms prov...",
        },

        {
          id: 2,

          image: "https://kuriftu-public-media.s3.amazonaws.com/bishoftu/acc/2.webp",
          title: "GARDEN VIEW",
          description:
            "Immerse yourself in colorful garden features that make up most of the natural landscape Kuriftu Bish...",
        },

        {
          id: 4,

          image:"https://kuriftu-public-media.s3.amazonaws.com/bishoftu/acc/4.webp",
          title: "PRESIDENTIAL",
          description:
            "Take in the earthy environment curated by our woodwork and design team in this spacious room. Plan a...",
        },
      ],
    },
    4: {
      title: "Presidential Suite",
      carouselImages: [
        "https://kuriftu-public-media.s3.amazonaws.com/bishoftu/acc/16.webp",
        "https://kuriftu-public-media.s3.amazonaws.com/bishoftu/acc/17.webp",
        "https://kuriftu-public-media.s3.amazonaws.com/bishoftu/acc/18.webp",
        "https://kuriftu-public-media.s3.amazonaws.com/bishoftu/acc/19.webp",
      ],
      amenities: [
        "Private bathroom with a shower",
        "Wifi",
        "PBX Phone",
        "Adapters",
        "Hair-dryer",
        "COVID Kit",
        "32” HDTV",
        "Slippers",
        "Tea and Coffee Maker",
        "Mini Fridge",
        "Luggage Rack",
        "Safety Deposit Box",
       
      ],
      booking: {
        description:
          "Experience luxury accommodations at its finest - with earthy aesthetics, panaramic views of the lake, exposure to natural light from every corner of the room, indoor fireplace, and a dining table set for small groups - Kuriftu Bishoftu Presidential Suites are truly one of a kind",
        images: [
          "https://kuriftu-public-media.s3.amazonaws.com/bishoftu/acc/20.webp",
          "https://kuriftu-public-media.s3.amazonaws.com/bishoftu/acc/17.webp",
        ],
      },
      otherAccomodation: [
        {
          id: 1,
          image: "https://kuriftu-public-media.s3.amazonaws.com/bishoftu/acc/1.webp",
          title: "LAKE VIEW",
          description:
            "Explore a variety of lake front rooms located in different sections of the resort - these rooms prov...",
        },
        {
          id: 2,
          image: "https://kuriftu-public-media.s3.amazonaws.com/bishoftu/acc/2.webp",
          title: "GARDEN VIEW",
          description:
            "Immerse yourself in colorful garden features that make up most of the natural landscape Kuriftu Bish...",
        },

        {
          id: 3,
          image:
            "https://kuriftu-public-media.s3.amazonaws.com/bishoftu/acc/3.webp",
          title: "VILLAGE",
          description:
            "Experience our lofted rooms featuring Kurfitu's new contemporary interior design - with a play on co...",
        },
      ],
    },
  },

  laketana: {
    1: {
      title: "Lake View",
      carouselImages: [
        "https://kuriftu-public-media.s3.amazonaws.com/tana/18.webp",
        
        
      ],
      booking: {
        images: [
          "https://kuriftu-public-media.s3.amazonaws.com/tana/18.webp",
        ],
        description:
          "Experience luxury accommodations at its finest - with earthy aesthetics, panaramic views of the lake, exposure to natural light from every corner of the room, indoor fireplace, and a dining table set for small groups - Kuriftu Tana Presidential Suites are truly one of a kind",
      },
      amenities: [
        "Private bathroom with a shower",
        "Tea and Coffee Maker",
        "32” HDTV",
        "COVID Kit",
        "Safety Deposit Box",
        "Bathrobe",
        "Hair-dryer",
        "Luggage Rack",
        "Airport Shuttle",
        "Wifi",
      ],
      otherAccomodation: [
        {
          id: 2,
          image: "https://kuriftu-public-media.s3.amazonaws.com/tana/3.webp",
          title: "GARDEN VIEW",
          description:
            "Our standard classic rooms offer a very neat and nice room with all the necessities and classic desi...",
        },
        {
          id: 3,

          image: "https://kuriftu-public-media.s3.amazonaws.com/tana/9.webp",
          title: "Presidential Suite",
          description:
            "Our standard classic rooms offer a very neat and nice room with all the necessities and classic desi...",
        },
      ],
    },
    2: {
      title: "Garden View",
      carouselImages: [
        "https://kuriftu-public-media.s3.amazonaws.com/tana/3.webp",
      ],
      amenities: [
        "Private bathroom with a shower",
        "Tea and Coffee Maker",
        "32” HDTV",
        "COVID Kit",
        "Safety Deposit Box",
        "Bathrobe",
        "Hair-dryer",
        "Luggage Rack",
        "Airport Shuttle",
        "Wifi",
      ],
      booking: {
        description:
          "Experience our bird paradise - the Kuriftu brand directly correlates with the bird watching experience, this is emphasized by the amount of greenery that is nurtured and grown across all locations as a key feature. Place yourself in the heart of this space by booking one of our Garden View rooms!",
        images: [
          "https://kuriftu-public-media.s3.amazonaws.com/tana/3.webp",
        ],
      },
      otherAccomodation: [
        {
          id: 1,
          image: "https://kuriftu-public-media.s3.amazonaws.com/tana/18.webp",
          title: "LAKE VIEW",
          description:
            "Explore a variety of lake front rooms located in different sections of the resort - these rooms prov...",
        },

        {
          id: 3,

          image: "https://kuriftu-public-media.s3.amazonaws.com/tana/9.webp",
          title: "Presidential Suite",
          description:
            "Our standard classic rooms offer a very neat and nice room with all the necessities and classic desi...",
        },
      ],
    },
    3: {
      title: "Presidential Suite",
      carouselImages: ["https://kuriftu-public-media.s3.amazonaws.com/tana/9.webp",],
      amenities: [
        "Private bathroom with a shower",
        "Tea and Coffee Maker",
        "32” HDTV",
        "COVID Kit",
        "Safety Deposit Box",
        "Bathrobe",
        "Hair-dryer",
        "Luggage Rack",
        "Airport Shuttle",
        "Wifi",
      ],
      booking: {
        description:
          "Experience luxury accommodations at its finest - with earthy aesthetics, panaramic views of the lake, exposure to natural light from every corner of the room, indoor fireplace, and a dining table set for small groups - Kuriftu Tana Presidential Suites are truly one of a kind",
        images: [
          "https://kuriftu-public-media.s3.amazonaws.com/tana/19.webp",
        ],
      },
      otherAccomodation: [
        {
          id: 2,
          image: "https://kuriftu-public-media.s3.amazonaws.com/tana/3.webp",
          title: "GARDEN VIEW",
          description:
            "Our standard classic rooms offer a very neat and nice room with all the necessities and classic desi...",
        },

        {
          id: 1,

          image: "https://kuriftu-public-media.s3.amazonaws.com/tana/18.webp",
          title: "LAKE VIEW",
          description:
            "Explore a variety of lake front rooms located in different sections of the resort - these rooms prov...",
        },
      ],
    },
  },
  awash: {
    1: {
      title: "Premium Suite",
      carouselImages: [
        "https://kuriftu-public-media.s3.amazonaws.com/awash/acc/5.webp",
        "https://kuriftu-public-media.s3.amazonaws.com/awash/acc/6.webp",
        "https://kuriftu-public-media.s3.amazonaws.com/awash/acc/7.webp",
        "https://kuriftu-public-media.s3.amazonaws.com/awash/acc/8.webp",
      ],
      booking: {
        description:
          "Treat yourself to an unforgetable, nature based experience with a focus on earthy tones and inner balance. Our Premium rooms are nothing short of exceptional for our guests!",
        images: [
          "https://kuriftu-public-media.s3.amazonaws.com/awash/acc/9.webp",
          "https://kuriftu-public-media.s3.amazonaws.com/awash/acc/10.webp",
        ],
      },
      amenities: [
        "Private bathroom with a shower",
        "Individually controlled AC and Fan",
        "PBX Phone",
        "Adapters",
        "Hair-dryer",
        "COVID Kit",
        "43” HDTV with DSTV Channels",
        "Slippers",
        "Tea Maker",
        "Mini Fridge",
        "Luggage Rack",
        "Safety Deposit Box",
      ],
      otherAccomodation: [
        {
          id: 2,
          image: "https://kuriftu-public-media.s3.amazonaws.com/awash/acc/2.webp",
          title: "Junior Suite",
          description:
            "Our Junior Suites provide guests with excellent views and an open environment complimenting the natu...",
        },
        {
          id: 3,

          image: "https://kuriftu-public-media.s3.amazonaws.com/awash/acc/3.webp",
          title: "Executive",
          description:
            "  Enjoy this unique space with sunlight radiating from every direction - our Executive Suite is the pe...",
        },
        {
          id: 4,

          image:  "https://kuriftu-public-media.s3.amazonaws.com/awash/acc/4.webp",
          title: "Presidential Suite",
          description:
            "  Curated to exude an air of exclusivity with spacious surroundings, personal dining, and a private ba..",
        },
      ],
    },
    2: {
      title: "Junior Suite",
      carouselImages: [
        "https://kuriftu-public-media.s3.amazonaws.com/awash/acc/11.webp",
        "https://kuriftu-public-media.s3.amazonaws.com/awash/acc/12.webp",
        "https://kuriftu-public-media.s3.amazonaws.com/awash/acc/13.webp",
      ],
      amenities: [
        "Private bathroom with a shower",
        "Individually controlled AC and Fan",
        "PBX Phone",
        "Adapters",
        "Hair-dryer",
        "COVID Kit",
        "43” HDTV with DSTV Channels",
        "Slippers",
        "Tea Maker",
        "Mini Fridge",
        "Luggage Rack",
        "Safety Deposit Box",
      ],
      booking: {
        description:
          "Our Junior Suites provide guests with excellent views and an open environment complimenting the natural scenary",
        images: [
          "https://kuriftu-public-media.s3.amazonaws.com/awash/acc/14.webp"
        ],
      },
      otherAccomodation: [
        {
          id: 1,
          image: "https://kuriftu-public-media.s3.amazonaws.com/awash/acc/1.webp",
          title: "Permium Suite",
          description:
            " Treat yourself to an unforgetable, nature based experience with a focus on earthy tones and inner ba...",
        },
        {
          id: 3,
          image: "https://kuriftu-public-media.s3.amazonaws.com/awash/acc/3.webp",
          title: "Executive",
          description:
            "  Enjoy this unique space with sunlight radiating from every direction - our Executive Suite is the pe...",
        },
        {
          id: 4,
          image:  "https://kuriftu-public-media.s3.amazonaws.com/awash/acc/4.webp",
          title: "Presidential Suite",
          description:
            "  Curated to exude an air of exclusivity with spacious surroundings, personal dining, and a private ba..",
        },
      ],
    },
    3: {
      title: "Executive",
      carouselImages: [//"https://kuriftu-public-media.s3.amazonaws.com/awash/acc/13.webp",
        "https://kuriftu-public-media.s3.amazonaws.com/awash/acc/3.webp",
        "https://kuriftu-public-media.s3.amazonaws.com/awash/acc/15.webp",
      ],
      amenities: [
        "Private bathroom with a shower",
        "Individually controlled AC and Fan",
        "PBX Phone",
        "Adapters",
        "Hair-dryer",
        "COVID Kit",
        "43” HDTV with DSTV Channels",
        "Slippers",
        "Tea Maker",
        "Mini Fridge",
        "Luggage Rack",
        "Safety Deposit Box",
      ],
      booking: {
        description:
          "Enjoy this unique space with sunlight radiating from every direction - our Executive Suite is the perfect lovers nest where you can relax in solitude with the sounds of the waterfall filling the room",
        images: [
          "https://kuriftu-public-media.s3.amazonaws.com/awash/acc/3.webp",
          "https://kuriftu-public-media.s3.amazonaws.com/awash/acc/15.webp",
        ],
      },
      otherAccomodation: [
        {
          id: 1,
          image: "https://kuriftu-public-media.s3.amazonaws.com/awash/acc/1.webp",
          title: "Permium Suite",
          description:
            " Treat yourself to an unforgetable, nature based experience with a focus on earthy tones and inner ba...",
        },
        {
          id: 2,
          image: "https://kuriftu-public-media.s3.amazonaws.com/awash/acc/2.webp",
          title: "Junior Suite",
          description:
            "Our Junior Suites provide guests with excellent views and an open environment complimenting the natu...",
        },
        {
          id: 4,
          image: "https://kuriftu-public-media.s3.amazonaws.com/awash/acc/4.webp",
          title: "Presidential Suite",
          description:
            "  Curated to exude an air of exclusivity with spacious surroundings, personal dining, and a private ba..",
        },
      ],
    },
    4: {
      title: "Presidential Suite",
      carouselImages: [
        "https://kuriftu-public-media.s3.amazonaws.com/awash/acc/4.webp",
        "https://kuriftu-public-media.s3.amazonaws.com/awash/acc/16.webp",
        "https://kuriftu-public-media.s3.amazonaws.com/awash/dining/2.webp",
        "https://kuriftu-public-media.s3.amazonaws.com/awash/acc/17.webp",
      ],
      amenities: [
        "Private bathroom with a shower",
        "Individually controlled AC and Fan",
        "PBX Phone",
        "Adapters",
        "Hair-dryer",
        "COVID Kit",
        "43” HDTV with DSTV Channels",
        "Slippers",
        "Tea Maker",
        "Mini Fridge",
        "Luggage Rack",
        "Safety Deposit Box",
      ],
      booking: {
        description:
          "Curated to exude an air of exclusivity with spacious surroundings, personal dining, and a private balcony view of the waterfall, the Presidenrial Suite radiates luxury at its finest from the highest point of the cliff",
        images: [
          "https://kuriftu-public-media.s3.amazonaws.com/awash/acc/16.webp",
        "https://kuriftu-public-media.s3.amazonaws.com/awash/dining/2.webp",
        ],
      },
      otherAccomodation: [
        {
          id: 1,
          image: "https://kuriftu-public-media.s3.amazonaws.com/awash/acc/1.webp",
          title: "Permium Suite",
          description:
            " Treat yourself to an unforgetable, nature based experience with a focus on earthy tones and inner ba...",
        },
        {
          id: 2,
          image: "https://kuriftu-public-media.s3.amazonaws.com/awash/acc/2.webp",
          title: "Junior Suite",
          description:
            "Our Junior Suites provide guests with excellent views and an open environment complimenting the natu...",
        },
        {
          id: 3,
          image: "https://kuriftu-public-media.s3.amazonaws.com/awash/acc/3.webp",
          title: "Executive",
          description:
            "  Enjoy this unique space with sunlight radiating from every direction - our Executive Suite is the pe...",
        },
      ],
    },
  },
};
