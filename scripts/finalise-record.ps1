# Intentia Assurance — Internal Finalisation Script
# Operator convenience only. Never client-facing.

# Get current directory
$caseDir = Get-Location

# Find FINAL PDF
$pdf = Get-ChildItem -Path $caseDir -Recurse -Filter "*_FINAL.pdf"

if ($pdf.Count -ne 1) {
    Write-Error "Expected exactly one FINAL PDF. Found $($pdf.Count)."
    exit 1
}

$pdfPath = $pdf.FullName

# Generate SHA-256 hash
$hashResult = Get-FileHash -Path $pdfPath -Algorithm SHA256
$hashValue = $hashResult.Hash

# Create metadata.txt
$metadataPath = Join-Path $caseDir "metadata.txt"

$metadataContent = @"
Reference ID: $(Split-Path $caseDir -Leaf)
Final PDF: $($pdf.Name)
SHA-256: $hashValue
Hash generated: $(Get-Date -Format "yyyy-MM-dd HH:mm:ss UTC")
"@

$metadataContent | Out-File -FilePath $metadataPath -Encoding UTF8

# Output confirmation
Write-Host "FINAL PDF verified:"
Write-Host $pdf.Name
Write-Host "SHA-256:"
Write-Host $hashValue
Write-Host "metadata.txt written successfully."


