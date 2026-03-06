# Salondebong Tattoos Website

Private Tattoo Studio Website für **Salondebong Tattoos** - Saarbrücken & Nonnweiler.

## Features

- 🤍 **Weltfrauentag-Aktion** - Prominentes Banner für die "Nein heißt Nein" Aktion
- 📸 **Galerie** - Platzhalter für Tattoo-Bilder (können leicht ersetzt werden)
- 📝 **Kontaktformular** - Direkte Anfrage-Möglichkeit
- 📱 **Responsive Design** - Optimiert für Mobile & Desktop
- 🎨 **Elegantes Design** - Minimalistisch mit Gold-Akzenten

## Schnellstart

1. Repository klonen
2. Bilder in `/assets/` Ordner legen
3. Galerie-Platzhalter in `index.html` ersetzen
4. Hosting einrichten (z.B. Netlify, Vercel, GitHub Pages)

## Kontakt-Integration

Das Kontaktformular zeigt aktuell eine Erfolgsmeldung. Für echte E-Mail-Versand:

- **Option A:** Formspree.io (kostenlos für kleine Seiten)
- **Option B:** Netlify Forms
- **Option C:** Eigenes Backend

## Social Links

- **Instagram:** [@salondebong_tattoo](https://www.instagram.com/salondebong_tattoo/)
- **WhatsApp:** +49 152 55474668

## Anpassungen

### Bilder hinzufügen

In `index.html` die Galerie-Platzhalter ersetzen:

```html
<div class="gallery-item">
    <img src="assets/tattoo-1.jpg" alt="Tattoo Beschreibung">
</div>
```

### Farben ändern

In `style.css` die CSS Variablen anpassen:

```css
:root {
    --accent: #b8860b; /* Haupt-Akzentfarbe */
    --primary: #1a1a1a; /* Primäre Farbe */
}
```

## Lizenz

© 2026 Salondebong Tattoos. Alle Rechte vorbehalten.