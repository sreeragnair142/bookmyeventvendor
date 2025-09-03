// assets
import {
  IconCar,           // for vehicle-related items
  IconCategory,      // for categories
  IconTrademark,     // for brands
  IconPlus,          // create new
  IconList,          // list
  IconClipboardCheck,// review
  IconUpload,        // bulk import
  IconDownload,      // bulk export
  IconEngine         // ongoing/active trips
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
  title: 'VEHICLE MANAGEMENT',
  type: 'group',
  children: [
     {
          id: 'Vehicle-Setup',
          title: 'Vehicle Setup',
          type: 'collapse',
          icon: icons.IconBuildingSkyscraper,  // <- changed icon here
          children: [
            {
              id: 'Create-new',
              title: 'Create New ',
              type: 'item',
              url: '/leads'
            },
            {
              id: 'list',
              title: 'List',
              type: 'item',
              url: '/leads/new'
            },
            {
              id: 'Bulk-Import',
              title: 'Bulk Import',
              type: 'item',
              url: '/leads/follow-up'
            },
            {
              id: 'Bulk-Export',
              title: 'Bulk Export',
              type: 'item',
              url: '/leads/converted'
            },
           
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
      id: 'Categories',
      title: 'Categories',
      type: 'item',
      url: '/vehicles/brands',
      icon: icons.IconTrademark,
      breadcrumbs: false
    },
     ]
};

export default vehiclemanagement;
