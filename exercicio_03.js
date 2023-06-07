class MeuErro extends Error {
  constructor(message){
    super(message);
    this.name = "Fatal Error";
  }
}

class NerdIF {
  constructor(estudante, cosplay, nota_cosplay) {
    this.estudante = estudante;
    this.cosplay = cosplay;
    this.nota_cosplay = nota_cosplay;
  }

  retornarAtributos(){
    try {
      return this.atributos();
    } catch (error){
      console.log(error)
    }
  }

  atributos() {
    if (this.estudante != ""){
      return {
        estudante: this.estudante,
        cosplay: this.cosplay,
        nota_cosplay: this.nota_cosplay
      };
    } else {
      throw new MeuErro("Houve um erro inesperado!")
    }
  }
}

const aluno = new NerdIF("", "Homem-Aranha", 9.5);
const atributos = aluno.retornarAtributos();

console.log(atributos)
//console.log(atributos.estudante); 
//console.log(atributos.cosplay);   
//console.log(atributos.nota_cosplay);

