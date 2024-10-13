// import
import Home from "views/Dashboard/Dashboard";
import Tables from "views/Dashboard/Tables";
import ManageRSVP from "views/Dashboard/ManageRSVP";
import RTLPage from "views/Dashboard/RTL";
import Profile from "views/Dashboard/Profile";
import SignIn from "views/Auth/SignIn.js";
import SignUp from "views/Auth/SignUp.js";

import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  ClockIcon,
  SettingsIcon,
  SupportIcon
} from "components/Icons/Icons";

var dashRoutes = [
  {
    path: "/home",
    name: "Home",
    icon: <HomeIcon color="inherit" />,
    component: Home,
    layout: "/admin",
  },
  {
    path: "/find-events",
    name: "Find Events",
    icon: <ClockIcon color="inherit" />,
    component: Tables,
    layout: "/admin",
  },
  {
    path: "/manage-rsvp",
    name: "Manage RSVP",
    icon: <SettingsIcon color="inherit" />,
    component: ManageRSVP,
    layout: "/admin",
  },
  {
    name: "Admin Panel",
    category: "account",
    state: "pageCollapse",
    views: [
      {
        path: "/admin-add-events",
        name: "Add Events",
        icon: <DocumentIcon color="inherit" />,
        component: Profile,
        layout: "/admin",
      },
      {
        path: "/admin-manage-events",
        name: "Moderate Events",
        icon: <SupportIcon color="inherit" />,
        component: SignIn,
        layout: "/admin",
      },
    ],
  },
];
export default dashRoutes;
