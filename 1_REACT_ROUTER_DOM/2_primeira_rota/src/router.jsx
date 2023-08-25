import { Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
function Router(){
    return(
     <Route>
        <Route path="/" element={<Home/>}/>
     </Route>
    )
}

export default Router