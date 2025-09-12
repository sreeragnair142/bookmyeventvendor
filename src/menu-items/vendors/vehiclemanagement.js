// assets
import {
  IconCar,
  IconCategory,
  IconTrademark,
  IconPlus,
  IconList,
  IconClipboardCheck,
  IconUpload,
  IconDownload,
  IconEngine
} from '@tabler/icons-react';

// constants
const icons = {
  IconCar,
  IconCategory,
  IconTrademark,
  IconPlus,
  IconList,
  IconClipboardCheck,
  IconUpload,
  IconDownload,
  IconEngine
};

// ==============================|| DASHBOARD FULL MENU GROUP ||============================== //

const vehiclemanagement = {
  id: 'vehicle-management',
  title: 'VENUE MANAGEMENT',
  type: 'group',
  children: [
    {
      id: 'vehicle-setup',
      title: 'Venue Setup',
      type: 'collapse',
      icon: icons.IconCar, // updated icon
      children: [
        {
          id: 'create-new',
          title: 'Create New',
          type: 'item',
          url: '/vehicle-setup/leads'  // matches MainRoutes
        },
        {
          id: 'list',
          title: 'List',
          type: 'item',
          url: '/vehicle-setup/lists'
        },
        {
          id: 'bulk-import',
          title: 'Bulk Import',
          type: 'item',
          url: '/vehicle-setup/bulk-import'
        },
        {
          id: 'bulk-export',
          title: 'Bulk Export',
          type: 'item',
          url: '/vehicle-setup/bulk-export'
        }
      ]
    },
    {
      id: 'vehicle-brands',
      title: 'Brands',
      type: 'item',
      url: '/vehicles/brands',
      icon: icons.IconTrademark,
      breadcrumbs: false
    },
    {
      id: 'categories',
      title: 'Categories',
      type: 'item',
      url: '/vehicles/categories',
      icon: icons.IconCategory,
      breadcrumbs: false
    }
  ]
};

export default vehiclemanagement;
