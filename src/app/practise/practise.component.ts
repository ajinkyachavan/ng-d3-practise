import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-practise',
  templateUrl: './practise.component.html',
  styleUrls: ['./practise.component.css']
})
export class PractiseComponent implements OnInit {

  g;
  svgWidth: number;
  svgHeight: number;

  constructor() { }

  ngOnInit() {
    this.svgWidth = 600;
    this.svgHeight = 600;

    this.initChart(this.svgWidth, this.svgHeight, 'orange');
    this.drawLine(0, 100, 0, 200, 'blue', 15, 'round', 'round');
    this.drawLine(100, 200, 200, 300, 'blue', 15, 'round', 'round');
    this.drawLine(200, 350, 300, 350, 'blue', 15, 'round', 'round');
    this.drawLine(350, 400, 350, 250, 'blue', 15, 'round', 'round');
    this.drawLine(400, 425, 250, 150, 'blue', 15, 'round', 'round');
    this.drawLine(425, 500, 150, 0, 'blue', 15, 'round', 'round');
  }

  initChart(svgWidth: number, svgHeight: number, backgroundColor?: string) {
    let svg = d3.select('.first')
      .append("svg")
      .attr('width', svgWidth)
      .attr('height', svgHeight)
      .style('background-color', (backgroundColor ? backgroundColor : 'orange'));
    this.g = svg.append("g");
  }

  /**
   * [x1, y1], [x2, y2] => coordinates of two points through which line passes
   * 
   * @param x1 
   * @param x2 
   * @param y1 
   * @param y2 
   * @param stroke 
   * @param strokeWidth? 
   * @param strokeLineJoin? 
   * @param strokeLineCap? 
   */
  drawLine(
    x1: number, x2: number, y1: number, y2: number, stroke: string,
    strokeWidth?: number, strokeLineJoin?: string, strokeLineCap?: string
  ) {
    this.g.append('line')
      .attr('x1', x1)
      .attr('x2', x2)
      .attr('y1', y1)
      .attr('y2', y2)
      .attr('stroke', stroke)
      .attr("stroke-width", (strokeWidth ? strokeWidth : 5))
      .attr("stroke-linejoin", (strokeLineJoin ? strokeLineJoin : 'round'))
      .attr("stroke-linecap", (strokeLineCap ? strokeLineCap : 'round'))
  }

}
