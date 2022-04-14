import classes from './ShopDetails.module.css'
import SideBar from '../../../UI/SideBar'
import ShopKiDetail from './ShopKiDetail.js'
import {useState, useEffect} from 'react'

export default function ShopDetails(props) {


    return (
        <div className={classes.shopdetails} >
            <SideBar agent={false} superAdmin={false} visualTeam={false} marketingAdmin={false} webDeveloper={true}/>
            <ShopKiDetail data={props.data}/>
        </div>
    )
}
