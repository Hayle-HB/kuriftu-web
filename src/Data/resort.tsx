// Mock data for resort locations
const resorts = [
    { id: 1, name: 'Boston Day Spa', slug:'bosotn-day-spa', location: 'Addis Ababa, Ethiopia', coordinates: [38.7578, 9.0301], image: "https://kuriftu-media-bucket.s3.us-east-1.amazonaws.com/object_media/resort/boston_day_spa/BOSTON%20DAY%20SPA%20_PIER%205%20STUDIOS_OCT-49.jpg" },
    { id: 2, name: 'Kuriftu Resort & Spa Entoto', slug:'entoto', location: 'Addis Ababa, Ethiopia', coordinates: [38.7636, 9.0690], image: "https://kuriftu-media-bucket.s3.us-east-1.amazonaws.com/object_media/resort/entoto/_DSC7949.jpg"},
    { id: 3, name: 'Kuriftu Resort & Spa Awash Falls', slug:'awash-falls', location: 'Awash, Ethiopia', coordinates: [39.9168, 8.9848], image: "https://kurifturesorts.com/_nuxt/img/barber.68d5290.webp"},
    { id: 4, name: 'Kuriftu Resort & Spa Bishoftu', slug:'bishoftu', location: 'Lake Kuriftu, Ethiopia', coordinates: [38.9785, 8.7542], image: "https://kurifturesorts.com/_nuxt/img/barber.68d5290.webp" },
    { id: 5, name: 'Kuriftu Water Park', slug:'water-park', location: 'Lake Kuriftu, Ethiopia', coordinates: [38.9785, 8.7542], image: "https://kurifturesorts.com/_nuxt/img/barber.68d5290.webp" },
    { id: 6, name: 'Kuriftu Resort & Spa Lake Tana', slug:'lake-tana', location: 'Bahirdar, Ethiopia', coordinates: [37.3934, 11.6019], image: "https://kurifturesorts.com/_nuxt/img/barber.68d5290.webp" },
];

export {resorts}

export interface Resort {
    name: string;
    region: string;
    address: string;
    description?: {
        title: string,
        text: string,
        image?: string[]
    };
    content: {
        title: string,
        text: string,
        image?: string
    }[];
    gallery: string[];
    phone: string;
    latitude: number;
    longitude: number;
    email?: string;
    rating?: number;
    cover_image?: string;
    cover_video?: string;
    menu?: string[];
    amenities?: string[];
    tags?: string[];
    images?: string[];
}

const resortDetails: Record<string, Resort> = {
    "bosotn-day-spa": {
        "name": "Boston Day Spa",
        "region": "Addis Ababa",
        "address": "123 Spa Street, Addis Ababa, Ethiopia",
        "description": {
            "title": "A relaxing urban day spa with a variety of treatments.",
            "text": "Boston Day Spa, the flagship of the Kuriftu brand, embodies our core mission of community empowerment. Located in Addis Ababa, it has transformed local construction workers into skilled spa professionals, many of whom have been with us for over 15 years. Beyond exceptional spa services tailored to diverse wellness needs, Boston Day Spa doubles as an art gallery, featuring curated works from renowned Ethiopian artists like Merikokeb Berhanu. Her intricate mosaics grace our space, with her art now showcased globally, including at The New York Armory Show and Venice Biennale. Celebrating artistry and wellness, Boston Day Spa is a sanctuary where heritage and healing meet.",
            "image": ["https://kurifturesorts.com/_nuxt/img/4.61f4fcb.jpg", "https://kurifturesorts.com/_nuxt/img/9.e53335f.jpg"]
        },
        "gallery": [
            "https://kuriftu-media-bucket.s3.us-east-1.amazonaws.com/object_media/resort/boston_day_spa/BOSTON+DAY+SPA+_PIER+5+STUDIOS_OCT-6.jpg",
            "https://kuriftu-media-bucket.s3.us-east-1.amazonaws.com/object_media/resort/boston_day_spa/BOSTON+DAY+SPA+_PIER+5+STUDIOS_OCT-35.jpg",
            "https://kuriftu-media-bucket.s3.us-east-1.amazonaws.com/object_media/resort/boston_day_spa/BOSTON+DAY+SPA+_PIER+5+STUDIOS_OCT-28.jpg",
            "https://kuriftu-media-bucket.s3.us-east-1.amazonaws.com/object_media/resort/boston_day_spa/BOSTON+DAY+SPA+_PIER+5+STUDIOS_OCT-40.jpg",
            "https://kuriftu-media-bucket.s3.us-east-1.amazonaws.com/object_media/resort/boston_day_spa/BOSTON+DAY+SPA+_PIER+5+STUDIOS_OCT-79.jpg",
            "https://kuriftu-media-bucket.s3.us-east-1.amazonaws.com/object_media/resort/boston_day_spa/BOSTON+DAY+SPA+_PIER+5+STUDIOS_OCT-76.jpg",
            "https://kuriftu-media-bucket.s3.us-east-1.amazonaws.com/object_media/resort/boston_day_spa/BOSTON+DAY+SPA+_PIER+5+STUDIOS_OCT-26.jpg",
            "https://kurifturesorts.com/_nuxt/img/6.e70b338.jpg",
            "https://kurifturesorts.com/_nuxt/img/12.fb4ab8d.jpg",
            "https://kurifturesorts.com/_nuxt/img/11.5e9cf78.jpg",
            "https://kurifturesorts.com/_nuxt/img/13.e4fe5a9.jpg",
            "https://kurifturesorts.com/_nuxt/img/16.e0133a8.jpg",
            "https://kurifturesorts.com/_nuxt/img/22.c9aa940.jpg"
        ],
        "content": [
            {
                "title": "Hair Salon",
                "text": "Step into indulgence at our Hair Salon, where luxury meets artistry. Surrounded by high ceilings, vibrant Ethiopian art, and soft natural light, every moment feels like a retreat. Specializing in the mastery of all hair textures, including kinks and curls, our expert stylists ensure you leave flawless and confident. Here, personalized care and sophistication define every service.",
                "image": "https://kuriftu-media-bucket.s3.us-east-1.amazonaws.com/object_media/resort/boston_day_spa/BOSTON%20DAY%20SPA%20_PIER%205%20STUDIOS_OCT-20.jpg"
            },
            {
                "title": "Steam / Sauna / Jacuzzi",
                "text": "Escape to serenity in our private Steam, Sauna, and Jacuzzi facilities, adorned with breathtaking mosaics by acclaimed artist Merikokeb Berhanu. Whether you're planning a rejuvenating spa day with friends or a romantic wellness evening, immerse yourself in a space where relaxation and artistry converge. Let the tranquil ambiance refresh your body and inspire your soul.",
                "image": "https://kurifturesorts.com/_nuxt/img/suana.9596bdf.webp"
            },
            {
                "title": "Massage Cave",
                "text": "Discover unparalleled relaxation in our enchanting Massage Cave, a sanctuary inspired by natural elements and Ethiopian heritage. Warm tones, soothing aromas, and an otherworldly aesthetic set the stage for a transformative experience. With innovative techniques and personalized treatments crafted by our internationally trained therapists, every massage is a journey to ultimate rejuvenation.",
                "image": "https://kuriftu-media-bucket.s3.us-east-1.amazonaws.com/object_media/resort/boston_day_spa/BOSTON+DAY+SPA+_PIER+5+STUDIOS_OCT-51.jpg"
            }
        ],
        "phone": "+251911223344",
        "latitude": 9.0301,
        "longitude": 38.7578,
        "email": "info@bostondayspa.com",
        "rating": 4,
        "cover_image": "https://kuriftu-media-bucket.s3.us-east-1.amazonaws.com/object_media/resort/boston_day_spa/BOSTON%20DAY%20SPA%20_PIER%205%20STUDIOS_OCT-49.jpg",
        "cover_video": "https://player.vimeo.com/video/725574916?api=1&autoplay=1&controls=0&sidedock=0&loop=1&title=0&byline=0&portrait=0&muted=1&background=1",
        "menu": ["Massage", "Facial", "Manicure", "Pedicure"],
        "amenities": ["WiFi", "Parking", "Cafe"],
        "tags": ["Spa", "Relaxation", "Urban"],
        "images": [
            "https://example.com/images/boston-day-spa-1.jpg",
            "https://kuriftu-media-bucket.s3.us-east-1.amazonaws.com/object_media/resort/boston_day_spa/BOSTON+DAY+SPA+_PIER+5+STUDIOS_OCT-24.jpg"
        ]
    },
    "entoto": {
        "name": "Kuriftu Resort & Spa Entoto",
        "region": "Addis Ababa",
        "address": "456 Entoto Street, Addis Ababa, Ethiopia",
        "description": {
            "title": "A relaxing urban day spa with a variety of treatments.",
            "text": "Boston Day Spa, the flagship of the Kuriftu brand, embodies our core mission of community empowerment. Located in Addis Ababa, it has transformed local construction workers into skilled spa professionals, many of whom have been with us for over 15 years. Beyond exceptional spa services tailored to diverse wellness needs, Boston Day Spa doubles as an art gallery, featuring curated works from renowned Ethiopian artists like Merikokeb Berhanu. Her intricate mosaics grace our space, with her art now showcased globally, including at The New York Armory Show and Venice Biennale. Celebrating artistry and wellness, Boston Day Spa is a sanctuary where heritage and healing meet.",
            "image": ["https://kurifturesorts.com/_nuxt/img/4.61f4fcb.jpg", "https://kurifturesorts.com/_nuxt/img/9.e53335f.jpg"]
        },
        "gallery": [
            "https://kuriftu-media-bucket.s3.us-east-1.amazonaws.com/object_media/resort/entoto/_DSC7930.jpg",
            "https://kuriftu-media-bucket.s3.us-east-1.amazonaws.com/object_media/resort/entoto/_DSC8509.jpg",
            "https://kuriftu-media-bucket.s3.us-east-1.amazonaws.com/object_media/resort/entoto/_DSC9136.jpg",
            "https://kuriftu-media-bucket.s3.us-east-1.amazonaws.com/object_media/resort/entoto/_DSC7935.jpg",
            "https://kuriftu-media-bucket.s3.us-east-1.amazonaws.com/object_media/resort/entoto/_DSC8814.jpg"
        ],
        "content": [
            {
                "title": "Race Track",
                "text": "Zoom through our customized Kuriftu Entoto Race Track with the choice of either Go Karts or Pedal Karts. This 350 meter track is designed to awaken your inner racer to comepete head-to-head against friend or foe in a battle to the finish line",
                "image": "https://kurifturesorts.com/_nuxt/img/go.8dde4b1.webp"
            },
            {
                "title": "Wall Climbing",
                "text": "Reach new heights on this upward battle of individual strength and endurance following our 10 meter high naturally built rock climbing wall",
                "image": "https://kuriftu-media-bucket.s3.us-east-1.amazonaws.com/object_media/resort/entoto/_DSC8532.jpg"
            },
        ],
        "phone": "+251911334455",
        "latitude": 9.069,
        "longitude": 38.7636,
        "email": "contact@kuriftuentoto.com",
        "rating": 5,
        "cover_image": "https://kuriftu-media-bucket.s3.us-east-1.amazonaws.com/object_media/resort/entoto/_DSC7949.jpg",
        "cover_video": "https://kuriftu-media-bucket.s3.us-east-1.amazonaws.com/object_media/resort/entoto/Entoto+Final+.mov",
        "menu": ["Room Service", "Fine Dining", "Spa Treatments"],
        "amenities": ["Pool", "Spa", "Gym", "Restaurant"],
        "tags": ["Luxury", "Mountain View", "All-inclusive"],
        "images": [
            "https://kuriftu-media-bucket.s3.us-east-1.amazonaws.com/object_media/resort/entoto/_DSC7930.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAXKPUZ2PKHKAUHP7W%2F20241114%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241114T115956Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLWVhc3QtMSJHMEUCIQC54I%2BclEmRA43e%2B28BskD3HPAUt7MB8%2FTvm4%2F%2BQZGb8QIgFkDIbFeFFIUJBAZHlyZdl9OSEm%2Be75FZowXqLknxW6EqjQMI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw1MDM1NjE0NDIyNjAiDMCuYahMK9BTT7mT2CrhAnEDiH%2Fd1QVh%2Bl13Itzk9ims0dUsIQIqztw5PfCS0ok0100rscK8P1v8QBTP2NZg86uZajGx%2BxsgsjsS6sXaCzofISNrZ%2Bc8nBmiC5ftV%2Bjr6rZo4gkrBjkoVkWVmzJYhgALOk%2FiTkV23L4%2Fopx%2BHTo65QbNXq96Xy8HqYBR%2FoIrkIqDIsYQhZ9D9Exk7PuXGU%2B64AlvV9n39I3qlnd0%2BNJwkqqaKBCxCK82MtW23QE7KEFW4zCL2mfc7DZPF6l5RP7kNZjgh1t9%2BJjQ1IIca05N43w1z9PA6JpcIoLbjgM61eeQI3W%2F1EunmD8DVASdX%2BZlGh%2F6igwS%2F03sU32qcZEl1X8AQss7khn7smn9Fr1wiQrp%2B9U3nEB8q8%2FOlgGxEmftelHTeNBwFROrZ7ONpjbHh2DnO%2F3zDNBb9GI8wf7vgoU5XrHVK4KCzyiEYWVGPlVnjQUZ82ZR%2BGqHKEKGK7ooMKW91bkGOrMCkzrfmApFRY50T7fkKr0C6IlSSAet478BOeMm8ldibCK0ZTjeDIgh%2BB3yKuuNPNBkhMcAjg3jTWQLnKbeXbxJFXeRxuvTAZUrpeEpT%2FOUWJizDx4ahQhD6BiLVw9GePwxgnbqheSvg8xrKKB2Xtg25TIjEMYeIbKsXBjNoIxKEp1x%2B48%2B487MIoJacHiL5talTbW5TIeJr7KoZiYW85qebhJF9ni8xW4rOeLtm3Sing8p8U4n3eID3kx4u1sTfQ9aGGmubu9cZqec%2BDS1nqmZ8i6NBQsGq%2BH1S1wT%2BWHKKAwQYmxDRwOeBb8TlIZbuNhOkCjppEgFfHBPOBrOeOJN%2FP66h1EqSO7qZel50sFCu%2FWf6l9Yec2nNzSK7nDQq1pUrFp3xIaZEEPpnimLwonhI0sHWg%3D%3D&X-Amz-Signature=5a549f9a05ec77ca62ec4ce8335297fc0962a59abed5a0eeec31134c1f2cd518&X-Amz-SignedHeaders=host&response-content-disposition=inline",
            "https://kuriftu-media-bucket.s3.us-east-1.amazonaws.com/object_media/resort/entoto/_DSC8315.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAXKPUZ2PKHKAUHP7W%2F20241114%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241114T120148Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLWVhc3QtMSJHMEUCIQC54I%2BclEmRA43e%2B28BskD3HPAUt7MB8%2FTvm4%2F%2BQZGb8QIgFkDIbFeFFIUJBAZHlyZdl9OSEm%2Be75FZowXqLknxW6EqjQMI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw1MDM1NjE0NDIyNjAiDMCuYahMK9BTT7mT2CrhAnEDiH%2Fd1QVh%2Bl13Itzk9ims0dUsIQIqztw5PfCS0ok0100rscK8P1v8QBTP2NZg86uZajGx%2BxsgsjsS6sXaCzofISNrZ%2Bc8nBmiC5ftV%2Bjr6rZo4gkrBjkoVkWVmzJYhgALOk%2FiTkV23L4%2Fopx%2BHTo65QbNXq96Xy8HqYBR%2FoIrkIqDIsYQhZ9D9Exk7PuXGU%2B64AlvV9n39I3qlnd0%2BNJwkqqaKBCxCK82MtW23QE7KEFW4zCL2mfc7DZPF6l5RP7kNZjgh1t9%2BJjQ1IIca05N43w1z9PA6JpcIoLbjgM61eeQI3W%2F1EunmD8DVASdX%2BZlGh%2F6igwS%2F03sU32qcZEl1X8AQss7khn7smn9Fr1wiQrp%2B9U3nEB8q8%2FOlgGxEmftelHTeNBwFROrZ7ONpjbHh2DnO%2F3zDNBb9GI8wf7vgoU5XrHVK4KCzyiEYWVGPlVnjQUZ82ZR%2BGqHKEKGK7ooMKW91bkGOrMCkzrfmApFRY50T7fkKr0C6IlSSAet478BOeMm8ldibCK0ZTjeDIgh%2BB3yKuuNPNBkhMcAjg3jTWQLnKbeXbxJFXeRxuvTAZUrpeEpT%2FOUWJizDx4ahQhD6BiLVw9GePwxgnbqheSvg8xrKKB2Xtg25TIjEMYeIbKsXBjNoIxKEp1x%2B48%2B487MIoJacHiL5talTbW5TIeJr7KoZiYW85qebhJF9ni8xW4rOeLtm3Sing8p8U4n3eID3kx4u1sTfQ9aGGmubu9cZqec%2BDS1nqmZ8i6NBQsGq%2BH1S1wT%2BWHKKAwQYmxDRwOeBb8TlIZbuNhOkCjppEgFfHBPOBrOeOJN%2FP66h1EqSO7qZel50sFCu%2FWf6l9Yec2nNzSK7nDQq1pUrFp3xIaZEEPpnimLwonhI0sHWg%3D%3D&X-Amz-Signature=8d37f083ef23e71ce9135dcd434eb8de22611b087d50483be568a88c25a0a48a&X-Amz-SignedHeaders=host&response-content-disposition=inline"
        ]
    },
    "awash-falls": {
        "name": "Kuriftu Resort & Spa Awash Falls",
        "region": "Awash",
        "address": "789 Falls Road, Awash, Ethiopia",
        "description": {
            "title": "A relaxing urban day spa with a variety of treatments.",
            "text": "Boston Day Spa, the flagship of the Kuriftu brand, embodies our core mission of community empowerment. Located in Addis Ababa, it has transformed local construction workers into skilled spa professionals, many of whom have been with us for over 15 years. Beyond exceptional spa services tailored to diverse wellness needs, Boston Day Spa doubles as an art gallery, featuring curated works from renowned Ethiopian artists like Merikokeb Berhanu. Her intricate mosaics grace our space, with her art now showcased globally, including at The New York Armory Show and Venice Biennale. Celebrating artistry and wellness, Boston Day Spa is a sanctuary where heritage and healing meet.",
            "image": ["https://kurifturesorts.com/_nuxt/img/4.61f4fcb.jpg", "https://kurifturesorts.com/_nuxt/img/9.e53335f.jpg"]
        },
        "gallery": [
            "https://kurifturesorts.com/_nuxt/img/barber.68d5290.webp",
            "https://kurifturesorts.com/_nuxt/img/suana.9596bdf.webp",
            "https://kurifturesorts.com/_nuxt/img/Facial.2854687.webp",
            "https://kurifturesorts.com/_nuxt/img/HairSalon.e3a2306.webp",
            "https://kurifturesorts.com/_nuxt/img/Wax.59c254e.webp",
            "https://kurifturesorts.com/_nuxt/img/1.6aae899.jpg",
            "https://kurifturesorts.com/_nuxt/img/3.58428a8.jpg",
            "https://kurifturesorts.com/_nuxt/img/6.e70b338.jpg",
            "https://kurifturesorts.com/_nuxt/img/12.fb4ab8d.jpg",
            "https://kurifturesorts.com/_nuxt/img/11.5e9cf78.jpg",
            "https://kurifturesorts.com/_nuxt/img/13.e4fe5a9.jpg",
            "https://kurifturesorts.com/_nuxt/img/16.e0133a8.jpg",
            "https://kurifturesorts.com/_nuxt/img/22.c9aa940.jpg"
        ],
        "content": [
            {
                "title": "Hair Salon",
                "text": "Step into indulgence at our Hair Salon, where luxury meets artistry. Surrounded by high ceilings, vibrant Ethiopian art, and soft natural light, every moment feels like a retreat. Specializing in the mastery of all hair textures, including kinks and curls, our expert stylists ensure you leave flawless and confident. Here, personalized care and sophistication define every service.",
                "image": "https://kurifturesorts.com/_nuxt/img/HairSalon1.4c3bc26.webp"
            },
            {
                "title": "Steam / Sauna / Jacuzzi",
                "text": "Escape to serenity in our private Steam, Sauna, and Jacuzzi facilities, adorned with breathtaking mosaics by acclaimed artist Merikokeb Berhanu. Whether you're planning a rejuvenating spa day with friends or a romantic wellness evening, immerse yourself in a space where relaxation and artistry converge. Let the tranquil ambiance refresh your body and inspire your soul.",
                "image": "https://kurifturesorts.com/_nuxt/img/suana.9596bdf.webp"
            },
            {
                "title": "Massage Cave",
                "text": "Discover unparalleled relaxation in our enchanting Massage Cave, a sanctuary inspired by natural elements and Ethiopian heritage. Warm tones, soothing aromas, and an otherworldly aesthetic set the stage for a transformative experience. With innovative techniques and personalized treatments crafted by our internationally trained therapists, every massage is a journey to ultimate rejuvenation.",
                "image": "https://kurifturesorts.com/_nuxt/img/21.6b04da9.jpg"
            }
        ],
        "phone": "+251912556677",
        "latitude": 8.9848,
        "longitude": 39.9168,
        "email": "reservations@kuriftuawash.com",
        "rating": 4,
        "cover_image": "https://kurifturesorts.com/_nuxt/img/gallery2.e8d5a67.webp",
        "cover_video": "https://player.vimeo.com/video/722179226?api=1&autoplay=1&controls=0&sidedock=0&loop=1&title=0&byline=0&portrait=0&muted=1&background=1",
        "menu": ["Breakfast Buffet", "Local Cuisine", "Bar"],
        "amenities": ["Guided Tours", "Waterfalls Access", "Eco-friendly"],
        "tags": ["Adventure", "Nature", "Falls"],
        "images": [
            "https://example.com/images/kuriftu-awash-1.jpg",
            "https://example.com/images/kuriftu-awash-2.jpg"
        ]
    },
    "bishoftu": {
        "name": "Kuriftu Resort & Spa Bishoftu",
        "region": "Lake Kuriftu",
        "address": "321 Lake View Avenue, Bishoftu, Ethiopia",
        "description": {
            "title": "A relaxing urban day spa with a variety of treatments.",
            "text": "Boston Day Spa, the flagship of the Kuriftu brand, embodies our core mission of community empowerment. Located in Addis Ababa, it has transformed local construction workers into skilled spa professionals, many of whom have been with us for over 15 years. Beyond exceptional spa services tailored to diverse wellness needs, Boston Day Spa doubles as an art gallery, featuring curated works from renowned Ethiopian artists like Merikokeb Berhanu. Her intricate mosaics grace our space, with her art now showcased globally, including at The New York Armory Show and Venice Biennale. Celebrating artistry and wellness, Boston Day Spa is a sanctuary where heritage and healing meet.",
            "image": ["https://kurifturesorts.com/_nuxt/img/4.61f4fcb.jpg", "https://kurifturesorts.com/_nuxt/img/9.e53335f.jpg"]
        },
        "gallery": [
            "https://kurifturesorts.com/_nuxt/img/barber.68d5290.webp",
            "https://kurifturesorts.com/_nuxt/img/suana.9596bdf.webp",
            "https://kurifturesorts.com/_nuxt/img/Facial.2854687.webp",
            "https://kurifturesorts.com/_nuxt/img/HairSalon.e3a2306.webp",
            "https://kurifturesorts.com/_nuxt/img/Wax.59c254e.webp",
            "https://kurifturesorts.com/_nuxt/img/1.6aae899.jpg",
            "https://kurifturesorts.com/_nuxt/img/3.58428a8.jpg",
            "https://kurifturesorts.com/_nuxt/img/6.e70b338.jpg",
            "https://kurifturesorts.com/_nuxt/img/12.fb4ab8d.jpg",
            "https://kurifturesorts.com/_nuxt/img/11.5e9cf78.jpg",
            "https://kurifturesorts.com/_nuxt/img/13.e4fe5a9.jpg",
            "https://kurifturesorts.com/_nuxt/img/16.e0133a8.jpg",
            "https://kurifturesorts.com/_nuxt/img/22.c9aa940.jpg"
        ],
        "content": [
            {
                "title": "Hair Salon",
                "text": "Step into indulgence at our Hair Salon, where luxury meets artistry. Surrounded by high ceilings, vibrant Ethiopian art, and soft natural light, every moment feels like a retreat. Specializing in the mastery of all hair textures, including kinks and curls, our expert stylists ensure you leave flawless and confident. Here, personalized care and sophistication define every service.",
                "image": "https://kurifturesorts.com/_nuxt/img/HairSalon1.4c3bc26.webp"
            },
            {
                "title": "Steam / Sauna / Jacuzzi",
                "text": "Escape to serenity in our private Steam, Sauna, and Jacuzzi facilities, adorned with breathtaking mosaics by acclaimed artist Merikokeb Berhanu. Whether you're planning a rejuvenating spa day with friends or a romantic wellness evening, immerse yourself in a space where relaxation and artistry converge. Let the tranquil ambiance refresh your body and inspire your soul.",
                "image": "https://kurifturesorts.com/_nuxt/img/suana.9596bdf.webp"
            },
            {
                "title": "Massage Cave",
                "text": "Discover unparalleled relaxation in our enchanting Massage Cave, a sanctuary inspired by natural elements and Ethiopian heritage. Warm tones, soothing aromas, and an otherworldly aesthetic set the stage for a transformative experience. With innovative techniques and personalized treatments crafted by our internationally trained therapists, every massage is a journey to ultimate rejuvenation.",
                "image": "https://kurifturesorts.com/_nuxt/img/21.6b04da9.jpg"
            }
        ],
        "phone": "+251911445566",
        "latitude": 8.7542,
        "longitude": 38.9785,
        "email": "contact@kuriftubishoftu.com",
        "rating": 5,
        "cover_image": "https://example.com/images/kuriftu-bishoftu.jpg",
        "cover_video": "https://player.vimeo.com/video/705340877?api=1&autoplay=1&controls=0&sidedock=0&loop=1&title=0&byline=0&portrait=0&muted=1&background=1",
        "menu": ["Fishing Excursions", "Boat Rides", "Nature Walks"],
        "amenities": ["Lake Access", "Private Villas", "Spa"],
        "tags": ["Waterfront", "Relaxation", "Resort"],
        "images": [
            "https://example.com/images/kuriftu-bishoftu-1.jpg",
            "https://example.com/images/kuriftu-bishoftu-2.jpg"
        ]
    },
    "water-park": {
        "name": "Kuriftu Water Park",
        "region": "Lake Kuriftu",
        "address": "678 Water Park Lane, Bishoftu, Ethiopia",
        "description": {
            "title": "A relaxing urban day spa with a variety of treatments.",
            "text": "Boston Day Spa, the flagship of the Kuriftu brand, embodies our core mission of community empowerment. Located in Addis Ababa, it has transformed local construction workers into skilled spa professionals, many of whom have been with us for over 15 years. Beyond exceptional spa services tailored to diverse wellness needs, Boston Day Spa doubles as an art gallery, featuring curated works from renowned Ethiopian artists like Merikokeb Berhanu. Her intricate mosaics grace our space, with her art now showcased globally, including at The New York Armory Show and Venice Biennale. Celebrating artistry and wellness, Boston Day Spa is a sanctuary where heritage and healing meet.",
            "image": ["https://kurifturesorts.com/_nuxt/img/4.61f4fcb.jpg", "https://kurifturesorts.com/_nuxt/img/9.e53335f.jpg"]
        },
        "gallery": [
            "https://kurifturesorts.com/_nuxt/img/barber.68d5290.webp",
            "https://kurifturesorts.com/_nuxt/img/suana.9596bdf.webp",
            "https://kurifturesorts.com/_nuxt/img/Facial.2854687.webp",
            "https://kurifturesorts.com/_nuxt/img/HairSalon.e3a2306.webp",
            "https://kurifturesorts.com/_nuxt/img/Wax.59c254e.webp",
            "https://kurifturesorts.com/_nuxt/img/1.6aae899.jpg",
            "https://kurifturesorts.com/_nuxt/img/3.58428a8.jpg",
            "https://kurifturesorts.com/_nuxt/img/6.e70b338.jpg",
            "https://kurifturesorts.com/_nuxt/img/12.fb4ab8d.jpg",
            "https://kurifturesorts.com/_nuxt/img/11.5e9cf78.jpg",
            "https://kurifturesorts.com/_nuxt/img/13.e4fe5a9.jpg",
            "https://kurifturesorts.com/_nuxt/img/16.e0133a8.jpg",
            "https://kurifturesorts.com/_nuxt/img/22.c9aa940.jpg"
        ],
        "content": [
            {
                "title": "Hair Salon",
                "text": "Step into indulgence at our Hair Salon, where luxury meets artistry. Surrounded by high ceilings, vibrant Ethiopian art, and soft natural light, every moment feels like a retreat. Specializing in the mastery of all hair textures, including kinks and curls, our expert stylists ensure you leave flawless and confident. Here, personalized care and sophistication define every service.",
                "image": "https://kurifturesorts.com/_nuxt/img/HairSalon1.4c3bc26.webp"
            },
            {
                "title": "Steam / Sauna / Jacuzzi",
                "text": "Escape to serenity in our private Steam, Sauna, and Jacuzzi facilities, adorned with breathtaking mosaics by acclaimed artist Merikokeb Berhanu. Whether you're planning a rejuvenating spa day with friends or a romantic wellness evening, immerse yourself in a space where relaxation and artistry converge. Let the tranquil ambiance refresh your body and inspire your soul.",
                "image": "https://kurifturesorts.com/_nuxt/img/suana.9596bdf.webp"
            },
            {
                "title": "Massage Cave",
                "text": "Discover unparalleled relaxation in our enchanting Massage Cave, a sanctuary inspired by natural elements and Ethiopian heritage. Warm tones, soothing aromas, and an otherworldly aesthetic set the stage for a transformative experience. With innovative techniques and personalized treatments crafted by our internationally trained therapists, every massage is a journey to ultimate rejuvenation.",
                "image": "https://kurifturesorts.com/_nuxt/img/21.6b04da9.jpg"
            }
        ],
        "phone": "+251911667788",
        "latitude": 8.7542,
        "longitude": 38.9785,
        "email": "info@kuriftuwaterpark.com",
        "rating": 4,
        "cover_image": "https://example.com/images/kuriftu-water-park.jpg",
        "cover_video": "https://player.vimeo.com/video/725627417?api=1&autoplay=1&controls=0&sidedock=0&loop=1&title=0&byline=0&portrait=0&muted=1&background=1",
        "menu": ["Ice Cream", "Snacks", "Drinks"],
        "amenities": ["Water Slides", "Family Areas", "Food Stalls"],
        "tags": ["Water Park", "Family", "Adventure"],
        "images": [
            "https://example.com/images/kuriftu-water-park-1.jpg",
            "https://example.com/images/kuriftu-water-park-2.jpg"
        ]
    },
    "lake-tana": {
        "name": "Kuriftu Resort & Spa Lake Tana",
        "region": "Bahirdar",
        "address": "Lake Shore Drive, Bahirdar, Ethiopia",
        "description": {
            "title": "A relaxing urban day spa with a variety of treatments.",
            "text": "Boston Day Spa, the flagship of the Kuriftu brand, embodies our core mission of community empowerment. Located in Addis Ababa, it has transformed local construction workers into skilled spa professionals, many of whom have been with us for over 15 years. Beyond exceptional spa services tailored to diverse wellness needs, Boston Day Spa doubles as an art gallery, featuring curated works from renowned Ethiopian artists like Merikokeb Berhanu. Her intricate mosaics grace our space, with her art now showcased globally, including at The New York Armory Show and Venice Biennale. Celebrating artistry and wellness, Boston Day Spa is a sanctuary where heritage and healing meet.",
            "image": ["https://kurifturesorts.com/_nuxt/img/4.61f4fcb.jpg", "https://kurifturesorts.com/_nuxt/img/9.e53335f.jpg"]
        },
        "gallery": [
            "https://kurifturesorts.com/_nuxt/img/barber.68d5290.webp",
            "https://kurifturesorts.com/_nuxt/img/suana.9596bdf.webp",
            "https://kurifturesorts.com/_nuxt/img/Facial.2854687.webp",
            "https://kurifturesorts.com/_nuxt/img/HairSalon.e3a2306.webp",
            "https://kurifturesorts.com/_nuxt/img/Wax.59c254e.webp",
            "https://kurifturesorts.com/_nuxt/img/1.6aae899.jpg",
            "https://kurifturesorts.com/_nuxt/img/3.58428a8.jpg",
            "https://kurifturesorts.com/_nuxt/img/6.e70b338.jpg",
            "https://kurifturesorts.com/_nuxt/img/12.fb4ab8d.jpg",
            "https://kurifturesorts.com/_nuxt/img/11.5e9cf78.jpg",
            "https://kurifturesorts.com/_nuxt/img/13.e4fe5a9.jpg",
            "https://kurifturesorts.com/_nuxt/img/16.e0133a8.jpg",
            "https://kurifturesorts.com/_nuxt/img/22.c9aa940.jpg"
        ],
        "content": [
            {
                "title": "Hair Salon",
                "text": "Step into indulgence at our Hair Salon, where luxury meets artistry. Surrounded by high ceilings, vibrant Ethiopian art, and soft natural light, every moment feels like a retreat. Specializing in the mastery of all hair textures, including kinks and curls, our expert stylists ensure you leave flawless and confident. Here, personalized care and sophistication define every service.",
                "image": "https://kurifturesorts.com/_nuxt/img/HairSalon1.4c3bc26.webp"
            },
            {
                "title": "Steam / Sauna / Jacuzzi",
                "text": "Escape to serenity in our private Steam, Sauna, and Jacuzzi facilities, adorned with breathtaking mosaics by acclaimed artist Merikokeb Berhanu. Whether you're planning a rejuvenating spa day with friends or a romantic wellness evening, immerse yourself in a space where relaxation and artistry converge. Let the tranquil ambiance refresh your body and inspire your soul.",
                "image": "https://kurifturesorts.com/_nuxt/img/suana.9596bdf.webp"
            },
            {
                "title": "Massage Cave",
                "text": "Discover unparalleled relaxation in our enchanting Massage Cave, a sanctuary inspired by natural elements and Ethiopian heritage. Warm tones, soothing aromas, and an otherworldly aesthetic set the stage for a transformative experience. With innovative techniques and personalized treatments crafted by our internationally trained therapists, every massage is a journey to ultimate rejuvenation.",
                "image": "https://kurifturesorts.com/_nuxt/img/21.6b04da9.jpg"
            }
        ],
        "phone": "+251912778899",
        "latitude": 11.6019,
        "longitude": 37.3934,
        "email": "contact@kuriftulaketana.com",
        "rating": 5,
        "cover_image": "https://example.com/images/kuriftu-lake-tana.jpg",
        "cover_video": "https://player.vimeo.com/video/708087309?api=1&autoplay=1&controls=0&sidedock=0&loop=1&title=0&byline=0&portrait=0&muted=1&background=1",
        "menu": ["Traditional Ethiopian Cuisine", "Fine Dining", "Drinks"],
        "amenities": ["Lake Views", "Boat Tours", "Luxury Suites"],
        "tags": ["Historic", "Luxury", "Nature"],
        "images": [
            "https://example.com/images/kuriftu-lake-tana-1.jpg",
            "https://example.com/images/kuriftu-lake-tana-2.jpg"
        ]
    }
}

export {resortDetails}