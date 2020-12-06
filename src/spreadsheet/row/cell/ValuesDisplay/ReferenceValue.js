import { Fragment } from "react"

import { columnNameToIndex } from '../../../../utils'

const pattern = /=([A-Z]*)([0-9]*)/

// Error codes in this file should be mapped to proper error messages
const ReferenceValue = ({ data, value, rowIdx, columnIdx }) => {
    const visitedPath = [`${rowIdx}-${columnIdx}`]

    const solveTargetValue = currentValue => {
        const [_, targetColumn, targetRow] = pattern.exec(currentValue.toUpperCase())

        const foundValue = data[targetRow - 1] ? 
            data[targetRow - 1][columnNameToIndex(targetColumn)] ? 
                data[targetRow - 1][columnNameToIndex(targetColumn)] : '#REF1' : '#REF2'

        if (foundValue.startsWith('=')) {
            const [_, nextTargetColumn, nextTargetRow] = pattern.exec(foundValue.toUpperCase())
            const nextTarget = `${nextTargetColumn}-${nextTargetRow - 1}`

            if (visitedPath.indexOf(nextTarget) > -1) {
                return '#REF3'
            }

            visitedPath.push(nextTarget)

            return solveTargetValue(foundValue)
        }

        return foundValue
    }

    return (
        <Fragment>
            { solveTargetValue(value) }
        </Fragment>
    )
}

export default ReferenceValue
