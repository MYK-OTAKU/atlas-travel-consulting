# RULES.md

## 1. Règles générales

- Ne jamais coder avant de comprendre la logique métier.
- Ne jamais transformer le projet en simple CRUD.
- Toujours séparer contenu, présentation, logique métier et accès données.
- Le site doit rester clair, sobre, rassurant et orienté WhatsApp.

---

## 2. Règles métier

### Visa
Le site doit toujours préciser que l'agence :

- accompagne ;
- conseille ;
- aide à préparer ;
- aide à comprendre les démarches ;
- peut aider à la prise de rendez-vous.

Le site ne doit jamais laisser croire que l'agence :

- délivre les visas ;
- garantit l'obtention ;
- remplace le demandeur ;
- produit les documents personnels ;
- propose des solutions miracles.

### Campus France
Le service doit être présenté comme un accompagnement structuré :

- orientation ;
- constitution de dossier ;
- choix d'universités ;
- coaching entretien ;
- accompagnement visa après acceptation.

### Agence
Les services agence doivent rester simples :

- billets ;
- assurance voyage ;
- assurance automobile.

---

## 3. Règles UI/UX

- Mobile first obligatoire.
- CTA WhatsApp prioritaire.
- Navigation simple.
- Les trois pôles doivent être visibles rapidement.
- Pas de surcharge visuelle.
- États vides propres pour photos et témoignages manquants.

---

## 4. Règles sécurité

- Aucun secret dans le code.
- Aucun mot de passe en dur.
- Routes admin protégées.
- RLS Supabase obligatoire.
- Validation serveur obligatoire.
- Avis/commentaires modérés avant publication.

---

## 5. Règles contenu

- Pas de fausses promesses.
- Pas de ton agressif ou exagéré.
- Mettre en avant transparence, sérieux et efficacité.
- Les contenus doivent pouvoir être modifiés depuis l'admin quand c'est pertinent.

---

## 6. Règles SEO

- Une page = une intention de recherche principale.
- Slugs propres.
- Titles et descriptions uniques.
- Maillage interne.
- Optimisation locale Mali / Bamako.
- Ne pas créer de pages vides uniquement pour remplir.

---

## 7. Règles documentation

Avant toute fonctionnalité majeure :

- vérifier le cahier des charges ;
- vérifier le TODO ;
- vérifier l'architecture ;
- documenter l'impact si le périmètre change.

Après implémentation :

- mettre à jour CHANGELOG ;
- cocher TODO ;
- documenter les écarts.
