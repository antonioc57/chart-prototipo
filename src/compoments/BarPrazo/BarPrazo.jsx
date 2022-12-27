import { createElement, useMemo } from 'react'
import { random, range } from 'lodash'
import { sets } from '@nivo/generators'
import { useTheme } from '@nivo/core'

import { useTooltip } from '@nivo/tooltip'

import { currenConverter } from '../../helpers/currencyComverter'

import { Bar } from '@nivo/bar'

const keys = ['CurtoPrazo', 'MedioPrazo', 'LongoPrazo']





const dados = [{
  "CurtoPrazo": 531029.63,
  "CurtoPrazoColor": "#77F2FF",
  "MedioPrazo": 377904.94,
  "MedioPrazoColor": "#06CAE0",
  "LongoPrazo": 2339389.33,
  "LongoPrazoColor": "#03707C",
  "tipo": "aVencer",
  "label": "À Vencer"
},
{
  "CurtoPrazo": 527554.05,
  "CurtoPrazoColor": "#FCBDB6",
  "MedioPrazo": 890000.0,
  "MedioPrazoColor": "#F64F3C",
  "LongoPrazo": 3489000.0,
  "LongoPrazoColor": "#7A1106",
  "tipo": "vencido",
  "label": "Vencido"
},
]





const commonProps = {
  width: 1000,
  height: 400,
  margin: { top: 50, right: 130, bottom: 100, left: 160 },
  innerPadding: 1,
  groupMode: "grouped",
  layout: "horizontal",
  indexBy: 'tipo',
  keys,
  data: dados,
  padding: 0.5,
  labelTextColor: 'inherit:darker(1.4)',
  labelSkipWidth: 16,
  labelSkipHeight: 16,
}





const divergingCommonProps = {
  ...commonProps,
  valueScale: { type: 'linear' },
  indexScale: { type: 'band', round: true },
  enableGridX: true,
  enableGridY: false,
  colors: { scheme: 'nivo' },
  axisTop: null,
  axisBottom: {
    legend: 'Valores',
    legendPosition: 'middle',
    legendOffset: 50,
    tickSize: 0,
    tickPadding: 12,
    format: value => `${currenConverter(value)}`
  },
  axisLeft: {
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
    legend: 'Endividamento',
    legendPosition: 'middle',
    legendOffset: -90,
    format: value => `${dados.filter(res => res.tipo === value)[0].label}`
  }
}


const CustomBarComponent = (props) => {
  const { showTooltipFromEvent, hideTooltip } = useTooltip();

  const { bar, tooltip } = props;
  const { x, y, width, height, color, data } = bar;

  const renderTooltip = useMemo(
    () => () => createElement(tooltip, { ...bar, ...data }),
    [tooltip, bar, data]
  )


  const radius = Math.min(width, height) / 2;


  // <path d={`M245.637 98.35c0-20.531 33.328-20.543 33.328.254l-1.277 164.968-31.995.06-.056-165.282Z`} style="fill:#d8d8d8;stroke:#000"/>


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

  const d = `M${x},${y} l0,0 l-${0},0 l-0,${height} l${width},0 c${10},0 ${10},-${height} 0 -${height}`

  return (
    <path d={d} fill={color}
      onMouseEnter={
        (event) =>
          showTooltipFromEvent(renderTooltip(), event)
      }
      onMouseMove={(event) =>
        showTooltipFromEvent(renderTooltip(), event)
      }
      onMouseLeave={(event) => hideTooltip()} />
  )



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

const legend = [
  {
    dataFrom: 'keys',
    anchor: 'bottom-right',
    direction: 'column',
    justify: false,
    translateX: 120,
    translateY: 0,
    itemsSpacing: 2,
    itemWidth: 100,
    itemHeight: 20,
    itemDirection: 'left-to-right',
    itemOpacity: 0.85,
    symbolSize: 20,
    effects: [
      {
        on: 'hover',
        style: {
          itemOpacity: 1
        }
      }
    ]
  }
]

export function BarPrazo() {
  return (
    <div style={{ backgroundColor: '#efefef', width: '100%' }}>
      <Bar
        {...divergingCommonProps}
        barComponent={CustomBarComponent}
        colors={({ id, data }) => String(data[`${id}Color`])}
        valueFormat={v => currenConverter(v)}
        tooltip={CustomTooltip}
        legends={legend}
      />
    </div >
  );
}








