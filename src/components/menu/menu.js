import './menu.css';
import logo from '../../assets/images/logo/spanish-matcher.png';

const Menu = () => {
    return (
        <>
            <img id='MenuLogo' src={logo} />
            <p className="menuLabel">Choose a vobaculary topic.</p>
            <div className="menuWrapper">
                <ul className="vocabMenu">
                    <li>Around Town</li>
                    <li>At Home</li>
                    <li>Fashion</li>
                    <li>Food</li>
                </ul>
            </div>
            <p className="txt-center">Built by Jared Hettinger.</p>
        </>
    );
};

export default Menu;