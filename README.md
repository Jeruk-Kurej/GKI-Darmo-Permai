# GKI Darmo Permai

A website and admin panel for GKI Darmo Permai church. Members check worship schedules, read the weekly e-bulletin, and browse events, videos, and galleries, while committees manage the content themselves.

Status: on hold, waiting for the next briefing.

## Features

- Worship schedules and church events managed from an admin panel.
- Weekly e-bulletin published online.
- Media library with worship videos and photo galleries.
- Teams with roles and invitations for committee members.
- Two-factor authentication with recovery codes (Laravel Fortify).

## Stack

Laravel 13, Inertia.js, React, TypeScript, Tailwind CSS, shadcn/ui, Laravel Fortify, Pest.

## Running it

```bash
composer install
npm install
cp .env.example .env
php artisan key:generate
php artisan migrate
composer run dev
```

Live preview: https://gki-darmo-permai.vercel.app
