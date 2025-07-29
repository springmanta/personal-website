import './Navbar.css'

export default function Navbar({ setActiveSection }) {
  return (
    <div className='navbar'>
      <h1 onClick={() => setActiveSection('home')}>Home</h1>
      <h1 onClick={() => setActiveSection('about')}>About</h1>
      <h1 onClick={() => setActiveSection('projects')}>Projects</h1>
      <h1 onClick={() => setActiveSection('skills')}>Skills</h1>
    </div>
  );
}
