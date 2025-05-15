import { Component } from '@angular/core';
import { ContainerComponent } from './container/container.component';

@Component({
  selector: 'app-dashboard',
  imports: [ContainerComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  fermes = [
    { id: 1, name: 'Ferme A' },
    { id: 2, name: 'Ferme B' },
    { id: 3, name: 'Ferme C' },
  ];

  ferme: { id: number; name: string } | null = null;

  ngOnInit(): void {
    if(this.fermes.length > 0){
      this.ferme = this.fermes[0];
    }
  }

  onFermeSelect(event: Event): void {
  const selectedId = (event.target as HTMLSelectElement).value;
  console.log('ID sélectionné :', selectedId); // Debug
  this.ferme = this.fermes.find((ferme) => ferme.id === +selectedId) || null;
  console.log('Ferme sélectionnée :', this.ferme); // Debug
  }
}
