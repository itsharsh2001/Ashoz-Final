import classes from '../dashboard.module.css'
import ShopDetails from '../../../../components/adminpanel/MarketingAgent/ShopDetails.js'
import {useRouter} from 'next/router'
import axios from 'axios'
import { getSession } from 'next-auth/client'

export default function Shopdetails(props) {
  const router = useRouter();


  return (
    <div className={classes.background} >
      <ShopDetails data={props.data1} query={router.query.shopDetail}/>
    </div>
  )
}


export async function getServerSideProps(context) {


  const session = await getSession({req: context.req});
  
  if(!session){
      return{
          redirect: {
              destination:'/adminpanel/marketing-agent/signin',
              permanent:false
          }
      };
  }


  const { shopDetail } = context.query;

  const {data} = await axios.post('http://localhost:3000/api/agent/get-shop',{
    email:shopDetail
  })

  const data1 = data.message

  return {
    props: { data1,session }, // will be passed to the page component as props
  }
}


