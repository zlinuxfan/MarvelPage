import Header from "../header/Header";
import RandomChar from "../randomChar/RandomChar";
import InfoChar from "../InfoChar/InfoChar";
import ListChar from "../listChar/ListChar";
import MarvelService from "../../services/MarvelService";

import './app.scss';
import decoration from "../../resources/img/bg_asset.png";

const marvelService = new MarvelService();
   marvelService.getAllCharacters().then(response => console.log(response));

const App = () => {
    return (
        <div className={"app"}>
            <Header/>
            <main>
                <RandomChar/>
                <div className={"char__content"}>
                    <ListChar/>
                    <InfoChar/>
                </div>
                <img className={"bg-decoration"} src={decoration} alt=""/>
            </main>
        </div>
    )
}

export default App;