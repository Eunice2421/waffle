import Nav from "./Components/Nav"
import Search from "./Components/Search"
import Content from "./Components/Content"
import Intro from "./Components/Intro"
import Footer from "./Components/Footer"
import {Routes,Route} from 'react-router-dom'

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Nav></Nav>}></Route>
           <Route path="/search" element={<Search></Search>}></Route>
           <Route path="/intro" element={<Intro></Intro>}></Route>
           <Route path="/content" element={<Content></Content>}></Route>
           <Route path="/footer" element={<Footer></Footer>}></Route>
            </Routes>
            </>
    )

}
export default App
