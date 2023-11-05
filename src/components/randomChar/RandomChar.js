import { Component} from "react";

import './randomChar.scss'
import '../../style/button.scss'
import mjolnir from '../../resources/img/mjolnir.png'
import shield from '../../resources/img/shield.png'
import MarvelService from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErorrMessage";


class RandomChar extends Component {

    state= {
        char: {},
        loading: true,
        error: false
    }

    marvelService = new MarvelService();

    componentDidMount() {
        this.updateChar();
    }

    onCharLoaded = (char) => {
        this.setState({char, loading: false});
    }

    onError = () => {
        console.log("in error.");

        this.setState({
            loading: false,
            error: true
        });
    }

    updateChar = () => {
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);

        this.marvelService
                .getCharacter(id)
                .then(this.onCharLoaded)
                .catch(this.onError);
    }

    render() {
        const { char, loading, error  }= this.state;
        const errorMessage = error ? <ErrorMessage /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = !( loading || error) ? <View char={char} /> : null;

        return (
            <div className="random-char">
                {errorMessage}
                {spinner}
                {content}
                <div className="random-char__static">
                    <p className={"random-char__title"}>
                        Random character for today! <br />
                        Do you want to get to know him better?
                    </p>
                    <p className={"random-char__title"}>
                        Or choose another one
                    </p>
                    <button onClick={this.updateChar} className={"button button__main"}>
                        <div className={"inner"} >try it</div>
                    </button>
                    <img src={mjolnir} alt="" className={"random-char__decoration_mjolnir"} />
                    <img src={shield} alt="" className={"random-char__decoration_shield"} />
                </div>
            </div>
        );
    }
}

const View = ({char}) => {
    const { thumbnail, name, description, homepage, wiki} = char;
    let imgStyle = {'objectFit': 'cover'};

    if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
        imgStyle = {'objectFit' : 'contain'};
    }

    return (
        <div className="random-char__block">
            <img src={thumbnail} alt="" className="random-char__img" style={imgStyle}/>
            <div className="random-char__info">
                <p className="random-char__name">{name}</p>
                <p className="random-char__descr">{(description === "") ? "The description is not available." : description}</p>
                <div className="random-char__btns">
                    <a href={homepage} className="button button__main">
                        <div className="inner">homepage</div>
                    </a>
                    <a href={wiki} className="button button__secondary">
                        <div className="inner">Wiki</div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default RandomChar;