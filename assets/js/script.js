document.getElementById('botao').addEventListener('click', function(e) {
    var nome = document.getElementById("nome").value
    if(nome.length < 3)
    {
        //tem erro - cancela a ação de submit
        e.preventDefault();
        document.getElementById("nome").style.backgroundColor = "red";

    }
    else {
        document.getElementById("nome").style.backgroundColor = "white";
    }
    //Fim validação do nome

    //Validando o email
    var email=document.getElementById("email").value;
    //o campo email precisa conter: @, "." e não pode estar vazio.
    if(email.indexOf("@")==-1 || email.indexOf(".")==-1 || email.length==0)
    {
        e.preventDefault();
        document.getElementById("email").style.borderColor = "red";
    }
    else
    {
        document.getElementById("email").style.borderColor = "green";

    }
});










// function valida()
// {
//     //Verificando se o nome digitado foi maior ou igual a 3 caracteres
//     var nome = document.getElementById("nome").value
//     if (nome.length < 3)
//     {
//         document.getElementById("nome").style.backgroundColor="red";
//     }
// }