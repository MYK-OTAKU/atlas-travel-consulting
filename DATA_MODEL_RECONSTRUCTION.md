# DATA_MODEL_RECONSTRUCTION.md

## 1. Objectif

Définir le modèle logique de données V2 pour ATLAS TRAVEL & CONSULTING.

---

## 2. Entités principales

### admin_profiles
Représente les utilisateurs admin.

Champs :
- id
- auth_user_id
- full_name
- email
- role: super_admin | editor
- is_active
- must_change_password
- created_at
- updated_at

---

### site_settings
Stocke les paramètres globaux.

Champs :
- id
- site_name
- slogan
- primary_phone
- secondary_phone
- whatsapp_number
- email
- address
- city
- country
- google_maps_link
- main_cta_label
- main_cta_message
- created_at
- updated_at

Valeurs initiales :
- site_name: ATLAS TRAVEL & CONSULTING
- slogan: Votre partenaire de confiance pour aller plus loin
- city: Bamako
- country: Mali

---

### content_sections
Stocke les blocs éditoriaux.

Champs :
- id
- key
- title
- subtitle
- content
- image_url
- status
- created_at
- updated_at

Clés recommandées :
- home_hero
- about_intro
- values_transparency
- values_seriousness
- values_efficiency
- visa_limit_notice
- campus_france_intro
- agency_intro

---

### services
Stocke les services.

Champs :
- id
- title
- slug
- service_type
- short_description
- long_description
- featured_image_url
- is_featured
- priority_order
- status
- whatsapp_message
- seo_title
- seo_description
- created_at
- updated_at

Types :
- studies
- visa_support
- ticketing
- travel_insurance
- auto_insurance
- agency

Services initiaux :
- Études à l'étranger / Campus France
- Accompagnement visa
- Billetterie toutes destinations
- Assurance voyage
- Assurance automobile

---

### service_steps
Étapes d'un service.

Champs :
- id
- service_id
- title
- description
- step_order
- created_at
- updated_at

Exemple visa :
1. Prise de contact
2. Analyse du besoin
3. Destination choisie
4. Transmission des pièces
5. Assistance prise de rendez-vous

---

### service_highlights
Avantages / points forts.

Champs :
- id
- service_id
- label
- display_order
- created_at

---

### destinations
Pays ou zones mises en avant.

Champs :
- id
- name
- slug
- short_description
- long_description
- destination_type
- featured_image_url
- is_featured
- display_order
- status
- seo_title
- seo_description
- created_at
- updated_at

Destinations initiales :
- Europe
- Dubaï
- Chine
- Maroc
- USA
- Canada
- Mecque

---

### destination_service_links
Lie services et destinations.

Champs :
- id
- destination_id
- service_id
- created_at

---

### reviews
Avis affichables publiquement après validation.

Champs :
- id
- author_name
- author_email
- author_phone
- content
- rating
- status: pending | approved | rejected | archived
- is_featured
- service_id
- created_at
- updated_at
- moderated_by
- moderated_at

---

### media_assets
Référence les médias.

Champs :
- id
- module
- file_url
- file_path
- alt_text
- caption
- uploaded_by
- created_at

---

### seo_entries
SEO avancé.

Champs :
- id
- entity_type
- entity_id
- title
- description
- og_image_url
- canonical_url
- indexable
- created_at
- updated_at

---

## 3. Entité optionnelle

### contact_messages
Non prioritaire en V1, car WhatsApp est le canal principal.

À prévoir uniquement si le formulaire est activé plus tard.

Champs :
- id
- full_name
- email
- phone
- subject
- message
- status
- created_at

---

## 4. Règles métier data

- Un service non publié ne s'affiche pas.
- Une destination non publiée ne s'affiche pas.
- Un avis pending ne s'affiche jamais.
- Les slugs doivent être uniques.
- Les CTA WhatsApp peuvent être personnalisés par service.
- Les valeurs globales viennent de `site_settings`.
