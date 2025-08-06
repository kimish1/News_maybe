import Onenews from "./components/onenews"
import {newsData} from "./fixtures/newsdata";
import './App.css'

function App() {
  return (
    <>
     <div>
         <h1>News from Kimish</h1>
         <div>
             {
                 newsData.map(object => { return <Onenews key={object.id} {...object} /> })
             }
         </div>
     </div>
    </>
  )
}

export default App
