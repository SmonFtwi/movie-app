/* eslint-disable react/prop-types */
import Router from "./router"
import { AppContextProvider } from "./context"

function App() {


  return (
    <>
    <AppContextProvider>
      <Router/>
    </AppContextProvider>
    
      
        
    </>
  )
}


 
export default App
