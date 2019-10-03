# Semana Omnistack Rocketseat versão 9 - Especial Ultima do Ano

Projeto backend para a aplicação Aircnc


# Instalação
Primeiramente instale as dependencias do projeto com o seguinte comando:

```
$ yarn install
```
ou

```
$ npm install
```

Após o passo acima, certifique-se de que tenha o docker e docker-compose instalado em sua máquina.
Depois você deverá conectar ao mongo e criar um database chamado
> omnistack-oliveira

Para isso, inicie o docker (e não se preocupe se o container app_1 emitir erro)
```
$ sudo docker-compose up
```

Depois utilize algum cliente para mongodb, por exemplo: [Robot3T](https://robomongo.org/download)

No Robot3T realize as seguintes operações para conexão:
1. Na aba **Connection** faça:
  - type = Direct Connection
  - name = Mongo Localhost
  - address = localhost
  - port = 27017

2. Na Aba **Authentication** faça:
  - Habilite a opção = Perform authentication
  - Database = admin
  - User name = oliveira
  - Password = oliveira1234
  - Auth Mechanism = SCRAM-SHA-1
3. Realize a conexão
4. Clique com o botão direito no nome da sua conexão **"Mongo Localhost"** e clique em Create database
5. Dê o nome de omnistack-oliveira
6. Pronto!


### Atenção
> Pode ser que a primeira vez que vc rodar o docker-compose a aplicação não consiga se conectar. (não implementei retry para conexão com o mongo) mas facilmente você pode rodar o comando abaixo
```
$ sudo docker-compose stop
$ sudo docker-compose up
```

# Contribuição
Caso sentir que possa contribuir de alguma forma para este projeto, sinta-se a vontade para realizar o Fork e o Pull Request. Antes de mais nada seria interessante debatermos através de uma Issue. Divirta-se! :rocket: