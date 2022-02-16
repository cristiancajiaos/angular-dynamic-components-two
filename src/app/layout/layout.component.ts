import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicComponent } from '../dynamic/dynamic.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit(): void {
  }

  add() {
    const dynamicComponentFactory = this.componentFactoryResolver.resolveComponentFactory(DynamicComponent);
    const componentRef = this.container.createComponent(dynamicComponentFactory);
  }

}
