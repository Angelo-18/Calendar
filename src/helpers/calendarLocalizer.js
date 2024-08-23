import { dateFnsLocalizer } from 'react-big-calendar'
import enES from 'date-fns/locale/es'
// import enUS from 'date-fns/locale/en-US'

import { format, parse, startOfWeek, getDay } from 'date-fns'
const locales = {
    'es': enES,
  }
  
  export const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  });