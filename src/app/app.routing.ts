import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/index';
import { WorkoutComponent } from './workout/index';
import { WorkoutlistComponent } from './workoutlist/workoutlist.component';
import { WorkouttransactionsListComponent } from './workouttransactionslist/workouttransactionslist.component';
import { WorkouttransactionsComponent} from './workouttransactions/workouttransactions.component';
const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'workout/:userId', component: WorkoutComponent },
    { path: 'workoutlist/:userId', component: WorkoutlistComponent },
    { path: 'workouttranslist/:workoutId', component: WorkouttransactionsListComponent },
    { path: 'workouttrans/:workoutId', component: WorkouttransactionsComponent },
    { path: 'logout', component: LoginComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
export const routing = RouterModule.forRoot(appRoutes);