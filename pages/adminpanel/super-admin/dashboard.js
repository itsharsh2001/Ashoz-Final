import classes from './dashboard.module.css'
import DashBoard from '../../../components/adminpanel/SuperAdmin/DashBoard'
import HamBurger from '../../../components/UI/HamBurger'
import { useState } from 'react'
import { getSession } from 'next-auth/client'

export default function SuperAdmindashBoard() {
  const [hamburger, setHamburger] = useState(false)
  const hamburgerHandler = () => {
    setHamburger(()=>{return !hamburger})
  }
  return (
    <>
    {hamburger&&<HamBurger agent={false} superAdmin={true} visualTeam={false} marketingAdmin={false} webDeveloper={false} hamburgerHandler={hamburgerHandler} />}
    <div className={classes.background} >

      <DashBoard hamburgerHandler={hamburgerHandler}/>
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
  
  return{
      props:{ session }
  }
  
  }
