import { LoginScreenComponent } from './login-screen/login-screen.component';
import { AppService } from './app.service';
import { inject } from '@angular/core';
import { CanMatchFn, RedirectCommand, Router, Routes } from '@angular/router';
import { CreateAccountComponent } from './create-account/create-account.component';
import { MainComponent } from './main/main.component';




const FluxoDoApp : CanMatchFn = (route,segmnets)=>{
    const router = inject(Router);
    const _AppService = inject(AppService);
    return _AppService.usuarioAutenticado.autenticado ? true : new RedirectCommand(router.parseUrl('/login'));
}

export const routes: Routes = [
    {
        path:'',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginScreenComponent
    },
    {
        path: 'create-account',
        component: CreateAccountComponent
    },
      {
        path:'main',
        component: MainComponent,
 
        canMatch: [FluxoDoApp]
        
    },
    
    
];
