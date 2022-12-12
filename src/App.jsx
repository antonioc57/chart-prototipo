import './App.css'
import './index.css'

import { BarDivergingStacked } from './compoments/BarDivergingStacked'
import { BarDivergingGrouped } from './compoments/BarDivergingGrouped'
import { PieChart, PieChartVencerVencido } from './compoments/PieChart'

function App() {
  return (
    <div className="app" >
      {/* <BarDivergingStacked /> */}
      <PieChart />
      <PieChartVencerVencido />
      <BarDivergingGrouped />
    </div>
  )
}

export default App



