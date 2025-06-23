import Header from "./components/Header"
import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
 

  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
      
      {/* Toast Notifications Container */}
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </>
  )
}

export default App
