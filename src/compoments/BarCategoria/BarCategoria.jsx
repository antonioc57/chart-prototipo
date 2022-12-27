import { createElement, useMemo } from 'react'
import { random, range } from 'lodash'
import { sets } from '@nivo/generators'

import { useTooltip } from '@nivo/tooltip'

import { currenConverter } from '../../helpers/currencyComverter'

import { Bar } from '@nivo/bar'

const keys = ['cheque', 'emprestimo', 'chequeEspecial', 'cartaoDeCredito', 'adiantamentosAdepositantes']



const dados = [{
  "cheque": 531029.63,
  "chequeColor": "#77F2FF",
  "emprestimo": 237554.05,
  "emprestimoColor": "#38E7FA",
  "chequeEspecial": 977904.94,
  "chequeEspecialColor": "#06E0F9",
  "cartaoDeCredito": 339000.0,
  "cartaoDeCreditoColor": "#06CAE0",
  "adiantamentosAdepositantes": 2339389.33,
  "adiantamentosAdepositantesColor": "#03707C",
  "tipo": "aVencer",
  "label": "À Vencer"
},
{
  "cheque": 755400.05,
  "chequeColor": "#FCBDB6",
  "emprestimo": 531029.63,
  "emprestimoColor": "#F99185",
  "chequeEspecial": 339000.0,
  "chequeEspecialColor": "#F87B6D",
  "cartaoDeCredito": 125540.05,
  "cartaoDeCreditoColor": "#F76555",
  "adiantamentosAdepositantes": 3489000.0,
  "adiantamentosAdepositantesColor": "#7A1106",
  "tipo": "vencido",
  "label": "Vencido"
},
]





const commonProps = {
  width: 1000,
  height: 400,
  padding: 0.3,
  margin: { top: 50, right: 130, bottom: 100, left: 160 },
  innerPadding: 1,
  groupMode: "grouped",
  layout: "horizontal",
  indexBy: 'tipo',
  keys,
  data: dados,
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
  valueFormat: (value) => `${Math.abs(value)}`,
  axisTop: null,
  axisBottom: {
    legend: 'Endividamento',
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
      {`${data.label} - ${id}`}:
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

export function BarCategoria() {
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








