import { useContext } from "react";
import { Navbar, Button, Link, Text } from "@nextui-org/react";
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
<Navbar isBordered variant="static">
    <Navbar.Brand>
        <Text b color="inherit" hideIn="xs">
            Auraverse
        </Text>
    </Navbar.Brand>
    <Navbar.Content hideIn="xs">
        <Navbar.Link href="#">Features</Navbar.Link>
        <Navbar.Link isActive href="#">Customers</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
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
