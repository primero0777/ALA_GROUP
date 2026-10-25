# ARCHIRAM BUILDING — site vitrine

Site statique en HTML, CSS et JavaScript, sans outil de build : on dépose les fichiers tels quels sur l'hébergement (Netlify, Vercel, FTP…).

## Fichiers

| Fichier | Rôle |
|---|---|
| `index.html`, `services.html`, `projects.html`, `about.html`, `contact.html`, `devis.html`, `politique-confidentialite.html` | Les 7 pages |
| `style.css` | Feuille de style unique (couleurs, typo, composants, clair/sombre) |
| `script.js` | Langue FR/EN, thème, menu, formulaires vers WhatsApp, avant/après, devis, mesure des clics |
| `assets/icons.svg` | Icônes (Font Awesome Free, licence CC BY 4.0) |
| `assets/img/*.webp` | Photos optimisées, en taille réelle et en 640 px pour le mobile |
| `sitemap.xml`, `robots.txt`, `site.webmanifest` | Référencement et icône d'application |

## Avant la mise en ligne

1. **Remplacer l'adresse du site.** `VOTRE-DOMAINE.com` apparaît dans les balises de partage, la fiche entreprise Google, `sitemap.xml` et `robots.txt`. Une commande suffit :

   ```bash
   grep -rl "VOTRE-DOMAINE.com" . | xargs sed -i 's#VOTRE-DOMAINE.com#www.mon-domaine.com#g'
   ```

2. **Vérifier les contenus à confirmer** : noms et années des projets, témoignages, références clients, équipe, chiffres (10+ ans, 20+ projets, 3 pays), liens Facebook et LinkedIn.

## Modifier un texte

Le français est écrit directement dans le HTML. La version anglaise de chaque page se trouve en bas du fichier, dans `window.PAGE_LANG.en`, sous la même clé que l'attribut `data-i18n` de l'élément. Les textes communs à toutes les pages (menu, pied de page, formulaire) sont dans `SHARED_EN`, en haut de `script.js`.

## Mesurer les demandes

`script.js` émet déjà des événements : `whatsapp_click`, `quote_click`, `contact_submit`, `quote_submit`, `project_open`, `video_play`, `map_load`. Rien n'est envoyé tant qu'aucun outil de mesure n'est installé. Pour les activer, ajoutez le code de Plausible ou de Google Analytics 4 dans le `<head>` des pages : les événements partent alors automatiquement.

⚠️ Mettez ensuite à jour l'article 06 de la politique de confidentialité, qui indique aujourd'hui qu'aucun outil d'analyse n'est utilisé.

## Contenus tiers

La vidéo YouTube (accueil) et la carte Google Maps (contact) ne se chargent qu'au clic, conformément à la politique de confidentialité. Les images d'illustration de la page Services et de l'avant/après viennent d'Unsplash ; elles sont à remplacer par des photos de chantiers ARCHIRAM dès qu'elles existent.
