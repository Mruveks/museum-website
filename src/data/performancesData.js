import performance1 from '../assets/performance1.png'
import performance2 from '../assets/performance2.png'

var day = new Date();
var today = day.getDate()
var tomorrow = today + 1

export const performancesData = [
  [
    {
      id: '1',
      img: performance1,
      title: 'Date Night at The Met',
      price: '',
      date: today.toString(),
      hour: '',
    },
    {
      id: '1',
      img: performance1,
      title: 'Date Night at The Met',
      price: '',
      date: today.toString(),
      hour: '',
    },
    {
      id: '2',
      img: performance1,
      title: 'Catalyst Quartet: Lost and Found in the Galleries',
      price: '',
      date: today.toString(),
      hour: '12:00 am',
    },
    {
      id: '2',
      img: performance1,
      title: 'Catalyst Quartet: Lost and Found in the Galleries',
      price: '',
      date: today.toString(),
      hour: '1:00 am',
    }, 
  ],
  [
    {
      id: '1',
      img: performance2,
      title: 'Date Night at The Met',
      price: '',
      date: today.toString(),
      hour: '',
    },
    {
      id: '2',
      img: performance2,
      title: 'Catalyst Quartet: Lost and Found in the Galleries',
      price: '',
      date: today.toString(),
      hour: '12:00 am',
    },
    {
      id: '2',
      img: performance2,
      title: 'Catalyst Quartet: Lost and Found in the Galleries',
      price: '',
      date: today.toString(),
      hour: '1:00 am',
    }, 
  ],
  [
    {
      id: '1',
      img: performance1,
      title: 'Date Night at The Met',
      price: '',
      date: today.toString(),
      hour: '',
    },
    {
      id: '2',
      img: '',
      title: 'Catalyst Quartet: Lost and Found in the Galleries',
      price: '',
      date: today.toString(),
      hour: '12:00 am',
    },
    {
      id: '2',
      img: '',
      title: 'Catalyst Quartet: Lost and Found in the Galleries',
      price: '',
      date: today.toString(),
      hour: '1:00 am',
    }, 
  ],
]
console.log(performancesData[0])