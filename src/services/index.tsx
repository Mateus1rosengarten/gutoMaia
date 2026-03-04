import WhatsAppContact from "@/whatsAppButton";
import { Card, CardsContainer, ServiceContainer } from "./style";

interface ServiceItem {
  title: string;
  description: string;
}

const Service: React.FC = () => {
  return (
    <ServiceContainer id="service">
      <CardsContainer>
        {services.map((service, index) => (
          <Card key={index}>
            <h3>
              <strong>{service.title}</strong>
              <hr style={{ marginTop: "10px" }} />
            </h3>
            <p dangerouslySetInnerHTML={{ __html: service.description }} />
            <WhatsAppContact />
          </Card>
        ))}
      </CardsContainer>
    </ServiceContainer>
  );
};

export default Service;

const services: ServiceItem[] = [
  {
    title: "Atendimento Personalizado",
    description: `
      Ofereço um atendimento <strong>personalizado e humanizado</strong>,
      com foco no bem-estar do paciente e também no <strong>suporte essencial à família</strong>.
      Tendo acesso a uma <strong>comunidade de apoio</strong>, onde famílias podem compartilhar experiências,
      fortalecendo a rede de inclusão e suporte.
    `,
  },
  {
    title: "Terapias Online com Flexibilidade",
    description: `
      Acredito que a inclusão e o apoio não devem ter fronteiras. Por isso, meu serviço é totalmente online,
      proporcionando a possibilidade de atender pessoas sem limitações geográficas.
      <strong>As terapias são realizadas via EAD</strong>, garantindo flexibilidade e comodidade para quem precisa de apoio.
    `,
  },
  {
    title: "Agendamentos e Pacotes",
    description: `
      Ofereço <strong>terapias avulsas</strong> para atendimentos pontuais
      e <strong>pacotes de 4 sessões</strong> para acompanhamento contínuo.
      <br />Além disso, <strong>oferecemos descontos especiais</strong> para pessoas selecionadas
      garantindo que o acesso ao tratamento seja acessível para todos.
    `,
  },
];
