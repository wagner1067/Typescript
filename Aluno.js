"use strict";
class Aluno {
    constructor(id_, nome_, certificados_) {
        this.id = id_;
        this.nome = nome_;
        this.certificados = certificados_;
    }
    novoCertificado() {
        this.certificados = this.certificados + 1;
        return this.certificados;
    }
}
const Aluno1 = new Aluno(1, 'Wagner', 2);
const Aluno2 = new Aluno(1, 'Gabriele', 3);
Aluno1.novoCertificado();
console.log(Aluno1, Aluno2);
