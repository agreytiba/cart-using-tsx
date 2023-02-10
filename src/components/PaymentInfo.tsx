import React from 'react'
import PayCard from './PayCard'

const PaymentInfo = () => {
  return (
      <div style={{backgroundColor:'#051434', width:"300px"}} className="text-light p-4 rounded-1">
          <h2>Payment Info</h2>
          <PayCard/>
          
      </div>
  )
}

export default PaymentInfo