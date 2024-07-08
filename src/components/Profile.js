import React, { useContext, useState, useEffect } from 'react';
import { FormContext } from './Register';

export default function Profile() {
    const [localDB, setDB] = useContext(FormContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [loggedInUser, setLoggedInUser] = useState(null);

    useEffect(() => {
        // Simulating a logged-in user
        const user = localDB.find(user => user.Name === 'YourUsername'); // Replace with actual login logic
        setLoggedInUser(user);
    }, [localDB]);

    const handlePasswordChange = () => {
        setDB(prevDB => 
            prevDB.map(user => 
                user.Name === username && user.Password === password
                    ? { ...user, Password: newPassword }
                    : user
            )
        );
        setPassword('');
        setNewPassword('');
    };

    return (
        <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h1 className="text-xl text-center font-bold font-mono">Profile</h1>
            {loggedInUser ? (
                <>
                    <h2 className="text-xl text-center font-bold mt-4">Hii {loggedInUser.Name}</h2>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Current Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                            id="password"
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder="Enter your current password"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="newPassword">
                            New Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                            id="newPassword"
                            type="password"
                            value={newPassword}
                            onChange={e => setNewPassword(e.target.value)}
                            placeholder="Enter your new password"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={handlePasswordChange}
                        >
                            Change Password
                        </button>
                    </div>
                </>
            ) : (
                <h2 className="text-xl text-center font-bold mt-4">No user logged in</h2>
            )}
        </div>
    );
}
