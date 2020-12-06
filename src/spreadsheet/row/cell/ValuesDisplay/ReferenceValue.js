import { Fragment } from "react"

import { columnNameToIndex } from '../../../../utils';

const pattern = /=([A-Z]*)([0-9]*)/

const ReferenceValue = ({ data, value, rowIdx, columnIdx }) => {
    const visitedPath = [`${rowIdx}-${columnIdx}`]

    const solveTargetValue = currentValue => {
        const [_, targetColumn, targetRow] = pattern.exec(currentValue.toUpperCase())

        const foundValue = data ? 
            data[targetRow - 1] ? 
                data[targetRow - 1][columnNameToIndex(targetColumn)] ? 
                    data[targetRow - 1][columnNameToIndex(targetColumn)] : '#REF1' : '#REF2' : '#REF3'

        if (foundValue.startsWith('=')) {
            const [_, nextTargetColumn, nextTargetRow] = pattern.exec(foundValue.toUpperCase())

            if (visitedPath.indexOf(`${nextTargetColumn}-${nextTargetRow - 1}`) > -1) {
                return '#REF4'
            }

            visitedPath.push(`${nextTargetColumn}-${nextTargetRow - 1}`)

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
