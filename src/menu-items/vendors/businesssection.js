// assets
import {
  IconUserPlus,      
  IconUserCheck,     
  IconUsers,         
  IconUpload,        
  IconDownload       
} from '@tabler/icons-react';

// constants
const icons = {
  IconUserPlus,
  IconUserCheck,
  IconUsers,
  IconUpload,
  IconDownload
};

// ==============================|| DASHBOARD FULL MENU GROUP ||============================== //

const Businesssection = {
  id: 'provider-management',
  title: 'BUSINESS SECTION',
  type: 'group',
  children: [
    {
      id: 'Provider-Config',
      title: 'Provider Config',
      type: 'item',
      url: '/providers/new',
      icon: icons.IconUserPlus,
      breadcrumbs: false
    },
    {
      id: 'Notification-SetUP',
      title: 'Notification Set UP',
      type: 'item',
      url: '/providers/add',
      icon: icons.IconUserCheck,
      breadcrumbs: false
    },
    {
      id: 'My-Shop',
      title: 'My Shop',
      type: 'item',
      url: '/providers/list',
      icon: icons.IconUsers,
      breadcrumbs: false
    },
    {
      id: 'My-Business-Plan',
      title: 'My Business Plan',
      type: 'item',
      url: '/providers/import',
      icon: icons.IconUpload,
      breadcrumbs: false
    },
    {
      id: 'My-Wallet',
      title: 'My Wallet',
      type: 'item',
      url: '/providers/export',
      icon: icons.IconDownload,
      breadcrumbs: false
    },
     {
      id: 'Disbursement-Method',
      title: 'Disbursement Method',
      type: 'item',
      url: '/providers/export',
      icon: icons.IconDownload,
      breadcrumbs: false
    },
     {
      id: 'Reviews',
      title: 'Reviews',
      type: 'item',
      url: '/providers/export',
      icon: icons.IconDownload,
      breadcrumbs: false
    },
    {
      id: 'Chat',
      title: 'Chat',
      type: 'item',
      url: '/providers/export',
      icon: icons.IconDownload,
      breadcrumbs: false
    }
  ]
};

export default Businesssection;
