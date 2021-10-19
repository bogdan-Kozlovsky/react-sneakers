import React from 'react';
import './style/style.scss';
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import Rightsite from "./components/Rightsite/Rightsite";

function App() {
    const [openRightSite, setOpenRightSite] = React.useState(false);

    // item - это карточка главний екран
    const [item, setItem] = React.useState([]);


    const [addCart, setAddCart] = React.useState([]);

    //запрос на сервер
    React.useEffect(() => {
        fetch('https://616da991a83a850017caa67a.mockapi.io/item').then((res) => {
            return res.json();
        }).then(json => {
            setItem(json)
        });
    }, []);

    //запрос на сервер


    //ф-я для добавления карточки в корзину
    function onAddToCart(obj) {
        //push
        setAddCart(prev =>[...prev, obj])
    }

    console.log(addCart)

    return (
        <div className="wrapper">
            {openRightSite && <Rightsite closeRightSite={() => setOpenRightSite(false)} addCart={addCart}/>}


            <Header openRightSite={() => setOpenRightSite(true)}/>
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

                    {/*//отрисовка*/}
                    {item.map(elem =>
                        <Cart
                            title={elem.title}
                            price={elem.price}
                            imgUrl={elem.imgUrl}
                            onPlus={(obj) => onAddToCart(obj)}
                            onFavorite={() => console.log('Favorite!')}
                        />)}
                </ul>
            </div>
        </div>
    );
}

export default App;
