import classes from "./DashBoard.module.css";
import SideBar from '../../../UI/SideBar';
// import HamBurger from '../../UI/HamBurger';
import MarketingAdminDashBoard from './MarketingAdminDashBoard';

export default function DashBoard(props) {
  return (
    <div className={classes.dashboard}>
      {/* <HamBurger/> */}
        <SideBar agent={false} superAdmin={false} visualTeam={false} marketingAdmin={true} webDeveloper={false}/>
        <MarketingAdminDashBoard data={props.data} hamburgerHandler={props.hamburgerHandler} />
    </div>
  );
}
