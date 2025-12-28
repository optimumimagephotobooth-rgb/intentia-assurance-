-- Intentia Assurance Database Schema
-- Supabase PostgreSQL

-- Cases table
-- Stores each training programme case
CREATE TABLE cases (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    
    -- Programme identification
    programme_name TEXT NOT NULL,
    organisation_name TEXT NOT NULL,
    programme_start_date DATE,
    programme_end_date DATE,
    duration_hours INTEGER,
    participant_count INTEGER,
    participant_description TEXT,
    delivery_method TEXT,
    
    -- Training intent
    intended_purpose TEXT,
    intended_outcomes TEXT,
    objectives TEXT,
    
    -- Explicit exclusions
    explicit_exclusions TEXT,
    
    -- Delivery details
    delivery_format TEXT,
    session_count INTEGER,
    session_details JSONB,
    materials_delivered TEXT,
    
    -- Status
    status TEXT NOT NULL DEFAULT 'intake', -- intake, review, frozen, generated, delivered
    client_contact_name TEXT,
    client_contact_email TEXT,
    client_contact_title TEXT,
    
    -- Freeze information
    freeze_date TIMESTAMPTZ,
    freeze_confirmed_by TEXT,
    
    -- Output
    pdf_hash TEXT,
    pdf_generated_at TIMESTAMPTZ,
    pdf_delivered_at TIMESTAMPTZ,
    
    -- Metadata
    notes TEXT
);

-- Freeze snapshot table
-- Stores immutable snapshot at freeze point
CREATE TABLE freeze_snapshot (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    
    case_id UUID NOT NULL REFERENCES cases(id) ON DELETE CASCADE,
    
    -- Complete snapshot of case data at freeze
    snapshot_data JSONB NOT NULL,
    
    -- Freeze metadata
    freeze_timestamp TIMESTAMPTZ NOT NULL,
    frozen_by TEXT NOT NULL,
    freeze_confirmation_method TEXT, -- email, signature, etc.
    
    -- Integrity
    snapshot_hash TEXT -- hash of snapshot_data for verification
);

-- Outputs table
-- Stores generated PDFs and related files
CREATE TABLE outputs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    
    case_id UUID NOT NULL REFERENCES cases(id) ON DELETE CASCADE,
    freeze_snapshot_id UUID REFERENCES freeze_snapshot(id),
    
    -- File information
    file_type TEXT NOT NULL, -- pdf, zip, etc.
    file_name TEXT NOT NULL,
    file_size_bytes BIGINT,
    storage_path TEXT NOT NULL, -- path in storage bucket
    
    -- Integrity
    sha256_hash TEXT NOT NULL,
    
    -- Generation metadata
    generated_at TIMESTAMPTZ NOT NULL,
    generated_by TEXT, -- system or operator
    
    -- Delivery
    delivered_at TIMESTAMPTZ,
    delivery_method TEXT, -- email, download, etc.
    delivery_recipient TEXT
);

-- Storage buckets (configure in Supabase Storage)
-- intake_files: For client-provided materials
-- outputs: For generated PDFs and ZIP files

-- Indexes
CREATE INDEX idx_cases_status ON cases(status);
CREATE INDEX idx_cases_organisation ON cases(organisation_name);
CREATE INDEX idx_cases_freeze_date ON cases(freeze_date);
CREATE INDEX idx_freeze_snapshot_case ON freeze_snapshot(case_id);
CREATE INDEX idx_outputs_case ON outputs(case_id);
CREATE INDEX idx_outputs_hash ON outputs(sha256_hash);

-- Updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_cases_updated_at BEFORE UPDATE ON cases
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();


