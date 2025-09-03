import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));
// Fixed the import path - removed the '../' and made sure it matches your file structure
const AllTrips = Loadable(lazy(() => import('views/Alltrips')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'trips',
      children: [
        {
          path: '', // This will handle /trips
          element: <AllTrips />
        },

        {
          path: 'scheduled',
          element: <AllTrips /> 
        },
        {
          path: 'pending',
          element: <AllTrips />
        },
        {
          path: 'confirmed',
          element: <AllTrips />
        },
        {
          path: 'ongoing',
          element: <AllTrips />
        },
        {
          path: 'completed',
          element: <AllTrips />
        },
        {
          path: 'canceled',
          element: <AllTrips />
        },
        {
          path: 'payment-failed',
          element: <AllTrips />
        }
      ]
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    }
  ]
};

export default MainRoutes;