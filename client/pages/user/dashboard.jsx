import { useContext } from "react";
import { UserContext } from "../../context";
import CreatePostForm from "../../components/forms/CreatePostForm";

const Dashboard = () => {
const [state, setState] = useContext(UserContext);

return (
    <div className="bg-gray-100 min-h-screen">
    
    {/* Header */}
    <header className="bg-indigo-600 text-white">
        <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold tracking-tight">Dashboard</h1>
        </div>
    </header>
    
    {/* Main Content */}
    <main className="container mx-auto px-4 py-8">
    
        {/* Welcome Message */}
        <section className="mb-12">
        <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Welcome to Auraverse!</h2>
            <p className="text-gray-700">This is your dashboard, where you can share your thoughts and connect with others.</p>
        </div>
        </section>
        
        {/* Create Post Form */}
        <section className="mb-12">
        <CreatePostForm />
        </section>
        
        {/* Posts Section */}
        <section>
        <h2 className="text-3xl font-bold mb-8">Your Posts</h2>
        <div className="grid gap-6 lg:grid-cols-3">
        
            {/* Render Posts Here */}
            
        </div>
        </section>
        
    </main>
    
    </div>
);
};

export default Dashboard;