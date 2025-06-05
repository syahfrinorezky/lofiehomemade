import { MenuTypes } from "@/lib/types/menu.types";
import {
  HiHome,
  HiInformationCircle,
  HiStar,
  HiEnvelope,
} from "react-icons/hi2";

import { FaHamburger } from "react-icons/fa";

export const lofiemenu: MenuTypes[] = [
  {
    id: "1",
    name: "Home",
    link: "#",
    icon: HiHome,
  },
  {
    id: "2",
    name: "About",
    link: "#about",
    icon: HiInformationCircle,
  },
  {
    id: "3",
    name: "Product",
    link: "#product",
    icon: FaHamburger,
  },
  {
    id: "4",
    name: "Review",
    link: "#review",
    icon: HiStar,
  },
  {
    id: "5",
    name: "Contact",
    link: "#contact",
    icon: HiEnvelope,
  },
];
