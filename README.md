# Site Personnel — Emmanuel Mikaelian

Site vitrine professionnel pour Emmanuel Mikaelian, Pharmacien DPO / PRAQ.

## Stack Technique

- **HTML5** sémantique
- **CSS3** (variables CSS, Grid, Flexbox)
- **JavaScript** vanilla ES6+
- **Pas de build step** — fichiers servis directement

## Structure du projet

```
site-emmanuel-mikaelian/
├── index.html              # Accueil
├── parcours.html           # Timeline carrière + formations
├── expertises.html         # 3 piliers détaillés
├── realisations.html       # Projets concrets
├── blog.html               # Liste articles
├── contact.html            # Formulaire + infos
│
├── css/
│   ├── reset.css           # Reset/normalize
│   ├── variables.css       # Design tokens
│   ├── base.css            # Styles globaux
│   ├── components.css      # Boutons, cards, etc.
│   ├── layout.css          # Header, footer, grilles
│   └── pages.css           # Styles spécifiques par page
│
├── js/
│   ├── main.js             # Script principal
│   ├── animations.js       # Intersection Observer, reveals
│   └── navigation.js       # Menu mobile, smooth scroll
│
├── assets/
│   ├── images/
│   │   ├── favicon.svg
│   │   ├── og-image.svg    # Image Open Graph (convertir en PNG)
│   │   ├── portrait-placeholder.svg
│   │   └── grid-pattern.svg
│   │
│   └── documents/
│       └── cv-emmanuel-mikaelian.pdf
│
└── README.md
```

## Développement local

Aucune installation requise. Ouvrir `index.html` dans un navigateur ou utiliser un serveur local :

```bash
# Avec Python
python -m http.server 8000

# Avec Node.js (npx)
npx serve .

# Avec PHP
php -S localhost:8000
```

Puis ouvrir http://localhost:8000

## Déploiement

### Vercel (recommandé)

1. Push le projet sur GitHub
2. Importer le repo dans [Vercel](https://vercel.com)
3. Aucune configuration nécessaire pour HTML statique
4. Auto-deploy à chaque push

### Coolify

1. Créer une nouvelle application "Static Site"
2. Lier le repository Git
3. Build command : _(laisser vide)_
4. Output directory : `/`
5. Déployer

### GitHub Pages

1. Aller dans Settings > Pages
2. Source : Deploy from a branch
3. Branch : `main` / `root`
4. Le site sera accessible sur `https://username.github.io/repo-name`

## Préparation des assets

### Image Open Graph (og-image.png)

Convertir `assets/images/og-image.svg` en PNG 1200x630px :

```bash
# Avec Inkscape
inkscape og-image.svg -o og-image.png -w 1200 -h 630

# Ou utiliser un outil en ligne comme svgtopng.com
```

### Photo portrait

Remplacer `portrait-placeholder.svg` par une vraie photo :
- Format : WebP
- Dimensions : 800x800px (+ version @2x pour Retina)
- Qualité : 85%
- Nommer : `portrait.webp`

### Favicon

Le favicon SVG fonctionne dans les navigateurs modernes. Pour une compatibilité maximale, générer aussi :
- `favicon.ico` (32x32)
- `apple-touch-icon.png` (180x180)

Utiliser [RealFaviconGenerator](https://realfavicongenerator.net/) avec le SVG.

## Checklist avant mise en production

### Performance
- [ ] Images optimisées (WebP, lazy loading)
- [ ] CSS/JS minifiés (optionnel pour ce projet léger)
- [ ] Fonts avec `font-display: swap`
- [ ] Lighthouse score > 90

### SEO
- [ ] Balises meta (title, description) sur chaque page
- [ ] Open Graph et Twitter Cards
- [ ] Sitemap.xml
- [ ] Robots.txt

### Accessibilité
- [ ] Attributs alt sur toutes les images
- [ ] Navigation au clavier fonctionnelle
- [ ] Contrastes suffisants (WCAG AA)
- [ ] Skip link fonctionnel

### Fonctionnel
- [ ] Tous les liens fonctionnent
- [ ] Formulaire de contact opérationnel
- [ ] CV téléchargeable
- [ ] Responsive testé (320px → 1920px)

## Domaines suggérés

1. `emmanuel-mikaelian.fr` (préféré)
2. `mikaelian.fr`
3. `em-pharma.fr`

## Licence

Tous droits réservés © Emmanuel Mikaelian
