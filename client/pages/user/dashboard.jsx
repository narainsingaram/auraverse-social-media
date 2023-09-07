import React, { useContext, useState } from "react";
import { UserContext } from "../../context";
import CreatePostForm from "../../components/forms/CreatePostForm";
import { useRouter, userRouter } from 'next/router';
import axios from 'axios';

const Dashboard = () => {
    const [state, setState] = useContext(UserContext);

    const [content, setContent] = useState("");

    const router = useRouter();

    const postSubmit = async (e) => {
        e.preventDefault()
        // console.log("POST =>", content);
        try {
            const {data} = await axios.post('/create-post', { content });
            console.log("CREATE POST RESPONSE =>", data);
        }
        catch (err) {
            console.log("ERROR =>", err);
        }
    }

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
            <CreatePostForm 
                content={content} 
                setContent={setContent} 
                postSubmit={postSubmit}
            />
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