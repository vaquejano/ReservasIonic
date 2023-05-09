import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'usuario',
    loadChildren: () => import('./usuario/usuario.module').then( m => m.UsuarioPageModule)
  },
  {
    path: 'empresa',
    loadChildren: () => import('./empresa/empresa.module').then( m => m.EmpresaPageModule)
  },
  {
    path: 'cadastrousuario',
    loadChildren: () => import('./cadastrousuario/cadastrousuario.module').then( m => m.CadastrousuarioPageModule)
  },
  {
    path: 'cadastroempresa',
    loadChildren: () => import('./cadastroempresa/cadastroempresa.module').then( m => m.CadastroempresaPageModule)
  },  {
    path: 'dados',
    loadChildren: () => import('./dados/dados.module').then( m => m.DadosPageModule)
  },
  {
    path: 'listagemempresas',
    loadChildren: () => import('./listagemempresas/listagemempresas.module').then( m => m.ListagemempresasPageModule)
  },
  {
    path: 'descricaoempresa',
    loadChildren: () => import('./descricaoempresa/descricaoempresa.module').then( m => m.DescricaoempresaPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },  {
    path: 'alterardados',
    loadChildren: () => import('./alterardados/alterardados.module').then( m => m.AlterardadosPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }