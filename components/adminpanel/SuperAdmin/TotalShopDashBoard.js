import classes from "./TotalShopDashBoard.module.css";
import SideBar from '../../UI/SideBar';
import HamBurger from '../../UI/HamBurger';
import SuperTotalShopTable from './SuperTotalShopTable';
import {useEffect,useState} from 'react'


export default function DashBoard(props) {
  return (
    <div className={classes.dashboard}>
      {/* <HamBurger/> */}
        <SideBar agent={false} superAdmin={true} visualTeam={false} marketingAdmin={false} webDeveloper={false}/>
        <SuperTotalShopTable data={props.data} hamburgerHandler={props.hamburgerHandler} />
    </div>
  );
}
