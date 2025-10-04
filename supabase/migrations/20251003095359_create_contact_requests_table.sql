/*
  # Contact Requests and Booking System

  1. New Tables
    - `contact_requests`
      - `id` (uuid, primary key) - Unique identifier for each request
      - `name` (text) - Full name of the requester
      - `email` (text) - Email address for communication
      - `organization` (text, optional) - Organization/company name
      - `request_type` (text) - Type of request: consultation, speaking, collaboration, general
      - `message` (text) - Detailed message from the requester
      - `status` (text) - Request status: new, reviewed, responded, completed
      - `created_at` (timestamptz) - Timestamp of request submission
      - `updated_at` (timestamptz) - Last update timestamp

  2. Security
    - Enable RLS on `contact_requests` table
    - Add policy for public insert (anyone can submit a request)
    - No public read access (admin-only access for viewing requests)

  3. Important Notes
    - This table stores all contact form submissions and booking requests
    - Request types categorize inquiries for easier management
    - Status tracking enables workflow management
    - No authentication required for submissions (public form)
*/

CREATE TABLE IF NOT EXISTS contact_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  organization text DEFAULT '',
  request_type text NOT NULL CHECK (request_type IN ('consultation', 'speaking', 'collaboration', 'general')),
  message text NOT NULL,
  status text DEFAULT 'new' CHECK (status IN ('new', 'reviewed', 'responded', 'completed')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE contact_requests ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can insert a contact request (public form submission)
CREATE POLICY "Anyone can submit contact requests"
  ON contact_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policy: Only authenticated users (admin) can view requests
CREATE POLICY "Authenticated users can view all requests"
  ON contact_requests
  FOR SELECT
  TO authenticated
  USING (true);

-- Policy: Only authenticated users (admin) can update request status
CREATE POLICY "Authenticated users can update requests"
  ON contact_requests
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create index for faster queries on created_at and status
CREATE INDEX IF NOT EXISTS idx_contact_requests_created_at ON contact_requests(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_requests_status ON contact_requests(status);
