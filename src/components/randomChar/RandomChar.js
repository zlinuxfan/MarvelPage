import './randomChar.scss'
import '../../style/button.scss'
import thor from '../../resources/img/Thumbnail.png'
import mjolnir from '../../resources/img/mjolnir.png'
import shield from '../../resources/img/shield.png'


const RandomChar = () => {
    return (
        <div className="random-char">
            <div className="random-char__block">
                <img src={thor} alt="" className="random-char__img"/>
                <div className="random-char__info">
                    <p className="random-char__name">Thor</p>
                    <p className="random-char__descr">
                        As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made,
                        the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish
                        imbecile, he's quite smart and compassionate...
                    </p>
                    <div className="random-char__btns">
                        <a href="#" className="button button__main">
                            <div className="inner">homepage</div>
                        </a>
                        <a href={"#"} className="button button__secondary">
                            <div className="inner">Wiki</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="random-char__static">
                <p className={"random-char__title"}>
                    Random character for today! <br />
                    Do you want to get to know him better?
                </p>
                <p className={"random-char__title"}>
                    Or choose another one
                </p>
                <button className={"button button__main"}>
                    <div className={"inner"}>try it</div>
                </button>
                <img src={mjolnir} alt="" className={"random-char__decoration_mjolnir"} />
                <img src={shield} alt="" className={"random-char__decoration_shield"} />
            </div>
        </div>
    );
}

export default RandomChar;