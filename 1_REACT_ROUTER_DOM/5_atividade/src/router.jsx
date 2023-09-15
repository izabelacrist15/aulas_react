import {Routes, Route} from "react-router-dom"
import Pagina1 from "./Pages/Pagina1"
import Pagina2 from "./Pages/Pagina2"
function router() {
  return (
    <Routes>
     <Route path="/pagina1" element= {<Pagina1/>} />
     <Route path="/pagina2" element= {<Pagina2/>} />

    </Routes>
  )
}

export default router
