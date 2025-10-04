import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface ContactRequest {
  name: string;
  email: string;
  organization?: string;
  request_type: 'consultation' | 'speaking' | 'collaboration' | 'general';
  message: string;
}

export async function submitContactRequest(data: ContactRequest) {
  const { data: result, error } = await supabase
    .from('contact_requests')
    .insert([data])
    .select()
    .maybeSingle();

  if (error) throw error;
  return result;
}
