import ice from '../assets/chocolate-waffle.jpg'
import { useNavigate } from 'react-router-dom'

function Intro() {
    const use = useNavigate()
    return (
        <>
            <h1 className=' font-bold text-3xl ml-32 mb-10 text-teal-600' >INTRODUCTION</h1>
                        <div className='intro'>
                <img src={ice} alt="ice" className='ice'></img>
                <p className='point'>The ORIGINS of waffles can be traced back to ancient Greece, where chefs cooked flat cakes called obelios between two metal plates. The word "waffle" is related to the word "wafer", which refers to the Communion wafers that were a staple of early Christian fasts</p>
            </div>
            <button onClick={() => use("/")} className=' w-52 h-10 bg-pink-300 text-slate-50 ml-10 mt-5'>Home</button>
            <button onClick={() => use("/Content")} className=' w-52 h-10 bg-pink-300 text-slate-50 ml-10 '>Content</button>
            <button onClick={() => use("/Footer")} className=' w-52 h-10 bg-pink-300 text-slate-50 ml-10 '>Footer</button>
            <button onClick={() => use("/Search")} className=' w-52 h-10 bg-pink-300 text-slate-50  ml-10'>Search</button>
           
        </>

    )
}
export default Intro