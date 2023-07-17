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
import { SyncOutlined } from '@ant-design/icons';

const AuthForm = ({
    handleSubmit,
    name, setName,
    email, setEmail, 
    password, setPassword, 
    secret, setSecret, 
    loading,
}) => (
    <form onSubmit={handleSubmit} class="mt-8 grid grid-cols-6 gap-6">
    <div class="col-span-6">
        <Input 
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            label="Full Name" 
            placeholder="Guillermo Rauch" 
            fullWidth
        />
    </div>

    <div class="col-span-6 sm:col-span-3">
        <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            clearable
            shadow={false}
            type="email"
            label="Email"
            placeholder="somebody@example.com"
            fullWidth
        />
    </div>

    <div class="col-span-6 sm:col-span-3">
        <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            clearable
            shadow={false}
            type="password"
            label="Password"
            placeholder="At least 8 characters"
            fullWidth
        />
    </div>


    <div class="col-span-6 sm:col-span-3">
            <select
                class="appearance-none block w-full bg-gray-300 rounded-xl text-gray-400 px-4 py-2 placeholder-opacity-50 focus:outline-none focus:bg-opacity-30 focus:placeholder-opacity-70"
                >
                <option>What is your favorite artist?</option>
                <option>What is your mother's name?</option>
                <option>Are you gay or not?</option>
            </select>
    </div>

    <div class="col-span-6 sm:col-span-3">
        <Input 
            type="text"
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
            placeholder="Answer the Question You've Selected Above" 
            fullWidth
        />
    </div>

    <div class="col-span-6">
        <label for="MarketingAccept" class="flex gap-4">
        <input
            type="checkbox"
            id="MarketingAccept"
            name="marketing_accept"
            class="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
        />

        <span class="text-sm text-gray-700">
            I want to receive emails about events, product updates and
            company announcements.
        </span>
        </label>
    </div>

    <div class="col-span-6">
        <p class="text-sm text-gray-500">
        By creating an account, you agree to our
        <a href="#" class="text-gray-700 underline">
            terms and conditions
        </a>
        and
        <a href="#" class="text-gray-700 underline">privacy policy</a>.
        </p>
    </div>

    <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
        <Button disabled={!name || !email || !password || !secret} type="submit" shadow color="primary" auto>
            {loading ? <SyncOutlined spin className="px-2 py-1"/>: ""}
            Create an account
        </Button>

        <p class="mt-4 text-sm text-gray-500 sm:mt-0">
            Already have an account?
            <Link href="/login">
                Log in
            </Link>
        </p>
    </div>
    </form>
)

export default AuthForm;