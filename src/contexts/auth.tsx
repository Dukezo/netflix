import React, { useContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../api/firebase';
import { User } from '../types';

interface ContextProps {
  user?: User;
  signup(email: string, password: string): Promise<void>;
  login(email: string, password: string): Promise<void>;
  logout(): Promise<void>;
}

const AuthContext = React.createContext<ContextProps | undefined>(undefined);

const loadUser = () => {
  try {
    const jsonUser = localStorage.getItem('user');
    return jsonUser ? (JSON.parse(jsonUser) as User) : undefined;
  } catch (err) {
    console.error(err);
    return undefined;
  }
};

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | undefined>(loadUser);

  useEffect(() => {
    if (user) localStorage.setItem('user', JSON.stringify(user));
    else localStorage.removeItem('user');
  }, [user]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (!authUser) return setUser(undefined);

      setUser({
        email: authUser.email || 'Anonymous',
      });
    });

    return unsubscribe;
  }, []);

  const signup = async (email: string, password: string) => {
    await createUserWithEmailAndPassword(auth, email, password);
  };

  const login = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    await auth.signOut();
  };

  const value: ContextProps = {
    user,
    signup,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) throw Error('useAuth can only be used within an AuthProvider.');

  return context;
};
