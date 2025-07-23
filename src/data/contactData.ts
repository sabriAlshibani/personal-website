import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";
import { Contact } from "./types/contact";

export const contactData: Contact[] = [
  {
    label: "WhatsApp",
    href: "https://wa.me/1234567890",
    icon: FaWhatsapp,
  },
  {
    label: "Facebook",
    href: "https://facebook.com/yourprofile",
    icon: FaFacebook,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/yourprofile",
    icon: FaInstagram,
  },
  {
    label: "Phone",
    href: "tel:+1234567890",
    icon: FaPhoneAlt,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/yourprofile",
    icon: FaLinkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/yourprofile",
    icon: FaGithub,
  },
  {
    label: "Email",
    href: "mailto:youremail@example.com",
    icon: FaEnvelope,
  },
];
