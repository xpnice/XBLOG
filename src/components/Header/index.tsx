import './index.css'
const Header: React.FC = () => {
    return (
        <div className='header-bar'>
            <div className='logo-wrapper'></div>
            <div className='menu-wrapper'>
                <ul className='menu-item'>
                    <li >
                        <a href="">技术博文</a>
                    </li>
                    <li >
                        <a href="">关于我</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Header
