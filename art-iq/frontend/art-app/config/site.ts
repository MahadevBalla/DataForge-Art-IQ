export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "ArtIQ",
  description: "ArtIQ is a platform for artists to predict the style of their art.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Analyze",
      href: "/analyze",
    },
    // {
    //   label: "Transform",
    //   href: "/transform",
    // },
    {
      label: "Styles",
      href: "/styles",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Analyze",
      href: "/analyze",
    },
    // {
    //   label: "Transform",
    //   href: "/transform",
    // },
    {
      label: "Styles",
      href: "/styles",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  links: {
    github: "https://github.com/MahadevBalla/DataForge-Art-IQ",
  },
};

export type artStyles = typeof artStyles;

export const artStyles = [
  {
    name: "Academic_Art",
    description: "Balance, perspective, and realistic human forms",
    image: "/images/art-styles/academic-art.jpg",
  },
  {
    name: "Art_Nouveau",
    description: "Organic forms, flowing lines, and natural motifs",
    image: "/images/art-styles/art-nouveau.jpg",
  },
  {
    name: "Baroque",
    description: "Dramatic, rich detail, grandeur, and emotional intensity",
    image: "/images/art-styles/baroque.png",
  },
  {
    name: "Expressionism",
    description: "Distorted forms and bold colors to evoke emotion",
    image: "/images/art-styles/expressionism.webp",
  },
  {
    name: "Ghibli",
    description: "Whimsical, fantastical, nature-infused worlds with emotional depth",
    image: "/images/art-styles/ghibli.jpg",
  },
  {
    name: "Japanese_Art",
    description: "Flat perspective, nature themes, minimalism, and symbolism",
    image: "/images/art-styles/japanese-art.webp",
  },
  {
    name: "Neoclassicism",
    description: "Classical simplicity, symmetry, and rational themes",
    image: "/images/art-styles/neoclassicism.jpg",
  },
  {
    name: "Primitivism",
    description: "Simple, bold forms inspired by tribal and folk art",
    image: "/images/art-styles/primitivism.jpg",
  },
  {
    name: "Realism",
    description: "Accurate, detailed depictions of real life without idealization",
    image: "/images/art-styles/realism.webp",
  },
  {
    name: "Renaissance",
    description: "Balance, linear perspective, and anatomical precision",
    image: "/images/art-styles/renaissance.jpg",
  },
  {
    name: "Rococo",
    description: "Ornamental, playful elegance with pastel colors and fluid curves",
    image: "/images/art-styles/rococo.webp",
  },
  {
    name: "Romanticism",
    description: "Emotion, nature, individuality, and dramatic themes",
    image: "/images/art-styles/romanticism.webp",
  },
  {
    name: "Symbolism",
    description: "Mythical themes, dreams, and abstract emotions",
    image: "/images/art-styles/symbolism.jpg",
  },
  {
    name: "Western_Medieval",
    description: "Religious iconography, flat perspective, and illuminated manuscripts",
    image: "/images/art-styles/western-medieval.jpg",
  },
];