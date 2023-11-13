# Regas

:brazil: Aplicação web para gerenciamento de um posto de gasolina que atende a motoristas.

:us: Web Application to manage a Gas Station serving drivers.

## Tecnologias e frameworks/Technologies and frameworks

- Next.js
- NestJS
- Postgres
- Prisma(ORM)
- Docker

## Sobre/About

:brazil: O aplicativo deve permitir aos motoristas aderentes a um determinado posto de gasolina, que eles possam registrar um abastecimento e consultar seu histórico de abastecimentos.

Levando em consideração o ambiente urbano ao qual o contexto do aplicativo está inserido, inicialmente a aplicação foi projetada utilizando o conceito de Mobile First, garantindo uma melhor experiência à usuários de dispositivos móveis, já que os próprios dispositivos em si oferecem uma maior praticidade aos motoristas.

:us: The application must allow drivers attached to a specific gas station to register a fill-up and consult their fill-up history.

Taking into account the urban environment in which the application context is inserted, initially the application was designed using the Mobile First concept, guaranteeing a better experience for users of mobile devices, as the devices themselves offer greater convenience to drivers.

## Configurando o ambiente/Configuring the environment

### Pré-requisitos/Requirements

- Node.js
- Docker

### Configurando o back-end/Setting up the back-end

:brazil: Entre na pasta `regas-api` e execute os seguintes comandos:

:us: Go into `regas-api` folder and execute the following commands:

```bash
cp .env.example .env

sudo docker compose build --no-cache
```

:brazil: Após o Docker terminar o build, execute o seguinte comando para levantar o ambiente:

:us: After Docker complete the build, execute the following command to run the environment:

```bash
docker compose up

#Detached mode: Run containers in the background
docker compose up -d
```

### Executando o front-end/Running the front-end

:brazil: Entre na pasta `regas` e execute os seguintes comandos:

:us: Go into `regas` folder and execute the following commands:

```bash
docker build -t regas-app .
```

:brazil: Após o Docker terminar o build, execute o seguinte comando para levantar a aplicação:

:us: After Docker complete the build, execute the following command to run the web application:

```bash
docker run -p 3000:3000 regas-app
```

:brazil: Agora você pode acessar a aplicação completa através do `http://localhost:3000`

:us: Now you can access the full application through `http://localhost:3000`
