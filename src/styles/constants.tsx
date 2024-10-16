import { Icon } from "@iconify/react/dist/iconify.js";
import { SideNavItem } from './types';

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Home',
    path: '/',
    icon: <Icon icon="lucide:home" width="24" height="24" />,
  },
  {
    title: 'Browse Pets',
    path: '/pets',
    icon: <Icon icon="lucide:cat" width="24" height="24" />,
  },
  {
    title: 'Browse Sitters',
    path: '/sitters',
    icon: <Icon icon="lucide:user" width="24" height="24" />,
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <Icon icon="lucide:mail" width="24" height="24" />,
  },
  {
    title: 'Adoption Requests',
    path: '/adoption-requests',
    icon: <Icon icon="lucide:clipboard-list" width="24" height="24" />,
  },
  {
    title: 'Bookings',
    path: '/bookings',
    icon: <Icon icon="lucide:calendar" width="24" height="24" />,
  },
  {
    title: 'My Profile',
    path: '/profile',
    icon: <Icon icon="lucide:user-circle" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'My Pets', path: '/profile/my-pets' },
      { title: 'Adoption Applications', path: '/profile/adoption-applications' },
      { title: 'My Sitter Profile', path: '/profile/sitter' },
    ],
  },
  {
    title: 'Notifications',
    path: '/notifications',
    icon: <Icon icon="lucide:bell" width="24" height="24" />,
  },
  {
    title: 'Lost & Found',
    path: '/lost-found',
    icon: <Icon icon="lucide:search" width="24" height="24" />,
  },
  {
    title: 'Pet Care Resources',
    path: '/resources',
    icon: <Icon icon="lucide:book-open" width="24" height="24" />,
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: <Icon icon="lucide:settings" width="24" height="24" />,
  },
  {
    title: 'Help Center',
    path: '/help',
    icon: <Icon icon="lucide:help-circle" width="24" height="24" />,
  },
];
