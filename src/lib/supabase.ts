import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const key = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

export const isSupabaseConfigured = Boolean(url && key);

export const supabase: SupabaseClient | null = isSupabaseConfigured
  ? createClient(url!, key!)
  : null;

export interface ContactPayload {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
}

export async function submitContact(payload: ContactPayload): Promise<void> {
  if (!supabase) {
    throw new Error('Contact backend is not configured yet.');
  }
  // DB uses snake_case: project_type (see contact_messages table)
  const row = {
    name: payload.name,
    email: payload.email,
    project_type: payload.projectType,
    budget: payload.budget,
    message: payload.message,
  };
  const { error } = await supabase.from('contact_messages').insert(row);
  if (error) throw error;
}
