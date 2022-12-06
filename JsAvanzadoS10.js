class Alumno{
  constructor(codigo,nombre,nota1,nota2,nota3,nota4){
    this.codigo=codigo;
    this.nombre=nombre;
    this.nota1=nota1;
    this.nota2=nota2;
    this.nota3=nota3;
    this.nota4=nota4;
  }

  promedio(){
    let prom=(this.nota1*.15)+(this.nota2*.2)+(this.nota3*.25)+(this.nota4*.4);
    return prom;
  }

  condicion(){
    let prom=this.promedio();
    let condicion="esta aprobado";
    (prom>=12)?condicion:condicion="esta desaprobado";
    return condicion;
  }

  obsequio(){
    let prom=this.promedio();
    let mochila="Se gano una mochila de Batman";
    (prom>17)?mochila:mochila="No se gano una mochila de Batman";
    return mochila;
  }
}

let alumno = new Alumno(1,"kevin",20,20,20,20);

console.log("El alumno "+alumno.nombre+" "+alumno.condicion()+" tienes la siguiente nota: " + alumno.promedio());

console.log("El alumno "+alumno.nombre+" " +alumno.obsequio());
