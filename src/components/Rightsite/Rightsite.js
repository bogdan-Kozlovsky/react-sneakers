import React from 'react';
import './rightsite.scss'


const Rightsite = ({closeRightSite, addCart = []}) => {
    return (

        <div className="rightsite">
            <div className="rightsite__body">
                <div className="rightsite__body_box">
                    <h2 className="rightsite__title">
                        Корзина
                    </h2>
                    <img className="rightsite__close" src="./images/icons/rightsite_close.svg" alt="close"
                         onClick={closeRightSite}/>
                </div>
                <div className="rightsite__box">

                    {/*отрисовка карточки добавленого товара*/}
                    {addCart.map(obj => {
                        return (
                            <div className="rightsite__cart">
                                <div className="rightsite__inner">
                                    <img className="rightsite__cart_img" src={obj.imgUrl} alt="cart"/>
                                    <div className="rightsite__cart_descr">
                                        <p>
                                            {obj.title}
                                        </p>
                                        <span> {obj.price} руб. </span>
                                    </div>
                                    <img className="rightsite__cart_close" src="./images/icons/rightsite_close.svg"
                                         alt="close"/>
                                </div>
                            </div>
                        );
                    })}
                    {/*отрисовка карточки добавленого товара*/}

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