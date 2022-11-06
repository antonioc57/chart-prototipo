import { currenConverter } from '../../helpers/currencyComverter'

import { Bar } from '@nivo/bar'

const keys = ['VencerAte30diasVencidosAte14dias', 'Vencer31a60dias', 'Vencer61a90dias', 'Vencer91a180dias', 'Vencer181a360dias', 'VencerAcima360dias', 'Vencido15a30dias', 'Vencido31a60dias', 'Vencido61a90dias', 'Vencido91a180dias', 'Vencido181a360dias', 'VencidoAcima360dias']

const values = [{
  "VencerAte30diasVencidosAte14dias": 531029.63,
  "Vencer31a60dias": 334000.54,
  "Vencer61a90dias": 377904.94,
  "Vencer91a180dias": 1221000.93,
  "Vencer181a360dias": 2339389.33,
  "VencerAcima360dias": 6491244.74,
  "Vencido15a30dias": 0.0,
  "Vencido31a60dias": -7554.05,
  "Vencido61a90dias": 0.0,
  "Vencido91a180dias": 0.0,
  "Vencido181a360dias": 0.0,
  "VencidoAcima360dias": 0.0,
  "mes": "Janeiro"
},
{
  "VencerAte30diasVencidosAte14dias": 531029.63,
  "Vencer31a60dias": 334000.54,
  "Vencer61a90dias": 377904.94,
  "Vencer91a180dias": 1221000.93,
  "Vencer181a360dias": 2339389.33,
  "VencerAcima360dias": 6491244.74,
  "Vencido15a30dias": 0.0,
  "Vencido31a60dias": -554.05,
  "Vencido61a90dias": 0.0,
  "Vencido91a180dias": 0.0,
  "Vencido181a360dias": 0.0,
  "VencidoAcima360dias": 0.0,
  "mes": "Fevereiro"
},
{
  "VencerAte30diasVencidosAte14dias": 531029.63,
  "Vencer31a60dias": 334000.54,
  "Vencer61a90dias": 377904.94,
  "Vencer91a180dias": 1221000.93,
  "Vencer181a360dias": 2339389.33,
  "VencerAcima360dias": 6491244.74,
  "Vencido15a30dias": 0.0,
  "Vencido31a60dias": -27554.05,
  "Vencido61a90dias": 0.0,
  "Vencido91a180dias": 0.0,
  "Vencido181a360dias": 0.0,
  "VencidoAcima360dias": 0.0,
  "mes": "Março"
},
{
  "VencerAte30diasVencidosAte14dias": 531029.63,
  "Vencer31a60dias": 334000.54,
  "Vencer61a90dias": 377904.94,
  "Vencer91a180dias": 1221000.93,
  "Vencer181a360dias": 2339389.33,
  "VencerAcima360dias": 6491244.74,
  "Vencido15a30dias": 0.0,
  "Vencido31a60dias": -54.05,
  "Vencido61a90dias": 0.0,
  "Vencido91a180dias": 0.0,
  "Vencido181a360dias": 0.0,
  "VencidoAcima360dias": 0.0,
  "mes": "Abril"
},
{
  "VencerAte30diasVencidosAte14dias": 531029.63,
  "Vencer31a60dias": 334000.54,
  "Vencer61a90dias": 377904.94,
  "Vencer91a180dias": 1221000.93,
  "Vencer181a360dias": 2339389.33,
  "VencerAcima360dias": 6491244.74,
  "Vencido15a30dias": 0.0,
  "Vencido31a60dias": -7554.05,
  "Vencido61a90dias": 0.0,
  "Vencido91a180dias": 0.0,
  "Vencido181a360dias": -12000.00,
  "VencidoAcima360dias": 0.0,
  "mes": "Maio"
},
{
  "VencerAte30diasVencidosAte14dias": 531029.63,
  "Vencer31a60dias": 334000.54,
  "Vencer61a90dias": 377904.94,
  "Vencer91a180dias": 1221000.93,
  "Vencer181a360dias": 2339389.33,
  "VencerAcima360dias": 6491244.74,
  "Vencido15a30dias": 0.0,
  "Vencido31a60dias": -4.05,
  "Vencido61a90dias": 0.0,
  "Vencido91a180dias": 0.0,
  "Vencido181a360dias": 0.0,
  "VencidoAcima360dias": 0.0,
  "mes": "Junho"
},
{
  "VencerAte30diasVencidosAte14dias": 531029.63,
  "Vencer31a60dias": 334000.54,
  "Vencer61a90dias": 377904.94,
  "Vencer91a180dias": 1221000.93,
  "Vencer181a360dias": 2339389.33,
  "VencerAcima360dias": 6491244.74,
  "Vencido15a30dias": 0.0,
  "Vencido31a60dias": -3554.05,
  "Vencido61a90dias": 0.0,
  "Vencido91a180dias": 0.0,
  "Vencido181a360dias": 0.0,
  "VencidoAcima360dias": 0.0,
  "mes": "Julho"
},
{
  "VencerAte30diasVencidosAte14dias": 531029.63,
  "Vencer31a60dias": 334000.54,
  "Vencer61a90dias": 377904.94,
  "Vencer91a180dias": 1221000.93,
  "Vencer181a360dias": 2339389.33,
  "VencerAcima360dias": 6491244.74,
  "Vencido15a30dias": 0.0,
  "Vencido31a60dias": -17554.05,
  "Vencido61a90dias": 0.0,
  "Vencido91a180dias": 0.0,
  "Vencido181a360dias": 0.0,
  "VencidoAcima360dias": 0.0,
  "mes": "Agosto"
},
{
  "VencerAte30diasVencidosAte14dias": 531029.63,
  "Vencer31a60dias": 334000.54,
  "Vencer61a90dias": 377904.94,
  "Vencer91a180dias": 1221000.93,
  "Vencer181a360dias": 2339389.33,
  "VencerAcima360dias": 6491244.74,
  "Vencido15a30dias": -2000.00,
  "Vencido31a60dias": -7554.05,
  "Vencido61a90dias": -4000.00,
  "Vencido91a180dias": -6200.00,
  "Vencido181a360dias": -890000.00,
  "VencidoAcima360dias": 0.0,
  "mes": "Setembro"
},
{
  "VencerAte30diasVencidosAte14dias": 531029.63,
  "Vencer31a60dias": 334000.54,
  "Vencer61a90dias": 377904.94,
  "Vencer91a180dias": 1221000.93,
  "Vencer181a360dias": 2339389.33,
  "VencerAcima360dias": 6491244.74,
  "Vencido15a30dias": 0.0,
  "Vencido31a60dias": -7554.05,
  "Vencido61a90dias": 0.0,
  "Vencido91a180dias": 0.0,
  "Vencido181a360dias": 0.0,
  "VencidoAcima360dias": 0.0,
  "mes": "Outubro"
},
{
  "VencerAte30diasVencidosAte14dias": 531029.63,
  "Vencer31a60dias": 334000.54,
  "Vencer61a90dias": 377904.94,
  "Vencer91a180dias": 1221000.93,
  "Vencer181a360dias": 2339389.33,
  "VencerAcima360dias": 6491244.74,
  "Vencido15a30dias": 0.0,
  "Vencido31a60dias": -7554.05,
  "Vencido61a90dias": 0.0,
  "Vencido91a180dias": 0.0,
  "Vencido181a360dias": 0.0,
  "VencidoAcima360dias": 0.0,
  "mes": "Novembro"
},
{
  "VencerAte30diasVencidosAte14dias": 531029.63,
  "Vencer31a60dias": 334000.54,
  "Vencer61a90dias": 377904.94,
  "Vencer91a180dias": 1221000.93,
  "Vencer181a360dias": 2339389.33,
  "VencerAcima360dias": 6491244.74,
  "Vencido15a30dias": 0.0,
  "Vencido31a60dias": -7554.05,
  "Vencido61a90dias": 0.0,
  "Vencido91a180dias": 0.0,
  "Vencido181a360dias": 0.0,
  "VencidoAcima360dias": 0.0,
  "mes": "Dezembro"
}]




const commonProps = {
  width: 1400,
  height: 500,
  margin: { top: 60, right: 110, bottom: 60, left: 80 },
  indexBy: 'mes',
  keys,
  data: values,
  padding: 0.2,
  labelTextColor: 'inherit:darker(1.4)',
  labelSkipWidth: 16,
  labelSkipHeight: 16,
}

const divergingCommonProps = {
  ...commonProps,
  enableGridX: true,
  enableGridY: false,
  axisTop: {
    tickSize: 0,
    tickPadding: 12,
  },
  axisBottom: {
    legend: 'Endividamento',
    legendPosition: 'middle',
    legendOffset: 50,
    tickSize: 0,
    tickPadding: 12,
  },
  axisLeft: null,
  axisRight: {
    format: (v) => currenConverter(v),
  },
  markers: [
    {
      axis: 'y',
      value: 0,
      lineStyle: { strokeOpacity: 0 },
      textStyle: { fill: '#2ebca6' },
      legend: 'À Vencer',
      legendPosition: 'top-left',
      legendOrientation: 'vertical',
      legendOffsetY: 120,
    },
    {
      axis: 'y',
      value: 0,
      lineStyle: { stroke: '#f47560', strokeWidth: 1 },
      textStyle: { fill: '#e25c3b' },
      legend: 'Vencido',
      legendPosition: 'bottom-left',
      legendOrientation: 'vertical',
      legendOffsetY: 120,
    },
  ],
}





export function BarDivergingStacked() {
  return (
    <Bar
      {...divergingCommonProps}
      padding={0.4}
      colors={['#97e3d5', '#61cdbb', '#29D95E', '#22F09A', '#20E6CB', '#61E620', '#f47560', '#e25c3b', '#E80727', '#F22007', '#F26407', '#E88107']}
      valueFormat={v => currenConverter(v)}
      tooltip={({ id, value, color, label, formattedValue, }) => {
        return (<div
          style={{
            padding: 12,
            color,
            background: '#222222',
          }}
        >
          <strong>
            {label}: {formattedValue}
          </strong>
        </div>)
      }}

      valueScale={{ type: 'symlog' }}

    />)
}





