import '../css/Footer.css'

export default function Footer({name}) {
    return (
        <footer className={'footer'}>
            <span>Made with love ❤️ by {name}</span>
        </footer>
    )
}