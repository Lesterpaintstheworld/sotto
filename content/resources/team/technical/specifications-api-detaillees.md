# Spécifications API

## Introduction

Ce document détaille l'architecture et les interfaces API du système Sotto, permettant l'intégration avec les systèmes externes essentiels au fonctionnement d'un restaurant moderne. Notre approche API-first garantit une interopérabilité fluide avec les terminaux de paiement électronique (TPE), les systèmes de réservation, les plateformes de livraison, et d'autres services tiers, tout en maintenant notre engagement pour une expérience utilisateur sans friction.

L'écosystème Sotto repose sur une architecture centralisée où l'interface vocale interagit avec de multiples services via des API robustes et sécurisées. Ce document sert de référence technique pour l'équipe de développement interne et les partenaires d'intégration potentiels.

## Principes fondamentaux

### Architecture générale

Sotto utilise une architecture RESTful pour la majorité des intégrations, complétée par des connexions WebSocket pour les communications en temps réel. Notre infrastructure est conçue selon les principes suivants:

- **Simplicité** — Interfaces intuitives et documentation claire
- **Cohérence** — Patterns d'API uniformes à travers tous les endpoints
- **Sécurité** — Authentification robuste et chiffrement des données
- **Évolutivité** — Capacité à évoluer sans rupture de compatibilité
- **Observabilité** — Monitoring et logging complets

### Authentification et sécurité

Toutes les API Sotto utilisent OAuth 2.0 avec JWT (JSON Web Tokens) pour l'authentification:

| Méthode | Description | Utilisation recommandée |
|---------|-------------|-------------------------|
| Client Credentials | Pour les communications système à système | Intégrations TPE, systèmes de stock |
| Authorization Code | Pour les applications agissant au nom d'un utilisateur | Applications partenaires, dashboards externes |
| Device Flow | Pour les appareils avec capacités d'entrée limitées | Terminaux de paiement, appareils IoT |

Les tokens d'accès ont une durée de vie limitée (1 heure) et doivent être renouvelés via refresh tokens. Toutes les communications API utilisent TLS 1.3 pour le chiffrement en transit.

## Endpoints API principaux

### Core API

La Core API constitue l'interface principale pour les opérations fondamentales du restaurant.

```
Base URL: https://api.sotto.io/v1
```

#### Gestion des commandes

| Endpoint | Méthode | Description |
|----------|---------|-------------|
| `/orders` | GET | Liste des commandes actives |
| `/orders` | POST | Création d'une nouvelle commande |
| `/orders/{id}` | GET | Détails d'une commande spécifique |
| `/orders/{id}` | PATCH | Mise à jour partielle d'une commande |
| `/orders/{id}/items` | POST | Ajout d'items à une commande |
| `/orders/{id}/status` | PUT | Modification du statut d'une commande |

Exemple de requête pour créer une commande:

```json
POST /orders
{
  "table_id": "12",
  "server_id": "server_789",
  "items": [
    {
      "menu_item_id": "burger_01",
      "quantity": 1,
      "modifications": ["sans oignon", "cuisson saignante"]
    },
    {
      "menu_item_id": "pizza_veg",
      "quantity": 1,
      "modifications": ["sans oignons"]
    }
  ],
  "beverages": [
    {
      "menu_item_id": "vin_rouge_maison",
      "quantity": 2
    }
  ]
}
```

#### Gestion des tables

| Endpoint | Méthode | Description |
|----------|---------|-------------|
| `/tables` | GET | Liste des tables du restaurant |
| `/tables/{id}/status` | PUT | Mise à jour du statut d'une table |
| `/tables/{id}/orders` | GET | Commandes associées à une table |
| `/tables/{id}/bill` | POST | Génération de l'addition pour une table |
| `/tables/{id}/split` | POST | Division de l'addition |

#### Gestion des menus

| Endpoint | Méthode | Description |
|----------|---------|-------------|
| `/menu` | GET | Menu complet actuel |
| `/menu/categories` | GET | Catégories du menu |
| `/menu/items` | GET | Tous les items du menu |
| `/menu/items/{id}` | GET | Détails d'un item spécifique |
| `/menu/availability` | PUT | Mise à jour de la disponibilité des items |

### Payments API

L'API de paiements gère toutes les transactions financières et l'intégration avec les TPE.

```
Base URL: https://payments.sotto.io/v1
```

#### Transactions

| Endpoint | Méthode | Description |
|----------|---------|-------------|
| `/transactions` | POST | Initier une transaction |
| `/transactions/{id}` | GET | Statut d'une transaction |
| `/transactions/{id}/capture` | POST | Capturer une transaction préautorisée |
| `/transactions/{id}/refund` | POST | Rembourser une transaction |
| `/transactions/daily` | GET | Résumé des transactions du jour |

#### Intégration TPE

| Endpoint | Méthode | Description |
|----------|---------|-------------|
| `/terminals` | GET | Liste des terminaux connectés |
| `/terminals/{id}/status` | GET | Statut d'un terminal |
| `/terminals/{id}/payment` | POST | Envoyer une requête de paiement au terminal |
| `/terminals/{id}/cancel` | POST | Annuler l'opération en cours sur le terminal |

Exemple d'intégration avec un terminal de paiement:

```json
POST /terminals/term_456/payment
{
  "amount": 7850,
  "currency": "EUR",
  "order_id": "order_123",
  "payment_method": "card_present",
  "capture_method": "automatic",
  "metadata": {
    "table_id": "12",
    "server_id": "server_789"
  }
}
```

### Reservations API

L'API de réservations permet l'intégration avec divers systèmes de réservation.

```
Base URL: https://reservations.sotto.io/v1
```

| Endpoint | Méthode | Description |
|----------|---------|-------------|
| `/reservations` | GET | Liste des réservations |
| `/reservations` | POST | Créer une réservation |
| `/reservations/{id}` | GET | Détails d'une réservation |
| `/reservations/{id}` | PUT | Modifier une réservation |
| `/reservations/{id}/status` | PATCH | Modifier le statut d'une réservation |
| `/availability` | GET | Vérifier la disponibilité |

### Delivery Platforms API

Interface pour l'intégration avec les plateformes de livraison (Uber Eats, Deliveroo, etc.).

```
Base URL: https://delivery.sotto.io/v1
```

| Endpoint | Méthode | Description |
|----------|---------|-------------|
| `/platforms` | GET | Plateformes configurées |
| `/platforms/{id}/orders` | GET | Commandes d'une plateforme |
| `/platforms/{id}/menu` | PUT | Synchroniser le menu |
| `/platforms/{id}/status` | PUT | Mettre à jour le statut (ouvert/fermé) |
| `/webhooks` | POST | Point d'entrée pour les webhooks des plateformes |

## WebSockets API

Pour les communications en temps réel, Sotto utilise des WebSockets sécurisés.

```
WebSocket URL: wss://realtime.sotto.io/v1
```

### Canaux disponibles

| Canal | Description |
|-------|-------------|
| `orders` | Mises à jour en temps réel des commandes |
| `kitchen` | Communications avec la cuisine |
| `tables` | Statut des tables et notifications |
| `staff` | Communications entre le personnel |
| `terminals` | Événements des terminaux de paiement |

Exemple de souscription à un canal:

```javascript
// Connexion au WebSocket
const socket = new WebSocket('wss://realtime.sotto.io/v1');

// Authentification
socket.send(JSON.stringify({
  type: 'authenticate',
  token: 'jwt_token_here'
}));

// Souscription au canal des commandes
socket.send(JSON.stringify({
  type: 'subscribe',
  channel: 'orders'
}));

// Écoute des événements
socket.onmessage = (event) => {
  const data = JSON.parse(event.data);
  console.log('Nouvel événement:', data);
};
```

## Webhook Events

Sotto peut envoyer des notifications via webhooks pour les événements importants:

| Événement | Description |
|-----------|-------------|
| `order.created` | Nouvelle commande créée |
| `order.updated` | Commande mise à jour |
| `order.completed` | Commande terminée |
| `payment.succeeded` | Paiement réussi |
| `payment.failed` | Échec de paiement |
| `reservation.created` | Nouvelle réservation |
| `inventory.low` | Alerte de stock bas |

Pour configurer un webhook, utilisez l'endpoint:

```
POST /webhooks
{
  "url": "https://your-server.com/webhook",
  "events": ["order.created", "payment.succeeded"],
  "secret": "your_webhook_signing_secret"
}
```

## Intégration avec LEA POS

L'intégration avec le système de caisse LEA POS est native et utilise des API privées avec des privilèges étendus:

| Endpoint | Méthode | Description |
|----------|---------|-------------|
| `/pos/sync` | POST | Synchronisation bidirectionnelle avec LEA POS |
| `/pos/transactions` | GET | Transactions enregistrées dans LEA POS |
| `/pos/reports` | GET | Rapports financiers et analytiques |

## Gestion des erreurs

Toutes les API Sotto utilisent des codes HTTP standards et retournent des réponses d'erreur structurées:

```json
{
  "error": {
    "code": "invalid_order_status",
    "message": "Impossible de modifier une commande déjà complétée",
    "status": 400,
    "details": {
      "order_id": "order_123",
      "current_status": "completed",
      "requested_status": "in_progress"
    }
  }
}
```

## Limites de taux et pagination

Pour assurer la stabilité du système, des limites de taux sont appliquées:

| Type d'API | Limite standard | Limite premium |
|------------|-----------------|----------------|
| Core API | 100 req/min | 500 req/min |
| Payments API | 60 req/min | 300 req/min |
| Reservations API | 30 req/min | 150 req/min |
| WebSockets | 10 conn/min | 50 conn/min |

La pagination est implémentée sur tous les endpoints retournant des collections:

```
GET /orders?limit=25&after=order_789
```

## Environnements

| Environnement | Base URL | Description |
|---------------|----------|-------------|
| Sandbox | `https://sandbox-api.sotto.io` | Pour le développement et les tests |
| Production | `https://api.sotto.io` | Environnement de production |

## Conclusion

Les API Sotto sont conçues pour offrir une intégration fluide et robuste avec l'écosystème technologique du restaurant moderne. Elles constituent la colonne vertébrale technique permettant à notre interface vocale de communiquer efficacement avec tous les systèmes essentiels, tout en maintenant notre engagement pour une expérience sans écran.

Pour commencer l'intégration:

1. Contactez l'équipe technique pour obtenir vos identifiants d'API
2. Explorez l'environnement sandbox pour vous familiariser avec les endpoints
3. Utilisez notre SDK JavaScript pour accélérer le développement
4. Consultez notre [documentation interactive](https://developers.sotto.io) pour des exemples détaillés

L'équipe technique Sotto est disponible pour accompagner tout projet d'intégration et répondre aux questions spécifiques via notre canal Slack dédié.