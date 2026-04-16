# Checklist Optimisation Lighthouse

Objectif : Score > 90 sur les 4 métriques (Performance, Accessibility, Best Practices, SEO)

## Performance

### Images
- [ ] Utiliser le format WebP pour toutes les images
- [ ] Ajouter `loading="lazy"` sur les images below-the-fold
- [ ] Définir `width` et `height` explicites pour éviter le layout shift
- [ ] Compresser les images (qualité 80-85%)
- [ ] Utiliser des images responsives avec `srcset` si nécessaire

### CSS
- [ ] CSS critique inliné dans le `<head>` (optionnel pour ce projet léger)
- [ ] Pas de CSS inutilisé
- [ ] `font-display: swap` sur les Google Fonts

### JavaScript
- [ ] Scripts avec `defer` ou en fin de `<body>`
- [ ] Pas de JS bloquant le rendu
- [ ] Code minifié (optionnel pour ce projet)

### Fonts
- [ ] Préconnexion aux Google Fonts :
  ```html
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  ```
- [ ] `font-display: swap` dans l'URL des fonts

### Core Web Vitals
- [ ] LCP (Largest Contentful Paint) < 2.5s
- [ ] FID (First Input Delay) < 100ms
- [ ] CLS (Cumulative Layout Shift) < 0.1

---

## Accessibilité (A11y)

### Structure
- [ ] Balises sémantiques (`<header>`, `<main>`, `<nav>`, `<footer>`, `<section>`, `<article>`)
- [ ] Hiérarchie des titres correcte (h1 > h2 > h3...)
- [ ] Un seul `<h1>` par page
- [ ] Skip link fonctionnel

### Images
- [ ] Attribut `alt` sur toutes les images
- [ ] `alt=""` pour les images décoratives
- [ ] Alt descriptif pour les images informatives

### Formulaires
- [ ] Labels associés aux inputs (`for="id"`)
- [ ] Messages d'erreur explicites
- [ ] Focus visible sur tous les champs

### Navigation
- [ ] Navigation au clavier complète (Tab, Shift+Tab, Enter, Escape)
- [ ] Focus visible (outline) sur les éléments interactifs
- [ ] Ordre de tabulation logique

### Couleurs
- [ ] Contraste texte/fond minimum 4.5:1 (AA)
- [ ] Contraste 3:1 pour les grands textes
- [ ] Information pas uniquement véhiculée par la couleur

### ARIA
- [ ] `aria-label` sur les boutons icônes
- [ ] `aria-current="page"` sur le lien actif de la nav
- [ ] `aria-expanded` sur les toggles (menu mobile)

---

## Best Practices

### Sécurité
- [ ] HTTPS activé (géré par l'hébergeur)
- [ ] Pas de mixed content (HTTP sur page HTTPS)
- [ ] `rel="noopener"` sur les liens externes `target="_blank"`

### HTML
- [ ] DOCTYPE HTML5
- [ ] Attribut `lang="fr"` sur `<html>`
- [ ] Charset UTF-8 déclaré
- [ ] Viewport meta tag présent

### Console
- [ ] Pas d'erreurs JavaScript dans la console
- [ ] Pas de warnings critiques

---

## SEO

### Meta tags (sur chaque page)
- [ ] `<title>` unique et descriptif (50-60 caractères)
- [ ] `<meta name="description">` (150-160 caractères)
- [ ] Viewport meta tag

### Open Graph
- [ ] `og:title`
- [ ] `og:description`
- [ ] `og:image` (1200x630px)
- [ ] `og:url`
- [ ] `og:type`

### Twitter Cards
- [ ] `twitter:card`
- [ ] `twitter:title`
- [ ] `twitter:description`
- [ ] `twitter:image`

### Structure
- [ ] URLs propres et descriptives
- [ ] Liens internes fonctionnels
- [ ] Pas de liens cassés (404)

### Fichiers
- [ ] `robots.txt` présent
- [ ] `sitemap.xml` présent
- [ ] Favicon fonctionnel

---

## Comment tester

### Lighthouse (Chrome DevTools)
1. Ouvrir Chrome DevTools (F12)
2. Onglet "Lighthouse"
3. Sélectionner : Performance, Accessibility, Best Practices, SEO
4. Device : Mobile (plus strict)
5. Lancer l'audit

### Outils complémentaires
- **axe DevTools** : Extension Chrome pour accessibilité
- **WAVE** : wave.webaim.org
- **PageSpeed Insights** : pagespeed.web.dev
- **GTmetrix** : gtmetrix.com
- **Facebook Debugger** : developers.facebook.com/tools/debug (Open Graph)
- **Twitter Card Validator** : cards-dev.twitter.com/validator

---

## Exemple de meta tags complets

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- SEO -->
  <title>Emmanuel Mikaelian — Pharmacien DPO / PRAQ</title>
  <meta name="description" content="Pharmacien expert en conformité réglementaire, protection des données (DPO) et automatisation pharmaceutique. Transformez la complexité en clarté opérationnelle.">

  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://emmanuel-mikaelian.fr/">
  <meta property="og:title" content="Emmanuel Mikaelian — Pharmacien DPO / PRAQ">
  <meta property="og:description" content="Pharmacien expert en conformité réglementaire, protection des données (DPO) et automatisation pharmaceutique.">
  <meta property="og:image" content="https://emmanuel-mikaelian.fr/assets/images/og-image.png">

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Emmanuel Mikaelian — Pharmacien DPO / PRAQ">
  <meta name="twitter:description" content="Pharmacien expert en conformité réglementaire, protection des données (DPO) et automatisation pharmaceutique.">
  <meta name="twitter:image" content="https://emmanuel-mikaelian.fr/assets/images/og-image.png">

  <!-- Favicon -->
  <link rel="icon" href="/assets/images/favicon.svg" type="image/svg+xml">

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">

  <!-- CSS -->
  <link rel="stylesheet" href="/css/reset.css">
  <link rel="stylesheet" href="/css/variables.css">
  <link rel="stylesheet" href="/css/base.css">
  <link rel="stylesheet" href="/css/components.css">
  <link rel="stylesheet" href="/css/layout.css">
  <link rel="stylesheet" href="/css/pages.css">
</head>
```
