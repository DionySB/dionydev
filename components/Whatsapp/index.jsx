import { WhatsAppButton } from './styled';

export default function Whatsapp() {
    const handleClick = () => {
        window.open('https://wa.me/11960429617', '_blank');
      };

  return (
    <footer>
        <WhatsAppButton onClick={handleClick}></WhatsAppButton>
    </footer>
  );
}
