import './App.css'
import './index.css'

import { BarDivergingStacked } from './compoments/BarDivergingStacked'
import { BarDivergingGrouped } from './compoments/BarDivergingGrouped'
import { PieChart, PieChartVencerVencido } from './compoments/PieChart'
import { BarPrazo } from './compoments/BarPrazo'
import { BarCategoria } from './compoments/BarCategoria'

function App() {
  return (
    <div className="app" >
      {/* <BarDivergingStacked />
      <PieChart />
      <PieChartVencerVencido /> */}
      <BarDivergingGrouped />
      <BarPrazo />
      <BarCategoria />
    </div>
  )
}

export default App



