/* eslint-disable prettier/prettier */
import { MenuItem } from '../interfaces/appInterfaces';

export const menuItems: MenuItem[] = [
  {
    name: 'Animarion 101',
    icon: 'cube-outline',
    component: 'Animation101Screen',
  },
  {
    name: 'Animarion 102',
    icon: 'albums-outline',
    component: 'Animation102Screen',
  },
  {
    name: 'Switches',
    icon: 'toggle-outline',
    component: 'SwitchScreen',
  },
  {
    name: 'Alert',
    icon: 'alert-circle-outline',
    component: 'AlertScreen',
  },
  {
    name: 'TextInput',
    icon: 'document-text-outline',
    component: 'TextInputScreen',
  },
  {
    name: 'Pull to Refresh',
    icon: 'refresh-outline',
    component: 'PulltoRefreshScreen',
  },
  {
    name: 'Section List',
    icon: 'list-outline',
    component: 'CustomSectionListScreen',
  },
  {
    name: 'Modal Screen',
    icon: 'copy-outline',
    component: 'ModalScreen',
  },
  {
    name: 'Infinite Scroll',
    icon: 'download-outline',
    component: 'InfiniteScrollScreen',
  },
  {
    name: 'Slides',
    icon: 'flower-outline',
    component: 'SlidesScreen',
  },
  {
    name: 'Theme',
    icon: 'flask-outline',
    component: 'ChangeThemeScreen',
  },
];
