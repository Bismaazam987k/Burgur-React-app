import React,{useState} from 'react'
import PropTypes from 'prop-types'

 export default function Textform(Props) {
  const handleUpClick = () => {
console.log('SIGNIN');
    setButtonText('REGISTER');
  }
  const [buttonText, setButtonText] = useState('SIGNIN');
  return (
    <div>
      <form className='bg-white w-[1500px h-[450px]' >
         <div className='ml-[510px] mt-[170px]'>
          <div className='w-[520px] h-[300px] relative bg-white shadow-md shadow-gray-600 hover:scale-90'>
          <div class="mt-4  absolute ">
            <p class='text-center text-xl'>INVALID-EMAIL</p>
    <input type="email" class="w-[450px] h-[40px] ml-8  text-xl hover:bg-slate-300 -z-10 pl-5 mt-3" placeholder='Enter the email'/>
    <input type="password" class="w-[450px] h-[40px] ml-8 mt-8 text-xl hover:bg-slate-300 -z-10 pl-5 " placeholder='Enter the password'/>
    <button type="submit" class="mt-8 text-green-700 font-bold ml-56 text-xl">{Props.btn}</button><br></br>
    <button type="submit" class="mt-8 text-amber-800 font-bold ml-56 text-xl" onClick={handleUpClick}> {buttonText}</button>
  </div>
          </div>
         </div>
</form>
    </div>
  )
}

Textform.proptype=PropTypes.string;
