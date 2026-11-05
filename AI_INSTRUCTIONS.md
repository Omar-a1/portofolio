# AI Instructions & Figma Design Specifications

This document outlines the design structure, measurements, and tokens extracted directly from the Figma frames (`MacBook Air - 1`, `MacBook Air - 2`, `MacBook Air - 3`) in file `oTGdQEWVtJGJ8wJRk6mBJe`. Any future AI or developer must follow these exact specifications.

---

## 1. Structure & Sections (Exact Figma Alignment)

### 1.1 Hero Section (`MacBook Air - 1`)
- **Background:** Exact linear vertical gradient:
  - `linear-gradient(180deg, #59018C 0%, #FFCD75 100%)`
- **Floating Nav Bar:**
  - Container: width `787px`, height `60px`, background `#0D0D0D`, border-radius `30px`.
  - Buttons: width `161px`, height `37px`, border-radius `18.5px`.
  - Inactive button style: background `rgba(217, 217, 217, 0.07)`, text `white`, font size `12px`.
  - Active button style: background `#D9D9D9`, text `#000000`, font size `12px`, font weight bold.
- **Hero Image:**
  - Width `233px`, height `310px`.
  - Corner radius: `70px`.
  - Stroke: `1px solid #F5F5F5` (white border).
- **Hero Typography:**
  - Headline: `اهلا, انا عمر` (Bold 64px, White, Cairo / KO Lab).
  - Subtitle: `مبرمج ومصمم مواقع` (Bold 12px, White, Cairo / KO Sans).

### 1.2 About Section (`. عني .`)
- **Title:** `. عني .` (Bold 48px, White, Centered).
- **Text Box:** Width `940px`, font size `13px` - `14px`, line height `1.8`, font weight bold (700), Cairo.
- **Background:** `#242424`.

### 1.3 Section Separator Line
- **Figma layer:** `Rectangle 11`.
- **Dimensions:** Full-width (`100%`), height `5px`, solid `#FFFFFF`.

### 1.4 Projects Section (`. مشاريعي .` - `MacBook Air - 2`)
- **Title:** `. مشاريعي .` (Bold 40px, White, Centered).
- **Card Specifications (All 3 Cards):**
  - Dimensions: width `317px`, height `320px`.
  - Background: `#303030`.
  - Border radius: `36px`.
  - Stroke / Border: `1px solid #474747`.
- **Card Images:**
  - Card 1 (`مشروع ذكّر`): `160px × 160px`, border-radius `28px`, stroke `1px solid #A9A9A9`.
  - Card 2 (`مشروع تنظيم عملاء`): `302px × 160px`, border-radius `28px`, stroke `1px solid #A9A9A9`.
  - Card 3 (`مشروع انجز`): `302px × 160px`, border-radius `28px`, stroke `1px solid #A9A9A9`.
- **Card Text:**
  - Title: Bold 14px, White.
  - Category: Bold 10px, `#C4C4C4`.
  - URL Link: Bold 10px, White.

### 1.5 Contact Section (`. تواصل .` - `MacBook Air - 3`)
- **Title:** `. تواصل .` (Bold 48px, White, Centered).
- **Subtitle:** `يمكنك التواصل معي عن طريق الطرق الاتية :` (Bold 14px, White, Centered).
- **Contact Pills:**
  - Dimensions: width `310px`, height `50px`.
  - Background: `#303030`.
  - Border radius: `9px`.
  - Layout: Flex row with icon on one side and contact detail on the other.

### 1.6 Footer (`MacBook Air - 3`)
- **Figma Layer:** `Rectangle 13`.
- **Background Gradient:** `linear-gradient(180deg, #59018C 0%, #8300CF 100%)`.
- **Footer Links (`. الصفحات .`):**
  - Title: Bold 12px, White.
  - Links: الرئيسية, عني, مشاريعي, تواصل (Bold 12px, White).
- **Footer Contact Pills:**
  - Width `189px`, height `35px`, background `#303030`, border radius `9px`.
- **Copyright Notice:**
  - `All rights reserved © Omar Abdallah` (Bold 12px, White, Centered).

---

## 2. Maintenance Rules
- Do NOT alter colors, border radii, or layout back into generic templates.
- Preserve the direct values extracted from Figma.
- Mobile responsiveness wraps the cards and pills cleanly while preserving the exact card proportions (`317x320`).
