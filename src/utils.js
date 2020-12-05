export function indexToColumnName(idx) {
    const f = (n, str = '') => {
        if (n >= 26) {
            return f(n - 26, str + 'A')
        }
        
        return str + String.fromCharCode(65 + n)
    }

    return f(idx)
}

export function columnNameToIndex(columnName) {
    return columnName.split('')
        .map(char => char.charCodeAt() - 65) // 'A'.charCodeAt() => 65
        .reduce((acum, item, idx) => acum + item + (idx ? 26 : 0), 0)
}
