import './style/style.scss'
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import Rightsite from "./components/Rightsite/Rightsite";

function App() {
    return (
        <div className="wrapper">
            <Rightsite/>
            <Header/>

            <div className="cart">
                <div className="cart__inner">
                    <h1 className="cart__title">
                        Все кроссовки
                    </h1>

                    <form className="cart__form">
                        <input type="text" className="cart__input" placeholder={'Поиск'}/>
                        <div className="cart__btn">
                            <img src="./images/icons/search.svg" alt="search"/>
                        </div>
                    </form>
                </div>

                <ul className="cart__items">
                    {/*1*/}
                    <Cart/>
                    <Cart/>
                    <Cart/>
                    <Cart/>

                </ul>
            </div>
        </div>
    );
}

export default App;
