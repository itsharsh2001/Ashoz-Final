import classes from './dashboard.module.css'
import DashBoard from '../../../../components/adminpanel/MarketingTeam/WebDeveloper/DashBoard'
import HamBurger from '../../../../components/UI/HamBurger'
import { useState } from 'react'
import { getSession } from 'next-auth/client'
import axios from 'axios'

export default function WebDeveloperdashboard(props) {
  const [hamburger, setHamburger] = useState(false)
  const hamburgerHandler = () => {
    setHamburger(()=>{return !hamburger})
  }
  return (
    <>
    {hamburger&&<HamBurger agent={false} superAdmin={false} visualTeam={false} marketingAdmin={false} webDeveloper={true} hamburgerHandler={hamburgerHandler} />}
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

  const { table } = context.query;
  let data1;

  if(table=='dashboard'){
    const {data} = await axios.get('http://localhost:3000/api/team/webdeveloper/get-shop');
    data1 = data.message
  } 

  if(table=='recentlyadded'){
    const {data} = await axios.get('http://localhost:3000/api/team/webdeveloper/recentlyadded');
    data1 = data.message
  } 

  return {
    props: { data1,session }, // will be passed to the page component as props
  }
  
  }