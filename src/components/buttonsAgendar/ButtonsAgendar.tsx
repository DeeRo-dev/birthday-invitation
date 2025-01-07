"use client"
import React from "react";

const ButtonsAgendar: React.FC = () => {
  const handleClick = () => {
    // Fecha y hora de inicio (4:30 PM a 7:30 PM en hora de Argentina)
    const startDate = "20250119T163000-0300"; // 4:30 PM (hora local Argentina -03:00)
    const endDate = "20250119T193000-0300"; // 7:30 PM (hora local Argentina -03:00)
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
      className="bg-red-600/80 text-yellow-400 border-2 border-black w-56 rounded-full m-auto mt-12 font-bold px-6 py-4"
    >
      AGENDA MI CUMPLE!
    </button>
  );
};

export default ButtonsAgendar;
