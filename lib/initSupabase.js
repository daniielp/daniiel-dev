import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
    "https://txxeahspgrnrpuioqjqc.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMTc5ODExMywiZXhwIjoxOTM3Mzc0MTEzfQ.OFGTPHkhT2MWFWHjaBBdL7VWkTFeQjYQIa6T9EP3VSM"
)