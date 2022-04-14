import classes from './dashboard.module.css'
import SummaryPage from '../../../../components/adminpanel/MarketingTeam/VisualTeam/SummaryPage'
import { getSession } from 'next-auth/client'


export default function VisualTeamdashboard() {
  return (
    <div className={classes.background} >
      <SummaryPage/>
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
