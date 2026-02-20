import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Para el *ngFor
import { FormsModule } from '@angular/forms'; // Para el [(ngModel)]

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  nuevaTarea: string = '';
  listaTareas: string[] = [];

  agregarTarea(): void {
    if (this.nuevaTarea.trim()) {
      this.listaTareas.push(this.nuevaTarea);
      this.nuevaTarea = '';
    }
  }

  eliminarTarea(index: number): void {
    this.listaTareas.splice(index, 1);
  }
}