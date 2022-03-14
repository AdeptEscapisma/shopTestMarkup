import HeartIcon from '../../static/icons/heart-white.svg'

import './cartButton.css'

const CartButton = () => {
    return (
        <div className="cart-button">
            <span>В КОРЗИНУ</span>
            <img src={HeartIcon} />
        </div>
    )
}

export default CartButton;