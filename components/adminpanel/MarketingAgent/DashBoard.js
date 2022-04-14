import classes from "./DashBoard.module.css";
import SideBar from '../../UI/SideBar';
import HamBurger from '../../UI/HamBurger';
import TotalShops from '../DashBoardExtra/TotalShops';
import {useEffect,useState} from 'react'


export default function DashBoard(props) {
  return (
    <div className={classes.dashboard}>
      {/* <HamBurger/> */}
        <SideBar agent={true} superAdmin={false} visualTeam={false} marketingAdmin={false} webDeveloper={false}/>
        <TotalShops data={props.data} hamburgerHandler={props.hamburgerHandler} />
    </div>
  );
}
