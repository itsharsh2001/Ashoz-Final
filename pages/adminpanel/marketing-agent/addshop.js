import classes from './dashboard.module.css'
import AddShops from '../../../components/adminpanel/MarketingAgent/AddShop.js'
import { getSession } from 'next-auth/client'


export default function AddShop() {
  return (
    <div className={classes.background} >
      <AddShops/>
    </div>
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
