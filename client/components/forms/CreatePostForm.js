import { Avatar, AvatarIcon } from "@nextui-org/react";

const CreatePostForm = () => {
return (
    <div className="bg-white rounded-lg shadow-lg p-4">
    <div className="flex items-center space-x-4 pb-4">
        <Avatar
        src="https://i.pravatar.cc/150?u=a04258114e29026302d"
        size="lg"
        />
        <div>
        <span className="text-lg font-semibold">John Doe</span>
        <br />
        <span className="text-gray-500">1 hour ago</span>
        </div>
    </div>
    <form className="pb-4">
        <textarea
        className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring focus:ring-blue-400"
        rows="4"
        placeholder="What's on your mind?"
        ></textarea>
    </form>
    <div className="flex justify-end">
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">
        Post
        </button>
    </div>
    </div>
);
};

export default CreatePostForm;
