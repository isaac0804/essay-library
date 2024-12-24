// supabaseContext.tsx
import React, { createContext, useContext } from 'react';
import { SupabaseClient } from '@supabase/supabase-js';

interface SupabaseContextProps {
  supabase: SupabaseClient | null;
}

const SupabaseContext = createContext<SupabaseContextProps>({ supabase: null });

export const useSupabase = () => {
  const context = useContext(SupabaseContext);
  if (!context) {
    throw new Error('useSupabase must be used within a SupabaseProvider');
  }
  return context;
};

export default SupabaseContext;