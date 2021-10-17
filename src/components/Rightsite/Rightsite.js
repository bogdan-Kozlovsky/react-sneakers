import React from 'react';
import './rightsite.scss'
const Rightsite = () => {
    return (

        <div className="rightsite">
            <div className="rightsite__body">
                <h2 className="rightsite__title">
                    Корзина
                </h2>
                <div className="rightsite__box">
                    <div className="rightsite__cart">
                        <div className="rightsite__inner">
                            <img className="rightsite__cart_img" src="./images/cartImg/1.png" alt="cart"/>
                            <div className="rightsite__cart_descr">
                                <p>
                                    Мужские Кроссовки Nike Air Max 270
                                </p>
                                <span>
                                    12 999 руб.
                                </span>
                            </div>
                            <img className="rightsite__cart_close" src="./images/icons/rightsite_close.svg"
                                 alt="close"/>
                        </div>
                    </div>

                    <div className="rightsite__cart">
                        <div className="rightsite__inner">
                            <img className="rightsite__cart_img" src="./images/cartImg/2.png" alt="cart"/>
                            <div className="rightsite__cart_descr">
                                <p>
                                    Мужские Кроссовки Nike Air Max 270
                                </p>
                                <span>
                                    12 999 руб.
                                </span>
                            </div>
                            <img className="rightsite__cart_close" src="./images/icons/rightsite_close.svg"
                                 alt="close"/>
                        </div>
                    </div>
                </div>

                <div className="rightsite__descr">
                    <div className="rightsite__descr_box">
                            <span>
                                Итого:
                            </span>
                        <span className="rightsite__descr_price">
                                21 498 руб.
                             </span>
                    </div>

                    <div className="rightsite__descr_box">
        <span>
           Налог 5%:
        </span>
                        <span className="rightsite__descr_price">
            1074 руб.
        </span>
                    </div>

                    <button className="rightsite__btn">
                        Оформить заказ
                        <img src="./images/icons/btn_strella.svg" alt="arrow"/>
                    </button>
                </div>
            </div>
        </div>

    );
};

export default Rightsite;