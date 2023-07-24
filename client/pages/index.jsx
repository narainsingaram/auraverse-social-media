import { useContext } from 'react';
import { UserContext } from '../context';

const Home = () => {
const [state, setState] = useContext(UserContext);


return (
    <main
    className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
    >
        <h1 className="text-3xl">
            THIS IS THE HOME PAGE. ADD /REGISTER TO THE END OF THE URL TO RELOCATE TO THE REGISTER PAGE
        </h1>
        {JSON.stringify(state)}
    </main>
);
};

export default Home;
