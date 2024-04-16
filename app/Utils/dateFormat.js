export function formatDate(rawDate) {
    const parsedDate = new Date(rawDate)
    return Intl.DateTimeFormat('es-cr',{dateStyle:'long'}).format(parsedDate)
}