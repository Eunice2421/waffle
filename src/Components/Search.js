import { useNavigate } from "react-router-dom"
function Search() {
    const use = useNavigate()
    return (<>
        <input type="text" placeholder="waffle non-stop!!!" className="ibox"></input>
        <div className=" bg-pink-300 text-slate-50 btn">
          <button onClick={() => use("/")}>Home</button>
        <button onClick={() => use("/Intro")} >Intro</button>
        <button onClick={() => use("/Content")} >Content</button>
            <button onClick={() => use("/Footer")}>Footer</button></div>

    </>)
}
export default Search