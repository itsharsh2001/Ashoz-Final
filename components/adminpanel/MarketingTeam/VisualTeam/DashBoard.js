import classes from "./DashBoard.module.css";
import SideBar from '../../../UI/SideBar';
// import HamBurger from '../../UI/HamBurger';
import VisualTeamDashBoard from './VisualTeamDashBoard';

export default function DashBoard(props) {
  return (
    <div className={classes.dashboard}>
      {/* <HamBurger/> */}
        <SideBar agent={false} superAdmin={false} visualTeam={true} marketingAdmin={false} webDeveloper={false}/>
        <VisualTeamDashBoard data={props.data} hamburgerHandler={props.hamburgerHandler} />
    </div>
  );
}
