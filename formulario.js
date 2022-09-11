function validar() {
    var nome = formuser.nome.value;
    var sobrenome = formuser.sobrenome.value;
    var email = formuser.email.value;
    var senha = formuser.senha.value;
    
    
    if (nome == '')
    {
        window.alert("Preencha o campo nome"); 
        formuser.nome.focus();
        return false;
    }

    if (sobrenome == '')
    {
        window.alert("Preencha o campo sobrenome"); 
        formuser.sobrenome.focus();
        return false;
    }

    if (email == '' || email.indexOf('@') == -1)
     {
        window.alert("Preencha o campo email corretamente");
        formuser.email.focus();
        return false;
    }

    if (senha == '' || senha.length < 8)
     {
        window.alert("Preencha o campo senha com pelo menos 8 caracteres");
        formuser.senha.focus();
        return false;
    }

    window.alert("Cadastro feito com sucesso");
}
