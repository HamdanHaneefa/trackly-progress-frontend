import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-5 px-4 text-center text-xs">
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 mb-1">
        <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
        <span className="opacity-30">·</span>
        <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
        <span className="opacity-30">·</span>
        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        <span className="opacity-30">·</span>
        <a href="#" className="hover:text-white transition-colors">Terms &amp; Conditions</a>
      </div>
      <p>© {new Date().getFullYear()} Trackly. All rights reserved.</p>
    </footer>
  );
}
