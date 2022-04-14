import classes from './dashboard.module.css'
import DashBoard from '../../../components/adminpanel/SuperAdmin/TotalShopDashBoard'
import HamBurger from '../../../components/UI/HamBurger'
import { useState } from 'react'
import { getSession } from 'next-auth/client'
import axios from 'axios'

export default function Dashboard(props) {

  console.log(props.tableData)

  const [hamburger, setHamburger] = useState(false)
  const hamburgerHandler = () => {
    setHamburger(()=>{return !hamburger})
  }
  return (
    <>
    {hamburger&&<HamBurger agent={false} superAdmin={true} visualTeam={false} marketingAdmin={false} webDeveloper={false} hamburgerHandler={hamburgerHandler} />}
    <div className={classes.background} >

      <DashBoard data={props.tableData} hamburgerHandler={hamburgerHandler}/>
    </div>
    </>
  )
}

export async function getServerSideProps(context){
  const session = await getSession({req: context.req});
  
  if(!session){
      return{
          redirect: {
              destination:'/adminpanel/marketing-agent/signin',
              permanent:false
          }
      };
  }

  const { shopsTable } = context.query;
  let tableData;

  if(shopsTable=='totalShops'){
    const {data} = await axios.get('http://localhost:3000/api/agent/add-shop');
    tableData = data.message
  }
 

  return {
    props: { tableData,session }, // will be passed to the page component as props
  }
  
  }
