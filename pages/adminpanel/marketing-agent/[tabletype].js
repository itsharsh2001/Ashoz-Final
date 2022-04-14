import classes from './dashboard.module.css'
import DashBoard from '../../../components/adminpanel/MarketingAgent/DashBoard'
import HamBurger from '../../../components/UI/HamBurger'
import { useState } from 'react'
import { getSession } from 'next-auth/client'
import axios from 'axios'

export default function Dashboard(props) {

  const [hamburger, setHamburger] = useState(false)
  const hamburgerHandler = () => {
    setHamburger(()=>{return !hamburger})
  }
  return (
    <>
    {hamburger&&<HamBurger agent={true} superAdmin={false} visualTeam={false} marketingAdmin={false} webDeveloper={false} hamburgerHandler={hamburgerHandler} />}
    <div className={classes.background} >

      <DashBoard data={props.data1} hamburgerHandler={hamburgerHandler}/>
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

  const { tabletype } = context.query;
  let data1;

  if(tabletype=='dashboard'){
    const {data} = await axios.get('http://localhost:3000/api/agent/add-shop');
    data1 = data.message
  }

  if(tabletype=='visitshop'){
    const {data} = await axios.get('http://localhost:3000/api/agent/summary/visited-less-than-twotimes');
    data1 = data.message
  }

  if(tabletype=='paymentincomplete'){
    const {data} = await axios.get('http://localhost:3000/api/agent/summary/payment-not-completed');
    data1 = data.message
  }

  if(tabletype=='correctionrequest'){
    const {data} = await axios.get('http://localhost:3000/api/agent/summary/request-for-correction');
    data1 = data.message
  }


 

  return {
    props: { data1,session }, // will be passed to the page component as props
  }
  
  }
