const Objeto1 = {
    nome: 'Gustavo',
    ra: 'RA-teste',
};

const Objeto2 = {};

Objeto2.nome = 'Gustavo';
Objeto2.ra = 'RA-teste';

const Objeto3 = Object.fromEntries([['nome', 'Gustavo'], ['ra', 'RA-teste']]);