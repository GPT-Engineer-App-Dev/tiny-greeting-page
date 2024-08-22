import { Home, User } from "lucide-react";
import Index from "./pages/Index.jsx";
import AntonOsika from "./components/AntonOsika.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Anton Osika",
    to: "/anton-osika",
    icon: <User className="h-4 w-4" />,
    page: <AntonOsika />,
  },
];
