import "./style.css";
import  Link from 'next/link';

export default function RootLayout({children}) {
    return(
        <html>
        <body>
        <div id='imgdiv'>
        <img src='/hittastic.png' alt='HitTastic! logo' />
        </div>
        {children}
        <p>
        <Link href='/'>Home</Link> | 
        <Link href='/about'>About</Link> | 
        <Link href='/search'>Search</Link> |
        <Link href='/add'>Add song</Link>
        </p>
        </body>
        </html>
    );
}
