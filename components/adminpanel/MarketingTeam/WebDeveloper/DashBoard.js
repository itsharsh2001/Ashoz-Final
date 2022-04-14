import classes from "./DashBoard.module.css";
import SideBar from '../../../UI/SideBar';
// import HamBurger from '../../UI/HamBurger';
import WebDeveloperDashBoard from './WebDeveloperDashBoard';

export default function DashBoard(props) {
  return (
    <div className={classes.dashboard}>
      {/* <HamBurger/> */}
        <SideBar agent={false} superAdmin={false} visualTeam={false} marketingAdmin={false} webDeveloper={true}/>
        <WebDeveloperDashBoard data={props.data}  hamburgerHandler={props.hamburgerHandler} />
    </div>
  );
}
