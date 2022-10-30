function copy<T extends { name: string }, U extends keyof T>(
    value: T,
    key: U
): T {
    value[key]
    return value
}
console.log(copy({ name: 'Quiil', age: 28 }, 'name'))

type K = keyof { name: string; age: number }
