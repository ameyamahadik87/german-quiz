import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionsComponent } from './components/questions/questions.component';
import { UserInfoComponent } from './components/user-info/user-info.component';

const routes: Routes = [
  {
    path: '',
    component: UserInfoComponent
  },
  {
    path: 'questions',
    component: QuestionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
