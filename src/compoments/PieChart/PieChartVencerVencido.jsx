import { Pie } from '@nivo/pie'


import { currenConverter } from '../../helpers/currencyComverter'

const data = [
  {
    "id": "a-vencer",
    "label": "À Vencer",
    "value": 350000,
    "color": "hsl(282, 70%, 50%)"
  },
  {
    "id": "vencido",
    "label": "Vencido",
    "value": 210000,
    "color": "hsl(319, 70%, 50%)"
  },
]

const commonProperties = {
  width: 900,
  height: 500,
  margin: { top: 80, right: 120, bottom: 80, left: 120 },
  data: data,
  animate: true,
  activeOuterRadiusOffset: 8,
}

export function PieChartVencerVencido() {



  return (
    <div style={{ backgroundColor: '#efefef', width: '100%' }}>
      <Pie
        {...commonProperties}
        valueFormat={value =>
          currenConverter(value)
        }

        tooltip={(props) => {

          const { datum } = props;
          const { color, formattedValue, label } = datum;

          return (<div
            style={{
              padding: 12,
              color,
              background: '#222222',
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
        }}


        enableArcLabels={false}
        innerRadius={0.6}
        padAngle={0.5}
        cornerRadius={5}
        arcLinkLabel={d => `${d.label} : ${currenConverter(d.value)}`}
        arcLinkLabelsColor={{
          from: 'color',
        }}
        arcLinkLabelsThickness={3}
        arcLinkLabelsTextColor={{
          from: 'color',
          modifiers: [['darker', 1.2]],
        }}

        legends={[
          {
            anchor: 'bottom',
            direction: 'row',
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 75,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: '#999',
            itemDirection: 'left-to-right',
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: 'circle',
            effects: [
              {
                on: 'hover',
                style: {
                  itemTextColor: '#000'
                }
              }
            ]
          }
        ]}

      />
    </div>)

}

