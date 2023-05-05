import Header from "../header/Header";
import RandomChar from "../randomChar/RandomChar";


const App = () => {
    return (
        <div className={"app"}>
            <Header/>
            <main>
                <RandomChar/>
            </main>
        </div>
    )
}

export default App;