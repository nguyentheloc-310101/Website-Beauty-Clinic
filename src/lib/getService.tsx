import { supabase_website } from '@/services/supabase';

const getServiceBySlug = async (slug: string) => {
  const { data, error } = await supabase_website
    .from('services')
    .select('*,doctors(*), others!others_other_fkey(*)')
    .eq('slug', slug);
  return { data, error };
};
export { getServiceBySlug };
