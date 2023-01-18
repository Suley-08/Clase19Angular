import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './Pages/contact/contact.component';
import { HomeComponent } from './Pages/home/home.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';
import { ProductsComponent } from './Pages/products/products.component';

const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    redirectTo: '/home'
  },

  { 
    path: 'home',
    component: HomeComponent,
  },
  { 
    path: 'contact', 
    component: ContactComponent
  },
  { 
    path: 'products', 
    component: ProductsComponent
  },
  
  { 
    path: '**', 
    component: NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
