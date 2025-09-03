import dashboard from './dashboard';
import pages from './pages';
import utilities from './utilities';
import other from './other';
import vehiclemanagement from './vendors/vehiclemanagement';
import Driversection from './vendors/driversection';
import Marketingsection from './vendors/marketingsection';
import Businesssection from './vendors/businesssection';
import Reportsection from './vendors/reportsection';
import Employeesection from './vendors/employeesection';
import Tripmanagement from './vendors/tripmanagement';

// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
  items: [dashboard,Tripmanagement,vehiclemanagement,Driversection,Marketingsection,Businesssection,Reportsection,Employeesection]
};

export default menuItems;
