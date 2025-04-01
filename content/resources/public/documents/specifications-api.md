# Spécifications API Sotto

## Introduction

Ce document détaille les interfaces de programmation (API) permettant d'intégrer Sotto avec votre écosystème restaurant existant. Notre architecture API a été conçue pour simplifier les connexions avec les systèmes externes essentiels à votre activité : terminaux de paiement électronique (TPE), systèmes de réservation, plateformes de livraison, et bien plus encore.

Fidèle à notre philosophie de libérer la restauration des interfaces techniques complexes, nos API suivent une approche minimaliste mais puissante. Elles vous permettent de bénéficier pleinement de l'intelligence vocale de Sotto tout en maintenant la connexion avec les outils que vous utilisez déjà.

## Principes fondamentaux

### Architecture REST

Toutes nos API suivent les principes REST (Representational State Transfer) pour assurer :

- Une interface uniforme et prévisible
- Des opérations sans état pour une fiabilité maximale
- Une mise en cache efficace des données
- Une architecture client-serveur claire

### Sécurité et authentification

La sécurité est primordiale dans notre conception :

- Authentification par jetons JWT (JSON Web Tokens)
- Chiffrement TLS/SSL pour toutes les communications
- Politiques de limitation de débit pour prévenir les abus
- Vérifications d'intégrité des données à chaque étape

### Format des données

Toutes nos API utilisent exclusivement le format JSON pour les requêtes et les réponses, garantissant :

- Une compatibilité maximale avec les systèmes modernes
- Une lisibilité humaine facilitée
- Un traitement efficace des données
- Une structure cohérente à travers l'ensemble des endpoints

## Points d'accès principaux

### API Commandes

L'API Commandes est au cœur du système Sotto, permettant la gestion complète du cycle de vie des commandes.

#### Endpoints principaux

| Endpoint | Méthode | Description |
|----------|---------|-------------|
| `/orders` | GET | Récupère la liste des commandes actives |
| `/orders/{id}` | GET | Obtient les détails d'une commande spécifique |
| `/orders` | POST | Crée une nouvelle commande |
| `/orders/{id}` | PUT | Met à jour une commande existante |
| `/orders/{id}/status` | PATCH | Modifie uniquement le statut d'une commande |
| `/orders/{id}/items` | POST | Ajoute des articles à une commande existante |

#### Exemple de requête

```json
POST /api/v1/orders
{
  "table_id": "12",
  "server_id": "server_3429",
  "items": [
    {
      "menu_item_id": "burger_1",
      "quantity": 1,
      "modifiers": ["no_onions", "medium_rare"],
      "notes": "Sauce à part"
    },
    {
      "menu_item_id": "fries_regular",
      "quantity": 1,
      "modifiers": [],
      "notes": ""
    }
  ]
}
```

#### Exemple de réponse

```json
{
  "order_id": "ord_38592",
  "status": "created",
  "created_at": "2023-09-15T14:32:45Z",
  "table_id": "12",
  "server_id": "server_3429",
  "items": [
    {
      "item_id": "itm_12948",
      "menu_item_id": "burger_1",
      "name": "Burger Classique",
      "quantity": 1,
      "unit_price": 12.50,
      "modifiers": ["no_onions", "medium_rare"],
      "notes": "Sauce à part",
      "status": "pending"
    },
    {
      "item_id": "itm_12949",
      "menu_item_id": "fries_regular",
      "name": "Frites Maison",
      "quantity": 1,
      "unit_price": 4.50,
      "modifiers": [],
      "notes": "",
      "status": "pending"
    }
  ],
  "subtotal": 17.00,
  "tax": 1.70,
  "total": 18.70
}
```

### API Paiements

L'API Paiements permet l'intégration transparente avec vos terminaux de paiement et systèmes financiers.

#### Endpoints principaux

| Endpoint | Méthode | Description |
|----------|---------|-------------|
| `/payments` | POST | Initie une nouvelle transaction de paiement |
| `/payments/{id}` | GET | Vérifie le statut d'un paiement |
| `/payments/{id}/refund` | POST | Traite un remboursement |
| `/payments/methods` | GET | Liste les méthodes de paiement disponibles |

#### Intégrations TPE supportées

Sotto s'intègre nativement avec les principaux fournisseurs de TPE :

- Adyen
- Stripe Terminal
- Sumup
- Ingenico
- Worldline

#### Flux de paiement typique

1. Le serveur demande vocalement à Sotto de préparer l'addition
2. Sotto génère l'addition via l'API Commandes
3. Le serveur indique la méthode de paiement souhaitée
4. Sotto initie la transaction via l'API Paiements
5. Le TPE connecté reçoit les informations et attend la carte
6. Une fois la transaction complétée, Sotto confirme vocalement au serveur
7. La commande est automatiquement marquée comme payée

### API Réservations

L'API Réservations permet une gestion intelligente de vos réservations et de l'attribution des tables.

#### Endpoints principaux

| Endpoint | Méthode | Description |
|----------|---------|-------------|
| `/reservations` | GET | Liste les réservations actuelles |
| `/reservations` | POST | Crée une nouvelle réservation |
| `/reservations/{id}` | GET | Obtient les détails d'une réservation |
| `/reservations/{id}` | PUT | Met à jour une réservation |
| `/reservations/{id}/status` | PATCH | Change le statut d'une réservation |
| `/tables/availability` | GET | Vérifie la disponibilité des tables |

#### Intégrations supportées

- TheFork / LaFourchette
- Resy
- OpenTable
- Zenchef
- Calendriers Google et Microsoft 365

### API Inventaire

L'API Inventaire permet de synchroniser les stocks et de gérer la disponibilité des produits.

#### Endpoints principaux

| Endpoint | Méthode | Description |
|----------|---------|-------------|
| `/inventory/items` | GET | Liste tous les articles en stock |
| `/inventory/items/{id}` | GET | Détails d'un article spécifique |
| `/inventory/items/{id}/stock` | PATCH | Met à jour le niveau de stock |
| `/inventory/alerts` | GET | Récupère les alertes de stock bas |
| `/inventory/movements` | POST | Enregistre un mouvement de stock |

## Webhooks

En plus des API traditionnelles, Sotto propose un système complet de webhooks pour permettre des intégrations événementielles en temps réel.

### Événements disponibles

- `order.created` - Nouvelle commande créée
- `order.updated` - Commande mise à jour
- `order.status_changed` - Changement de statut d'une commande
- `payment.completed` - Paiement finalisé
- `payment.failed` - Échec de paiement
- `reservation.created` - Nouvelle réservation
- `reservation.arrived` - Client arrivé
- `inventory.low_stock` - Alerte de stock bas

### Configuration des webhooks

Pour configurer vos webhooks, utilisez le portail développeur Sotto ou l'endpoint API suivant :

```
POST /api/v1/webhooks
{
  "event": "order.created",
  "target_url": "https://votreserveur.com/webhooks/sotto/orders",
  "secret": "votre_clé_secrète"
}
```

Chaque webhook inclut une signature HMAC pour vérifier l'authenticité de la requête.

## Environnements

Sotto propose trois environnements distincts pour faciliter votre développement :

1. **Sandbox** - Pour les tests initiaux sans impact sur les données réelles
2. **Staging** - Pour les tests d'intégration avec des données réelles mais sans impact opérationnel
3. **Production** - Environnement de production sécurisé

Chaque environnement dispose de ses propres clés d'API et configurations.

## Limites et performances

Pour garantir la stabilité du système, les limites suivantes s'appliquent :

| Ressource | Limite (par minute) |
|-----------|---------------------|
| Requêtes API | 500 |
| Webhooks | 100 |
| Taille maximale de payload | 5 MB |
| Connexions simultanées | 25 |

Notre SLA garantit une disponibilité de 99,9% et un temps de réponse inférieur à 200ms pour 95% des requêtes.

## Outils de développement

### SDK disponibles

Pour simplifier vos intégrations, nous proposons des SDK dans les langages suivants :

- JavaScript/TypeScript (Node.js)
- Python
- PHP
- Ruby
- Java
- .NET (C#)

### Environnement de test

Notre console développeur inclut :

- Une interface interactive pour tester les requêtes API
- Des logs détaillés des appels récents
- Un simulateur de webhooks
- Des exemples de code pour chaque endpoint

## Procédure d'intégration

1. **Inscription** - Créez votre compte développeur sur le portail Sotto
2. **Configuration** - Définissez vos environnements et générez vos clés API
3. **Développement** - Utilisez nos SDK et la documentation pour développer votre intégration
4. **Tests** - Validez votre intégration dans l'environnement sandbox
5. **Certification** - Soumettez votre intégration pour validation par notre équipe
6. **Déploiement** - Passez en production avec notre accompagnement

## Conclusion

Les API Sotto ont été conçues pour offrir une flexibilité maximale tout en maintenant la simplicité qui caractérise notre approche. Elles vous permettent d'intégrer harmonieusement notre système vocal IA dans votre écosystème existant, sans rupture ni complexité inutile.

Notre équipe d'intégration est disponible pour vous accompagner à chaque étape du processus, fidèle à notre engagement d'offrir une expérience fluide et humaine.

---

### Prochaines étapes

- **Accédez au portail développeur** : [dev.sottosystem.com](https://dev.sottosystem.com)
- **Consultez nos exemples d'intégration** : [github.com/sottosystem/integration-examples](https://github.com/sottosystem/integration-examples)
- **Rejoignez notre communauté de développeurs** : [community.sottosystem.com](https://community.sottosystem.com)

Pour toute question spécifique sur nos API, notre équipe d'assistance technique est disponible par email à [api-support@sottosystem.com](mailto:api-support@sottosystem.com) ou par chat sur notre portail développeur.