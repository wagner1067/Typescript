class Aluno{
    id:number;
    nome:string;
    certificados:number;

    constructor(id_:number, nome_:string, certificados_:number){
        this.id = id_;
        this.nome = nome_;
        this.certificados = certificados_;
    }

    novoCertificado (){
        this.certificados = this.certificados +1
        return this.certificados
        
    }
}

const Aluno1 = new Aluno (1, 'Wagner', 2 )
const Aluno2 = new Aluno (1, 'Gabriele', 3)
Aluno1.novoCertificado()

console.log(Aluno1, Aluno2)