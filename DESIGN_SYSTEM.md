# Sajj design system

The website uses one responsive hierarchy defined in `src/app/globals.css`.

## Typography

| Role | Token | Weight | Use |
| --- | --- | --- | --- |
| Display | `--text-display` | 700 | Homepage and inner-page H1 headings |
| Heading | `--text-heading` | 700 | Main section H2 headings |
| Subheading | `--text-subheading` | 700 | Editorial and feature headings |
| Card title | `--text-card-title` | 600 | Cards, articles and process steps |
| Lead | `--text-lead` | 400 | Introductory and supporting copy |
| Body | `--text-body` | 400 | Standard paragraphs and controls |
| Small | `--text-small` | 500–600 | Navigation, metadata and links |
| Caption | `--text-caption` | 600 | Eyebrows, numbers and form labels |

Headings use tight line-height and tracking. Body copy uses `--leading-body` for readability. Medium weight is used for navigation and quiet emphasis; semibold is used for actions and card headings; bold is reserved for major hierarchy.

## Spacing

Spacing follows a 4px rhythm through `--space-1` to `--space-32`. Sections use `--section-space`, content uses `--container`, and horizontal breathing room uses `--gutter`. These three values respond automatically at tablet and mobile sizes.

## Surfaces

Use `--radius-sm`, `--radius-md`, `--radius-lg` and `--radius-pill` rather than one-off radii. Standard cards use `--shadow-card`; interactive cards use `--shadow-card-hover`.

## Rules

- Use one H1 per page.
- Use H2 for page sections and H3 for cards or subsections.
- Use bold only for headings and key metrics.
- Use semibold for buttons, links, labels and card titles.
- Keep body copy regular weight; use colour and spacing for secondary hierarchy.
- Use spacing tokens for new layout work instead of arbitrary pixel values.
