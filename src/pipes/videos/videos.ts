import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
/**
 * Generated class for the VideosPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'videos',
})
export class VideosPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  constructor( private dom: DomSanitizer ) { }
  transform(value: string, ...args) {
    // return value.toLowerCase();
    return this.dom.bypassSecurityTrustResourceUrl(value);
  }
}
