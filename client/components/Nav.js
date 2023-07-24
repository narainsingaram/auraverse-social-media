import { useContext } from "react";
import { Navbar, Button, Link, Text, Badge } from "@nextui-org/react"; // Import the Badge component
import { UserContext } from "../context";
import { useRouter } from 'next/router';

const Nav = () => {
    const [state, setState] = useContext(UserContext);

    const router = useRouter();

    const logout = () => {
        window.localStorage.removeItem('auth');
        setState(null);
        router.push("/login");
    }
    return (
        <Navbar variant="floating" className="">
            <Navbar.Brand>
                <Text b color="inherit" hideIn="xs">
                    Auraverse
                </Text>
            </Navbar.Brand>
            <Navbar.Content hideIn="xs" variant="highlight-rounded">
                <Navbar.Link isActive={router.pathname === '/'} href="/">Home</Navbar.Link>
                <Navbar.Link isActive={router.pathname === '/user/dashboard'} href="/user/dashboard">Dashboard</Navbar.Link>
                <Badge color="primary" enableShadow disableOutline content="Lumi">
                    <Navbar.Link isActive={router.pathname === '/chatbot'} href="/chatbot">AI</Navbar.Link>
                </Badge>
                <Navbar.Link href="#">Company</Navbar.Link>
            </Navbar.Content>
            <Navbar.Content>
                {state ? (
                    <Navbar.Item>
                    <Button color="error" onClick={logout} flat href="#">
                        Logout
                    </Button>
                    </Navbar.Item>
                ) : (
                    <>
                    <Navbar.Link color="inherit" href="/login">
                        Login
                    </Navbar.Link>
                    <Navbar.Item>
                        <Button auto flat as={Link} href="/register">
                        Sign Up
                        </Button>
                    </Navbar.Item>
                    </>
                )}
            </Navbar.Content>
        </Navbar>
    );
};

export default Nav;
