deployement k8S
```shell
kubectl run "mon-deployment" --image=api --port=3000

```

# k8s
## build
docker build -t api .
## deploy
```
kubectl apply -f k8s_deployement.yml
<!-- kubectl create deployment api --image=api:latest -->
* verif *
kubectl get nodes
kubectl get deployments
kubectl describe pod "mon_pod"
```

## expose
    kubectl apply -f k8s-service.yml
    ```
kubectl create deployment api --image=api:latest
* verif *
kubectl get nodes
kubectl get deployments
kubectl describe pod "mon_pod"
```

## scale replicas
    
    ```
 kubectl scale -f backdemoAM/6demoAM/k8s_deployment.yml --replicas=2
 ```


#### prometheus
kubectl create namespace monitoring
kubectl create -f clusterRole.yaml
kubectl create -f config-map.yaml
kubectl create  -f prometheus-deployment.yaml  --namespace=monitoring
kubectl get deployments --namespace=monitoring
kubectl create -f prometheus-service.yaml --namespace=monitoring