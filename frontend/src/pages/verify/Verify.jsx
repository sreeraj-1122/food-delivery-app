import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { url } from '../../baseUrl/baseUrl';

const Verify = () => {
    const [searchParams,setSearchParams]=useSearchParams();
    const success=searchParams.get("success");
    const orderId=searchParams.get("orderId");
    const navigate=useNavigate()
    const verifyPayment=async()=>{
      const response=await axios.post(url+"/api/order/verify",{success,orderId});
      if (response.data.success) {
        navigate('/myorders')
      }else{
        navigate('/')
      }
    }
    useEffect(()=>{
      verifyPayment()
    },[])
  return (
    <div className='h-[60vh] grid'>
        <div className='w-16 h-16 place-self-center border-4 border-[#bdbdbd] border-t-[tomato] spin rounded-full	'>
        </div>
    </div>
  )
}

export default Verify