import classes from './TableBody.module.css'
import DeleteIcon from '@mui/icons-material/Delete';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import axios from 'axios'
import {useRouter} from 'next/router'

export default function TableBody(props) {


    const router = useRouter();
    
    const shopDetailButtonHandler = async (email)=>{
        router.push(`/adminpanel/marketing-team/web-developer/shop/${email}`)
    }


    return (
        <div className={classes.tablewrapper}>
             <section className={classes.heading}>
                <h4>S.No</h4>
                <h4>Name</h4>
                <h4>Cateogry</h4>
                <h4>Agent Name</h4>
                <h4>Agent ID</h4>
                <h4>Address</h4>
                <h4>Date</h4>
                <h4></h4>
            </section>
            {
                props.data && 
                props.data.filter((val)=>{
                    if(props.search==""){
                        return val;
                    }
                    else if(val.businessEmail.toLowerCase().includes(props.search.toLowerCase())){
                        return val;
                    }else if(val.mobileNumber.toString().includes(props.search.toString())){
                        return val;
                    }
                }).map((item,index)=>{
                    console.log()
                    return(
                        <section key={index} className={classes.table}>
                        <h4>{index+1}</h4>
                        <h4>{item.businessName}</h4>
                        <h4>{item.category}</h4>
                        <h4>{item.mobileNumber}</h4>
                        <h4>{item.contactPerson}</h4>
                        <h4>{item.location}</h4>
                        <h4>{item.date}</h4>
                        <h4><LocationOnIcon style={{color:'var(--dashboard_red)',fontSize:'18px'}}/><MenuOpenIcon onClick={()=>shopDetailButtonHandler(item.businessEmail)} style={{fontSize:'18px'}}/></h4>
                    </section>
                    )
                })
            }

        </div>
    )
}
