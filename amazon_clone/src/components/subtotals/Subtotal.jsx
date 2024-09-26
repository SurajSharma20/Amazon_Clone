import React from 'react'
import "./subtotal.css"
// import CurrencyFormat from "react-currency-format";
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../stateProvider/Stateprovider';
import { subTotalAmount } from '../reducer/reducer';

const Subtotal = () => {
  const [{basket}, dispatch] = useStateValue();
  return (
    <div className='subtotal'>
      <CurrencyFormat
       renderText={(value) => (
         <>
           <p>
             Subtotal({basket.length} items): <strong>{value}</strong>
           </p>
           <small className='subtotal_gift'>
             <input type="checkbox"  className='checkbox'/>This order contains gift
           </small>
         </>
       )}
       decimalScale={2}
       value={subTotalAmount(basket)}
       displayType='text'
       thousandSeparator={true}
       prefix={"$"}
     />
     <button className='subtotal_btn'>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
