# Project Content — US Immigration Law Firms Data Collection & Scraping

**Status:** Updated draft — sample dataset approved  
**Version:** 1.1

## Project title

**US Immigration Law Firms Data Collection & Scraping**

## Short description

Collected and structured business information for a client-requested dataset of 500 US immigration law firms using Sulekha and Google Maps. The workflow combined semi-automated Python scraping, MapsScraper-based collection, data integration, and manual review of information that remained unconfirmed.

## Project context

The client requested a structured list of 500 US immigration law firms. Business information was collected from online directories and organized into a spreadsheet for the client's downstream use.

## Data collection

### Sulekha
Approximately 500 records were collected from Sulekha using Python with Requests and BeautifulSoup. Collection was organized by location. CAPTCHA challenges appeared when opening new locations, so the workflow used a semi-automated approach with human interaction where necessary.

### Google Maps
A further 438 records were collected from Google Maps using MapsScraper as a supplementary source.

## Data integration and manual review

Information from the two sources was integrated and compared. Remaining information that could not be confirmed through the collected sources was reviewed and completed manually where possible. The final client deliverable was prepared to meet the requested target of 500 records.

The source collection volumes are not additive final totals. The 500-record final target must not be presented as 938 unique firms.

## Dataset structure

The supplied sample workbook contains 10 sample records per worksheet and 15 columns:
- Firm Name
- Street Address
- City
- State
- ZIP Code
- Phone
- Website
- Practice Areas
- Subcategories
- Google Rating
- Review Count
- Source
- Last Verified
- Firm URL
- Notes

The workbook contains two worksheets with the same sample records. It is an illustrative sample, not the full client dataset.

## Technical stack

Confirmed:
- Python
- Requests
- BeautifulSoup
- Pandas
- MapsScraper
- Microsoft Excel

Do not list Selenium or Scrapy as tools used in this project unless additional evidence confirms their use.

## Outcome

- Client-requested final dataset: 500 records.
- Source collection: approximately 500 Sulekha records and 438 Google Maps records.
- Processing: data integration and manual review/completion of unconfirmed information.
- Portfolio evidence: a 10-record sample workbook only; the full client dataset remains confidential.

## Suggested case-study narrative

**Challenge:** Collecting consistent business information across multiple directories while handling CAPTCHA friction and incomplete or unconfirmed fields.

**Approach:** Use semi-automated Python scraping for Sulekha, collect supplementary Google Maps records with MapsScraper, integrate the information, and manually review remaining unconfirmed details.

**Outcome:** Prepare a structured 500-record final dataset aligned with the client's request, while retaining only a small sample for portfolio demonstration.

## Content boundaries

Do not claim:
- 938 unique or final firms.
- 100% accuracy or completeness.
- Fully automated end-to-end scraping.
- A verified deduplication rate or exact count of manually completed fields.
- Client business impact or conversion outcomes not provided by the client.
- That the sample workbook contains all 500 final records.
