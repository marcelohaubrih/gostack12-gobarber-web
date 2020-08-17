# Funcionando

#### Gerando a Imagem
`sudo docker build -t mhcoyote/web_gobarber:latest .`

#### Rodando o Docker
`sudo docker run -it -v ${PWD}:/app -v /app/node_modules -p 3000:3000 --rm mhcoyote/web_gobarber:latest `




##### Criar a imagem de produção

`docker build -f Dockerfile-prod -t sample:prod . `

##### Ativar a imagem de produção

`docker run -it -p 8080:80 --rm sample:prod `

##### Ativar o container por yml

`docker-compose -f docker-compose-prod.yml up -d --build`

##### Para iniciar o ambiente de desenvolvimento utilize:

`./run-app-deploy.sh --dev`

##### Para realizar o deploy em ambiente de desenvolvimento utilize:

`./run-app-deploy.sh --prod`




