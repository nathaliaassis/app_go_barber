import React, { createContext, useCallback, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';

interface User {
  id: string;
  name: string;
  email: string;
  avatar_url: string;
}
interface StorageData {
  token: string;
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}
interface AuthContextData {
  user: User;
  loading: boolean;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  updateUser(user: User): Promise<void>;
}
const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);
export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<StorageData>({} as StorageData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const [token, user] = await AsyncStorage.multiGet([
        '@GoBarber:token',
        '@GoBarber:user'
      ]);

      if (user[1] && token[1]) {
        setData({ user: JSON.parse(user[1]), token: token[1] });
        api.defaults.headers.authorization = `Bearer ${token[1]}`;
      }

      setLoading(false);
    }
    loadStorageData();
  }, []);

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/sessions', {
      email,
      password
    })

    const { token, user } = response.data;

    await AsyncStorage.multiSet([
      ['@GoBarber:token', token],
      ['@GoBarber:user', JSON.stringify(user)]
    ])
    api.defaults.headers.authorization = `Bearer ${token}`;
    setData({
      token, user
    })
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove([
      '@GoBarber:user',
      '@GoBarber:token',
    ]);

    setData({} as StorageData);
  }, []);

  const updateUser = useCallback(async (user: User) => {
    await AsyncStorage.setItem('@GoBarber:user', JSON.stringify(user));

    setData({
      token: data.token,
      user
    });
  }, [setData, data.token]);

  return (
    <AuthContext.Provider value={{ user: data.user, loading, signIn, signOut, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('UusAuth must be used within a AuthProvider');
  }

  return context;
}

