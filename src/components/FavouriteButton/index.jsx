import HeartIcon from '../../static/icons/heart.svg'
import './favouriteIcon.css'

const FavouriteButton = ({ className }) => {
    const classNames = className ? 'flat-button ' + className : 'flat-button';

    return (
        <div className={classNames}>
            <img src={HeartIcon} />
        </div>
    )
}

export default FavouriteButton;