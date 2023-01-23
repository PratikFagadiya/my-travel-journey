import NavLogo from "../imgs/logo.svg";
import '../css/NavHeader.css'

export default function NavHeader({navName}) {
    return (
        <div>
            <nav className={'nav'}>
                <img src={NavLogo} alt={'Nav'}/>
                <span>{navName}</span>
            </nav>
        </div>
    )
}