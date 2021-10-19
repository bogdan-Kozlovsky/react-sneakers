import React from 'react';
import './header.scss';

const Header = (props) => {
    return (
        <div>
            <header className="header">
                <div className="header__inner">
                    <div className="header__left">
                        <img className="header__logo" src="./images/icons/logo.png" alt="logo"/>
                        <div className="header__left_box">
                            <h2 className="header__title">
                                REACT SNEAKERS
                            </h2>
                            <h3 className="header__subtitle">
                                Магазин лучших кроссовок
                            </h3>
                        </div>
                    </div>

                    <div className="header__right">
                        <div className="header__carst_box" onClick={props.openRightSite}>
                            <img className="header__carts" src="./images/icons/carts.svg" alt="carts"/>
                            <span className="header__carts_price">
                1205 руб.
            </span>
                        </div>
                        <img className="header__like" src="./images/icons/like.svg" alt="likes"/>
                        <img className="header__user" src="./images/icons/user.svg" alt="user"/>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;