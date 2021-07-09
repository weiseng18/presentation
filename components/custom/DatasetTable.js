// base components
import { Tbody, Th, Thead, Tr } from "@chakra-ui/react"

import { MTable, MTd, MTr } from "../../components/MotionChakra"

import { toggleOpacity } from "../../animations"
import { useEffect, useState } from "react"

const Cell = ({ t, animate }) => {
  // t for type
  if (t == "Y")
    return (
      <MTd animate={animate} border="none" bgColor="green.300">
        Y
      </MTd>
    )
  else if (t == "N")
    return (
      <MTd animate={animate} border="none" bgColor="red.300">
        N
      </MTd>
    )
  else
    return (
      <MTd animate={animate} border="none">
        {t}
      </MTd>
    )
}

const DatasetTable = ({ step, hasSteps = true }) => {
  const [opacity, setOpacity] = useState([1, 1, 1, 1, 1])

  useEffect(() => {
    document.addEventListener("keypress", (e) => {
      // e.code: DigitX
      const code = e.code
      if (code.length === 6 && code[5] == parseInt(code[5]))
        toggleCol(parseInt(code[5]), e.shiftKey)
    })
  }, [])

  /**
   *
   * @param {*} which digit 1-5, or 0
   * @param {*} shiftKey whether shiftKey was pressed or not
   */
  const toggleCol = (which, shiftKey) => {
    let arr
    if (which === 0) {
      arr = [1, 1, 1, 1, 1]
      setOpacity(arr)
    }
    // if shift key was pressed, then add on, rather than toggle.
    else if (shiftKey) {
      setOpacity((prevOpacity) => {
        prevOpacity[which - 1] = prevOpacity[which - 1] === 1 ? 0.1 : 1
        return [...prevOpacity]
      })
    }
    // else, turn off everything else, and turn on current col
    else {
      arr = [0.1, 0.1, 0.1, 0.1, 0.1]
      arr[which - 1] = 1
      setOpacity(arr)
    }
  }

  return (
    <MTable {...toggleOpacity} custom="enter">
      <Thead>
        <Tr>
          <Th w="25%" fontSize="sm">
            Flow
          </Th>
          <Th fontSize="sm" animate={{ opacity: opacity[0] }}>
            Ingested
          </Th>
          <Th fontSize="sm" animate={{ opacity: opacity[1] }}>
            Has Dataset
          </Th>
          <Th fontSize="sm" animate={{ opacity: opacity[2] }}>
            Has Sample
          </Th>
          <Th fontSize="sm" animate={{ opacity: opacity[3] }}>
            Needs Approval
          </Th>
          <Th w="15%" fontSize="sm" animate={{ opacity: opacity[4] }}>
            Categories
          </Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Cell t="1 (Regular)" />
          <Cell animate={{ opacity: opacity[0] }} t="Y" />
          <Cell animate={{ opacity: opacity[1] }} t="Y" />
          <Cell animate={{ opacity: opacity[2] }} t="Y" />
          <Cell animate={{ opacity: opacity[3] }} t="Y" />
          <Cell animate={{ opacity: opacity[4] }} t="Not Geospatial" />
        </Tr>
        <Tr>
          <Cell t="2 (Confidential)" />
          <Cell animate={{ opacity: opacity[0] }} t="Y" />
          <Cell animate={{ opacity: opacity[1] }} t="Y" />
          <Cell animate={{ opacity: opacity[2] }} t="Y" />
          <Cell animate={{ opacity: opacity[3] }} t="Y" />
          <Cell animate={{ opacity: opacity[4] }} t="Not Geospatial" />
        </Tr>
        <Tr>
          <Cell t="3 (Metadata-Only)" />
          <Cell animate={{ opacity: opacity[0] }} t="N" />
          <Cell animate={{ opacity: opacity[1] }} t="N" />
          <Cell animate={{ opacity: opacity[2] }} t="N" />
          <Cell animate={{ opacity: opacity[3] }} t="Y" />
          <Cell animate={{ opacity: opacity[4] }} t="Any" />
        </Tr>
        {(!hasSteps || step >= 2) && (
          <MTr {...toggleOpacity} custom="enter">
            <Cell t="4 (Pre-Approved, non-CSV)" />
            <Cell animate={{ opacity: opacity[0] }} t="N" />
            <Cell animate={{ opacity: opacity[1] }} t="Y" />
            <Cell animate={{ opacity: opacity[2] }} t="N" />
            <Cell animate={{ opacity: opacity[3] }} t="N" />
            <Cell animate={{ opacity: opacity[4] }} t="Geospatial, Others" />
          </MTr>
        )}
        {(!hasSteps || step >= 3) && (
          <MTr {...toggleOpacity} custom="enter">
            <Cell t="5 (Pre-Approved, CSV)" />
            <Cell animate={{ opacity: opacity[0] }} t="Y" />
            <Cell animate={{ opacity: opacity[1] }} t="Y" />
            <Cell animate={{ opacity: opacity[2] }} t="Y" />
            <Cell animate={{ opacity: opacity[3] }} t="N" />
            <Cell
              animate={{ opacity: opacity[4] }}
              t="Not (Geospatial, Others)"
            />
          </MTr>
        )}
        {(!hasSteps || step >= 4) && (
          <MTr {...toggleOpacity} custom="enter">
            <Cell t="6 (Requires approval, non-CSV)" />
            <Cell animate={{ opacity: opacity[0] }} t="N" />
            <Cell animate={{ opacity: opacity[1] }} t="Y" />
            <Cell animate={{ opacity: opacity[2] }} t="N" />
            <Cell animate={{ opacity: opacity[3] }} t="Y" />
            <Cell animate={{ opacity: opacity[4] }} t="??" />
          </MTr>
        )}
      </Tbody>
    </MTable>
  )
}

export default DatasetTable
