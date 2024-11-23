import pic1 from '../assets/F-1-removebg-preview.png'
import pic2 from '../assets/f-2-removebg-preview.png'
import pic3 from '../assets/f-3-removebg-preview.png'


function Footer() {
    return (
        <><div className='footer '>
            <h2 className="relative text-4xl font-semibold text-center text-fuchsia-400 top-5">CONTACT MEh!!</h2>
            <p className="relative text-xl font-bold ml-28" style={{ top: "80px" }}>Phone no: 1455 1544 1544<br></br>wafflespot7@gmail.com<br></br><br></br>
                Follow us : <br></br></p>
            <div className="relative flex" style={{ marginLeft: "500px", bottom: "50px", }}>
                <img width="70" height="70" src="https://img.icons8.com/bubbles/70/facebook.png" alt="facebook" />
                <img width="70" height="70" src="https://img.icons8.com/bubbles/70/instagram-new--v2.png" alt="instagram-new--v2" />
                <img width="70" height="70" src="https://img.icons8.com/bubbles/70/whatsapp.png" alt="whatsapp" />
                <img width="70" height="70" src="https://img.icons8.com/bubbles/70/youtube-squared.png" alt="youtube-squared" />
                <img width="70" height="70" src="https://img.icons8.com/bubbles/70/apple-phone.png" alt="apple-phone" />
            </div>
            <p className="relative text-2xl font-bold " style={{ marginLeft: "500px", }}>@waffles non stop spot.
                Its very tasty waffles and its very delicious. Hots and cold waffles.
                Waffles are a popular dish made from a batter <br></br>that’s cooked between two patterned plates,giving them<br></br> their signature grid-like texture. They can be served in <br></br>various ways, with toppings like syrup, fruit, whipped<br></br> cream, or chocolate.

            </p><div className='relative'>
                <img src={pic1} alt="PIC" className='relative bottom-44 left-28' ></img>
                 <img src={pic2} alt="PIC" style={{marginLeft:"1150px", position: "relative", bottom:"420px"}}></img>
                <img src={pic3} alt="PIC" className='relative ml-72' style={{bottom:" 400px"}}></img></div>

        </div>
        </>
    )
}

export default Footer