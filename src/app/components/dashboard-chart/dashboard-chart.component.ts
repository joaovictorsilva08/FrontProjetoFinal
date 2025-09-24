export class DashboardChartComponent {
  view: [number, number] = [700, 400];

  // opções do gráfico
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Mês';
  showYAxisLabel = true;
  yAxisLabel = 'Reservas';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  data = [
    { "name": "Janeiro", "value": 20 },
    { "name": "Fevereiro", "value": 35 },
    { "name": "Março", "value": 25 },
    { "name": "Abril", "value": 40 }
  ];

  onSelect(event: any) {
    console.log(event);
  }
}
