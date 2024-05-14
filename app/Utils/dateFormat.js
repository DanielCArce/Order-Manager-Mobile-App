export function formatDate(rawDate) {
    const parsedDate = new Date(rawDate)
    return Intl.DateTimeFormat('es-cr',{dateStyle:'long'}).format(parsedDate)
}
export function formatNumbers(number) {
    return Intl.NumberFormat('es-cr',{style:'currency', currency:'CRC'}).format(number)
}