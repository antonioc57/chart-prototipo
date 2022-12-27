import { createElement, useMemo } from 'react'
import { random, range } from 'lodash'
import { sets } from '@nivo/generators'

import { useTooltip } from '@nivo/tooltip'

import { currenConverter } from '../../helpers/currencyComverter'

import { Bar } from '@nivo/bar'

// const keys = ['VencerAte30diasVencidosAte14dias', 'Vencer31a60dias', 'Vencer61a90dias', 'Vencer91a180dias', 'Vencer181a360dias', 'VencerAcima360dias', 'Vencido15a30dias', 'Vencido31a60dias', 'Vencido61a90dias', 'Vencido91a180dias', 'Vencido181a360dias', 'VencidoAcima360dias']


const keys = ['CurtoPrazoVencer', 'MedioPrazoVencer', 'LongoPrazoVencer', 'CurtoPrazoVencido', 'MedioPrazoVencido', 'LongoPrazoVencido']


const dados = [{
  "CurtoPrazoVencer": 531029.63,
  "MedioPrazoVencer": 377904.94,
  "LongoPrazoVencer": 0.0,

  "CurtoPrazoVencido": -7554.05,
  "MedioPrazoVencido": -3900000.0,
  "LongoPrazoVencido": -780.0,
  "mes": "Janeiro",
},
{
  "CurtoPrazoVencer": 531029.63,
  "MedioPrazoVencer": 377904.94,
  "LongoPrazoVencer": 20.0,

  "CurtoPrazoVencido": -7554.05,
  "MedioPrazoVencido": -39000.0,
  "LongoPrazoVencido": -3400.0,
  "mes": "Fevereiro",
},
{
  "CurtoPrazoVencer": 531029.63,
  "MedioPrazoVencer": 377904.94,
  "LongoPrazoVencer": 2339389.33,

  "CurtoPrazoVencido": -7554.05,
  "MedioPrazoVencido": -390000.0,
  "LongoPrazoVencido": -12090.0,
  "mes": "Março"
},
{
  "CurtoPrazoVencer": 531029.63,
  "MedioPrazoVencer": 377904.94,
  "LongoPrazoVencer": 2339389.33,

  "CurtoPrazoVencido": -7554.05,
  "MedioPrazoVencido": -320000.0,
  "LongoPrazoVencido": -2300.0,
  "mes": "Abril"
},
{
  "CurtoPrazoVencer": 531029.63,
  "MedioPrazoVencer": 377904.94,
  "LongoPrazoVencer": 2339389.33,

  "CurtoPrazoVencido": -7554.05,
  "MedioPrazoVencido": -300000.0,
  "LongoPrazoVencido": -0.0,
  "mes": "Maio"
},
{
  "CurtoPrazoVencer": 531029.63,
  "MedioPrazoVencer": 377904.94,
  "LongoPrazoVencer": 2339389.33,

  "CurtoPrazoVencido": -7554.05,
  "MedioPrazoVencido": -3900.0,
  "LongoPrazoVencido": -100.0,
  "mes": "Junho"
},
{
  "CurtoPrazoVencer": 531029.63,
  "MedioPrazoVencer": 377904.94,
  "LongoPrazoVencer": 2339389.33,

  "CurtoPrazoVencido": -7554.05,
  "MedioPrazoVencido": -3000.0,
  "LongoPrazoVencido": -1000.0,
  "mes": "Julho"
},
{
  "CurtoPrazoVencer": 531029.63,
  "MedioPrazoVencer": 377904.94,
  "LongoPrazoVencer": 2339389.33,

  "CurtoPrazoVencido": -7554.05,
  "MedioPrazoVencido": -300.0,
  "LongoPrazoVencido": -10000.0,
  "mes": "Agosto"
},
{
  "CurtoPrazoVencer": 531029.63,
  "MedioPrazoVencer": 377904.94,
  "LongoPrazoVencer": 2339389.33,

  "CurtoPrazoVencido": -7554.05,
  "MedioPrazoVencido": -20000.0,
  "LongoPrazoVencido": -0.0,
  "mes": "Setembro"
},
{
  "CurtoPrazoVencer": 531029.63,
  "MedioPrazoVencer": 377904.94,
  "LongoPrazoVencer": 2339389.33,

  "CurtoPrazoVencido": -7554.05,
  "MedioPrazoVencido": -39000.0,
  "LongoPrazoVencido": -20000.0,
  "mes": "Outubro"
},
{
  "CurtoPrazoVencer": 531029.63,
  "MedioPrazoVencer": 377904.94,
  "LongoPrazoVencer": 2339389.33,

  "CurtoPrazoVencido": -7554.05,
  "MedioPrazoVencido": -3900000.0,
  "LongoPrazoVencido": -12000.0,
  "mes": "Novembro"
},
{
  "CurtoPrazoVencer": 531029.63,
  "MedioPrazoVencer": 377904.94,
  "LongoPrazoVencer": 2339389.33,

  "CurtoPrazoVencido": -7554.05,
  "MedioPrazoVencido": -300.0,
  "LongoPrazoVencido": -79000.0,
  "mes": "Dezembro"
}]


const commonProps = {
  width: 1000,
  height: 500,
  padding: 0.1,
  margin: { top: 50, right: 130, bottom: 100, left: 60 },
  groupMode: "grouped",
  innerPadding: 1,
  indexBy: 'mes',
  keys,
  data: dados,
  labelTextColor: 'inherit:darker(1.4)',
  labelSkipWidth: 16,
  labelSkipHeight: 16,
}

const divergingCommonProps = {
  ...commonProps,
  enableGridX: true,
  enableGridY: false,
  valueFormat: (value) => `${Math.abs(value)}`,
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
      legendOffsetY: 65,
      legendOffsetX: -20,
    },
    {
      axis: 'y',
      value: 0,
      lineStyle: { stroke: '#f47560', strokeWidth: 1 },
      textStyle: { fill: '#e25c3b' },
      legend: 'Vencido',
      legendPosition: 'bottom-left',
      legendOrientation: 'vertical',
      legendOffsetY: 65,
      legendOffsetX: -20,
    },
  ],
}


const CustomBarComponent = (props) => {
  const { showTooltipFromEvent, hideTooltip } = useTooltip();

  const { bar, tooltip } = props;
  const { x, y, width, height, color, data } = bar;

  const renderTooltip = useMemo(
    () => () => createElement(tooltip, { ...bar, ...data }),
    [tooltip, bar, data]
  )


  // const radius = Math.min(width, height) / 2;

  const dNegative = `M${x},${y} l0,0 l-${width},0 l-0,${height} c0,${6} ${width},${6} ${width} 0`
  const dPositive = `M${x},${y} c0,-${6} ${width},-${6} ${width} 0 l0,${height} l-${width},0 l0,-${height}`

  console.log('[DEBUG]', 'data', data);

  const vencidos = ['CurtoPrazoVencido', 'LongoPrazoVencido', 'MedioPrazoVencido']


  return (
    <path d={(() => {
      if (vencidos.indexOf(data.id) !== -1) {
        return dNegative
      }
      return dPositive
    })()} fill={color}
      onMouseEnter={
        (event) =>
          showTooltipFromEvent(renderTooltip(), event)
      }
      onMouseMove={(event) =>
        showTooltipFromEvent(renderTooltip(), event)
      }
      onMouseLeave={(event) => hideTooltip()} />
  )


  // return (
  //   <g transform={`translate(${x}, ${y})`}>
  //     <defs>
  //       <clipPath id="round-corner">
  //         <rect width={width} height={height + radius} rx={radius} ry={radius} strokeWidth="0" stroke={color} fill={color}></rect>
  //       </clipPath>
  //     </defs>
  //     <rect clipPath="url(#round-corner)" width={width} height={height} strokeWidth="0" stroke={color} fill={color} focusable="false"></rect>
  //   </g>
  // )



  return (<g transform={`translate(${x}, ${y})`}>
    <rect width={width} height={height} rx={radius} ry={radius} strokeWidth="0" stroke={color} fill={color} focusable="false" onMouseEnter={
      (event) =>
        showTooltipFromEvent(renderTooltip(), event)
    }
      onMouseMove={(event) =>
        showTooltipFromEvent(renderTooltip(), event)
      }
      onMouseLeave={(event) => hideTooltip()}
    />
  </g>)
}

const CustomTooltip = ({ id, value, color, label, formattedValue, data }) => {
  return (<div
    style={{
      padding: 12,
      color,
      background: '#ffffff',
      borderRadius: '6px',
      maxWidth: '220px'
    }}
  >
    <span className='ft-medium'>
      {label}:
    </span>
    <br />
    <span className='ft-medium ft-wt-bold'>{formattedValue}</span>
    <br />
  </div>)
}


export function BarDivergingGrouped() {
  return (
    <div style={{ backgroundColor: '#efefef', width: '100%' }}>
      <Bar
        {...divergingCommonProps}
        barComponent={CustomBarComponent}
        colors={['#77F2FF', '#06CAE0', '#03707C', '#FCBDB6', '#F64F3C', '#7A1106']}
        valueFormat={v => currenConverter(v)}
        tooltip={CustomTooltip}
        valueScale={{ type: 'symlog' }}
      // valueScale={{ type: 'linear' }}
      />
    </div >
  );
}








