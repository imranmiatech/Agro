import React, { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/cartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod');
  const {navigate, backendUrl, token, cartItems, setCartItems, getCartAmount, delivery_fee, products} = useContext(ShopContext);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    district: '',
    thana: '',
    phone: '',
    union: '',
    message: ''
  })
  const onChangeHandler = (event) =>{
    const name = event.target.name;
    const value = event.target.value;

    setFormData(data => ({...data,[name]:value}))
  }
const onSubmitHanller = async (event) => {
  event.preventDefault();
  try {
    let orderItems = [];

    for (const itemId in cartItems) {

      for (const size in cartItems[itemId]) {

        if (cartItems[itemId][size] > 0) {

          const itemInfo = structuredClone(
            products.find(product => product._id === itemId)
          );

          if (itemInfo) {
            itemInfo.size = size;
            itemInfo.quantity = cartItems[itemId][size];
            orderItems.push(itemInfo);
          }
        }
      }
    }

    let orderData = {
       address: formData,
       items: orderItems,
       amount: getCartAmount() + delivery_fee
    }

    switch (method) {
      //API calls for cod
      case 'cod':
        const response = await axios.post(`${backendUrl}/api/order/place`, orderData, {headers: {token}})
        if(response.data.success){
          setCartItems({})
          navigate('/orders')
        } else {
          toast.error(response.data.message)
        }
      break;

      default: 
        break;
    }

  } catch (error) {
    console.log(error);
    toast.error(error.message)
  }


// const onSubmitHanler = async (event)=> {
//        event.preventDefault()
//        try {
//         let orderItems = []
//          for(const item in cartItems){
//           for(const item in cartItems[items]){
//             if(cartItems[items][item] > 0){
//               const itemInfo = structuredClone(products.find(product => product._id === items))
//              if(itemInfo){
//                itemInfo.size = item
//                itemInfo.quantity = cartItems[items][item]
//                orderItems.push(itemInfo)
//              }
//             }
//           }
//          }
//          console.log(orderItems);
//        } catch (error) {
        
//        }
}
  return (
    <form onSubmit={onSubmitHanller} className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t ">
      {/* Left side */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl my-3 sm:text-2xl">
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>
        <div className="flex gap-3">
          <input required onChange={onChangeHandler} name="firstName" value={formData.firstName} className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="First Name" />
          <input required  onChange={onChangeHandler} name="lastName" value={formData.lastName} className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Last Name" />
        </div>
        <input required onChange={onChangeHandler} name="email" value={formData.email} className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="email" placeholder="Email Address" />
        {/* <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Street" /> */}
        <div className="flex gap-3">
          <input required  onChange={onChangeHandler} name="district" value={formData.district} className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="District" />
          <input required  onChange={onChangeHandler} name="thana" value={formData.thana} className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Thana" />
        </div>
        <div className="flex gap-3">
          <input required  onChange={onChangeHandler} name="phone" value={formData.phone} className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="number" placeholder="Phone Number" />
          <input  required onChange={onChangeHandler} name="union" value={formData.union} className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Union/city council" />
        </div>
        <textarea required  onChange={onChangeHandler} name="message" value={formData.message} className="border border-gray-300 rounded py-1.5 px-3.5 w-full h-auto" type="text" placeholder="Message/ House No, road no etc" />
      </div>
      {/* Right side */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Title text1={'PAYMENT'}  text2={'METHOD'}/>
          {/* paymant method selection */}
          <div className="flex gap-3 flex-col lg:flex-row">
            <div onClick={()=>setMethod('bkash')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'bkash' ? 'bg-green-500' : ''} `}></p>
            <img src={assets.cod} alt="" className="h-5 mx-4"/>
            </div>
             <div onClick={()=>setMethod('nogod')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'nogod' ? 'bg-green-500' : ''} `}></p>
            <img src={assets.cod} alt="" className="h-5 mx-4"/>
            </div>
             <div onClick={()=>setMethod('cod')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-500' : ''} `}></p>
            <p className="text-gray-500 text-sm font-medium mx-4">CASH ON DELIVERY</p>
            </div>
          </div>
          <div className="w-fll text-end mt-8">
              <button type="submit"  className="bg-black text-white px-16 py-3 text-sm">PLACE ORDER</button>
          </div>
          
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
