/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AboutdataComponent } from './aboutdata.component';

describe('AboutdataComponent', () => {
  let component: AboutdataComponent;
  let fixture: ComponentFixture<AboutdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});