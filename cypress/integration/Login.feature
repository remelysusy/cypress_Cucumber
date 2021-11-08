Feature: Login

 Como usuario , desejo utilizar o backoffice Kuru
 para controle dos pedidos do meu estabelecimento

 Scenario: Realizar Login no Kuru
    Given que eu acesso o Kuru
    And  acesso a tela de Login
    When informo o usuario User e a senha ###
    And clico em Logar
    Then devo obter o resultado "'Olá bem vindo de volta'"