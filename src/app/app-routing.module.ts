import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./players/players.module').then(mod => mod.PlayersModule)
    }
];


@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true, onSameUrlNavigation: 'reload', scrollPositionRestoration: 'enabled' }),
    ],
    providers: [],
    exports: [RouterModule]
})
export class AppRoutingModule { }
