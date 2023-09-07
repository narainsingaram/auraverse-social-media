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
;
import UserRoute from "../../components/routes/UserRoute";
///import CreatePostForm from "../../components/forms/CreatePortForm";


const Dashboard = () => {
    const[state,setState ] = useContext(UserContext);
    return (
        <Container>
            <Container>
                <h1 className="my-16 bg-blue-300 p-4 rounded-xl text-2xl">Posts</h1>
            </Container>
            <Container>
                <p className="my-16 bg-blue-300 p-4 rounded-xl">This is the Dashboard Page of Auraverse and can only be viewed by registered users.</p>
            </Container>
            <Container className="row py-3">
                <Container className="col-md-8">
                    </Container>
                <Container className="col-md-4">Sidebar</Container>
            </Container>
        </Container>
    );
};

export default Dashboard;
