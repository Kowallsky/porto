# Data Integrity Notes — US Immigration Law Firms Scraping

**Status:** Updated draft — sample dataset approved for portfolio evidence  
**Version:** 1.1

## 1. Confirmed project facts

- The client requested a final dataset of 500 records.
- Approximately 500 records were collected from Sulekha.
- 438 additional records were collected from Google Maps using MapsScraper.
- Sulekha collection used a semi-automated Python workflow. CAPTCHA challenges appeared when navigating to new locations, so human interaction was used where needed.
- The collected sources were used for data integration; information that remained unconfirmed was handled manually.
- The client-facing final deliverable was a structured dataset. The complete client dataset is not to be published in the portfolio.
- The user has supplied `sample-final-dataset.xlsx` as the approved sample artifact for the portfolio handoff.

## 2. Sample workbook inspection

The supplied sample workbook contains two worksheets: `Sample_10_Firms` and `Batch 1`. Each worksheet contains 10 non-empty data rows and the same 15-column schema:

1. Firm Name
2. Street Address
3. City
4. State
5. ZIP Code
6. Phone
7. Website
8. Practice Areas
9. Subcategories
10. Google Rating
11. Review Count
12. Source
13. Last Verified
14. Firm URL
15. Notes

The workbook is a sample, not the complete 500-record client dataset. The two sheets repeat the same 10 sample records; do not count them as 20 unique records.

## 3. Source count distinction

| Source | Collection volume | Meaning |
|---|---:|---|
| Sulekha | Approximately 500 | Source collection volume |
| Google Maps | 438 | Supplementary source collection volume |
| Final client target | 500 | Requested final deliverable size |

Do not add the source volumes and report 938 as the final dataset size or unique-firm count. The supplied sample workbook shows `Sulekha + Google Maps` in its Source field for the example record, but it does not establish the source contribution or matching rate for the entire final dataset.

## 4. Source and method boundaries

### Sulekha
The delivered notebook archive supports use of Python, Requests, BeautifulSoup, and Pandas for the Sulekha workflow. CAPTCHA challenges and the semi-automated approach are based on the user's clarification.

### Google Maps
MapsScraper use and the 438-record collection volume are based on the user's clarification. The MapsScraper implementation itself was not independently inspected in the delivered archive.

### Manual completion
Manual review/completion of unconfirmed information is based on the user's clarification. The exact number of manually completed records or fields is unknown.

## 5. Publication and confidentiality rules

- Use only the supplied 10-record sample workbook or sanitized screenshots derived from it as portfolio evidence.
- Do not publish the complete 500-record client dataset.
- Before making screenshots public, consider masking phone numbers and any contact details that the client has not authorized for republication.
- Do not claim 100% accuracy, a verified deduplication rate, a specific manual-completion count, or a 938-record final dataset.
- Clearly label the workbook as a sample dataset, not the full client deliverable.
- Do not expose client names, private instructions, credentials, cookies, or private file paths.
