import { Routes } from '@angular/router';
import { DashboardComponent } from './main/pages/dashboard/dashboard.component';
import { InventoryComponent } from './main/pages/inventory/inventory.component';

export const routes: Routes = [
    {
        component: DashboardComponent,
        path: '',
    },
    {
        component: InventoryComponent,
        path: 'inventory',
    }
];
