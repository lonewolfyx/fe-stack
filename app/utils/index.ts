export const capitalize = (str: string) => {
    return str.replace('-', ' ')
        .split(' ')
        .map((item: string) => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase())
        .join(' ')
}
