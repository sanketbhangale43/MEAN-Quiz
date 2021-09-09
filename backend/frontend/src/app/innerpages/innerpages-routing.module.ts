import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';

const routes: Routes = [
  {
    path: 'dashboard',
    data: { preload: true },
    pathMatch: 'full',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
  },

  {
    path: 'quiz/create',
    data: { preload: true },
    pathMatch: 'full',
    loadChildren: () => import('./create-quiz/create-quiz.module').then(m => m.CreateQuizModule),
  },

  {
    path: 'quiz/play/:quiz_id',
    data: { preload: true },
    pathMatch: 'full',
    loadChildren: () => import('./quiz-screen/quiz-screen.module').then(m => m.QuizScreenModule),
  }
];

@NgModule({
  imports: [
    QuicklinkModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' }),],
  exports: [RouterModule]
})
export class InnerpagesRoutingModule { }
