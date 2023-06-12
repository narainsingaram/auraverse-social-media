import Document, { Html, Head, Main, NextScript } from "next/document";
import { CssBaseline } from "@nextui-org/react";
import Nav from '../components/Nav.js';
import '../public/css/fonts.css';
import '../public/css/global.css';


function MyApp({ Component, pageProps, router }) {
    const hideNavRegister = router.pathname === "/register"; // Check if the current route is '/register'
    
    return (
        <>
            <div style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                {!hideNavRegister  && <Nav />} {/* Render Nav only if hideNav is false */}
                <Component {...pageProps} />
            </div>
        </>
    )
}

export default MyApp;
