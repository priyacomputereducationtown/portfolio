# Priya Computer Education - QR Landing Page

A modern, mobile-first landing page created with Next.js 14, React, Tailwind CSS, and Serverless API routes.

## Features

- **Mobile-First Design**: Optimized for smartphones with responsive layouts.
- **Fast Performance**: Built on Next.js App Router for speed and SEO.
- **Course Catalog**: Detailed list of courses with search functionality.
- **Student Registration**: Integrated form with validation and serverless API submission.
- **Contact Integration**: Click-to-call, WhatsApp chat, and Google Maps.
- **Modern UI**: Clean design with smooth interactions and animations.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Hosting**: Optimized for Vercel

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/priya-computer-education.git
    cd priya_computer
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

1.  Push your code to a Git repository (GitHub/GitLab/Bitbucket).
2.  Import the project into Vercel.
3.  Vercel will automatically detect Next.js and configure the build settings.
4.  Click **Deploy**.

## Google Sheets Integration

To save registration data to Google Sheets:

1.  Create a Google Sheet and add columns: `Date`, `Name`, `Phone`, `Course`, `Timing`.
2.  Open **Extensions > Apps Script**.
3.  Paste the following code:
    ```javascript
    function doPost(e) {
      const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
      const data = JSON.parse(e.postData.contents);
      sheet.appendRow([data.date, data.name, data.phone, data.course, data.timing]);
      return ContentService.createTextOutput(JSON.stringify({ "result": "success" })).setMimeType(ContentService.MimeType.JSON);
    }
    ```
4.  **Deploy** as a Web App:
    - Execute as: **Me**
    - Who has access: **Anyone**
5.  Copy the **Web App URL**.
6.  Create a `.env.local` file in the project root:
    ```env
    GOOGLE_SHEETS_WEBHOOK_URL=your_web_app_url_here
    ```

## Project Structure

- `src/app`: Page routes and API endpoints.
- `src/components`: Reusable UI components.
- `src/lib`: Constants and data (e.g., course list).
- `public`: Static assets.

## Validation

- **Build Check**:Run `npm run build` to verify the project builds successfully for production.
- **Lint Check**: Run `npm run lint` to check for code quality issues.

---
Developed for Priya Computer Education.
