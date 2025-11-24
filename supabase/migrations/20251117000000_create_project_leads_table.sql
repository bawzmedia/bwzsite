-- Create project_leads table for guarantee section submissions
CREATE TABLE IF NOT EXISTS project_leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  business_name TEXT NOT NULL,
  contact_info TEXT NOT NULL,
  industry TEXT NOT NULL,
  marketing_problem TEXT NOT NULL,
  budget INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()) NOT NULL
);

-- Add RLS (Row Level Security) policies
ALTER TABLE project_leads ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (for form submissions)
CREATE POLICY "Allow anonymous inserts" ON project_leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users to view all submissions
CREATE POLICY "Allow authenticated users to view" ON project_leads
  FOR SELECT
  TO authenticated
  USING (true);

