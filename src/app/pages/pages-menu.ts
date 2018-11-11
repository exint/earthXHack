import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Home',
    icon: 'nb-home',
    link: '/pages/home',
    home: true,
  },
  {
    title: 'Members',
    icon: 'nb-home',
    link: '/pages/tables/smart-table'
  },
  {
    title: 'Recolection',
    icon: 'nb-home',
    children: [
      {
        title: 'Published productions',
        link: '/pages/maps/gmaps',
      },
      {
        title: 'Assign transportist',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Set appointment',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Validate recolection',
        link: '/pages/forms/inputs',
      },
    ],
  },
  {
    title: 'Recolection Center',
    icon: 'nb-home',
    children: [
      {
        title: 'Receive apples',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Validate received',
        link: '/pages/forms/inputs',
      }
    ],
  },
  {
    title: 'Distribution',
    icon: 'nb-home',
    link: '/pages/forms/inputs'
  }
];
