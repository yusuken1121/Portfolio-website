import { Pencil1Icon } from "@radix-ui/react-icons";
import { Briefcase, MailIcon, UserRoundPen } from "lucide-react";

type HeaderOptions = {
  label: string;
  linkHref: string;
  icon: React.ComponentType<{ className?: string }>;
};
export const headerOptions: HeaderOptions[] = [
  {
    label: "About",
    linkHref: "/About",
    icon: UserRoundPen,
  },
  {
    label: "Skills",
    linkHref: "/skill",
    icon: Pencil1Icon,
  },
  {
    label: "Works",
    linkHref: "/work",
    icon: Briefcase,
  },
  {
    label: "Contact",
    linkHref: "/contact",
    icon: MailIcon,
  },
];
