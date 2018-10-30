import { Component } from '@angular/core';
import { Profesor } from './profesor';

@Component ({
    selector: 'app-profesor', //APP + nombre del componente
    templateUrl: './profesor.component.html'
})

export class ProfesorComponent{
    public nombre: string;
    public edad: number;
    public casado: boolean;
    public trabajos: Array <any> = ['Profesor','Webdev','Barrendero'];  
    //El Any hace referencia a que acepta cualquier TIPO de dato
    public profesor: Profesor;
    public profesorado: Array<Profesor>;
    public color: string;
    public admin:boolean;

    constructor(){
        this.nombre='Xabi';
        this.edad = 32;
        this.casado=true;
        this.profesor= new Profesor('Lucas',38,'Veterinaria',false);
        this.profesorado= [
            this.profesor,
            new Profesor('Vanesa',34,'Matematicas',true),
            new Profesor('Ramiro',28,'Lenguaje',false),
        ]
        this.color='blue';
        this.admin = false;
    }
    
    ngOnInit(): void {
        console.log(this.profesor);
    }

    pulsarBoton()
    {
        console.log("Hemos pulsado el botón");
        this.admin = !this.admin;
    }
}