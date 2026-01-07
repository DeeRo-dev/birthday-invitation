"use client"
import React from "react";

const ButtonsAgendar: React.FC = () => {
  const handleClick = () => {
    // Fecha y hora de inicio (18:00 hs a 21:00 hs en hora de Argentina)
    const startDate = "20260113T180000-0300"; // 18:00 hs (hora local Argentina -03:00)
    const endDate = "20260113T210000-0300"; // 21:00 hs (hora local Argentina -03:00)
    const eventTitle = "Cumpleaños de Dante Cabrera"; // Título del evento
    const eventDescription = "Invitación al cumple"; // Descripción del evento

    const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      eventTitle
    )}&dates=${startDate}/${endDate}&details=${encodeURIComponent(eventDescription)}`;

    // Redirige al usuario a Google Calendar
    window.open(googleCalendarUrl, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="bg-custom-blue/80 text-custom-yellow border-2 border-black  rounded-full m-auto font-bold px-6 py-4"
    >
      AGENDA MI CUMPLE!
    </button>
  );
};

export default ButtonsAgendar;
