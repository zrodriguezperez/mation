import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
// export class AuthorComponent implements OnInit{
// export class AuthorComponent implements AfterViewInit{
  export class AuthorComponent{  
  @ViewChild('authorRef') authorElement!: ElementRef<HTMLDivElement>
  isActive: boolean = true;

  constructor(private renderer:Renderer2){}

 // ngOnInit(): void {
    //throw new Error('Method not implemented.');
    //console.log(this.authorElement);
  //}

  //ngAfterViewInit(): void {
    //throw new Error('Method not implemented.');
    //console.log(this.authorElement);
  //}

  getActiveClasses(){
    return ['isActive'];
  }

  getColor(){
    return this.isActive ? 'green' : 'red'
  }

  changeColor(){
    //console.log(element);
    //element.style.color = 'yellow';
    //this.authorElement.nativeElement.style.color='brown';
    this.renderer.setStyle
    (this.authorElement.nativeElement, 'color', 'brown');
  }
}
