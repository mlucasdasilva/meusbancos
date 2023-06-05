


## Configuração de Virtual Memory para aplicações que usam elasticsearch
 
Para uso do elasticsearch a configuração de vm.max_map_count precisa ser aumentada para um mínimo de 262144


Alteração dinâmica:

    sysctl -w vm.max_map_count=262144


Alteraçao definitiva:

    vi /etc/sysctl.conf

Incluir:

    # Requisito elasticsearch: vm.max_map_count=262144
    vm.max_map_count=262144


Para consultar valor atual em uso:

    sysctl vm.max_map_count



## Configuração de ulimits no SWARM para aplicações que usam elasticsearch
 

Para uso do elasticsearch muitas vezes é solicitada a seguinte configuração do docker-compose.yml:

    services:
        elasticsearch:
            environment:
    ...
              - bootstrap.memory_lock=true
    ...      ulimits:
                 memlock:
                     soft: -1
                     hard: -1

Estes parâmetros são reconhecidos pelo "docker-compose up" mas NÃO funcionam no docker swarm.

No docker swarm as configurações de ulimits do arquivo docker-compose.yml são ignoradas e passam a ser utilizadas as configurações do daemon do docker do host específico. Caso queira utilizar ulimits no docker swarm, uma alternativa é configura os parâmetros do próprio daemon do docker, que passarão a ser o default de qualquer container. Para isto é necessário incluir a configuração abaixo no arquivo "/etc/docker/daemon.json" e restartar o serviço docker.

    vi /etc/docker/daemon.json

Texto para editar/incluir:

    "default-ulimits": {
        "memlock": {
            "Name": "memlock",
            "Hard": -1,
            "Soft": -1
        }
    },
 

Obs.: Atenção para as virgulas de separação, pois se for incluído com ultimo elemento do arquivo não deve conter virgula ao final.
