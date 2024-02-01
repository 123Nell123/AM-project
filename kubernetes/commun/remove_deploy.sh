#!/bin/bash

# Récupérer la liste des déploiements
deployments=$(kubectl get deployments --no-headers -o custom-columns=":metadata.name")

# Vérifier si des déploiements existent
if [ -z "$deployments" ]; then
  echo "Aucun déploiement trouvé."
else
  # Supprimer chaque déploiement
  for deployment in $deployments; do
    echo "Suppression du déploiement : $deployment"
   # kubectl delete deployment "$deployment"
  done

  echo "Tous les déploiements ont été supprimés."
fi
