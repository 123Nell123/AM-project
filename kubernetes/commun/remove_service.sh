#!/bin/bash

# Récupérer la liste des services
services=$(kubectl get services --no-headers -o custom-columns=":metadata.name")

# Vérifier si des services existent
if [ -z "$services" ]; then
  echo "Aucun service trouvé."
else
  # Supprimer chaque service
  for service in $services; do
    echo "Suppression du service : $service"
    kubectl delete service "$service"
  done

  echo "Tous les services ont été supprimés."
fi
