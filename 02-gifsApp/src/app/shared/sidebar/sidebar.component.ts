import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent  {

  constructor(private gifsService:GifsService) { }

  get historial():string[] {
    return this.gifsService.historial;
  }
  
  obtenerGif(value:string) {
    return this.gifsService.buscarGifs(value);
  }

}
