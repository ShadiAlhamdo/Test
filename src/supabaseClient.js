
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = "https://phhrzwvqyrovvnstbzoa.supabase.co"
const supabaseKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBoaHJ6d3ZxeXJvdnZuc3Riem9hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU0NjI1OTIsImV4cCI6MjA0MTAzODU5Mn0.J_o5BTRaGT5YFIxn6FJ5CIbVhkmc7Cmz2Ma_-axUoTY"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;