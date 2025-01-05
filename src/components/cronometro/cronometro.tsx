// import { useEffect, useState } from "react";
// function calculateTimeLeft() {
//     const targetDate = new Date("2025-01-19T16:30:00");
//     const now = new Date();
//     const difference = targetDate.getTime() - now.getTime();
  
//     let timeLeft = {};
  
//     if (difference > 0) {
//       timeLeft = {
//         days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//         hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//         minutes: Math.floor((difference / 1000 / 60) % 60),
//         seconds: Math.floor((difference / 1000) % 60),
//       };
//     }
  
//     return timeLeft;
//   }
  
//   function Countdown() {
//     const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  
//     useEffect(() => {
//       const timer = setTimeout(() => {
//         setTimeLeft(calculateTimeLeft());
//       }, 1000);
  
//       return () => clearTimeout(timer);
//     });
  
//     const timerComponents = [];
  
//     Object.keys(timeLeft).forEach((interval) => {
//       if (!timeLeft[interval]) {
//         return;
//       }
  
//       timerComponents.push(
//         <span key={interval}>
//           {timeLeft[interval]} {interval}{" "}
//         </span>
//       );
//     });
  
//     return (
//       <p>
//         {timerComponents.length ? timerComponents : <span>Time's up!</span>}
//       </p>
//     );
//   }
  
  