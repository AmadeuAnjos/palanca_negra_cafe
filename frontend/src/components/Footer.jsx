import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="md:flex justify-between">
          
          <ContactInfo />
          
          <BusinessHours />
          
          <SocialMedia />
          
        </div>
        <Copyright />
      </div>
    </footer>
  )
}

const ContactInfo = () => (
  <div className="mb-8 md:mb-0">
    <h3 className="text-xl font-serif font-bold mb-4">Palanca Negra Café</h3>
    <p>Rua 25 de Abril, 135</p>
    <p>Darque, Viana do Castelo</p>
    <p>CEP: 4935-069</p>
  </div>
)

const BusinessHours = () => (
  <div className="mb-8 md:mb-0">
    <h3 className="text-xl font-serif font-bold mb-4">Horário de Funcionamento</h3>
    <p>Segunda a Sexta: 8h - 20h</p>
    <p>Sábado: 9h - 22h</p>
    <p>Domingo: 9h - 18h</p>
  </div>
)

const SocialMedia = () => (
  <div>
    <h3 className="text-xl font-serif font-bold mb-4">Redes Sociais</h3>
    <div className="flex space-x-4">
      <SocialIcon 
        icon={faFacebookF} 
        href="#" 
        ariaLabel="Facebook" 
      />
      <SocialIcon 
        icon={faInstagram} 
        href="#" 
        ariaLabel="Instagram" 
      />
      <SocialIcon 
        icon={faWhatsapp} 
        href="#" 
        ariaLabel="WhatsApp" 
      />
    </div>
    <p className="mt-4">contato@palancanegracafe.com.br</p>
    <p>258 322 747</p>
  </div>
)

const SocialIcon = ({ icon, href, ariaLabel }) => (
  <a 
    href={href} 
    className="text-2xl hover:text-accent transition-colors"
    aria-label={ariaLabel}
    target="_blank"
    rel="noopener noreferrer"
  >
    <FontAwesomeIcon icon={icon} />
  </a>
)

const Copyright = () => (
  <div className="border-t border-gray-700 mt-8 pt-8 text-center">
    <p>&copy; Amadeu dos Anjos Barros. Todos os direitos reservados.</p>
  </div>
)

export default Footer