# Skema Warna UI - CEX Platform

## Overview
Skema warna ini dirancang untuk memberikan pengalaman visual yang konsisten dan modern pada platform CEX (Centralized Exchange).

## Warna Utama

### Background
- **Latar belakang utama (dark)**: `#0C0E12` - `bg-bg-primary`
- **Background sekunder / garis**: `#EAECEF` - `bg-bg-secondary`

### Call-to-Action (CTA)
- **Highlight / CTA (aksi utama)**: `#F0B90B` - `bg-cta-primary`
- **Ikon / tombol sekunder**: `#FCD535` - `bg-cta-secondary`

### Text
- **Teks utama (di dark bg)**: `#EAECEF` - `text-text-primary`
- **Teks di latar terang**: `#0C0E12` - `text-text-secondary`

## Penggunaan dalam Tailwind CSS

### Background Classes
```css
.bg-bg-primary      /* #0C0E12 - Main background (dark) */
.bg-bg-secondary    /* #EAECEF - Secondary background / borders */
```

### CTA Classes
```css
.bg-cta-primary     /* #F0B90B - Main action buttons */
.bg-cta-secondary   /* #FCD535 - Secondary buttons, icons */
```

### Text Classes
```css
.text-text-primary    /* #EAECEF - Main text on dark backgrounds */
.text-text-secondary  /* #0C0E12 - Text on light backgrounds */
```

## Komponen yang Sudah Diupdate

### 1. Layout Components
- **Header**: Menggunakan `bg-bg-secondary dark:bg-bg-primary`
- **Sidebar**: Menggunakan `bg-bg-secondary dark:bg-bg-primary`
- **DashboardLayout**: Background utama menggunakan skema baru

### 2. UI Components
- **Button**: Komponen baru dengan variant primary, secondary, outline, ghost
- **Card**: Komponen baru dengan styling yang konsisten

### 3. Dashboard
- **DashboardContent**: Semua card dan tabel menggunakan skema warna baru

## Best Practices

### 1. Dark Mode Support
Selalu gunakan class yang mendukung dark mode:
```jsx
// ✅ Benar
className="bg-bg-secondary dark:bg-bg-primary"

// ❌ Salah
className="bg-white dark:bg-gray-800"
```

### 2. Text Contrast
- Gunakan `text-text-primary` untuk teks pada background gelap
- Gunakan `text-text-secondary` untuk teks pada background terang
- Untuk teks yang kurang penting, gunakan opacity: `text-text-primary/60`

### 3. Interactive Elements
- Primary actions: `bg-cta-primary`
- Secondary actions: `bg-cta-secondary`
- Hover states: Gunakan opacity untuk hover effects

### 4. Borders and Dividers
- Gunakan `border-bg-secondary dark:border-bg-secondary/20`
- Untuk dividers internal, gunakan opacity yang lebih rendah

## Migration Guide

### Dari Warna Lama ke Baru
```jsx
// Background
bg-white dark:bg-gray-800 → bg-bg-secondary dark:bg-bg-primary

// Text
text-gray-900 dark:text-white → text-text-secondary dark:text-text-primary
text-gray-500 dark:text-gray-400 → text-text-secondary/60 dark:text-text-primary/60

// Borders
border-gray-200 dark:border-gray-700 → border-bg-secondary dark:border-bg-secondary/20

// Buttons
bg-primary → bg-cta-primary
```

## CSS Variables

Variabel CSS tersedia di `globals.css`:
```css
:root {
  --bg-primary: #ffffff;
  --bg-secondary: #EAECEF;
  --cta-primary: #F0B90B;
  --cta-secondary: #FCD535;
  --text-primary: #0C0E12;
  --text-secondary: #0C0E12;
}

.dark {
  --bg-primary: #0C0E12;
  --bg-secondary: #EAECEF;
  --cta-primary: #F0B90B;
  --cta-secondary: #FCD535;
  --text-primary: #EAECEF;
  --text-secondary: #0C0E12;
}
```

## Utility Functions

Gunakan utility functions dari `@/lib/colors`:
```jsx
import { COMPONENT_COLORS } from '@/lib/colors';

// Untuk card styling
className={COMPONENT_COLORS.card.background}

// Untuk button styling
className={COMPONENT_COLORS.button.primary}
```