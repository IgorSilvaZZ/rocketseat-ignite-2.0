# App

GymPass style app.

## RFs (Requisitos Funcionais)

- [ ] Deve ser possivel se cadastrar;
- [ ] Deve ser possivel e autenticar;
- [ ] Deve ser possivel obter o perfil de um usuario logado;
- [ ] Deve ser possivel obter um numero de check-ins realizados pelo usuarios logado;
- [ ] Deve ser possivel o usuario obter seu historico de check-ins;
- [ ] Deve ser possivel o usuarios buscar academias proximas;
- [ ] Deve ser o possivel o usuario buscas academias pelo nome;
- [ ] Deve ser possivel o usuario realizar check-in em uma academia;
- [ ] Deve ser possivel validar o check-in de um usuario;
- [ ] Deve ser cadastrar academia;

## RNs (Regras de Negocios)

- [ ] O usuario nao deve poder se cadastrar com um e-mail duplicado;
- [ ] O usuario não pode fazer 2 check-ins no mesmo dia;
- [ ] O usuario nao pode fazer check-in se nao estiver pelo menos 100 metros da academia;
- [ ] O check-in só pode ser validado até 20 minutos apos criado;
- [ ] O check-in só pode ser validado por um administrador;
- [ ] A academia só pode ser cadastrado por um usuario adminstrador;

## RNFs (Requisitos não-funcionais)

- [ ] A senha do usuario precisa estar criptografada;
- [ ] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [ ] Todas as listas de dados precisam estar paginadas com 20 itens por página;
- [ ] O usuario deve ser identificado por um JWT (JSON Web Token);
