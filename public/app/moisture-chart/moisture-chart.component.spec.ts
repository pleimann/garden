/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { MoistureChartComponent } from './moisture-chart.component';

describe('Component: MoistureChart', () => {
  it('should create an instance', () => {
    let component = new MoistureChartComponent();
    expect(component).toBeTruthy();
  });
});
