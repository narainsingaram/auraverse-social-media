import { Navbar, Button, Link, Text } from "@nextui-org/react";

const Nav = () => {
return (
    <Navbar isBordered variant="floating">
    <Navbar.Brand>
        <Text style={{ fontFamily: 'Balsamiq Sans, sans-serif' }} size={30} b color="inherit" hideIn="xs">
            Remedify
        </Text>
    </Navbar.Brand>
    <Navbar.Content hideIn="xs" variant="highlight-rounded">
        <Navbar.Link href="#">Features</Navbar.Link>
        <Navbar.Link isActive href="#">
        Customers
        </Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Company</Navbar.Link>
    </Navbar.Content>
    <Navbar.Content>
        <Navbar.Link color="inherit" href="#">
        Login
        </Navbar.Link>
        <Navbar.Item>
        <Button auto flat as={Link} href="#">
            Sign Up
        </Button>
        </Navbar.Item>
    </Navbar.Content>
    </Navbar>
);
};

export default Nav;
