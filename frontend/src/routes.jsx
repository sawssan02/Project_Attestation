import {
  HomeIcon,
  UserCircleIcon,
  DocumentTextIcon,
  InformationCircleIcon,
  ServerStackIcon,
} from "@heroicons/react/24/solid";
import { Home, Attestations, Notifications ,Clients} from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "Tableau de bord",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "client",
        path: "/client",
        element: <Clients />,
      },
      {
        icon: <DocumentTextIcon {...icon} />,
        name: "historique",
        path: "/attestations",
        element: <Attestations/>,
      },
      {
        icon: <InformationCircleIcon {...icon} />,
        name: "notifications",
        path: "/notification",
        element: <Notifications />,
      },
    ],
  },
  {
    title: "auth page",
    layout: "auth",
    pages: [
      {
        icon: <ServerStackIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
    ],
  },
];

export default routes;
