import "./style.css";
import  Link from 'next/link';

export default function RootLayout({children}) {
    return(
        <html>
        <body>
        {children}
        </body>
        </html>
    );
}
