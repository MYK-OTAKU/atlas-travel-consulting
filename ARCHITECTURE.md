# ARCHITECTURE.md

## 1. Objectif

Définir une architecture claire pour un site Next.js multi-pages avec backoffice Supabase.

Le projet doit rester maintenable, évolutif et adapté à un site institutionnel orienté conversion WhatsApp.

---

## 2. Blocs principaux

### Front-office public
Pages visibles par les visiteurs :

- Accueil
- À propos
- Études / Campus France
- Accompagnement Visa
- Agence de voyage
- Services
- Destinations
- Avis
- Contact

### Backoffice admin
Interface protégée permettant de gérer :

- contenus institutionnels ;
- services ;
- destinations ;
- avis/commentaires ;
- coordonnées ;
- CTA WhatsApp ;
- SEO ;
- utilisateurs.

### Couche data
Supabase gère :

- authentification ;
- base de données ;
- storage médias ;
- règles RLS.

---

## 3. Structure recommandée

```txt
src/
  app/
    (public)/
      page.tsx
      a-propos/
      etudes-campus-france/
      accompagnement-visa/
      agence-de-voyage/
      services/
      services/[slug]/
      destinations/
      destinations/[slug]/
      avis/
      contact/
      mentions-legales/
      politique-confidentialite/

    admin/
      login/
      dashboard/
      contenus/
      services/
      destinations/
      avis/
      commentaires/
      contact/
      seo/
      utilisateurs/

  components/
    ui/
    layout/
    public/
    admin/
    shared/

  features/
    auth/
    content/
    services/
    destinations/
    reviews/
    comments/
    contact/
    seo/
    media/
    users/

  lib/
    supabase/
    validations/
    utils/
    constants/
    guards/

  server/
    actions/
    queries/
    mappers/

  types/
  hooks/
  styles/
```

---

## 4. Pages publiques prioritaires

### Accueil
Doit présenter les trois pôles :

1. Études à l'étranger
2. Accompagnement visa
3. Billetterie / agence

Le CTA principal doit être WhatsApp.

### Études / Campus France
Page forte du site, prioritaire commercialement.

### Accompagnement Visa
Page devant expliciter le rôle réel de l'agence et ses limites.

### Agence de voyage
Page pour billets, assurances et destinations.

---

## 5. Architecture de contenu

Les contenus doivent être administrables autant que possible.

Contenus administrables :

- textes institutionnels ;
- slogan ;
- services ;
- destinations ;
- numéros ;
- email ;
- adresse ;
- CTA WhatsApp ;
- avis ;
- SEO.

Contenus pouvant rester hybrides :

- sections premium de destination ;
- design spécifique Campus France ;
- blocs marketing très structurés.

---

## 6. Rendu et SEO

- Utiliser les pages Next.js pour un bon SEO.
- Préférer des routes propres et indexables.
- Générer sitemap et robots.
- Prévoir metadata par page.
- Optimiser les images.

---

## 7. Authentification admin

- Supabase Auth.
- Middleware de protection des routes `/admin`.
- Contrôle du rôle via table `admin_profiles` ou `profiles`.
- Pas de secret en dur.
- Gestion du statut `is_active`.

---

## 8. Sécurité

- RLS Supabase.
- Validation serveur.
- Modération des avis.
- Protection des actions admin.
- Pas de publication automatique d'avis utilisateur.

---

## 9. Évolutions prévues

- Blog.
- Galerie.
- Multilingue.
- Formulaires spécialisés.
- CRM léger.
- Statistiques.
