import ice from '../assets/chocolate-waffle.jpg'

function Intro() {
    return (
        <>
            <h1 className=' font-bold text-3xl ml-32 mb-10 text-teal-600' >INTRODUCTION</h1>
                        <div className='intro'>
                <img src={ice} alt="ice" className='ice'></img>
                <p className='point'>The origins of waffles can be traced back to ancient Greece, where chefs cooked flat cakes called obelios between two metal plates. The word "waffle" is related to the word "wafer", which refers to the Communion wafers that were a staple of early Christian fasts</p>
            </div>
        </>

    )
}
export default Intro