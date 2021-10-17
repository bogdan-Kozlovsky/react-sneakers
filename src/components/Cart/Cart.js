import React from 'react';

const Cart = () => {
    return (
        <li className="cart__item">
            <img className="cart__img" src="./images/cartImg/1.png" alt="images"/>
            <p className="cart__descr">
                Мужские Кроссовки Nike Blazer Mid Suede
            </p>
            <div className="cart__box">
                <div className="cart__box_price">
                    <span>
                        Цена:
                    </span>
                    <p>
                        12 999 руб.
                    </p>
                </div>
                <img className="cart__active" src="./images/icons/plus.svg" alt="plus"/>
            </div>
        </li>
    );
};

export default Cart;