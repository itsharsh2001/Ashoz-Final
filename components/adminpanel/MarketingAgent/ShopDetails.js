import classes from './ShopDetails.module.css'
import SideBar from '../../UI/SideBar'
import ShopKiDetail from '../DashBoardExtra/ShopKiDetail'
import {useState, useEffect} from 'react'


export default function ShopDetails(props) {


    return (
        <div className={classes.shopdetails} >
            <SideBar agent={true} superAdmin={false} visualTeam={false} marketingAdmin={false} webDeveloper={false}/>
            <ShopKiDetail data={props.data}/>
        </div>
    )
}
