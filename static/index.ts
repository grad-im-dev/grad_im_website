import { Mail, Phone } from "lucide-react";

export const CONTACT_DATA = {
  phone: {
    value: "+38501566324",
    label: "+385 01-566-324",
    icon: Phone,
  },
  email: {
    label: "contact@gmail.com",
    value: "contact@gmail.com",
    icon: Mail,
  },
};

export const NAV_PATHS = {
  en: [
    {
      id: 0,
      label: "Home",
      path: "/",
    },
    {
      id: 1,
      label: "Projects",
      path: "/projekti",
    },
    {
      id: 2,
      label: "Request a bid",
      path: "/zatrazi-ponudu",
    },
    {
      id: 3,
      label: "About us",
      path: "/o-nama",
    },
    {
      id: 4,
      label: "Contact",
      path: "/kontakt",
    },
  ],
  hr: [
    {
      id: 0,
      label: "Doma",
      path: "/",
    },
    {
      id: 1,
      label: "Projekti",
      path: "/projekti",
    },
    {
      id: 2,
      label: "Zatraži ponudu",
      path: "/ponuda",
    },
    {
      id: 3,
      label: "O nama",
      path: "/kontakt",
    },
    {
      id: 4,
      label: "Kontakt",
      path: "/kontakt",
    },
  ],
};
