import "./hittastic.css";
import  Link from 'next/link';

export default function RootLayout({children}) {
    return(
        <html>
        <body>
        <div id='imgdiv'>
        <img src='/hittastic.png' alt='HitTastic! logo' />
        </div>
        <div id='container'>
        <div id='nav'>
        <p>
        <Link href='/hittastic'>Home</Link> <br />
        <Link href='/hittastic/about'>About</Link> <br />
        <Link href='/hittastic/search'>Search</Link> <br /> 
        <Link href='/hittastic/add'>Add song</Link>
        </p>
        </div>
        <div id='main'>{children}</div>
        </div>
        </body>
        </html>
    );
}
