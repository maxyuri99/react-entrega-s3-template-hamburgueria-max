import { HomePage } from "./pages/HomePage"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"
import "./styles/index.scss"

function App() {
  return (
    <>
      <HomePage />
      <ToastContainer position="bottom-right" autoClose={1 * 1000} />
    </>
  )
}

export default App
