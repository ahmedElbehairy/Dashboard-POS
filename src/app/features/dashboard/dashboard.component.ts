import { Component, ViewChild } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';
import { ChartComponent } from "ng-apexcharts";
import { Balance, Goal, Income } from 'src/app/core/model/dashboard';
import { DashboardService } from 'src/app/core/service/dashboard.service';
import * as moment from 'moment';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: any = {};


  // options for the chart multi: any[];
  Runmulti:boolean = false
  // curve: any = shape.curveMonotoneX; // Use d3-shape for a smooth curve
  Runsingle:boolean = false
  multi!:Goal [] ;
  balance!:Balance
  single!:Income [] ;
  totle: number = 0;
  totleMulti: number = 0;
  // public curve = shape.curveStepBefore;
  linear:any = 'linear'
  monthSelect:string = 'January'
  timeline: boolean = true;
  gradient: boolean = true;
  Month: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  legendPosition: LegendPosition = LegendPosition.Below;
  showXAxisLabel = true;
  colorScheme: any = {
    domain: ['#F67F20', '#003048', '#12991F'],
  };
  colorSchemeLine:any = {domain:[' #fff' , '#F67F20'] }
  constructor(private _Dashboard:DashboardService) {
    this.chartOptions = {
      series: [
        {
          name: 'Series 1',
          data: [
            { x: '2024-01-01', y: 10000 },
            { x: '2024-2-01', y: 4350 },
            { x: '2024-3-01', y: 2340 },
            { x: '2024-4-01', y: 40000 },
            { x: '2024-5-01', y: 50000 },
            { x: '2024-6-01', y: 60000 },
            { x: '2024-7-01', y: 55320 },
            { x: '2024-8-01', y: 30000 },
            { x: '2024-9-01', y: 90000 },
            { x: '2024-10-01', y: 12340 },
            { x: '2024-11-01', y: 11000 },
            { x: '2024-12-01', y: 12000 },
          ]
        }
      ],
      chart: {
        type: 'area',
        height: 350
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'datetime',
        labels: {
          formatter: (value:any) => {
            return moment(value).format('MMM YYYY');
          }
        }
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        }
      }
    }
  }
  ngOnInit() {
    this.getProfit(this.monthSelect)
    this.getIncome()
    this.getBalance()
  }
  getIncome(){
    this._Dashboard.getProfit('Income' , 'Dashboard').subscribe((res:any) => {
      this.single = res.income
      this.single.map((el:any) => {
        this.totle += el.value;
      });
      this.Runsingle = true
    })
  }
  getBalance(){
    this._Dashboard.getProfit('Balance' , 'Dashboard').subscribe((res:any) => {
      this.balance = res
    })
  }
  menuIds!:string
  ChangeCharts(id:string){
    const menuIds = ['Income' , 'Goal' , 'Balance']
    menuIds.map(el => {
      if(this.menuIds == el && id == 'Today'){
      }else if(this.menuIds == el && id == 'Week'){
      }else if(this.menuIds == el && id == 'Month'){
      }
      })
  }
  menuId(id:string){
    this.menuIds = id
  }
  getProfit(id:string){
    this.Runmulti = false
    this._Dashboard.getProfit(id ,'/Dashboard/Goal/Profit' ).subscribe((res:any) => {
      this.multi = res.Weeks
      this.Runmulti = true
      this.totleMulti = 0
      this.multi[0].series.map((el:any) => {
        this.totleMulti += el.value;
      });
    })
  }







  public generateData(baseval:any, count:any, yrange:any) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

      series.push([x, y, z]);
      baseval += 86400000;
      i++;
    }
    return series;
  }
}
