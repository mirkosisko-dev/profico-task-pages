import HomeIcon from "@/assets/icons/home.svg";
import GeneralIcon from "@/assets/icons/general.svg";
import BusinessIcon from "@/assets/icons/business.svg";
import HealthIcon from "@/assets/icons/health.svg";
import ScienceIcon from "@/assets/icons/science.svg";
import SportsIcon from "@/assets/icons/sports.svg";
import TechnologyIcon from "@/assets/icons/technology.svg";

export const navLinks = [
  {
    name: "Home",
    category: "",
    icon: <HomeIcon width={20} height={20} />,
  },
  {
    name: "General",
    category: "general",
    icon: <GeneralIcon width={20} height={20} />,
  },
  {
    name: "Business",
    category: "business",
    icon: <BusinessIcon width={20} height={18} />,
  },
  {
    name: "Health",
    category: "health",
    icon: <HealthIcon width={20} height={20} />,
  },
  {
    name: "Science",
    category: "science",
    icon: <ScienceIcon width={17} height={20} />,
  },
  {
    name: "Sports",
    category: "sports",
    icon: <SportsIcon width={20} height={20} />,
  },
  {
    name: "Technology",
    category: "technology",
    icon: <TechnologyIcon width={20} height={20} />,
  },
];
