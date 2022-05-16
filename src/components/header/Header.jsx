import logo from './../assets/img/Layer.png'
import korzina from './../assets/img/korzina.png'
import metka from './../assets/img/metka.png'
import headerStyle from './Header.module.css'

function Header() {
    return <div className={headerStyle.Header}>
        <img src={logo} alt="" />
        <div className={headerStyle.menu}>
            <a href="">Products</a>
            <a href="">Explore</a>
            <a href="">Shop</a>
        </div>
        <div className={headerStyle.shop}>
            <img src={metka} alt="" />
            <a href="">Showrooms</a>
            <img src={korzina} alt="" />
        </div>
    </div>
}

export default Header;