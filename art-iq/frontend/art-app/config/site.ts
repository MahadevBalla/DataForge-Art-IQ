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
    {
      label: "Transform",
      href: "/transform",
    },
    {
      label: "Styles",
      href: "/styles",
    },  
    {
      label: "Pricing",
      href: "/pricing",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "My Art",
      href: "/my-art",
    },
    {
      label: "History",
      href: "/history",
    },
    {
      label: "Saved Styles",
      href: "/saved-styles",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/your-username/art-iq",
    twitter: "https://twitter.com/artiq_app",
    docs: "https://artiq.app/docs",
    discord: "https://discord.gg/artiq",
    sponsor: "https://patreon.com/artiq",
  },
};