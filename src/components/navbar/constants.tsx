import HomeIcon from "../../../public/icons/home.svg";
import GeneralIcon from "../../../public/icons/general.svg";
import BusinessIcon from "../../../public/icons/business.svg";
import HealthIcon from "../../../public/icons/health.svg";
import ScienceIcon from "../../../public/icons/science.svg";
import SportsIcon from "../../../public/icons/sports.svg";
import TechnologyIcon from "../../../public/icons/technology.svg";

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
