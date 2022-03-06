import { Injectable } from "@angular/core"
import { NativeDateAdapter } from "@angular/material/core";

export const APP_DATE_FORMATS =
{
    parse: {
        dateInput: { month: 'short', year: 'numeric', day: 'numeric' },
    },
    display: {
        dateInput: 'input',
        monthYearLabel: { year: 'numeric', month: 'numeric' },
        dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
        monthYearA11yLabel: { year: 'numeric', month: 'long' },
    }
}

const WEEKDAY_NAMES = [
    "vasárnap",
    "hétfő",
    "kedd",
    "szerda",
    "csütörtök",
    "péntek",
    "szombat"
]

const MONTH_NAMES = [
    "január",
    "február",
    "március",
    "április",
    "május",
    "június",
    "július",
    "augusztus",
    "október",
    "november",
    "december"
]

@Injectable()
export class MagyarDateAdapter extends NativeDateAdapter {

    override format(date: Date, displayFormat: Object): string {
        return formatHungarianDate(date)
    }

    // override parse(value: any): Date | null {
    //     const date = moment(value, APP_DATE_FORMAT);
    //     return date.isValid() ? date.toDate() : null;
    // }
}

export function formatHungarianDate(date: Date): string {
    const day = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()
    const weekday = date.getDay()

    return `${year}. ${MONTH_NAMES[month]} ${day}. ${WEEKDAY_NAMES[weekday]}.`;
}

export function formatHungarianTime(date: Date): string {
    const hours = date.getHours()
    const minutes = date.getMinutes()

    const amPm = hours < 12 ? 'délelőtt' : 'délután'
    const minutesString = minutes < 10 ? `0${minutes}` : `${minutes}`

    return `${amPm} ${hours} óra ${minutes} perc`;
}

export function formatHungarianDateTime(date: Date): string {
    return `${formatHungarianDate(date)} ${formatHungarianTime(date)}`;
}
