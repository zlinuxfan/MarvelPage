import {Component} from "react";
import Header from "../header/Header";
import RandomChar from "../randomChar/RandomChar";
import InfoChar from "../InfoChar/InfoChar";
import ListChar from "../listChar/ListChar";

import './app.scss';
import decoration from "../../resources/img/bg_asset.png";


class App extends Component{

    state = {
        selectedChar: null
    };

    onCharSelected = (id) => {
        this.setState({selectedChar: id});
    }

    render () {
        return (
            <div className={"app"}>
                <Header/>
                <main>
                    <RandomChar/>
                    <div className={"char__content"}>
                        <ListChar onCharSelected={this.onCharSelected}/>
                        <InfoChar charId={this.state.selectedChar}/>
                    </div>
                    <img className={"bg-decoration"} src={decoration} alt=""/>
                </main>
            </div>
        )
    }
}

export default App;