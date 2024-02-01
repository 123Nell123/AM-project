# demo A-M
## objet 

le but est de mettre en pratique sur une API qui repond "helloworld" 
les mises pratiques de Ci/CD

## guide du développeur
**prerequis**
installer node.js v18 ou plus
```shell
git clone https://github.com/123Nell123/AM_devops.git
cd AM_devops/backdemoAM
npm install
npm run start
```
## guide de deployement 

**prerequis**
construire l'image docker
```shell
cd AM_devops/backdemoAM
docker build -t api .
```

test de l'image
```shell
docker run -it --rm -p 3000:3000 api
```



**planning projet**
MVP
- [x] serveur back basique
- [x]  deployement k8S
- [x] k8s: container hello-world
- [x] k8s:exposer l'appli
- [x] health-check (probes avec k8S)
- [x] config low-balancer
- [x] workflow de github CI: buildé image docker
- [ ] deployement continu (en cours)
  

Bonus
- [x]  simu de panne
- [ ] Collecte des metrics (en cours)
- [ ]  environnement cloud workflow de github CI( testé ; publication)
- [ ] variabilisé l'environnement (..)
- [ ]  swagger-ui-express 
