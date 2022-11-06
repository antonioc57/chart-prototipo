import './App.css'
import './index.css'

import { BarDivergingStacked } from './compoments/BarDivergingStacked'
import { BarDivergingGrouped } from './compoments/BarDivergingGrouped'

function App() {
  return (
    <div className="app" >
      {/* <BarDivergingStacked /> */}
      <BarDivergingGrouped />
    </div>
  )
}

export default App



