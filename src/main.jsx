import { createRoot } from 'react-dom/client';
import { flushSync } from 'react-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Contract from './pages/Contract.jsx';
import Introduction from './pages/Introduction.jsx';
import About from './pages/About.jsx';

const pages = { 'contract.html': ['Contract', Contract], 'introduction.html': ['Introduction', Introduction], 'about.html': ['About', About] };
const filename = window.location.pathname.split('/').pop();
const [name, Page] = pages[filename] || ['Home', Home];
document.title = `Neelesh Reddi's Noble Raven | ITIS3135 | ${name}`;

// Render before loading validators so they inspect the complete React page.
flushSync(() => createRoot(document.getElementById('root')).render(<><Header page={name} /><Page /><Footer /></>));
