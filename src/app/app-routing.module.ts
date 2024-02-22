import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common'
import { DownloadFilesComponent } from 'src/download-files/download-files.component';

const routes: Routes = [
  {path:'download',component:DownloadFilesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
