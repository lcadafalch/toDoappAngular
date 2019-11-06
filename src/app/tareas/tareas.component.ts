import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  tareas: string[] = []

  arrayItems(): void {



    let nombreTarea: string = (<HTMLInputElement>document.querySelectorAll(".inputUsuario")[0]).value
    if (nombreTarea != "") {

      this.tareas.push(nombreTarea)

      this.guardarTareas()

    }
    else{
      alert("shit my wigga fatu")
    }
  }
  borrarItems(index: number): void {

    this.tareas.splice(index, 1)

    this.guardarTareas()
  }

  guardarTareas(): void {
    localStorage.setItem("tareas", JSON.stringify(this.tareas))

  }

  constructor() { 
    
    let tareas = JSON.parse(localStorage.getItem("tareas"));

   this.tareas = (tareas != null  ? tareas : []);
   
  }

  ngOnInit() {
  }

}


