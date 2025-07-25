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
    href: "https://wa.me/774130655",
    icon: FaWhatsapp,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/sabri.mohammad.alshibani",
    icon: FaFacebook,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/usa5s",
    icon: FaInstagram,
  },
  {
    label: "Phone",
    href: "tel:+967730235491",
    icon: FaPhoneAlt,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sabri-m-alshibani-46318a287/",
    icon: FaLinkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/sabriAlshibani",
    icon: FaGithub,
  },
  {
    label: "Email",
    href: "mailto:sbryalshybany1@gmail.com",
    icon: FaEnvelope,
  },
];
