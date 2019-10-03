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

Depois disso vem o ultimo passo, rodar o comando abaixo:
```
$ sudo docker-compose up
```

### Atenção
> Pode ser que a primeira vez que vc rodar o docker-compose a aplicação não consiga se conectar. (não implementei retry para conexão com o mongo) mas facilmente você pode rodar o comando abaixo
```
$ sudo docker-compose stop
$ sudo docker-compose up
```

# Contribuição
Caso sentir que possa contribuir de alguma forma para este projeto, sinta-se a vontade para realizar o Fork e o Pull Request. Antes de mais nada seria interessante debatermos através de uma Issue. Divirta-se! :rocket: