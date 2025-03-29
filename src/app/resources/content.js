import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Social-Home",
  lastName: "Game",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Virtual Social World",
  avatar: "/images/logo.svg",
  location: "Global",
  languages: [],
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName} Updates</>,
  description: (
    <>
      Stay updated with the latest features, events, and community highlights in our virtual world!
    </>
  ),
};

const social = [
  {
    name: "Discord",
    icon: "discord",
    link: "https://discord.gg/social-home",
  },
  {
    name: "Twitter",
    icon: "x",
    link: "https://twitter.com/socialhomegame",
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://instagram.com/socialhomegame",
  },
  {
    name: "Support",
    icon: "email",
    link: "mailto:support@social-home.com",
  },
];

const home = {
  label: "Home",
  title: "Welcome to Social-Home",
  description: "Your new virtual life awaits!",
  headline: <>Create, Connect, Live</>,
  subline: (
    <>
      Join millions of players in Social-Home, where you can build your dream house,
      <br /> make lasting friendships, and create unforgettable memories together.
    </>
  ),
};

const about = {
  label: "About",
  title: "About Social-Home",
  description: "Discover a world of endless possibilities",
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
  },
  intro: {
    display: true,
    title: "Welcome to Your New Virtual Home",
    description: (
      <>
        Social-Home is a vibrant virtual world where creativity meets community. Design your perfect 
        home, express yourself through customizable avatars, participate in exciting mini-games, and 
        build meaningful connections with players from around the globe.
      </>
    ),
  },
  work: {
    display: true,
    title: "Game Features",
    experiences: [
      {
        company: "Home Building",
        timeframe: "Core Feature",
        role: "Creativity & Design",
        achievements: [
          <>
            Design and build your dream home with thousands of furniture items and decorative elements
          </>,
          <>
            Share your creations with the community and visit other players' homes for inspiration
          </>,
        ],
        images: [
          {
            src: "/images/logo.svg",
            alt: "Home Building Feature",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Social Features",
        timeframe: "Core Feature",
        role: "Community & Connection",
        achievements: [
          <>
            Chat with friends, join clubs, and participate in community events
          </>,
          <>
            Create and join themed parties, game nights, and social gatherings
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Game Activities",
    institutions: [
      {
        name: "Mini-Games",
        description: <>Compete in fun mini-games with friends and earn rewards</>,
      },
      {
        name: "Trading System",
        description: <>Trade items with other players in our secure marketplace</>,
      },
      {
        name: "Events",
        description: <>Participate in seasonal events and special celebrations</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Game Features",
    skills: [
      {
        title: "Character Customization",
        description: <>Create and customize your unique avatar with hundreds of options</>,
        images: [
          {
            src: "/images/logo.svg",
            alt: "Character Customization",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Social Interaction",
        description: <>Connect with friends, chat, and participate in community events</>,
        images: [
          {
            src: "/images/logo.svg",
            alt: "Social Features",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "Featured Homes & Moments",
  description: "Explore amazing creations from our community",
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
