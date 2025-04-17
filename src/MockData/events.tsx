import { EventModal } from "../interfaces/eventModal";

export const EVENTS: Record<string, EventModal> = {
  entoto: {
    title: "A Memorable Experience",
    subtitle: "Celebrations at Kuriftu Entoto Adventure Park",
    description:"Moments of joy unfold gently, be it a child’s laughter in Trampoline World, a gathering in Hammock Village, or vows exchanged beneath Entoto’s open sky.",
    carouselImages: [
      "https://kuriftu-public-media.s3.amazonaws.com/Entoto/entoto26.jpg",
      "https://kuriftu-public-media.s3.amazonaws.com/Entoto/celebrate/1.webp",
      "https://kuriftu-public-media.s3.amazonaws.com/Entoto/celebrate/2.webp",
    ],
    events: [
      {
        title: "Weddings",
        description:
          "Pave your future with your partner in this romantic setting, share the joy at its most natural state surrounded by loved ones.",
        image: "https://kuriftu-public-media.s3.amazonaws.com/Entoto/entoto26.jpg",
        link: "wed",
        isEnquiryForm: true,
        linkText: "Make an enquiry",
      },
      {
        title: "Birthdays",
        description:
          "Let us celebrate your life and future in a fun and special way with your loved ones. browse through our selection of birthday packages and more!",
        image: "https://kuriftu-public-media.s3.amazonaws.com/Entoto/celebrate/3.webp",
        link: "",
        isEnquiryForm: true,
        linkText: "Make an enquiry",
      },

      {
        title: "Social Events",
        description:
          "Thinking of hosting an event? Give us a call and our team can help plan your very own get-together, anniversary, birthday party, family trip - basically anything!",
        image: "https://kuriftu-public-media.s3.amazonaws.com/Entoto/celebrate/4.webp",
        link: "",
        isEnquiryForm: true,
        linkText: "Make an enquiry",
      },
    ],

    venus: [
      {
        title: "Wedding Venue",
        image: "https://kuriftu-public-media.s3.amazonaws.com/Entoto/celebrate/1.webp",
        description:
          "Pave your future with your partner in this romantic setting, share the joy at its most natural state surrounded by loved ones",
      },

      {
        title: "Open Air Spaces",
        image: "https://kuriftu-public-media.s3.amazonaws.com/Entoto/celebrate/5.webp",
        description:
          "With the different restaurants and activity areas located within the Entoto Park Kuriftu Resort, you can have your celebration at any of our locations",
      },

      {
        title: "In-Door Spaces",
        image: "https://kuriftu-public-media.s3.amazonaws.com/Entoto/celebrate/2.webp",
        description:
          "Hosting an event in a closed space? With our restaurant spaces or our multi-purpose cabin, you can entertain guests surrounded by the beautiful landscape",
      },

     
    ],
    personalizations: [
      {
        title: "Menu & Catering",
        image:
          "https://kurifturesorts.com/_nuxt/img/Menu&Catering.5e64bc6.webp",
        description:
          "Our resort caters to your choice of dishes and plates for your celebrations and gatherings - whether...",
      },

      {
        title: "Event Consultation",
        image:
          "https://kurifturesorts.com/_nuxt/img/EventConsulting.9e5c587.webp",
        description:
          "Reach out to receive expert advice and consulting on your events provided by our Sales and Banquest ...",
      },

      {
        title: "Entertainment",
        image:
          "https://kurifturesorts.com/_nuxt/img/Entertainment.30afcb1.webp",
        description:
          "Let us plan a way to make your celebrations fun and exciting....",
      },
    ],
  },
  bishoftu: {
    title: "Celebrations at Bishoftu ",
    subtitle: "KURIFTU RESORT & SPA BISHOFTU WEDDING AREA",
    description:"Nestled in the tranquil beauty of Bishoftu’s lakes, Kuriftu Resort offers a captivating backdrop for unforgettable celebrations, where nature’s serenity and Ethiopia’s rich heritage intertwine.",
    carouselImages: [
      "https://kuriftu-public-media.s3.us-east-1.amazonaws.com/bishoftu/events/bsh_event4.webp",
      "https://kuriftu-public-media.s3.us-east-1.amazonaws.com/bishoftu/events/bsh_event1.jpg",
      "https://kuriftu-public-media.s3.us-east-1.amazonaws.com/bishoftu/12.JPG",
      "https://kuriftu-public-media.s3.us-east-1.amazonaws.com/bishoftu/7.JPG",

    ],
    events: [
      {
        title: "Weddings",
        description:
          "Pave your future with your partner in this romantic setting, share the joy at its most natural state surrounded by loved ones.",
        image: "https://kuriftu-public-media.s3.us-east-1.amazonaws.com/bishoftu/events/bsh_event2.webp",
        link: "wed",
        isEnquiryForm: false,
        linkText: "Explore",
      },

      {
        title: "Birthdays",
        description:
          "Let us celebrate your life and future in a fun and special way with your loved ones. browse through our selection of birthday packages and more!",
        image: "https://kuriftu-public-media.s3.amazonaws.com/bishoftu/events/birthday.jpg",
        link: "",
        isEnquiryForm: true,
        linkText: "Make an enquiry",
      },
      {
        title: "Concerts",
        description:
          "Join us as we invite your favorite artisits, DJ's and performers for live outdoor experiences!",
        image: "https://kuriftu-public-media.s3.us-east-1.amazonaws.com/bishoftu/events/bsh_event1.jpg",
        link: "",
        isEnquiryForm: true,
        linkText: "Make an enquiry",
      },

      {
        title: "Social Events",
        description:
          "Thinking of hosting an event? Give us a call and our team can help plan your very own get-together, anniversary, birthday party, family trip - basically anything!",
        image: "https://kuriftu-public-media.s3.us-east-1.amazonaws.com/bishoftu/events/bsh_event3.webp",
        link: "",
        isEnquiryForm: true,
        linkText: "Make an enquiry",
      },
    ],

    venus: [
      {
        title: "Wedding Venue",
        image: "https://kuriftu-public-media.s3.us-east-1.amazonaws.com/bishoftu/events/bsh_event4.webp",
        description:
          "Pave your future with your partner in this romantic setting, share the joy at its most natural state surrounded by loved ones.",
      },

      {
        title: "Lake Side",
        image: "https://kuriftu-public-media.s3.us-east-1.amazonaws.com/bishoftu/12.JPG",
        description:
          "Make your celebration even more stunning by adding a lake-side view.",
      },

      {
        title: "Cabana Area",
        image: "https://kuriftu-public-media.s3.us-east-1.amazonaws.com/bishoftu/events/bsh_event5.webp",
        description:
          "Make a splash with your cabanas to enjoy a more private and memorable day.",
      },
      {
        title: "Waterpark",
        image: "https://kuriftu-public-media.s3.us-east-1.amazonaws.com/bishoftu/7.JPG",
        description:
          "Slide into the cool and fresh water and celebrate the season with our resort's coolest property.",
      },
    ],
    personalizations: [
      {
        title: "Menu & Catering",
        image:
          "https://kurifturesorts.com/_nuxt/img/Menu&Catering.5e64bc6.webp",
        description:
          "Our resort caters to your choice of dishes and plates for your celebrations and gatherings - whether...",
      },

      {
        title: "Event Consultation",
        image:
          "https://kurifturesorts.com/_nuxt/img/EventConsulting.9e5c587.webp",
        description:
          "Reach out to receive expert advice and consulting on your events provided by our Sales and Banquest ...",
      },

      {
        title: "Entertainment",
        image:
          "https://kurifturesorts.com/_nuxt/img/Entertainment.30afcb1.webp",
        description:
          "Let us plan a way to make your celebrations fun and exciting....",
      },
    ],
  },

  laketana: {
    title: "Eternal Moments",
    subtitle: "KURIFTU RESORT & SPA LAKE TANA WEDDING AREA",
    description:"Celebrate life’s most cherished moments in a place where time slows, whether marking a birthday, wedding, or simply the joy of being together.",
    carouselImages: [
      "https://kuriftu-public-media.s3.amazonaws.com/tana/1.webp",
      "https://kuriftu-public-media.s3.amazonaws.com/tana/2.webp",
      "https://kuriftu-public-media.s3.amazonaws.com/tana/15.webp",
    ],
    events: [
      {
        title: "Weddings",
        description:
          "Pave your future with your partner in this romantic setting, share the joy at its most natural state surrounded by loved ones",
        image: "https://kuriftu-public-media.s3.amazonaws.com/tana/16.webp",
        link: "wed",
        isEnquiryForm: false,
        linkText: "Explore",
      },

      {
        title: "Birthdays",
        description:
          "Let us celebrate your life and future in a fun and special way with your loved ones. browse through our selection of birthday packages and more!",
        image: "https://kuriftu-public-media.s3.amazonaws.com/tana/2.webp",
        link: "",
        isEnquiryForm: true,
        linkText: "Make an enquiry",
      },
      {
        title: "Social Events",
        description:
          "Thinking of hosting an event? Give us a call and our team can help plan your very own get-together, anniversary, birthday party, family trip - basically anything!",
        image: "https://kuriftu-public-media.s3.amazonaws.com/tana/1.webp",
        link: "",
        isEnquiryForm: true,
        linkText: "Make an enquiry",
      },
    ],

    venus: [
      {
        title: "Wedding Venue",
        image: "https://kuriftu-public-media.s3.amazonaws.com/tana/16.webp",
        description:
          "Pave your future with your partner in this romantic setting, share the joy at its most natural state surrounded by loved ones.",
      },

      {
        title: "Lake Side",
        image: "https://kuriftu-public-media.s3.amazonaws.com/tana/6.webp",
        description:
          "Make your celebration even more stunning by adding a lake-side view.",
      },

      {
        title: "Cabana Area",
        image: "https://kuriftu-public-media.s3.amazonaws.com/tana/15.webp",
        description:
          "Make a splash with your cabanas to enjoy a more private and memorable day.",
      },
    ],
    personalizations: [
      {
        title: "Menu & Catering",
        image:
          "https://kurifturesorts.com/_nuxt/img/Menu&Catering.0111b85.webp",
        description:
          "Our resort caters to your choice of dishes and plates for your celebrations and gatherings - whether...",
      },

      {
        title: "Event Consultation",
        image:
          "https://kurifturesorts.com/_nuxt/img/EventConsulting.f4ccdbc.webp",
        description:
          "Reach out to receive expert advice and consulting on your events provided by our Sales and Banquest ...",
      },

      {
        title: "Entertainment",
        image:
          "https://kurifturesorts.com/_nuxt/img/Entertainment.19a424e.webp",
        description:
          "Let us plan a way to make your celebrations fun and exciting....",
      },
    ],
  },
  awash: {
    title: "Celebrations at Kuriftu Resort & Spa Awash Falls",
    subtitle: "kuriftu resort & spa bishoftu wedding area",
    description:
      "Allow our team to tailor an exceptional occasion of your choosing",
    carouselImages: ["https://kuriftu-public-media.s3.amazonaws.com/awash/14.webp"],
    events: [
      {
        title: "Weddings",
        description:
          "For an intimate wedding the spectacular views, isolated location, and the perfect ambiance of Awash Falls will highlight one of the biggest days of your life - Embark on this new stage in life with your partner with specialty catering, unmatched views and breathtaking backdrops for photos that will last a lifetime",
        image: "https://kuriftu-public-media.s3.amazonaws.com/awash/15.webp",
        link: "wed",
        isEnquiryForm: false,
        linkText: "Explore",
      },

      {
        title: "Birthdays",
        description:
          "Celebrate a life full of unpredictability and a future full of surprises with special people in a special setting! At Kuriftu Awash Falls, we are prepared to make each year of your life count.",
        image: "https://kuriftu-public-media.s3.amazonaws.com/awash/16.webp",
        link: "",
        isEnquiryForm: true,
        linkText: "Make an enquiry",
      },

      {
        title: "Social Events",
        description:
          "Get-togethers, anniversaries, family trips, or any other social gathering? Let us create a unique experience for you.",
        image: "https://kuriftu-public-media.s3.amazonaws.com/awash/14.webp",
        link: "",
        isEnquiryForm: true,
        linkText: "Make an enquiry",
      },
    ],
    personalizations: [],
    venus: [],
  },
};

export const EVENTSDETIAL = {
  entoto: {
    wed: {
      title: "Wedding at Kuriftu Entoto Adventure Park",
      subtitle: "Celebrations at Kuriftu Entoto Adventure Park",
      description:
        "In a place effortlessly filled with romance, Kuriftu Entoto provides an idyllic lush green backdrop for a wedding and all festivities related",
      carouselImages: [
        "https://kurifturesorts.com/_nuxt/img/s1.84eb715.webp",
        "https://kurifturesorts.com/_nuxt/img/s2.147bc76.webp",
        "https://kurifturesorts.com/_nuxt/img/s3.38a710c.webp",
      ],

      events: [
        {
          title: "Landscape Photoshoot",
          description:
            "A picture is truly worth a thousand words in this setting - don't miss a chnace to take your own breath away while looking back at photoshoots from your special day!",
          image: "https://kurifturesorts.com/_nuxt/img/Landscape.628f404.webp",
        },

        {
          title: "Bridal Shower",
          description:
            "Shower the bride to be with an off the beaten path experience in the forest. Spoil her with an intimate celebration among loved ones in the presence of mother nature. Dazzle her with the simple, yet imporant thiings needed before her big day. Trust that our teams will execute perfection",
          image:
            "https://kurifturesorts.com/_nuxt/img/Bridalshower.e90f713.webp",
        },

        {
          title: "Bachelor/Ette Party",
          description:
            "Ladies, this is your time to shine by curating an unforgettably spontaneous event for your bride-to-be! Get creative with our team and customize your friends' bachelorette extravaganza!",
          image:
            "https://kurifturesorts.com/_nuxt/img/Bachelorette.92bb38c.webp",
        },
      ],
      carouselImages2: [
        "https://kurifturesorts.com/_nuxt/img/we.c516b54.webp",
        "https://kurifturesorts.com/_nuxt/img/s4.1e7dc28.webp",
        "https://kurifturesorts.com/_nuxt/img/s1.84eb715.webp",
        "https://kurifturesorts.com/_nuxt/img/Landscape.628f404.webp",
      ],
    },
  },

  bishoftu: {
    wed: {
      title: "Wedding At Kuriftu Resort & Spa Bishoftu",
      subtitle: "WEDDING AT KURIFTU RESORT & SPA BISHOFTU",
      description:
        "In a place effortlessly filled with romance, Kuriftu Bishoftu provides an idyllic lush green backdrop for a wedding and all festivities related",
      carouselImages: [
        "https://kurifturesorts.com/_nuxt/img/WeddingArea.9732696.webp",
        "https://kurifturesorts.com/_nuxt/img/bishCele.1e852b4.webp",
        "https://kurifturesorts.com/_nuxt/img/wedding.2364f4a.webp",
      ],

      events: [
        {
          title: "Landscape Photoshoot",
          description:
            "A picture is truly worth a thousand words in this setting - don't miss a chnace to take your own breath away while looking back at photoshoots from your special day!",
          image: "https://kurifturesorts.com/_nuxt/img/Landscape.e579177.webp",
        },

        {
          title: "Bridal Shower",
          description:
            "Shower the bride to be with an off the beaten path experience in the forest. Spoil her with an intimate celebration among loved ones in the presence of mother nature. Dazzle her with the simple, yet imporant thiings needed before her big day. Trust that our teams will execute perfection",
          image:
            "https://kurifturesorts.com/_nuxt/img/Bridalshower.e90f713.webp",
        },

        {
          title: "Bachelor/Ette Party",
          description:
            "Ladies, this is your time to shine by curating an unforgettably spontaneous event for your bride-to-be! Get creative with our team and customize your friends' bachelorette extravaganza!",
          image:
            "https://kurifturesorts.com/_nuxt/img/Bachelorette.92bb38c.webp",
        },
      ],
      carouselImages2: [
        "https://kurifturesorts.com/_nuxt/img/WeddingLong.07f0acc.webp",
        "https://kurifturesorts.com/_nuxt/img/WeddingArea.9732696.webp",
        "https://kurifturesorts.com/_nuxt/img/wedding.2364f4a.webp",
        "https://kurifturesorts.com/_nuxt/img/3.b4fafda.webp",
      ],
    },
  },

  laketana: {
    wed: {
      title: "Wedding At Kuriftu Resort & Spa Lake Tana",
      subtitle: "WEDDING AT KURIFTU RESORT & SPA LAKE TANA",
      description:
        "In a place effortlessly filled with romance, Kuriftu Lake Tana provides an idyllic lush green backdrop for a wedding and all festivities related",
      carouselImages: [
        "https://kurifturesorts.com/_nuxt/img/wed.2e89f5a.webp",
        "https://kurifturesorts.com/_nuxt/img/bishCele.1e852b4.webp",
      ],

      events: [
        {
          title: "Landscape Photoshoot",
          description:
            "A picture is truly worth a thousand words in this setting - don't miss a chnace to take your own breath away while looking back at photoshoots from your special day!",
          image: "https://kurifturesorts.com/_nuxt/img/Landscape.e579177.webp",
        },

        {
          title: "Bridal Shower",
          description:
            "Shower the bride to be with an off the beaten path experience in the forest. Spoil her with an intimate celebration among loved ones in the presence of mother nature. Dazzle her with the simple, yet imporant thiings needed before her big day. Trust that our teams will execute perfection",
          image:
            "https://kurifturesorts.com/_nuxt/img/Bridalshower.e90f713.webp",
        },

        {
          title: "Bachelor/Ette Party",
          description:
            "Ladies, this is your time to shine by curating an unforgettably spontaneous event for your bride-to-be! Get creative with our team and customize your friends' bachelorette extravaganza!",
          image:
            "https://kurifturesorts.com/_nuxt/img/Bachelorette.92bb38c.webp",
        },
      ],
      carouselImages2: [
        "https://kurifturesorts.com/_nuxt/img/3.b4fafda.webp",
        "https://kurifturesorts.com/_nuxt/img/WeddingLong.07f0acc.webp",
        "https://kurifturesorts.com/_nuxt/img/WeddingArea.9732696.webp",
        "https://kurifturesorts.com/_nuxt/img/wedding.2364f4a.webp",
      ],
    },
  },
  awash: {
    wed: {
      title: "Kuriftu Resort & Spa Awash Falls",
      subtitle: "Kuriftu Resort & Spa Awash Falls",
      description:
        "Destination weds make for beautiful intimate weds. Kuriftu Resort & Spa Awash Falls is a one-of-a-kind destination! the spectacular view, The perfect ambiance of Awash Falls will highlight one of the biggest days of your life.",
      carouselImages: ["https://kurifturesorts.com/_nuxt/img/1.0a370e9.webp"],

      events: [
        {
          title: "Landscape Photoshoot",
          description:
            "Pictures will stay forever! With our beautiful sceneries and lakeside view, our resort would be the best place to capture memories that will last forever.",
          image: "https://kurifturesorts.com/_nuxt/img/Landscape.e3ecdac.webp",
        },

        {
          title: "Bridal Shower",
          description:
            "Let us celebrate the bride before her special day together! Our resort provide a space, entertainment and dishes for that.",
          image:
            "https://kurifturesorts.com/_nuxt/img/Bridalshower.e90f713.webp",
        },

        {
          title: "Bachelor/Ette Party",
          description:
            "Have a few days before you tie the knot? Spend a day or two at Kuriftu Resort & Spa with your friends to enjoy.",
          image:
            "https://kurifturesorts.com/_nuxt/img/Bachelorette.92bb38c.webp",
        },
        {
          title: "Mels",
          description:
            "The traditional venue, decorations, buffet, and entertainment our resort provides makes your Mels unforgattable.",
          image: "https://kurifturesorts.com/_nuxt/img/Mels.d221dee.webp",
        },

        {
          title: "wed",
          description:
            "Our resort provides the best place to celebrate one of the most significant days in your and your partner's life!",
          image: "https://kurifturesorts.com/_nuxt/img/Wedding1.4c034c6.webp",
        },

        {
          title: "Honey moon",
          description:
            "Plan the most incredible romantic getaway with your spouse at our resort. Kuriftu Resort & Spa makes you feel the love in the world.",
          image: "https://kurifturesorts.com/_nuxt/img/Honeymoon.c509471.webp",
        },
      ],
      carouselImages2: [
        "https://kurifturesorts.com/_nuxt/img/7.2dae83c.webp",
        "https://kurifturesorts.com/_nuxt/img/10.60d29d1.webp",
        "https://kurifturesorts.com/_nuxt/img/9.726df95.webp",
        "https://kurifturesorts.com/_nuxt/img/1.cba30ab.webp",
        "https://kurifturesorts.com/_nuxt/img/3.b337c8c.webp",
      ],
    },
  },
};
