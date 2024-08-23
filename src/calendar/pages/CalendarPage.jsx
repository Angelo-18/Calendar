import React from 'react'
import { Navbar } from '../components/Navbar'
import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { addHours} from 'date-fns'
import { getMessages, localizer } from '../../helpers'
import { CalendarEvent } from '../components/CalendarEvent'
import { useState } from 'react'

const events = [{
  title: 'Cumpleaños del Jefe',
  notes: 'Hay que comprar el pastel',
  start: new Date(),
  end: addHours(new Date(), 1),
  bgColor: '#fafafa',
  user:{
    _id: '123',
    name: 'Angelo'
  }

  }
]
export const CalendarPage = () => {
  const [lastView, setLastView] = useState(localStorage.getItem( 'lastView' || 'week' ) );
  const eventStyleGetter = (event, start, end, isSelected) =>{
    // console.log({event, start, end, isSelected});
    const style = {
      backgroundColor: '#347CF7',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white'
    }
    return {
      style
    }
  };

  const onDoubleClick = (event) => {
    console.log({onDoubleClick: event});
  };

  const onSelect = (event) =>{
    console.log({click: event});
  };

  const onViewChanged = (event) => {
    console.log({viewChanged: event});
  }
  
  return (
    <>
      <Navbar/>
      <div>
        <Calendar
          culture='es'
          localizer={localizer}
          events={events}
          defaultView={ "agenda"}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 'calc(100vh - 80px)' }}
          messages={getMessages()}
          eventPropGetter={eventStyleGetter}
          components={{
            event: CalendarEvent
          }}
          onDoubleClickEvent={ onDoubleClick }
          onSelectEvent={ onSelect}
          onView={onViewChanged}
          
        />
      </div>

    </>
  )
}
