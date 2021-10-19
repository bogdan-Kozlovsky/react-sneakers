import React from 'react';

const Cart = ({imgUrl, title, price, onPlus, onFavorite}) => {

    const [isAdded, setIsAdded] = React.useState(false);
    const onClickPlus = () => {
        onPlus({imgUrl, title, price});
        setIsAdded(!isAdded);
    }


    const [isFavorite, setIsFavorite] = React.useState(false);
    const onClickFavorite = () => {
        onFavorite();
        setIsFavorite(!isFavorite);
    }

    return (
        <li className="cart__item">
            <img className="cart__img" src={imgUrl} alt="images"/>
            <img onClick={onClickFavorite} className="cart__likes" src={
                isFavorite ?
                    "./images/icons/active_like.svg" :
                    "./images/icons/like.svg"}
                 alt="active_likes"/>
            <p className="cart__descr">
                {title}
            </p>
            <div className="cart__box">
                <div className="cart__box_price">
                    <span>Цена:</span>
                    <p>{price} руб.</p>
                </div>
                <img
                    className="cart__active"
                    onClick={onClickPlus}
                    src={isAdded ?
                        "./images/icons/active_like.svg" :
                        "./images/icons/plus.svg"}
                    alt="plus"/>
            </div>
        </li>
    );
};

export default Cart;