const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const os =require('os');
const promBundle = require("express-prom-bundle");

// Add the options to the prometheus middleware most option are for http_request_duration_seconds histogram metric
const metricsMiddleware = promBundle({
  includeMethod: true, 
  includePath: true, 
  includeStatusCode: true, 
  includeUp: true,
  customLabels: {project_name: 'hello_world', project_type: 'test_metrics_labels'},
  promClient: {
      collectDefaultMetrics: {
      }
    }
});
app.use(metricsMiddleware);
app.use(cors());

app.get('/', (req, res) => {

  res.send({ "message": "Hello World"});
});

sabotage=false;
app.get('/health', (req, res) => {
if(sabotage==true)
{
  res.status(500).send(`Simulated error on ${os.hostname()}`);
}
else{
  res.send(`Health check passed on ${os.hostname()}`);
}
});

app.get('/sabotage', (req, res) => {
  sabotage=true;
  res.send("sabotage actif");
})


app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});



//pt d'entree reponse "isalive" avec 1 erreur toutes les 100S


// rolling update  /upgrade k8S  //#red pill blue pill
//interruption de service pdt les montee de version -appli web non intialisee