import { createContext } from 'react';
interface ContextType {
    state: {
        type: string[];
        payload: string[];
        user: string[]
    };
    dispatch: React.Dispatch<{ user: string, type: string; payload: unknown }>;
}
export const AuthContext = createContext<ContextType | null>(null);