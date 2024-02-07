const agendaDeContatos = [];

const adicionarContato = (nome, telefone, email) => {
    const novoContato = {
        Nome: nome,
        Telefone: telefone,
        Email: email,
    };
    agendaDeContatos.push(novoContato);
    console.log(`Contato ${nome} adicionado à agenda.`);
};

const exibirContatos = () => {
    console.log('Lista de contatos:');
    agendaDeContatos.forEach((contato, index) => {
        console.log(`\nContato ${index + 1}:
            Nome: ${contato.Nome}
            Telefone: ${contato.Telefone}
            Email: ${contato.Email}`);
    });
};

adicionarContato('João', '123456789', 'joao@example.com');
adicionarContato('Maria', '987654321', 'maria@example.com');
exibirContatos();