import React from "react";

import {
  AlignJustify,
  BarChart,
  Building2,
  Camera,
  ChevronDown,
  Code,
  Code2Icon,
  DollarSign,
  Download,
  GraduationCap,
  Headphones,
  Home,
  Info,
  LibrarySquare,
  LifeBuoy,
  Lock,
  Newspaper,
  PaintBucket,
  Settings,
  Smile,
  Sparkles,
  UserCircle2,
  UserPlus,
} from "lucide-react";
import { useState } from "react";
import ContentMenu from "./ContentMenu";

const MenuItem = [
  {
    title: "Use Cases",
    menu: "use-cases",
    options: [
      {
        label: "Team Alignment",
        emoji: <UserPlus className="text-orange-500" />,
        to: "/team-alignment",
      },
      {
        label: "Sales",
        emoji: <DollarSign className="text-green-500" />,
        to: "/sales",
      },
      {
        label: "Engineering",
        emoji: <Code className="text-blue-500" />,
        to: "/engineering",
      },
      {
        label: "Design",
        emoji: <PaintBucket className="text-indigo-500" />,
        to: "/design",
      },
      {
        label: "Marketing",
        emoji: <BarChart className="text-rose-500" />,
        to: "/marketing",
      },
      {
        label: "Customer Support",
        emoji: <Headphones className="text-orange-500" />,
        to: "/customer-support",
      },
      {
        label: "Product Management",
        emoji: <Settings className="text-gray-500" />,
        to: "/product-management",
      },
      {
        label: "Education",
        emoji: <GraduationCap className="text-green-500" />,
        to: "/education",
      },
    ],
  },

  {
    title: "For Business",
    menu: "for-business",
    options: [
      {
        label: "Bird AI",
        emoji: <Sparkles className="text-indigo-500" />,
        to: "/bird-ai",
      },
      {
        label: "Enterprise",
        emoji: <Building2 className="text-green-500" />,
        to: "/enterprise",
      },
      {
        label: "Bird HQ",
        emoji: <Home className="text-blue-500" />,
        to: "/",
      },
      {
        label: "Customers",
        emoji: <Smile className="text-indigo-500" />,
        to: "/",
      },
      {
        label: "Security",
        emoji: <Lock className="text-rose-500" />,
        to: "/",
      },
      {
        label: "Video Hosting",
        emoji: <Camera className="text-orange-500" />,
        to: "/",
      },
      {
        label: "Video Library",
        emoji: <LibrarySquare className="text-amber-500" />,
        to: "/",
      },
    ],
  },
  {
    title: "Resources",
    menu: "resources",
    options: [
      {
        label: "Blog",
        emoji: <AlignJustify className="text-orange-500" />,
        to: "/",
      },
      {
        label: "Help & Support",
        emoji: <LifeBuoy className="text-green-500" />,
        to: "/",
      },
      {
        label: "Download",
        emoji: <Download className="text-blue-500" />,
        to: "/",
      },
      {
        label: "BirdSDK",
        emoji: <Code2Icon className="text-rose-500" />,
        to: "/",
      },
      {
        label: "Screen Recorder",
        emoji: <Headphones className="text-orange-500" />,
        to: "/screen-recorder",
      },
      {
        label: "Community",
        emoji: <GraduationCap className="text-green-500" />,
        to: "/",
      },
    ],
  },
  {
    title: "Company",
    menu: "company",
    options: [
      {
        label: "About Us",
        emoji: <Info className="text-red-500" />,
        to: "/about-us",
      },
      {
        label: "Careers",
        emoji: <UserCircle2 className="text-green-500" />,
        to: "/careers",
      },
      {
        label: "Newsroom",
        emoji: <Newspaper className="text-blue-500" />,
        to: "/newsroom",
      },
    ],
  },
];

const NavigationMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMouseEnter = (menu) => {
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  const renderMenu = (MenuItem) => {
    const { title, menu, options } = MenuItem;

    return (
      <div
        className="
         flex
         items-center
         relative
         "
        onMouseEnter={() => handleMouseEnter(menu)}
        onMouseLeave={handleMouseLeave}>
        <div className="flex items-center">
          <div className="w-24">{title}</div>
          <div>
            <ChevronDown className="relative top-[1px] h-3 w-3" />
          </div>
          <div className="mt-20">
            {activeMenu === menu && (
              <ContentMenu
                options={options.map((option) => ({
                  ...option,
                  to: option.to,
                }))}
              />
            )}
          </div>
        </div>
      </div>
    );
  };
  return (
    <div
      className="
        hidden
        text-md
        font-light
        space-x-4
        w-full 
        items-center
        xl:flex
        h-24
        ">
      {MenuItem.map((item, index) => (
        <React.Fragment key={index}>
          <div className="cursor-pointer hidden xl:block">
            {renderMenu(item)}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default NavigationMenu;
