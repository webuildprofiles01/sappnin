# Project Overview
Website/landingpage for the Sappnin app. Sappnin is an innovative dating and meet & greet application designed to create authentic and meaningful connections in the modern digital age. Unlike traditional dating apps, Sappnin focuses on fostering genuine relationships by ensuring that users can only communicate if they are mutually interested and both are online simultaneously. This unique approach encourages active participation, ensuring that users are truly engaged in their interactions.

# Feature Requirements
- We will use Next.js, Shadcn, Tailwind
- Home page containing a hero section with download buttons, info about the app, a slider showing pictures of happy people, a why sappnin section, a faq section and a cta section. 
- A features page 
- Contact us page with a simple form containing first name, last name, email, message and a submit button. 
- A download page with download buttons for ios and android. 

- For the color scheme:
Orange: #FF4525
Blue: #52B3FF
Black: #000000
Darker grey: #626261
Light grey: #EAE7E3
White: #FFFFFF

- Font: Open Sans



# Relevant Docs
/whatshappening/requirements/frontend_instructions.md
/whatshappening/requirements/app-overview.txt




# Current File Structure
<file_directory>
whatshappening/
├── app/
│   ├── page.tsx                 # Home page
│   ├── features/
│   │   └── page.tsx            # Features page
│   ├── contact/
│   │   └── page.tsx            # Contact page
│   └── download/
│       └── page.tsx            # Download page
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── AppInfo.tsx
│   │   ├── ImageSlider.tsx
│   │   ├── WhySection.tsx
│   │   ├── FaqSection.tsx
│   │   └── CtaSection.tsx
│   ├── contact/
│   │   └── ContactForm.tsx
│   ├── shared/
│   │   ├── DownloadButtons.tsx
│   │   └── Container.tsx
│   └── ui/                     # shadcn components
├── lib/
│   └── utils.ts
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── features/
│   │   └── logos/
│   └── icons/
├── styles/
│   └── globals.css
├── types/
│   └── index.ts
└── config/
    └── site.ts                 # Site-wide configuration
</file_directory>