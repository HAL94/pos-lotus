import { AiOutlineSetting } from 'react-icons/ai';
import { BiFoodMenu } from 'react-icons/bi';
import { FaClipboardList, FaUsers } from 'react-icons/fa';
import { MdTrendingUp } from 'react-icons/md';
import * as uuid from 'uuid';
import { Divider } from '@mui/material';
import { IconType } from 'react-icons/lib';

type Null = null;
type VoidFunc = () => void;
type NullOrVoidFunc = Null | VoidFunc;

export const IDLE = 'IDLE';
export const PENDING = 'PENDING';
export const REJECTED = 'REJECTED';
export const FULFILLED = 'FULFILLED';

export const routes = [
  {
    path: '/',
    Icon: BiFoodMenu,
    title: 'Menu',
    id: 'link_menu',
  },
  {
    path: '/inventory',
    Icon: FaClipboardList,
    title: 'Inventory',
    id: 'link_inventory',
  },
  {
    path: '/sales',
    Icon: MdTrendingUp,
    title: 'Sales',
    id: 'link_sales',
  },
  {
    path: '/customers',
    Icon: FaUsers,
    title: 'Customers',
    id: 'link_customers',
  },
  {
    path: '/settings',
    Icon: AiOutlineSetting,
    title: 'Settings',
    id: 'link_settings',
  },
];
export interface Route {
  path: string;
  Icon: IconType;
  title: string;
  id: string;
};

export interface CustomMenuItem {
  isDivider: boolean;
  name: string;
  id: string;
  onClick: NullOrVoidFunc;
  component: () => JSX.Element;
}

export const CategoryDisplayType = {
  List: 'List',
  Slider: 'Slider',
};

export const configureItemMenuList = (
  itemConfigList: { title: string; onClick: NullOrVoidFunc; itemIcon: any }[]
): CustomMenuItem[] => {
  return itemConfigList.map((config) => {
    const customMenuItem: CustomMenuItem = {
      isDivider: true,
      name: 'Divider',
      id: uuid.v4(),
      onClick: config.onClick,
      component: () => <Divider />,
    };

    if (config.title === 'div') {
      return customMenuItem;
    }

    customMenuItem.isDivider = false;
    customMenuItem.name = config.title;
    customMenuItem.id = uuid.v4();
    customMenuItem.onClick = config.onClick;
    customMenuItem.component = () => {
      return (
        <div
          className="flex flex-row items-center justify-center w-full"
          role="presentation"
        >
          {config.itemIcon}
          <h1 className="font-semibold text-sm block text-center mx-auto">
            {config.title}
          </h1>
        </div>
      );
    };

    return customMenuItem;
  });
};
