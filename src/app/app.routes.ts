import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        'path': 'home',
        'title': 'Home', // เปลี่ยน title ของ page นั้นๆ
        component: HomeComponent,
    },
    {
        'path': 'about',
        'title': 'About', // เปลี่ยน title ของ page นั้นๆ
        component: AboutComponent,
    },
    {
        'path': 'contact',
        'title': 'Contact', // เปลี่ยน title ของ page นั้นๆ
        component: ContactComponent,
    },
    {
        'path': '',
        redirectTo: 'home', // ทำให้พอลบ path ที่อยู่ลังจาก http://localhost:4200 ออก จะ redirect ไปที่หน้า home
        pathMatch: 'full',
    },
    {
        'path': '**', // ใช้หรับหรับ path อื่นนอกเหนือจากที่ประกาศไว้
        component: PageNotFoundComponent,
    },
];
