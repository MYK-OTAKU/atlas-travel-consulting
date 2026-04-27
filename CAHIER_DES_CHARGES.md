# CAHIER_DES_CHARGES.md

## Projet
Site web institutionnel multi-pages avec backoffice sécurisé pour ATLAS TRAVEL & CONSULTING.

---

## 1. Contexte

ATLAS TRAVEL & CONSULTING est une agence basée à Bamako, au Mali, spécialisée dans l'accompagnement des projets de voyage, de visa et d'études à l'étranger.

Le site web doit présenter l'agence de manière professionnelle, clarifier ses services, rassurer les visiteurs, générer des contacts via WhatsApp et permettre à l'équipe de gérer les contenus depuis un backoffice sécurisé.

La V1 doit être suffisamment propre pour être mise en ligne rapidement, tout en restant évolutive pour ajouter plus tard un blog, une galerie, des pages destinations avancées, une FAQ et éventuellement un formulaire de demande plus complet.

---

## 2. Identité validée

### Nom à afficher
ATLAS TRAVEL & CONSULTING

### Slogan
Votre partenaire de confiance pour aller plus loin

### Adresse
Hamdallaye ACI 2000, près du Palais des Sports, Bamako, Mali

### Téléphones
- 76.44.75.60
- 44.39.39.47

### Email
- atlastravelnconsult@gmail.com
- Une adresse professionnelle liée au nom de domaine pourra remplacer cet email plus tard.

---

## 3. Reformulation du besoin

Le client ne veut pas seulement un site vitrine.

Il a besoin d'une plateforme web administrable qui :

- présente clairement l'agence ;
- met en avant les services prioritaires ;
- distingue les pôles études, visa et agence de voyage ;
- explique honnêtement le rôle de l'agence dans l'accompagnement visa ;
- oriente les visiteurs vers WhatsApp ;
- rassure grâce à un discours transparent, sérieux et professionnel ;
- permet la modification des contenus sans recoder.

---

## 4. Positionnement métier

Le site doit organiser l'offre autour de trois axes principaux :

### 4.1 Études à l'étranger
Service prioritaire du site.

Ce pôle concerne principalement les étudiants post-bac souhaitant poursuivre des études en licence ou master, avec une spécialité sur le parcours France / Campus France.

### 4.2 Accompagnement visa
L'agence accompagne les clients dans la compréhension et la préparation des démarches visa.

Point critique : l'agence ne délivre pas de visa, ne garantit pas l'obtention du visa, ne se substitue pas au demandeur et ne produit pas les documents personnels du client.

### 4.3 Agence de voyage
L'agence propose des services de billetterie toutes destinations, d'assurance voyage et d'assurance automobile.

---

## 5. Objectifs du projet

### 5.1 Objectifs métier
- Renforcer la crédibilité de l'agence.
- Générer des demandes via WhatsApp.
- Présenter clairement les services.
- Éduquer les visiteurs sur les limites réelles de l'accompagnement visa.
- Valoriser l'accompagnement Campus France.
- Préparer une base évolutive.

### 5.2 Objectifs fonctionnels
- Créer un site public multi-pages.
- Créer un backoffice sécurisé.
- Permettre la gestion des services, destinations, textes, CTA, avis et paramètres.
- Prioriser WhatsApp comme action principale.
- Prévoir la galerie et le blog pour plus tard.

### 5.3 Objectifs techniques
- Utiliser Next.js.
- Utiliser Tailwind CSS 3.14.
- Utiliser Supabase pour l'authentification, la base de données et le stockage.
- Respecter une architecture maintenable.
- Préparer le SEO local et thématique.

---

## 6. Utilisateurs cibles

### 6.1 Visiteurs publics
- Étudiants post-bac.
- Étudiants souhaitant poursuivre en licence ou master.
- Voyageurs.
- Professionnels.
- Familles.
- Personnes ayant besoin d'aide pour comprendre les démarches visa.
- Clients recherchant billets, assurance voyage ou assurance automobile.

### 6.2 Administrateurs
- Super administrateur.
- Éditeur de contenu.

---

## 7. Périmètre MVP V1

### 7.1 Pages publiques
- Accueil
- À propos
- Études à l'étranger / Campus France
- Accompagnement visa
- Agence de voyage
- Services
- Détail service
- Destinations
- Avis / témoignages
- Contact / informations pratiques
- Mentions légales
- Politique de confidentialité

### 7.2 Backoffice
- Connexion admin sécurisée
- Dashboard
- Gestion des contenus institutionnels
- Gestion des services
- Gestion des destinations
- Gestion des avis/commentaires
- Gestion des coordonnées
- Gestion des CTA WhatsApp
- Gestion utilisateurs admin
- Gestion SEO de base

### 7.3 Hors MVP mais prévu
- Blog
- Galerie avancée
- Formulaires complexes
- Multilingue
- Pages destinations premium
- Suivi des demandes
- Analytics avancées

---

## 8. Logique métier détaillée

### 8.1 Études à l'étranger / Campus France

Le service doit expliquer que l'agence accompagne les étudiants dans :

- l'orientation ;
- la constitution du dossier Campus France ;
- le choix des universités ;
- la préparation de l'entretien de candidature ;
- l'accompagnement visa étudiant après acceptation universitaire.

Le contenu doit cibler les étudiants post-bac qui veulent poursuivre en licence ou master.

### 8.2 Accompagnement visa

Le service doit couvrir les visas :

- touristique ;
- professionnel ;
- regroupement familial.

Le parcours client recommandé :

1. Prise de contact via WhatsApp.
2. Identification du besoin.
3. Choix ou clarification de la destination.
4. Transmission de la liste des pièces à fournir.
5. Assistance à la prise de rendez-vous lorsque nécessaire.
6. Suivi et orientation jusqu'à constitution d'un dossier propre.

Règles à afficher clairement :

- l'agence accompagne mais ne délivre pas le visa ;
- les consulats accordent ou refusent les visas ;
- aucune promesse miracle ne doit être faite ;
- l'agence ne produit pas de documents personnels à la place du demandeur ;
- l'agence ne soutient pas la production de faux documents.

### 8.3 Agence de voyage

Les services initiaux :

- vente de billets toutes destinations ;
- assurance voyage ;
- assurance automobile.

Les destinations à mettre en avant :

- Europe ;
- Dubaï ;
- Chine ;
- Maroc ;
- USA ;
- Canada ;
- Mecque.

### 8.4 Avis et témoignages

Le client n'a pas encore de témoignages réels.

La V1 peut intégrer :

- des témoignages de démonstration dans le backoffice ;
- une interface permettant de les remplacer ;
- un module de soumission d'avis ;
- une modération obligatoire avant affichage public.

Aucun avis visiteur ne doit être publié automatiquement.

### 8.5 Contact et conversion

Le formulaire classique n'est pas prioritaire.

Le site doit pousser vers :

1. WhatsApp message ;
2. visite à l'agence ;
3. appel téléphonique si nécessaire.

Le bouton WhatsApp doit être visible dans les zones clés :

- hero ;
- pages services ;
- page visa ;
- page Campus France ;
- footer ;
- bouton flottant mobile.

---

## 9. Rôles et permissions

### Super Admin
- Accès total.
- Gestion utilisateurs.
- Gestion contenus.
- Gestion services.
- Gestion destinations.
- Gestion avis/commentaires.
- Gestion SEO.
- Gestion coordonnées et CTA.

### Éditeur
- Gestion contenus.
- Gestion services.
- Gestion destinations.
- Gestion avis/commentaires selon droits.
- Pas d'accès à la création d'utilisateurs super admin.

### Visiteur
- Consultation des pages.
- Envoi d'avis si module activé.
- Contact via WhatsApp.
- Consultation coordonnées.

---

## 10. Exigences UX/UI

- Design professionnel, rassurant et moderne.
- Mobile first.
- Boutons WhatsApp très visibles.
- Navigation claire entre les trois pôles : Études, Visa, Agence.
- Texte simple et crédible.
- Pas de promesses excessives.
- Sections aérées.
- États vides propres si aucun témoignage ou aucune image réelle n'est disponible.

---

## 11. Exigences SEO

Le site doit être optimisé pour :

- agence de voyage Bamako ;
- agence de voyage Mali ;
- accompagnement visa Mali ;
- assistance visa Bamako ;
- Campus France Mali ;
- accompagnement Campus France Bamako ;
- billet avion Bamako ;
- assurance voyage Mali.

Le SEO doit être pensé dès la structure :

- pages dédiées ;
- titres H1/H2 propres ;
- slugs lisibles ;
- meta title et description ;
- maillage interne ;
- données structurées locales si possible ;
- sitemap et robots.txt.

---

## 12. Contraintes

### Contraintes métier
- Ne pas promettre l'obtention d'un visa.
- Expliquer le rôle exact de l'agence.
- Valoriser l'éthique, la transparence et le sérieux.
- Prioriser les études, le visa et les billets.

### Contraintes techniques
- Next.js.
- Tailwind CSS 3.14.
- Supabase.
- Backoffice sécurisé.
- Site multi-pages.
- Français uniquement en V1.

### Contraintes contenu
- Pas de photos réelles disponibles en V1.
- Pas de témoignages réels disponibles en V1.
- Prévoir contenus remplaçables depuis l'admin.

---

## 13. Sécurité

- Aucun secret en dur.
- Aucun mot de passe admin en dur.
- Compte super admin initial créé via procédure sécurisée.
- Changement de mot de passe conseillé/imposé à la première connexion.
- Routes admin protégées.
- RLS Supabase à prévoir.
- Modération obligatoire des avis.

---

## 14. Conclusion

La V1 doit être claire, crédible, orientée WhatsApp et suffisamment solide pour servir de base long terme.

La priorité n'est pas d'ajouter beaucoup de fonctionnalités, mais de bien structurer les trois pôles métier :

1. Études à l'étranger / Campus France
2. Accompagnement visa
3. Agence de voyage / billetterie / assurances
