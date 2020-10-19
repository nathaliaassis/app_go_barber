import React, { createContext, useCallback, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';

interface StorageData {
  token: string;
  user: object;
}

interface SignInCredentials {
  email: string;
  password: string;
}
interface AuthContextData {
  user: object;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}
const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);
export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<StorageData>({} as StorageData);

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const [token, user] = await AsyncStorage.multiGet([
        '@GoBarber:token',
        '@GoBarber:user'
      ]);

      if (user[1] && token[1]) {
        setData({ user: JSON.parse(user[1]), token: token[1] });
      }

    }
    loadStorageData();
  }, []);

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email,
      password
    })
    const { token, user } = response.data;

    await AsyncStorage.multiSet([
      ['@GoBarber:token', token],
      ['@GoBarber:user', JSON.stringify(user)]
    ])

    setData({
      token, user
    })
  }, []);

  const signOut = useCallback(
    async () => {
      await AsyncStorage.multiRemove([
        '@GoBarber:user',
        '@GoBarber:token',
      ]);

      setData({} as StorageData);
    }, [])

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
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

