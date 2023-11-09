import {Component} from "react";
import './infoChar.scss';
import MarvelService from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";
import Skeleton from "../skeleton/Skeleton";
import ErrorMessage from "../errorMessage/ErorrMessage";


class InfoChar extends Component{

    state = {
        character: null,
        loading: false,
        error: false
    };

    marvelService = new MarvelService();

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.charId !== prevProps.charId) {
            this.updateChar(this.props.charId);
        }
    }

    onCharLoading = () => {
        this.setState({loading: true});
    }

    onCharLoaded = (character) => {
        this.setState({character, loading: false});
    }

    updateChar = (id) => {
        if (id === null) {
            return;
        }

        this.onCharLoading();

        this.marvelService
            .getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError);
    }

    onError = () => {
        this.setState({error: true});
    }

    render() {
        const {character, loading, error} = this.state;
        const skeleton = character || loading || error ? null : <Skeleton />;
        const spinner = loading ? <Spinner /> : null;
        const errorMessage = error ? <ErrorMessage /> : null;
        const char = !(!character || loading || error) ? <View character={character} /> : null;

        return (
            <div className="char__info">
                {skeleton}
                {char}
                {spinner}
                {errorMessage}
            </div>
        );
    }

}

const View = ({character}) => {
    const {name, description, thumbnail, homepage, wiki, comics} = character;
    let imgStyle = {'objectFit' : 'cover'};

    if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
        imgStyle = {'objectFit' : 'contain'};
    }

    return (
        <>
            <div className="char__basics">
                <img src={thumbnail} alt={name} style={imgStyle}/>
                <div>
                    <div className="char__info-name">{name}</div>
                    <div className="char__btns">
                        <a href={homepage} className="button button__main">
                            <div className="inner">Homepage</div>
                        </a>
                        <a href={wiki} className="button button__secondary">
                            <div className="inner">Wiki</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="char__descr">{description}</div>
            <div className="char__comics">Comics:</div>
            <ul className="char__comics-list">
                {comics.length > 0 ? null : "There is no comics with this character"}
                {comics.map((item, i) => {
                    let view = (
                        <li className="char__comics-item" key={i}>
                            {item.name}
                        </li>
                        )

                    if (i  < 10) {
                        view = null
                    }

                    return view;
            })}

            </ul>
        </>
    )
}

export default InfoChar;