# PowerShell Script to Download Images from The French Goat Website
# This script downloads all identified images to the training material folder

$outputFolder = "c:\Users\TERRYHOLLIDAY\Dropbox\goat game\Server Training\public\french_goat_images"

# Create output folder if it doesn't exist
if (-not (Test-Path $outputFolder)) {
    New-Item -ItemType Directory -Path $outputFolder -Force
}

# All image URLs discovered from www.TheFrenchGoat.com
$imageUrls = @(
    "https://images.squarespace-cdn.com/content/v1/5fceb8d51259ed20d701527c/1662572008729-DWGYBJK01MK90FMFTL6J/image-asset.jpeg",
    "https://images.squarespace-cdn.com/content/v1/5fceb8d51259ed20d701527c/1662250684863-9BONGL22K8MO68Q7W3BQ/image-asset.jpeg",
    "https://images.squarespace-cdn.com/content/v1/5fceb8d51259ed20d701527c/1661649556822-81CIOJ418GES2P2GQH9P/image-asset.jpeg",
    "https://images.squarespace-cdn.com/content/v1/5fceb8d51259ed20d701527c/1661635252148-OUIX34C7SSLIHMGT7XTE/image-asset.jpeg",
    "https://images.squarespace-cdn.com/content/v1/5fceb8d51259ed20d701527c/1661478254335-ARGAAC8G7DXQTX0638BA/image-asset.jpeg",
    "https://images.squarespace-cdn.com/content/v1/5fceb8d51259ed20d701527c/1661478254335-8QDU6AQKN1JNN9DPYTLW/image-asset.jpeg",
    "https://images.squarespace-cdn.com/content/v1/5fceb8d51259ed20d701527c/1661471066299-J63WLFL7UXG8S0X9PDJE/image-asset.jpeg",
    "https://images.squarespace-cdn.com/content/v1/5fceb8d51259ed20d701527c/1661471066299-RT7QQE1L5ZLX9FCFO3AB/image-asset.jpeg",
    "https://images.squarespace-cdn.com/content/v1/5fceb8d51259ed20d701527c/1661471066299-0E1731NQ8A3JNHDTOGN2/image-asset.jpeg",
    "https://images.squarespace-cdn.com/content/v1/5fceb8d51259ed20d701527c/1661471066299-H1I30PXBYQ4KGRH6TG5J/image-asset.jpeg",
    "https://images.squarespace-cdn.com/content/v1/5fceb8d51259ed20d701527c/1661378986300-ICPTOAHBVFTFREO6B93R/image-asset.jpeg",
    "https://images.squarespace-cdn.com/content/v1/5fceb8d51259ed20d701527c/1657848452827-AGG3C244BAI58UAPF3OO/image-asset.jpeg"
)

# Image descriptions for naming (from alt text)
$imageDescriptions = @(
    "wine_wednesday_50_off_bottles",
    "smoked_trout_dip_braised_pork_collar",
    "duckhorn_wine_dinner_tasting",
    "marcel_smooth_ambler_whiskey",
    "seared_rib_eye_pommes_anna",
    "ember_roasted_pork_loin",
    "seared_scallop_pea_puree",
    "watermelon_gazpacho_lobster",
    "tuna_tomato_tartar_duck_rillettes",
    "seven_year_anniversary_celebration",
    "california_halibut_farro",
    "marcel_mascot_bastille_day"
)

Write-Host "Starting download of $($imageUrls.Count) images from The French Goat website..."
Write-Host "Output folder: $outputFolder"
Write-Host ""

$index = 0
foreach ($url in $imageUrls) {
    $description = $imageDescriptions[$index]
    $filename = "{0:D2}_{1}.jpeg" -f ($index + 1), $description
    $outputPath = Join-Path $outputFolder $filename
    
    Write-Host "Downloading ($($index + 1)/$($imageUrls.Count)): $filename"
    
    try {
        Invoke-WebRequest -Uri $url -OutFile $outputPath -UseBasicParsing
        Write-Host "  -> Saved successfully" -ForegroundColor Green
    }
    catch {
        Write-Host "  -> Failed: $($_.Exception.Message)" -ForegroundColor Red
    }
    
    $index++
}

Write-Host ""
Write-Host "Download complete! Images saved to: $outputFolder"
Write-Host "Total images: $($imageUrls.Count)"
