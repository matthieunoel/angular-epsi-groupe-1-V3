# angular-epsi-groupe-1-avcmkm

Je suis allé jusqu'à l'exercice 7. Vous pourrez retrouver différentes releases correspondantes aux différents exercices.

## Notes

Ce projet a été crée à partir d'un projet Angular existant ([StackBlitz ⚡️](https://stackblitz.com/edit/angular-epsi-groupe-1)).

Le but a été de suivre différents exercices donnés lors du cours de Mr. EYRE en 2021 à l'ecole EPSI LYON, classe B3Dev2.

Vous pouvez executer ce projet sur StackBlitz via ce [lien](https://stackblitz.com/github/matthieunoel/angular-epsi-groupe-1-V3).

## Consignes :

1 : ajouter des notifications pour l'utilisateur
avec snackbar : https://material.angular.io/components/snack-bar/examples
quand il n'a pas le droit d'accéder à la page
quand il modifie son profil
quand il se déconnecte
astuce : utiliser le then() de la la fonction navigate()
quand il n'a pas le droit d'accéder à une page

2 : faire la landing page ( dans le module Auth )
avec des liens ( boutons ) vers la page login et la page d'inscription et un message de bienvenue

3 : partie admin
créer un module admin ( en lazy loading )
créer une page d'accueil admin ( avec juste un message qui dit "bienvenue dans l'admin" pour le moment )
adapter la navigation pour rendre le dash accessible à tous les utilisateurs connectés et la partie admin uniquement accessible aux admins

4 : gestion des tags
sur la page admin : créer un tableau ( Material ) qui servira à afficher les domaines d'apprentissage ( tags )
récupérer les domaines d'apprentissage dans le tableau et afficher le nom et la popularité ( la donnée "iteration" transmise dans l'objet Tag )
à partir de l'api ( get ) : https://api.wecolearn.com/api/admin/tags
ajouter la pagination
ajouter une option pour filtrer les données

5 : suppression du tag
ajouter un bouton ( regarder mat-icon ) sur chaque ligne qui permet de supprimer un tag
avec l'api : admin/tag/{id} (delete)

6 : créer un formulaire de création de tag
avec un unique champ : 'name'
avec l'api : admin/tag ( post ) qui accepte un objet {name: string}

7 : faire en sorte que le tableau se met à jour après chaque action ( delete, create )
