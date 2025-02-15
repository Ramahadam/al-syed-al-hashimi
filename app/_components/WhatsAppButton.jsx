import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = '+971505650190'; // Replace with your number
  const message = encodeURIComponent("Hello! I'm interested in your services.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center gap-2 hover:bg-green-600 transition"
    >
      <FaWhatsapp size={24} />
      <span className="hidden sm:inline">Chat with us</span>
    </a>
  );
};

export default WhatsAppButton;
