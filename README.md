## Desafio proxy reverso nginx

### Descrição :

Você ira perceber que dentro da pasta ./nginx temos o arquivo `default.conf` no proxy_pass tive que utilizar meu ip da vm da WSL2, porem irei subir com o localhost setado.

A porta padrão que estou exportando do nodejs é 3333


## `correção`
Realizei o volume anonimo para nao sobreescrever a pasta node_modules, e realizei o dockerize da dependencia do container do mysql.
O link do proxy preenchi com o nome do container.
