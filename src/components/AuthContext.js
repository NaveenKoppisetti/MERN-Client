import React, { createContext, useState } from 'react';

const AuthContext = createContext({
  currentUser: null,
  updatePassword: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  // Implement updatePassword logic here (interaction with backend)
  const updatePassword = async (newPassword) => {
    // ... your password update logic here
    setCurrentUser({ username: 'updatedUsername' }); // Update user info (example)
  };

  return (
    <AuthContext.Provider value={{ currentUser, updatePassword }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
