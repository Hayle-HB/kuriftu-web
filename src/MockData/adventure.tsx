import { AdventureModal } from "../interfaces/adventureModal";

export const ADVENTURE: Record<string, AdventureModal> = {
  entoto: {
    title: "Adventures at Kuriftu Resort & spa entoto",
    description:
      "Get ready adrenaline junkies and nature enthusiats for the ultimate adventureland in the country! With no comparison, Kuriftu Entoto Adventure Park showcases a variety of activities that trump anything of its kind in the country - from paintball shooting ranges to aerial experiences through ziplining and rope course, guests are guaranteed an unforgetable time",
    carouselImages: [
      "https://kurifturesorts.com/_nuxt/img/1.2bb9fd7.webp",
      "https://kurifturesorts.com/_nuxt/img/6.609dbb9.webp",
      "https://kurifturesorts.com/_nuxt/img/3.89f1f99.webp",
    ],
    adventures: [
      {
        subTitle: "ENTOTTO ADVENTURES",
        title: "Horse Riding",
        description:
          "Take time to not only ride, but connect with our wonderful horses at the stable, these beauties have been trained to care for our guests as much as we do! ",
        image: "https://kurifturesorts.com/_nuxt/img/hors.1e1048c.webp",
      },
      {
        subTitle: "ENTOTTO ADVENTURES",
        title: "Zipline",
        description:
          " Fear of heights? Dare to take a chance with us - Picture yourself soaring through the sky in the middle of the forest overlooking Entoto's natural landscape over an 500 meter zipline tour - You'll find yourself tempted for more excitement ",
        image: "https://kurifturesorts.com/_nuxt/img/zip.c6c6a45.webp",
      },
      {
        subTitle: "ENTOTTO ADVENTURES",
        title: "Jungle Playground",
        description:
          "A place just for kids and parents to spend quality time together in the Jungle Playground!",
        image: "https://kurifturesorts.com/_nuxt/img/play.54f31e5.webp",
      },
    ],
  },
};
