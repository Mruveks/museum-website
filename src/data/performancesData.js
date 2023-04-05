import performance1 from "../assets/performance1.png";
import performance2 from "../assets/performance2.png";

var day = new Date();
var today = day.getDate();
var tomorrow = today + 1;

export const performancesData = [
  [
    {
      id: "1",
      img: performance1,
      title: "The Art of Movement", 
      date: 'April ' + today.toString(),
      hour: "10:00 am - 12:00 pm",
    },
    {
      id: "2",
      img: performance1,
      title: "Dance Through the Ages",     
      date: 'April ' + today.toString(),
      hour: "11:00 am - 12:30 pm",
    },
    {
      id: "3",
      img: performance1,
      title: "Catalyst Quartet: Lost and Found in the Galleries",     
      date: 'April ' + today.toString(),
      hour: "11:00 am - 12:30 pm",
    },
    {
      id: "4",
      img: performance1,
      title: "The Art of Flamenco",
      
      date: 'April ' + today.toString(),
      hour: "12:00 pm - 1:30 pm",
    },
  ],
  [
    {
      id: "1",
      img: performance2,
      title: "Classical Music for Kids",
      
      date: "April " + tomorrow.toString(),
      hour: "11:00 am - 12:00 pm",
    },
    {
      id: "2",
      img: performance2,
      title: "Afternoon Jazz Jam Session",
      
      date: "April " + tomorrow.toString(),
      hour: "2:00 pm - 4:00 pm",
    },
    {
      id: "3",
      img: performance2,
      title: "The Art of Belly Dance",
      
      date: "April " + tomorrow.toString(),
      hour: "5:00 pm - 6:00 pm",
    },
    {
      id: "4",
      img: performance2,
      title: "Evening Improv Comedy Show",
      
      date: "April " + tomorrow.toString(),
      hour: "7:00 pm - 8:00 pm",
    },
    {
      id: "5",
      img: performance2,
      title: "Magical Evening with Illusionists",
      
      date: "April " + tomorrow.toString(),
      hour: "6:00 pm - 8:00 pm",
    },
    {
      id: "6",
      img: performance2,
      title: "Rock Concert at the Museum",
      
      date: "April " + tomorrow.toString(),
      hour: "8:00 pm - 10:00 pm",
    },
  ],
  [
    {
      id: "1",
      img: performance1,
      title: "The Art of Mime",
      date: "2023-04-12",
      hour: "2:00 pm - 3:00 pm",
    },
    {
      id: "2",
      img: performance1,
      title: "Latin Dance Showcase",
      date: "2023-04-15",
      hour: "6:30 pm - 8:00 pm",
    },
    {
      id: "3",
      img: performance1,
      title: "Theater Performance: 'Romeo and Juliet'",
      date: "2023-04-18",
      hour: "7:00 pm - 9:00 pm",
    },
    {
      id: "4",
      img: performance1,
      title: "Jazz Night at the Museum",
      date: "2023-04-22",
      hour: "8:00 pm - 10:00 pm",
    },
    {
      id: "5",
      img: performance1,
      title: "Contemporary Dance Performance",
      date: "2023-04-25",
      hour: "3:00 pm - 4:30 pm",
    },
    {
      id: "6",
      img: performance1,
      title: "A Night of Stand-Up Comedy",
      date: "2023-04-28",
      hour: "7:30 pm - 9:00 pm",
    },
  ], [
    {
      id: "1",
      img: performance1,
      title: "Opera Night at the Museum",
      date: "2023-05-02",
      hour: "7:00 pm - 9:30 pm",
    },
    {
      id: "2",
      img: performance1,
      title: "African Drumming Workshop",
      date: "2023-05-05",
      hour: "11:00 am - 12:30 pm",
    },
    {
      id: "3",
      img: performance1,
      title: "Hip Hop Dance Battle",
      date: "2023-05-09",
      hour: "5:00 pm - 7:00 pm",
    },
    {
      id: "4",
      img: performance1,
      title: "Chamber Music Concert",
      date: "2023-05-12",
      hour: "2:00 pm - 3:30 pm",
    },
    {
      id: "5",
      img: performance1,
      title: "Stand-Up Comedy Open Mic",
      date: "2023-05-16",
      hour: "7:30 pm - 9:00 pm",
    },
    {
      id: "6",
      img: performance1,
      title: "Latin Jazz Night",
      date: "2023-05-19",
      hour: "8:00 pm - 10:00 pm",
    }
  ]
];
