import { useState, useEffect } from 'react';
import { NextUIProvider } from "@nextui-org/react";
import { createTheme } from "@nextui-org/react";
import { UserProvider } from '../context/';
import Document, { Html, Head, Main, NextScript } from "next/document";
import { CssBaseline } from "@nextui-org/react";
import Nav from '../components/Nav.js';
import '../public/css/fonts.css';
import '../public/css/global.css';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
// import "antd/disc/antd.css";

function MyApp({ Component, pageProps, router }) {
    const hideNavRegister = router.pathname === "/register" || router.pathname === "/login";

    // State for theme preference (default is 'light')
    const [themePreference, setThemePreference] = useState('light');

    // Create the custom themes
    const lightTheme = createTheme({
        type: "light",
        theme: {
            colors: {
                // Define your custom light theme colors here
                primaryLight: '#light-primaryLight',
                primaryLightHover: '#light-primaryLightHover',
                // ... more light theme colors
            },
            space: {},
            fonts: {}
        }
    });

    const darkTheme = createTheme({
        type: "dark",
        theme: {
            colors: {
                // Define your custom dark theme colors here
                primaryLight: '#dark-primaryLight',
                primaryLightHover: '#dark-primaryLightHover',
                // ... more dark theme colors
            },
            space: {},
            fonts: {}
        }
    });

    // Apply the selected theme
    const theme = themePreference === 'dark' ? darkTheme : lightTheme;

    // Function to toggle the theme
    const toggleTheme = () => {
        setThemePreference(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
    };

    // Persist the theme preference using local storage
    useEffect(() => {
        const savedTheme = localStorage.getItem('themePreference');
        if (savedTheme) {
            setThemePreference(savedTheme);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('themePreference', themePreference);
    }, [themePreference]);

    return (
        <UserProvider>
            <NextUIProvider theme={theme}>
                <div style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                    {!hideNavRegister && <Nav />} {/* Render Nav only if hideNav is false */}
                    <ToastContainer />
                    <Component {...pageProps} />
                    <button onClick={toggleTheme}>Toggle Theme</button> {/* Add a button to toggle the theme */}
                </div>
            </NextUIProvider>
        </UserProvider>
    )
}

export default MyApp;


