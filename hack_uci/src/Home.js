import './Home.css'
import Form from "./components/Form.js"
import MovingImage from './components/MovingImage'

function Home() {

    return (
    <div className="gradient flex othergradient">
        <Form />
        <MovingImage />
    </div>
    )
}

export default Home