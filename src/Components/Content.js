import waffle1 from '../assets/full1.jpeg'
import waffle2 from '../assets/icefull.jpeg'
import waffle3 from '../assets/melt.jpeg'

function Content() {
    return (
        <><div className='container'>
            <div className='sub1'>
                <img src={waffle1} alt="waffle1" className='waffles'></img>
                <p className='para'>The best waffles in the world.<br></br>
                    The taste is delicious</p>
            </div>
            <div className='sub1'>
                <img src={waffle2} alt="waffle1" className='waffles'></img>
                <p className='para'>The best waffles in the world.<br></br>
                    The taste is delicious</p>
            </div>
            <div className='sub1'>
                <img src={waffle3} alt="waffle1" className='waffles'></img>
                <p className='para'>The best waffles in the world.<br></br>
                    The taste is delicious</p>
            </div>

        </div>


        </>
    )
}

export default Content