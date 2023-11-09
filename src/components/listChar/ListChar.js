import {Component} from "react";
import './listChar.scss'
import MarvelService from "../../services/MarvelService";
import ErrorMessage from "../errorMessage/ErorrMessage";
import Spinner from "../spinner/Spinner";

class ListChar extends Component {

    state = {
        chars: [],
        loading: true,
        error: false
    };

    marvelService = new MarvelService();

    componentDidMount() {
        this.updateChar();
    }

    onCharListLoaded = (chars) => {

        this.setState({chars, loading: false});
    }

    onError = () => {
        this.setState({error: true});
    }

    updateChar = () => {
        this.marvelService
            .getAllCharacters()
            .then(this.onCharListLoaded)
            .catch(this.onError);
    }

    onExtraCharacter = (id) => {
        console.log("id: " + id);
    };

    renderItems(arr) {

        const items = arr.map((arr) => {

            let imgStyle = {'objectFit': 'cover'};

            if (arr.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                imgStyle = {'objectFit' : 'unset'};
            }

            return (
                <li className="char__item" key={arr.id}>
                    <img src={arr.thumbnail} alt={arr.name} style={imgStyle}/>
                    <div className="char__name" onClick={() => this.onExtraCharacter(arr.id)}>{arr.name}</div>
                </li>
            );
        });

         return (
             <ul className="char__grid">
                 {items}
             </ul>
         )
    }

    render () {
        const {chars, error, loading} = this.state;
        const errorMessage = error ? <ErrorMessage /> : null;
        const loadingMessage = loading ? <Spinner /> : null;
        const items = !(error || loadingMessage) ? this.renderItems(chars) : null;

        return (
            <div className="char__list">
                {errorMessage}
                {loadingMessage}
                {items}
                <button className="button button__main button__long">
                    <div className="inner">load more</div>
                </button>
            </div>
        );
    }
}

export default ListChar;