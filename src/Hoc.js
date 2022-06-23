import React from 'react'
import Hoc1 from './Hooks/Hoc1'
import Hoc2 from './Hooks/Hoc2'
const WithHoc2 = Hoc2(Hoc1);
function Hoc() {
  return (
    <div>
        <h2>Hoc</h2>
        <Hoc1 />
        <WithHoc2 />
        </div>
  )
}

export default Hoc