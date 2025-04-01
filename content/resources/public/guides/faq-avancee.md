# FAQ avancée

## Introduction

Bienvenue dans notre FAQ avancée, conçue pour répondre aux questions techniques et opérationnelles les plus pointues concernant le système Sotto. Ce guide approfondi va au-delà des questions de base pour aborder les aspects techniques, les scénarios complexes et les optimisations avancées que vous pourriez rencontrer en utilisant notre solution vocale IA dans votre établissement. Que vous soyez un restaurateur expérimenté cherchant à affiner votre utilisation du système ou un nouveau client avec des interrogations spécifiques, ce document vous fournira des réponses détaillées et des conseils pratiques pour tirer le meilleur parti de Sotto.

## Aspects techniques

### Comment Sotto gère-t-il les environnements particulièrement bruyants ?

Notre système utilise une combinaison de technologies avancées pour garantir une performance optimale même dans les environnements les plus bruyants :

- **Filtrage audio adaptatif** : Les algorithmes de Sotto s'ajustent automatiquement au niveau de bruit ambiant de votre établissement.
- **Micros directionnels** : Nos oreillettes captent principalement la voix de la personne qui les porte, minimisant les sons environnants.
- **IA de suppression de bruit** : Un traitement en temps réel élimine les bruits de fond typiques d'un restaurant (vaisselle, conversations, musique).
- **Apprentissage contextuel** : Le système s'améliore progressivement en s'adaptant aux spécificités acoustiques de votre établissement.

Pour les environnements extrêmement bruyants, nous recommandons l'utilisation de nos oreillettes premium à conduction osseuse, qui transmettent le son par vibration des os du crâne, rendant la communication claire même dans les cuisines les plus animées.

### Quelle est l'autonomie réelle des oreillettes et comment gérer leur charge ?

L'autonomie de nos oreillettes varie selon les modèles :

| Modèle | Autonomie en utilisation continue | Temps de charge |
|--------|-----------------------------------|-----------------|
| Sotto Lite | 6-7 heures | 45 minutes |
| Sotto Pro | 8-10 heures | 30 minutes |
| Sotto Ultra | 12-14 heures | 20 minutes |

Pour optimiser la gestion de la batterie dans un contexte de service continu, nous recommandons :

- Mettre en place un système de rotation des oreillettes pendant les périodes creuses
- Installer plusieurs stations de charge discrètes à des points stratégiques du restaurant
- Configurer les alertes de batterie faible à 20% pour avoir le temps de préparer un remplacement
- Utiliser la fonction "charge rapide" qui fournit 2 heures d'autonomie avec seulement 10 minutes de charge

### Comment se déroule l'intégration avec mon système de caisse existant ?

Sotto s'intègre avec la plupart des systèmes de caisse modernes grâce à notre architecture API ouverte. Le processus se déroule généralement comme suit :

1. **Évaluation technique** : Notre équipe analyse votre système actuel pour déterminer le type d'intégration nécessaire.
2. **Configuration des connecteurs** : Mise en place des connecteurs API appropriés (REST, GraphQL ou WebSockets selon votre système).
3. **Synchronisation des données** : Import de votre menu, structure des tables et comptes utilisateurs.
4. **Phase de test** : Période de validation où les deux systèmes fonctionnent en parallèle.
5. **Déploiement complet** : Activation de l'intégration complète après validation.

Pour les systèmes propriétaires ou plus anciens, nous proposons des solutions alternatives comme notre middleware d'intégration ou, dans certains cas, une migration vers notre système LEA POS pour une expérience entièrement intégrée.

## Opérations quotidiennes

### Comment gérer efficacement les modifications de commandes complexes ?

Sotto excelle dans la gestion des modifications de commandes grâce à sa compréhension contextuelle avancée. Voici comment gérer les scénarios complexes :

**Modification d'un élément spécifique dans une commande multiple :**
```
Serveur : "Modifie le plat de la table 7, remplace la sole meunière par un bar grillé, mais garde les mêmes accompagnements."

Sotto : "Modification enregistrée pour la table 7 : remplacement de la sole meunière par un bar grillé avec les mêmes accompagnements."
```

**Annulation partielle :**
```
Serveur : "Annule l'entrée de foie gras pour la table 12, mais garde le reste de la commande."

Sotto : "Entrée de foie gras annulée pour la table 12. Confirmation envoyée en cuisine."
```

Pour les modifications très complexes, utilisez la commande "détaille" pour une approche pas à pas :
```
Serveur : "Détaille la commande de la table 9."

Sotto : "Table 9 : une salade César, un tartare de bœuf cuisson bleue, un magret de canard cuisson à point, une bouteille de Bordeaux 2018."

Serveur : "Modifie le tartare pour une cuisson légèrement saisie et ajoute des frites à la place de la salade."

Sotto : "Modification enregistrée : tartare avec cuisson légèrement saisie, accompagné de frites au lieu de salade."
```

### Comment optimiser la coordination entre la salle et la cuisine ?

La coordination entre la salle et la cuisine est l'un des points forts de Sotto. Voici les meilleures pratiques pour l'optimiser :

- **Utiliser les statuts précis** : Encouragez votre équipe à utiliser des termes standardisés comme "en préparation", "prêt dans 5 minutes", "prêt au service" plutôt que des expressions vagues.

- **Activer les priorités intelligentes** : Le système peut être configuré pour hiérarchiser automatiquement les messages selon leur urgence :
  * Priorité haute : plats prêts, modifications urgentes
  * Priorité moyenne : questions, informations générales
  * Priorité basse : confirmations, statuts de routine

- **Créer des canaux dédiés** pour différentes sections :
  * Canal général pour tout le personnel
  * Canal cuisine pour la brigade
  * Canal salle pour les serveurs
  * Canaux privés pour communications spécifiques

- **Utiliser les alertes temporelles** pour les plats qui nécessitent un service immédiat :
  ```
  Chef : "Soufflé table 3 prêt, service immédiat requis."
  
  Sotto : [à tous les serveurs disponibles avec alerte sonore distinctive] "URGENT : Soufflé table 3 prêt pour service immédiat."
  ```

### Comment gérer les périodes de pointe avec Sotto ?

Durant les périodes de forte affluence, Sotto devient particulièrement précieux grâce à plusieurs fonctionnalités spécifiques :

1. **Mode Rush** : Activez-le en disant "Sotto, active le mode rush". Ce mode :
   - Raccourcit les confirmations vocales
   - Priorise automatiquement les communications
   - Active l'équilibrage dynamique des tâches

2. **Équilibrage de charge** : Le système répartit intelligemment les nouvelles tables entre les serveurs selon leur charge actuelle.

3. **Priorisation des tâches** : Sotto suggère un ordre optimal pour effectuer les différentes actions en attente.
   ```
   Serveur : "Sotto, prochaines actions ?"
   
   Sotto : "Suggestions : 1. Servir entrées table 8 (prêtes depuis 2 min), 2. Prendre commande table 12 (en attente depuis 4 min), 3. Apporter addition table 5 (demandée il y a 1 min)."
   ```

4. **Communication optimisée** : En période de rush, activez le mode "communication critique uniquement" qui filtre les messages non essentiels.

## Dépannage et situations exceptionnelles

### Que faire en cas de panne WiFi ou de problème de connectivité ?

Sotto est conçu avec la résilience en tête. En cas de problème de connectivité :

1. **Mode hors-ligne automatique** : Le système bascule automatiquement en mode local, stockant les commandes sur les appareils.

2. **Synchronisation différée** : Dès que la connexion est rétablie, toutes les données sont synchronisées sans intervention manuelle.

3. **Procédure de secours** :
   - Utilisez l'application mobile Sotto en mode local
   - Connectez-vous au réseau de secours 4G si disponible
   - Pour les pannes prolongées, le système peut fonctionner via le point d'accès d'un smartphone

4. **Kit de secours** : Nous recommandons de garder un petit routeur 4G de secours dans votre établissement, que nous pouvons fournir et préconfigurer pour votre système.

### Comment gérer les situations exceptionnelles comme les allergies graves ou les urgences ?

Sotto dispose d'un mode prioritaire pour les situations critiques :

- **Commande "Urgence"** : En prononçant "Sotto, urgence" suivi de la situation, vous activez un protocole spécial :
  ```
  Serveur : "Sotto, urgence, allergie aux fruits de mer table 14."
  
  Sotto : [Alerte simultanée à tout le personnel concerné] "URGENCE : Allergie aux fruits de mer signalée table 14. Attention requise en cuisine et en salle."
  ```

- **Protocoles prédéfinis** : Vous pouvez configurer des protocoles spécifiques pour différentes situations d'urgence qui seront automatiquement déclenchés.

- **Mode discret** : Pour les situations délicates nécessitant une intervention sans alarmer les clients :
  ```
  Serveur : "Sotto, code calme, client agité table 3."
  
  Sotto : [Au manager uniquement, ton calme] "Attention requise table 3, client agité. Intervention discrète recommandée."
  ```

## Personnalisation et optimisation

### Comment personnaliser Sotto pour mon concept de restaurant spécifique ?

Sotto offre plusieurs niveaux de personnalisation pour s'adapter parfaitement à votre établissement :

- **Personnalisation du vocabulaire** : Ajoutez votre terminologie spécifique, noms de plats uniques ou expressions propres à votre établissement.

- **Ajustement des flux de travail** : Configurez des séquences personnalisées adaptées à votre style de service (service à la française, à l'anglaise, etc.).

- **Voix et ton** : Choisissez parmi plusieurs voix ou personnalisez le ton et le style de communication.

- **Intégration de votre identité** : Incorporez le nom de votre établissement dans les interactions :
  ```
  Serveur : "Table 5 prête pour la commande."
  
  Sotto : "Bienvenue au [Nom de votre restaurant]. Table 5 prête pour la prise de commande."
  ```

- **Règles métier personnalisées** : Créez des automatismes spécifiques, comme suggérer automatiquement certains accords mets-vins ou rappeler des spécificités de service pour certains plats.

### Quelles sont les meilleures pratiques pour former une nouvelle équipe à Sotto ?

Pour une adoption réussie de Sotto par votre personnel, nous recommandons cette approche progressive :

1. **Phase d'introduction** (1-2 jours)
   - Formation en petit groupe hors service
   - Exercices pratiques simples
   - Familiarisation avec les commandes de base

2. **Phase d'accompagnement** (3-5 jours)
   - Utilisation pendant les services calmes
   - Présence d'un formateur Sotto
   - Débriefings quotidiens pour ajustements

3. **Phase d'autonomie** (semaine 2)
   - Utilisation complète avec support à distance
   - Introduction progressive des fonctionnalités avancées
   - Identification des "champions" internes

4. **Phase d'optimisation** (à partir de la semaine 3)
   - Personnalisation fine selon les retours d'équipe
   - Formation aux fonctionnalités avancées
   - Mise en place des meilleures pratiques spécifiques

Nous proposons également des modules de formation en ligne accessibles à tout moment pour le perfectionnement continu et l'intégration de nouveaux employés.

## Conclusion

Cette FAQ avancée couvre les aspects les plus techniques et opérationnels de Sotto, mais notre système évolue constamment pour s'adapter aux besoins des restaurateurs. Si vous avez des questions qui ne trouvent pas réponse ici, n'hésitez pas à contacter notre équipe support disponible 24/7 via l'application ou par téléphone.

Sotto est conçu pour s'intégrer naturellement dans votre établissement, en valorisant l'humain et l'expérience culinaire plutôt que la technologie elle-même. Notre objectif est que le système devienne un assistant discret mais puissant, vous permettant de vous concentrer sur ce qui compte vraiment : offrir une expérience gastronomique exceptionnelle à vos clients.

---

**Besoin d'une assistance personnalisée ?**  
Programmez une session de consultation technique avec l'un de nos experts en utilisant le calendrier disponible dans votre espace client ou contactez-nous à support@sotto.ai.

**Prêt à aller plus loin ?**  
Découvrez nos modules complémentaires et les nouvelles fonctionnalités en développement dans la section "Innovations" de votre tableau de bord.