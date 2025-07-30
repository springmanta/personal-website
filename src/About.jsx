import './About.css'
import BackButton from './BackButton'

export default function About({onBack}) {
  return (
    <div>
      <h1>Me</h1>
      <p>I'm an aspiring full-stack software developer with a focus on building clear, functional applications and learning by doing.</p>
      <p>Coming from an IT and business background, I have an interest in how both frontend and backend pieces come together to solve real problems.</p>
      <p>I enjoy working in collaborative environments and picking up new tools along the way.</p>
      <br />
      <BackButton onClick={onBack} />
    </div>
  );
}
