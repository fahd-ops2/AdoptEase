import { Icon } from "@iconify/react/dist/iconify.js";

import { SideNavItem } from './types';

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Home',
    path: '/',
    icon: <Icon icon="lucide:home" width="24" height="24" />,
  },
  {
    title: 'Books',
    path: '/books',
    icon: <Icon icon="lucide:folder" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'All', path: '/books' },
      { title: 'Add Book', path: '/books/add-book' }
    ],
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <Icon icon="lucide:mail" width="24" height="24" />,
  },
  {
    title: 'Members',
    path: '/members',
    icon: <Icon icon="lucide:settings" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'All', path: '/members' },
      { title: 'Add Member', path: '/members/add-member' },
    ],
  },
  {
    title: 'Authors',
    path: '/authors',
    icon: <Icon icon="lucide:settings" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'All', path: '/authors' },
      { title: 'Add Author', path: '/authors/add-author' },
    ],
  },
  {
    title: 'Help',
    path: '/help',
    icon: <Icon icon="lucide:help-circle" width="24" height="24" />,
  },
];