// import logo from './logo.svg';
import img1 from '../assets/img.png'
import '../App.css';

function Header() {
  return (
    <div className="Header">
     
    <div className='bg-amber-900 h-16 pl-6 py-2 flex justify-between'> 
        <div className=''> 
            <img class=" bg-white rounded-md h-12 px-2 py-1" src={img1} alt=''></img>
            </div>
        <div className='text-white text-xl pr-6 '>
          <button className='hover:bg-amber-700 h-14 px-2'>Burgur builder</button>
        <button className='bg-amber-700 h-14 px-2'> <a href='/textform.js'>Login</a></button>
        </div>
    </div>
    </div>
  );
}

export default Header;
