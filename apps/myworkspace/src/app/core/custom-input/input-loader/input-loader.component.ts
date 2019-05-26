import { Component, ComponentFactoryResolver, Input, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormControl } from '@angular/forms';

import { INPUT_TYPE } from '../../components/edit/edit.component';
import { CONFIG_INPUT } from '../config-input';

@Component({
  selector: 'input-loader',
  templateUrl: './input-loader.component.html',
  styleUrls: ['./input-loader.component.scss']
})
export class InputLoaderComponent implements OnInit, OnDestroy {
  @ViewChild('customInput', { read: ViewContainerRef }) input: ViewContainerRef;
  @Input() type = INPUT_TYPE.TEXT;
  @Input() options = [];
  @Input() control: FormControl;
  
  constructor(
    private factory: ComponentFactoryResolver
  ) { }

  ngOnInit() {
    this.loadComponent();
    if (this.control) {
      this.control = new FormControl();
    }
  }

  ngOnDestroy() {
    this.input.clear();
  }

  loadComponent() {
    this.input.clear();
    const component = CONFIG_INPUT.find(it => it.type === this.type).component;
    const componentFatory = this.factory.resolveComponentFactory(component);

    const componentRef = this.input.createComponent(componentFatory);
    (<any>componentRef.instance).options = this.options;
    (<any>componentRef.instance).control = this.control;
  }
}
