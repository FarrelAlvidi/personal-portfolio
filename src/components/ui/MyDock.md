# MyDock Component - Dokumentasi

## 📖 Penjelasan

`MyDock.tsx` adalah komponen navigation dock yang terinspirasi dari macOS dock. Komponen ini menyediakan navigasi yang elegan dan interaktif untuk portfolio website.

## ✨ Fitur-Fitur Baru

### 1. **Navigasi Lengkap**
- **Home**: Halaman utama
- **About**: Tentang saya
- **Projects**: Portfolio proyek
- **Blog**: Artikel & tutorial
- **Contact**: Hubungi saya

### 2. **Social Media Integration**
- **GitHub**: Link ke repository
- **LinkedIn**: Profil profesional
- **Twitter/X**: Social media
- **YouTube**: Channel video
- **Email**: Kontak langsung

### 3. **Dark Mode Toggle**
- Toggle antara tema terang dan gelap
- Persistent state menggunakan localStorage
- Visual indicator untuk mode aktif

### 4. **Settings & Customization**
- Toggle tooltips on/off
- Pengaturan visual preferences
- Status indicator

### 5. **Enhanced UI/UX**
- **Backdrop blur**: Glass effect untuk dock
- **Hover animations**: Scale effect saat hover
- **Rich tooltips**: Deskripsi lengkap untuk setiap item
- **Responsive design**: Optimized untuk mobile dan desktop
- **Smooth transitions**: Animasi halus untuk semua interaksi

## 🎨 Styling Features

### Glass Morphism Design
```tsx
className="bg-white/10 backdrop-blur-md border border-white/20 shadow-lg"
```

### Hover Effects
```tsx
className="hover:bg-white/20 transition-all duration-200 hover:scale-110"
```

### Rich Tooltips
```tsx
<TooltipContent side="top" className="bg-black/80 text-white border-white/20">
  <div className="text-center">
    <p className="font-medium">{item.label}</p>
    <p className="text-xs text-gray-300">{item.description}</p>
  </div>
</TooltipContent>
```

## 🔧 Konfigurasi

### Update Links
Pastikan untuk mengupdate link-link berikut di `DATA` object:

```tsx
const DATA = {
  contact: {
    social: {
      GitHub: {
        url: "https://github.com/your-username", // Ganti dengan GitHub Anda
      },
      LinkedIn: {
        url: "https://linkedin.com/in/your-profile", // Ganti dengan LinkedIn Anda
      },
      // ... dan seterusnya
    },
  },
}
```

### Customize Navigation
Tambah atau edit menu navigasi:

```tsx
navbar: [
  { href: "#home", icon: HomeIcon, label: "Home", description: "Halaman Utama" },
  // Tambah item baru di sini
  { href: "#portfolio", icon: BriefcaseIcon, label: "Portfolio", description: "Karya Saya" },
]
```

## 🚀 Penggunaan

### Basic Usage
```tsx
import { MyDock } from "@/components/ui/MyDock"

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <MyDock />
    </div>
  )
}
```

### Dengan Galaxy Background
```tsx
import { MyDock } from "@/components/ui/MyDock"
import Galaxy from "@/components/Galaxy"

export default function HomePage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Galaxy />
      </div>
      <div className="relative z-10">
        <MyDock />
      </div>
    </div>
  )
}
```

## 📱 Responsive Design

Komponen ini sudah dioptimalkan untuk berbagai ukuran layar:

- **Mobile**: Icon size yang sesuai, spacing yang tepat
- **Tablet**: Medium spacing dan size
- **Desktop**: Full size dengan semua animasi

## 🎯 Best Practices

1. **Update URLs**: Selalu update URL social media dengan link yang benar
2. **Accessibility**: Semua icon memiliki `aria-label` untuk screen readers
3. **Performance**: Komponen menggunakan React hooks untuk state management yang efisien
4. **SEO**: Link eksternal menggunakan `target="_blank"` dan `rel="noopener noreferrer"`

## 🔄 State Management

Komponen menggunakan React hooks untuk:
- `isDarkMode`: Status dark mode
- `showTooltips`: Status tooltip visibility

```tsx
const [isDarkMode, setIsDarkMode] = useState(false)
const [showTooltips, setShowTooltips] = useState(true)
```

## 🎨 Customization Options

### Colors
Mudah untuk mengubah color scheme dengan mengedit Tailwind classes:

```tsx
// Dock background
className="bg-white/10 backdrop-blur-md border border-white/20"

// Hover effects
className="hover:bg-white/20"

// Tooltip style
className="bg-black/80 text-white border-white/20"
```

### Animations
Sesuaikan duration dan easing:

```tsx
className="transition-all duration-200 hover:scale-110"
```

## 📦 Dependencies

Pastikan dependencies berikut terinstall:

```bash
npm install lucide-react
npm install class-variance-authority
npm install clsx
npm install tailwind-merge
```

## 🐛 Troubleshooting

### Error: Cannot find module '@/components/ui/...'
Pastikan semua UI components telah dibuat atau install shadcn/ui:

```bash
npx shadcn-ui@latest add button separator tooltip
```

### Dark mode tidak berfungsi
Pastikan Tailwind CSS dikonfigurasi untuk dark mode:

```js
// tailwind.config.js
module.exports = {
  darkMode: 'class',
  // ...
}
```

## 🌟 Tips

1. **Smooth Scrolling**: Tambahkan smooth scroll untuk navigasi dalam halaman
2. **Keyboard Navigation**: Komponen sudah support keyboard navigation
3. **Touch Gestures**: Optimized untuk touch devices
4. **Loading States**: Bisa ditambahkan loading states untuk link eksternal

Semoga dokumentasi ini membantu! 🚀