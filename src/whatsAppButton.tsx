import Image from "next/image";
import { WhatsAppButton } from "./services/style";

const WhatsAppContact: React.FC = ({}) => {
  const whatsappLink = `https://wa.me/5511993784603?text=${encodeURIComponent(
    customMessage
  )}`;

  const handleClick = () => {
    window.open(whatsappLink, "_blank", "noopener,noreferrer");
  };

  return (
    <WhatsAppButton onClick={handleClick}>
      <Image
        src={"/images/whatsapp.png"}
        alt="whatsapp-logo"
        width={35}
        height={35}
      ></Image>
      <span>(11) 99378-4603</span>
    </WhatsAppButton>
  );
};

export default WhatsAppContact;

const customMessage =
  "Olá, gostaria de mais informações para marcarmos nossa primeira consulta.";
