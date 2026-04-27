# BACKOFFICE_LOGIC.md

## 1. Objectif

Le backoffice doit permettre de gérer le site sans toucher au code.

Il doit rester simple, sécurisé et adapté à une petite équipe.

---

## 2. Modules V1

### Dashboard
Affiche :

- nombre de services ;
- destinations publiées ;
- avis en attente ;
- raccourcis vers les modules ;
- rappel des priorités de contenu.

### Paramètres du site
Gère :

- nom du site ;
- slogan ;
- téléphones ;
- WhatsApp ;
- email ;
- adresse ;
- horaires si ajoutés ;
- CTA principal.

### Contenus institutionnels
Gère :

- hero accueil ;
- à propos ;
- valeurs ;
- transparence ;
- sérieux ;
- efficacité ;
- message de limitation visa.

### Services
Gère :

- Études / Campus France ;
- Accompagnement visa ;
- Billetterie ;
- Assurance voyage ;
- Assurance automobile ;
- autres services futurs.

Chaque service doit avoir :

- titre ;
- slug ;
- type ;
- description courte ;
- description longue ;
- ordre ;
- statut ;
- CTA WhatsApp ;
- SEO.

### Destinations
Gère :

- Europe ;
- Dubaï ;
- Chine ;
- Maroc ;
- USA ;
- Canada ;
- Mecque ;
- autres destinations futures.

### Avis / commentaires
Flux :

1. Le visiteur envoie un avis.
2. L'avis passe en `pending`.
3. L'admin approuve, rejette ou archive.
4. Seuls les avis `approved` sont visibles.

### SEO
Gère :

- title ;
- meta description ;
- slug ;
- image de partage ;
- indexation.

### Utilisateurs
Gère :

- super admin ;
- éditeurs ;
- activation / désactivation.

---

## 3. Rôles

### Super admin
Accès total.

### Éditeur
Peut gérer les contenus, services, destinations et avis selon les permissions.

---

## 4. États

### Contenus publiables
- draft
- published
- archived

### Avis
- pending
- approved
- rejected
- archived

---

## 5. Cas limites

- Aucun témoignage réel : afficher section discrète ou témoignages de démonstration.
- Aucune photo : utiliser visuels d'illustration propres.
- Email temporaire : prévoir remplacement facile.
- Formulaire désactivé : ne pas afficher de formulaire inutile.
- Avis spam : modération obligatoire.
