import "./App.css";
import { assets } from '../../Assets/assets';
function App()
{
    return (
        <>
        <div className="app-download" id="app-download">
            <p>For Better Experice Downoad <br /> Tomato App</p>
            <div className="app-download-platforms">
                <img src={assets.play_store} alt="" />
                <img src={assets.app_store} alt="" />
            </div>
        </div>

        </>
    )
}
export default App;