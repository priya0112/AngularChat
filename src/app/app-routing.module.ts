import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddroomComponent } from './addroom/addroom.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { LoginComponent } from './login/login.component';
import { RoomlistComponent } from './roomlist/roomlist.component';


const routes: Routes = [
{ path: 'login', component: LoginComponent },
{ path: 'roomlist', component: RoomlistComponent},
{ path: 'addroom', component: AddroomComponent},
{ path: 'chatRoom', component: ChatroomComponent},
{ path: '', 
    redirectTo: '/login',
    pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
