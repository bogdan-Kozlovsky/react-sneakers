import './style/style.scss'

function App() {
    return (
        <div className="wrapper">
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
                        <div className="header__carst_box">
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

            <div className="cart">
                <div className="cart__inner">
                    <h1 className="cart__title">
                        Все кроссовки
                    </h1>

                    <form className="cart__form">
                        <input type="text" className="cart__input" placeholder={'Поиск'}/>
                        <button className="cart__btn">
                            <img src="./images/icons/search.svg" alt="search"/>
                        </button>
                    </form>
                </div>

                <ul className="cart__items">
                    {/*1*/}
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
                    {/*2*/}
                    <li className="cart__item">
                        <img className="cart__img" src="./images/cartImg/2.png" alt="images"/>
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
                    {/*3*/}
                    <li className="cart__item">
                        <img className="cart__img" src="./images/cartImg/3.png" alt="images"/>
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
                    {/*4*/}
                    <li className="cart__item">
                        <img className="cart__img" src="./images/cartImg/4.png" alt="images"/>
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
                </ul>
            </div>
        </div>
    );
}

export default App;
