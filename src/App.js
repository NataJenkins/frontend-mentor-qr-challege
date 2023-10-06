import qr from "./images/image-qr-code.png";
import "./style.scss";

function App() {
    return (
        <main className="main-container">
            <div className="card">
                <img src={qr} alt="logo" />
                <div className="text">
                    <h1>Improve your front-end skills by building projects</h1>
                    <p>
                        Scan the QR code to visit Frontend Mentor and take your
                        coding skills to the next level
                    </p>
                </div>
            </div>
        </main>
    );
}

export default App;
