import Image from "next/image";
import {
  FooterContainer,
  SocialIcons,
  IconLink,
  Copyright,
  WhatsAppButton,
  FooterContact,
} from "./style";

interface SocialItem {
  href: string;
  src: string;
  alt: string;
}

const FooterSection: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <FooterContainer id="contato">
        <FooterContact>
          <div>
            <IconLink href="mailto:maiagutomaia@gmail.com" target="_blank">
              <Image
                src="/images/gmail.png"
                alt="Gmail"
                width={24}
                height={24}
              />
            </IconLink>
            <span>maiagutomaia@gmail.com</span>
          </div>

          <SocialIcons>
            {socialLinks.map((item) => (
              <IconLink key={item.alt} href={item.href} target="_blank">
                <Image src={item.src} alt={item.alt} width={24} height={24} />
              </IconLink>
            ))}
          </SocialIcons>
        </FooterContact>

        <Copyright>
          &copy; {currentYear} José Augusto Maia Baptista (CBO 2394-40/45).
          Todos os direitos reservados.
        </Copyright>
      </FooterContainer>

      <WhatsAppButton
        href="https://wa.me/5511993784603"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/images/whatsapp.png"
          alt="WhatsApp"
          width={40}
          height={40}
        />
      </WhatsAppButton>
    </>
  );
};

export default FooterSection;

const socialLinks: SocialItem[] = [
  {
    href: "https://www.facebook.com/guto.maia",
    src: "/images/face.png",
    alt: "Facebook",
  },
  {
    href: "https://www.youtube.com/@GutoMaia",
    src: "/images/ytb.png",
    alt: "YouTube",
  },
  {
    href: "https://www.linkedin.com/in/gutomaiabaptista",
    src: "/images/linkedin.png",
    alt: "LinkedIn",
  },
  {
    href: "https://www.instagram.com/gutomaiabaptista",
    src: "/images/instagram.png",
    alt: "Instagram",
  },
];
