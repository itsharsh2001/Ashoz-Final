import classes from "./DashBoard.module.css";
import SideBar from '../../UI/SideBar';
// import HamBurger from '../../UI/HamBurger';
import SuperAdminDashBoard from './SuperAdminDashBoard';

export default function DashBoard(props) {
  return (
    <div className={classes.dashboard}>
      {/* <HamBurger/> */}
        <SideBar agent={false} superAdmin={true} visualTeam={false} marketingAdmin={false} webDeveloper={false}/>
        <SuperAdminDashBoard hamburgerHandler={props.hamburgerHandler} />
    </div>
  );
}
