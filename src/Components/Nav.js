import cute1 from '../assets/cutiee1-removebg-preview.png'
import cute2 from '../assets/cutiee2-removebg-preview.png'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'



function Nav() {
    
    return (
        <>
           
            
            <div className='header'>
                <img src={cute1} alt="cute1" className='pic1'></img>
                <h1 >WAFFLE  - SPOT</h1>
                <img src={cute2} alt="cute2" className='pic2' ></img>
            </div>
            <div className='flex gap-10 bg-fuchsia-600 menu justify-evenly align-center text-white font-semibold text-2xl ml-80 '>
                {/* <p className='pt-2.5'>Home</p>
                <p className='pt-2.5'>Content</p>
                <p className='pt-2.5'>Footer</p> */}
                {/* <Link to="/" className='pt-2.5'>Home</Link> */}
                <Link to="/Search" className='pt-2.5'>Search</Link>
                <Link to="/Intro" className='pt-2.5'>Intro</Link>
                <Link to="/content" className='pt-2.5'>Content</Link>
                <Link to="/Footer" className='pt-2.5'>Footer</Link>
            </div>
        </>
    )
}
export default Nav