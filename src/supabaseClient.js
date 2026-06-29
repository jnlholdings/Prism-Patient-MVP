import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mzlipornhboueibigulh.supabase.co'
const supabaseKey = 'sb_publishable_d1PUrl8PCaCqFXTW0J5c9g_34LWEl-r'

export const supabase = createClient(supabaseUrl, supabaseKey)