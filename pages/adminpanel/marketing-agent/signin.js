import classes from './signin.module.css'
import SignIn from '../../../components/adminpanel/MarketingAgent/SignIn'
import { getSession } from 'next-auth/client'


export default function Signin() {
  return (
    <div className={classes.background} >
      <SignIn/>
    </div>
  )
}

export async function getServerSideProps(context){
  const session = await getSession({req: context.req});
  
  if(session){
      return{
          redirect: {
              destination:'/adminpanel/super-admin/dashboard',
              permanent:false
          }
      };
  }
  
  return{
      props:{ session }
  }
  
  }
