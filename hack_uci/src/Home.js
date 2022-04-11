import './Home.css'
import Form from "./components/Form.js"
import MovingImage from './components/MovingImage'

function Home() {

    return (
    //Form contains Text Inputs and Submit Button.
    //MovingImage contains Petr and animation.
    <div className="gradient flex othergradient">
        <Form />
        <MovingImage />
    </div>
    )
}

export default Home