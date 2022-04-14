import classes from './SuperShopDetails.module.css'
import SideBar from '../../UI/SideBar'
import SuperShopDetail from './SuperShopDetail'
import {useState, useEffect} from 'react'


export default function ShopDetails(props) {


    return (
        <div className={classes.shopdetails} >
            <SideBar agent={false} superAdmin={true} visualTeam={false} marketingAdmin={false} webDeveloper={false}/>
            <SuperShopDetail data={props.data}/>
        </div>
    )
}
