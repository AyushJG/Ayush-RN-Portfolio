import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@ayushjg",
    icon: Icons.gitHub,
    link: "https://github.com/ayushjg",
  },
  {
    name: "LinkedIn",
    username: "Ayush Timalsina",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/ayush-timalsina-57826942a",
  },
  {
    name: "Gmail",
    username: "ayushtim99",
    icon: Icons.gmail,
    link: "mailto:ayushtim99@gmail.com",
  },
];
