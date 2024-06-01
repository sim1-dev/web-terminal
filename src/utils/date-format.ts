import { toUpperCaseFirst } from "./string-format"

const options: Intl.DateTimeFormatOptions = { month: 'long', year: 'numeric' }

export function formatDateMonth(date: Date): string {
    return toUpperCaseFirst((new Intl.DateTimeFormat('it-IT', options)).format(date))
}

export function formatPeriod(start?: Date, end?: Date): string {
    if(!start)
        return ""

    return formatDateMonth(start)+ " - " + (end ? formatDateMonth(end) : "In corso")
}