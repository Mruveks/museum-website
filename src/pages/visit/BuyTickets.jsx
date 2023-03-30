import React,{ useState, useEffect } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from 'react-icons/ai'

const BuyTickets = () => {

  const [selectedDate, setSelectedDate] = useState(0);
  const [selectedDatePicker, setSelectedDatePicker] = useState(0);
  const [dateState, setDate] = useState('')
  const [today, setToday] = useState("")
  const [tomorrow, setTomorrow] = useState("")
  const [cart, setCart] = useState(0)

  const [tickets, setTickets] = useState(0)
  const [ticket1, setTicket1] = useState(0)
  const [ticket2, setTicket2] = useState(0)
  const [ticket3, setTicket3] = useState(0)
  const [ticket4, setTicket4] = useState(0)
  const [ticketsNumber, setTicketsNumber] = useState(0)


  const prices = [
    { price: 30 },
    { price: 0 },
    { price: 17 },
    { price: 22 }
  ];

  function handleDateChange(date, num) {
    setSelectedDate(date);
    setSelectedDatePicker(null);
    setDate(num)
    console.log(selectedDate)
  }
  function handleDatePickerChange(date) {
    setSelectedDate(date);
    setSelectedDatePicker(date);
    setDate('3')
  }

  function AddTicket(ticket) {
    if (ticket === 1) {
      const test = prices[0]
      const number = tickets + test.price
      setTickets(number)
      setTicketsNumber(ticketsNumber + 1)
      setTicket1(ticket1 + 1)
    } else if (ticket === 2) {
      const test = prices[1]
      const number = tickets + test.price
      setTickets(number)
      setTicketsNumber(ticketsNumber + 1)
      setTicket2(ticket2 + 1)
    } else if (ticket === 3) {
      const test = prices[2]
      const number = tickets + test.price
      setTickets(number)
      setTicketsNumber(ticketsNumber + 1)
      setTicket3(ticket3 + 1)
    } else if (ticket === 4) {
      const test = prices[3]
      const number = tickets + test.price
      setTickets(number)
      setTicketsNumber(ticketsNumber + 1)
      setTicket4(ticket4 + 1)
    } 
  }

  function RemoveTicket(ticket) {
    if (ticket === 1) {
      const test = prices[0]
      const number = tickets - test.price
      setTickets(number)
      setTicketsNumber(ticketsNumber - 1)
      setTicket1(ticket1 - 1)
    } else if (ticket === 2) {
      const test = prices[1]
      const number = tickets - test.price
      setTickets(number)
      setTicketsNumber(ticketsNumber - 1)
      setTicket2(ticket2 - 1)
    } else if (ticket === 3) {
      const test = prices[2]
      const number = tickets - test.price
      setTickets(number)
      setTicketsNumber(ticketsNumber - 1)
      setTicket3(ticket3 - 1)
    } else if (ticket === 4) {
      const test = prices[3]
      const number = tickets - test.price
      setTickets(number)
      setTicketsNumber(ticketsNumber - 1)
      setTicket4(ticket4 - 1)
    } 
  }

  function getToday() {  
    const today = new Date();

    const dayToday = today.getDate().toString().padStart(2, '0');
    const day = (today.getDate() + 1).toString().padStart(2, '0');
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const year = today.getFullYear().toString();
    
    setToday(`${dayToday}/${month}/${year}`)
    setTomorrow(`${day}/${month}/${year}`)
   
    return
  }

  useEffect(() => {
    getToday()
  })

  var next = new Date();
  next.setDate(next.getDate() + 1)
  
  return (
    <main>
      <article>
        <section className="container py-16 space-y-4">
          <header className="text-4xl font-bold">General Admission Tickets</header>
          <p className="w-[40rem] pb-2 border-b border-gray-200">$30 for adults; $22 for seniors; $17 for students.</p>
          <p className="w-[40rem] pb-2 border-b border-gray-200">Free for Members, Patrons, and children under 12.</p>
          <p className="w-[40rem] pb-2 border-b border-gray-200">To purchase general admission tickets in advance, choose one of the The Met locations</p>
          <p className="w-[40rem] pb-2 border-b border-gray-200">Admission is free for a caregiver accompanying a visitor with a disability.</p>
        </section>
      </article>

      <aside className="fixed flex flex-col top-[8rem] right-40 bg-white border border-gray-200 shadow-xl h-40 w-96 px-10 py-4">
        <span className="grid grid-flow-col h-10 items-center w-full">
          <header className="w-full text-left font-bold">Subtotal:</header>
          <p className="ml-auto mr-0 space-x-1 text-right font-semibold flex">
            <p>{ticketsNumber} {ticketsNumber === 1 ? 'ticket' : 'tickets'} =</p>
            <p className="w-10">${tickets}</p>
          </p>
        </span>
        <button className="my-auto mx-auto border bg-gradient-to-r from-red-800 to-red-600 w-full py-4 px-8 text-white font-semibold rounded-lg">Add to Cart</button>
      </aside>
      
      <article className="border-gray-400 border-t space-y-16 pt-32">
        <section className="container space-y-2 pr-96">
          <header className="text-2xl font-semibold">1. Date</header>
          <p>Please select an available date for your visit.</p>
          <div className="flex flex-row space-x-32 h-20">
            <button
              className={`${dateState === '1' ? 'bg-gray-600 text-white hover:bg-gray-800' : 'bg-white text-black hover:bg-gray-100'} w-full border border-gray-200 shadow-xl rounded-lg flex-col items-center py-4`}
              onClick={e => handleDateChange(new Date(), '1')}
            >
              <header>Today</header>
              <p>{today}</p>
            </button>
            <button
              className={`${dateState === '2' ? 'bg-gray-600 text-white hover:bg-gray-800' : 'bg-white text-black hover:bg-gray-100'} w-full border border-gray-200 shadow-xl rounded-lg flex-col items-center h-20 py-4`}
              onClick={e => handleDateChange(next, '2')}
            >
              <header>Tomorrow</header>
              <p>{tomorrow}</p>
            </button>
            <form className="w-full border border-gray-200 shadow-xl  rounded-lg items-center">
              <DatePicker
                selected={selectedDatePicker}
                onChange={handleDatePickerChange}
                className={`${dateState != ('1' && '2') ? 'bg-gray-600 text-white hover:bg-gray-800' : 'bg-white text-black hover:bg-gray-100'} rounded-lg text-center`}
                placeholderText="Or enter date"
                minDate={new Date()}
                dateFormat="dd/MM/yyyy"
              />
            </form>
          </div>
        </section>

        <section className="container space-y-2 pr-96">
          <header className="text-2xl font-semibold">2. Tickets</header>
          <div className="flex space-x-1">
            <p>You're visiting the The Museum on </p>
            <p>{selectedDate ? selectedDate.toLocaleDateString() : ''}</p>
          </div>
          <p>Up to nine general admission tickets can be purchased here. For information about bringing a group or scheduling a group tour, see Group Visits.</p>

          <div className="grid grid-flow-row items-center text-center w-full">
            <div className="grid grid-cols-[60%_10%_10%_10%_10%] w-full items-center h-20 border-b border-gray-400">
              <header className="text-left w-full font-bold">Adult Admission</header>
              <p>$30.00</p>
              <p className="cursor-pointer" onClick={ticket1 > 0 ? e => RemoveTicket(1) : null}><AiOutlineMinusSquare size={40}/></p>
              <p>{ticket1}</p>
              <p className="cursor-pointer" onClick={e => AddTicket(1)}><AiOutlinePlusSquare size={40}/></p>
            </div>
          </div>

          <div className="grid grid-flow-row items-center text-center w-full">
            <div className="grid grid-cols-[60%_10%_10%_10%_10%] w-full items-center h-20 border-b border-gray-400">
              <header className="text-left w-full font-bold">Child Admission</header>
              <p>$00.00</p>
              <p className="cursor-pointer" onClick={ticket2 > 0 ? e => RemoveTicket(2) : null}><AiOutlineMinusSquare size={40}/></p>
              <p>{ticket2}</p>
              <p className="cursor-pointer" onClick={e => AddTicket(2)}><AiOutlinePlusSquare size={40}/></p>
            </div>
          </div>

          <div className="grid grid-flow-row items-center text-center w-full">
            <div className="grid grid-cols-[60%_10%_10%_10%_10%] w-full items-center h-20 border-b border-gray-400">
              <header className="text-left w-full font-bold">Student Admission</header>
              <p>$17.00</p>
              <p className="cursor-pointer" onClick={ticket3 > 0 ? e => RemoveTicket(3) : null}><AiOutlineMinusSquare size={40}/></p>
              <p>{ticket3}</p>
              <p className="cursor-pointer" onClick={e => AddTicket(3)}><AiOutlinePlusSquare size={40}/></p>
            </div>
          </div>

          <div className="grid grid-flow-row items-center text-center w-full">
            <div className="grid grid-cols-[60%_10%_10%_10%_10%] w-full items-center h-20 border-b border-gray-400">
              <header className="text-left w-full font-bold">Senior Admission</header>
              <p>$22.00</p>
              <p className="cursor-pointer" onClick={ticket4 > 0 ? e => RemoveTicket(4) : null}><AiOutlineMinusSquare size={40}/></p>
              <p>{ticket4}</p>
              <p className="cursor-pointer" onClick={e => AddTicket(4)}><AiOutlinePlusSquare size={40}/></p>
            </div>
          </div>
        
        </section>

      </article>

    </main>
  )
}

export default BuyTickets
