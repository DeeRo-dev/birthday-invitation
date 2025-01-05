import React from 'react';

const WhatsAppButton: React.FC = () => {
  const handleClick = () => {
    // Aquí puedes definir el mensaje con saltos de línea
    const message = "Confirmo mi asistencia\n\nGracias por la invitación.";
    
    // Codificamos el mensaje para asegurarnos de que los caracteres especiales (como saltos de línea) no causen errores en la URL
    const encodedMessage = encodeURIComponent(message);

    // Creamos la URL para abrir WhatsApp con el mensaje predeterminado
    const whatsappUrl = `https://wa.me/+541166098973?text=${encodedMessage}`;
    
    // Abrimos la URL en una nueva ventana o pestaña
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="bg-red-600/80 text-yellow-400 border-2 border-black w-56 rounded-full m-auto font-bold px-6 py-4 max-w-[350px]"
    >
      Confirmar mi asistencia
    </button>
  );
};

export default WhatsAppButton;
