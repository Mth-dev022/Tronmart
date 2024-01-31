<h1 align="center" > # Tronmart E-commerce </h1>
<br>
<p align="center">
    
<img width="400px" height="400px" src="assets/Divulgation images/area-print.png ">

</p>

<p align="center">
    
<img width="400px" height="300px" src="img/todasTarefas.png" >
<img width="400px" height="300px" src="img/atualizar.png">

</p>

#  📝 Descrição do projeto

<p>
No nosso dia a dia as vezes temos tantas tarefas a fazer, que é necessário uma boa organização do nosso tempo para conseguirmos fazer tudo.
Para isso foi criado este sistema. Um "CRUD" feito em PHP e MySQL, para listagem de tarefas de uma forma super organizada para aumentar sua  produtividade no dia a dia.
</p>

## Iniciando/Configurando banco de dados

Neste projeto foi usado o "Xampp" (Apache, MySql, PHP, Perl) para acesso ao Local-Host e ao sistema gerenciador de banco de dados. E o objeto nativo "PDO" do PHP para conexão com o banco de dados da aplicação. Segue tutorial:

Conectar a um banco de dados utilizando o objeto PDO (PHP Data Objects) é uma abordagem segura e eficiente para interagir com bancos de dados em PHP. O PDO oferece uma camada de abstração que suporta diversos tipos de bancos de dados, tornando o código mais portável e fácil de manter. Aqui está um exemplo de como você pode conectar a um banco de dados usando o PDO no PHP:

```php
<?php
$host = 'localhost'; // Endereço do servidor de banco de dados
$db_name = 'seu_banco_de_dados'; // Nome do banco de dados
$username = 'seu_usuario'; // Nome de usuário do banco de dados
$password = 'sua_senha'; // Senha do banco de dados

try {
    // Criação de uma nova instância PDO
    $pdo = new PDO("mysql:host=$host;dbname=$db_name;charset=utf8", $username, $password);
// Configuração de opções de PDO
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

    echo "Conexão bem-sucedida ao banco de dados!";
} catch (PDOException $e) {
    echo "Erro na conexão ao banco de dados: " . $e->getMessage();
}
?>
```

Neste exemplo, você precisará substituir `localhost`, `seu_banco_de_dados`, `seu_usuario` e `sua_senha` pelas informações relevantes do seu banco de dados. Este código estabelece uma conexão com o banco de dados MySQL, mas você pode ajustar os parâmetros conforme necessário para se conectar a outros tipos de bancos de dados suportados pelo PDO.

Após a conexão bem-sucedida, você pode executar consultas SQL usando o objeto `$pdo`. Lembre-se de sempre tratar os erros adequadamente usando blocos `try`...`catch` e de utilizar práticas seguras para evitar injeção de SQL, como consultas preparadas.

Este exemplo é um ponto de partida básico. Dependendo das suas necessidades, você pode modularizar o código, criar classes para gerenciar as operações do banco de dados, implementar funções de tratamento de erros mais avançadas, entre outras melhorias.

## Funcionalidades

:heavy_check_mark: Cadastro de tarefas <br> <br>
:heavy_check_mark: Aba destinada a visualização de todas as tarefas, para melhor controle do usuário <br> <br>
:heavy_check_mark: Edição de tarefas já cadastradas <br> <br>
:heavy_check_mark: Botão para marcar tarefa como realizada <br> <br>
:heavy_check_mark: Botão para excluir tarefa  <br> <br>

## 🚀 Tecnologias

Esse projeto está sendo desenvolvido com as seguintes tecnologias:

- PHP
- MySQL

