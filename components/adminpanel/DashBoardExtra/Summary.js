import classes from './Summary.module.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Card from '../../UI/Card';
import {useEffect, useState} from 'react'
import axios from 'axios'
import Link from 'next/link'

export default function Summary() {

    const [visited, setVisited] = useState(null)
    const [paymentNotCompleted, setPaymentNotCompleted] = useState(null)
    const [requestForCorrection, setRequestForCorrection] = useState(null)
    const [totalShops, setTotalShops] = useState(null)


    const gettingDetails = async()=>{
        try{
            const {data} = await axios.get('/api/agent/summary/payment-not-completed')
            setPaymentNotCompleted(data.paymentlength)
        }catch(error){
            console.log(error)
        }

        try{
            const {data} = await axios.get('/api/agent/summary/visited-less-than-twotimes')
            setVisited(data.visitlength)
        }catch(error){
            console.log(error)
        }

        try{
            const {data} = await axios.get('/api/agent/summary/request-for-correction')
            setRequestForCorrection(data.requestlength)
        }catch(error){
            console.log(error)
        }


        
        try{
            const {data} = await axios.get('/api/agent/add-shop')
            setTotalShops(data.shoplength)
        }catch(error){
            console.log(error)
        }

    }

    useEffect(()=>{
        gettingDetails();
    },[])

    return (
        <div className={classes.summary} >
            <div><ArrowBackIcon className={classes.icon} /></div>
            <span>Summary</span>
            <section>
                
                <Link href='/adminpanel/marketing-agent/visitshop'>
                <span>

                <Card background='F6F6FB'>
                    <h4>{visited}</h4>
                    <p>Visited &#60; 2 times</p>
                </Card>
                </span>
                </Link>

                <Link href='/adminpanel/marketing-agent/paymentincomplete'>
                <span>
                <Card background='FDF5F3'>
                    <h4>{paymentNotCompleted}</h4>
                    <p>Payment Not Completed</p>
                </Card>
                </span>
                </Link>


                <Link href='/adminpanel/marketing-agent/correctionrequest'>
                <span>

                <Card background='FFFAF4'>
                    <h4>{requestForCorrection}</h4>
                    <p>Requests For Correction</p>
                </Card>
                </span>
                </Link>

                <Link href='/adminpanel/marketing-agent/dashboard'>
                <span>

                <Card background='F6F6FB'>
                    <h4>{totalShops}</h4>
                    <p>Total Shops</p>
                </Card>
                </span>
                </Link>
            </section>
        </div>
    )
}
