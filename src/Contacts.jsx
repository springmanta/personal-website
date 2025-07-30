import './Contacts.css'
import BackButton from './BackButton'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Contacts({onBack}) {

  return (
    <div className="contacts-container">
      <div className="contact-links-section">
        <a href="https://www.linkedin.com/in/sim%C3%A3o-martins-69037a35/" className="contact-links" target="_blank"><FaLinkedin size={24}/></a>
        <a href="https://github.com/springmanta" className="contact-links" target="_blank"><FaGithub size={24}/></a>
        <a href="mailto:simaopmartins@gmail.com" className="contact-links"><FaEnvelope size={24}/></a>
      </div>
      <div className="back-button-container">
        <BackButton onClick={onBack} />
      </div>
    </div>
  );
}
