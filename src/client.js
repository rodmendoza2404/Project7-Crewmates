import { createClient } from '@supabase/supabase-js';

const URL = 'https://baamjxlkvqvfjralajqh.supabase.co';   
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJhYW1qeGxrdnF2ZmpyYWxhanFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUzODYzNzksImV4cCI6MjA2MDk2MjM3OX0.SGmTTccHhiVrEjR1GzN3UVGQ9Zku8Z_xRr17qOOl0xA';  

export const supabase = createClient(URL, API_KEY);