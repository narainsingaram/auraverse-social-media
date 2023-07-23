import { useContext } from 'react';
import { UserContext } from '../../context';
import {
Card,
Spacer,
Button,
Text,
Link,
Input,
Row,
Checkbox,
Container,
useInput,
} from "@nextui-org/react";

const Dashboard = () => {
    return (
        <Container>
            <Container>
                <h1 className="my-16 bg-blue-300 p-4 rounded-xl text-2xl">Dashboard Page</h1>
            </Container>
            <Container>
                <p className="my-16 bg-blue-300 p-4 rounded-xl">This is the Dashboard Page of Auraverse and can only be viewed by registered users.</p>
            </Container>
        </Container>
    );
};

export default Dashboard;
