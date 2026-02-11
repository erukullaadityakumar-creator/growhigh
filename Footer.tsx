import React from 'react';
import { Button } from './Button';
import { Twitter, Linkedin, Mail, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark pt-24 pb-12 border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Final CTA */}
        <div className="relative rounded-2xl p-8 md:p-16 text-center overflow-hidden mb-24 border border-brand-border bg-brand-card hover:border-brand-primary/50 hover:shadow-lg hover:shadow-brand-primary/20 transition-all duration-500 transform hover:-translate-y-2" style={{ animation: `slideUp 0.8s ease-out forwards` }}>
          <div className="absolute inset-0 bg-grid-pattern opacity-10 animate-grid-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/10 to-transparent z-0"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-display">
              Ready to build a <span className="text-brand-primary">predictable pipeline?</span>
            </h2>
            <p className="text-xl text-text-body mb-8 font-sans max-w-2xl mx-auto">
              Let’s map your growth system in one short call.
            </p>

            <div className="flex items-center justify-center mb-10 space-x-2">
              <div className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-primary text-white">
                <Check className="w-3 h-3" strokeWidth={3} />
              </div>
              <p className="text-sm text-text-muted font-medium">Join 50+ founders automating their growth</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                variant="primary" 
                className="w-full sm:w-auto text-lg px-8 py-4 shadow-lg hover:shadow-brand-primary/30"
                href="https://cal.com/aditya-kumar-erukulla-wsluof/15min"
                target="_blank"
              >
                Book Strategy Call
              </Button>
              <Button 
                variant="secondary" 
                className="w-full sm:w-auto text-lg px-8 py-4"
                href="mailto:erukullaadityakumar@gmail.com"
              >
                Contact via Email
              </Button>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-8 md:mb-0">
            <span className="text-2xl font-bold text-white tracking-tight font-display">GrowHigh</span>
          </div>

          <div className="flex items-center space-x-8 text-sm text-text-muted">
             <a href="https://cal.com/aditya-kumar-erukulla-wsluof/15min" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Book Call</a>
             <a href="mailto:erukullaadityakumar@gmail.com" className="hover:text-white transition-colors">Contact</a>
             <a href="#" className="hover:text-white transition-colors">Privacy</a>
             <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>

          <div className="flex items-center space-x-4 mt-8 md:mt-0">
            <a href="https://www.instagram.com/adityacharan_2011/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-brand-border flex items-center justify-center text-text-muted hover:text-white hover:bg-brand-primary transition-all duration-300 hover:scale-110 hover:-translate-y-1">
              <span className="sr-only">Instagram</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465C9.673 2.013 9.92 2 12.315 2zm-1.2 1.95c-2.048 0-2.29.009-3.033.043-.807.037-1.237.169-1.52.28-.383.15-.656.326-.944.613-.287.288-.463.561-.612.944-.111.284-.244.713-.28 1.52-.035.742.044.985.044 3.033 0 2.048.009 2.29.043 3.033.037.807.169 1.237.28 1.52.15.383.326.656.613.944.288.287.561.463.944.612.284.111.713.244-1.52-.28-.742-.035-.985-.044-3.033-.044s-2.29.009-3.033.043zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.95a3.185 3.185 0 100 6.37 3.185 3.185 0 000-6.37zM15.353 7.836a1.44 1.44 0 110-2.88 1.44 1.44 0 010 2.88z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/aditya-charan-erukulla-494993371" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-brand-border flex items-center justify-center text-text-muted hover:text-white hover:bg-brand-primary transition-all duration-300 hover:scale-110 hover:-translate-y-1">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="mailto:erukullaadityakumar@gmail.com" className="w-10 h-10 rounded-full bg-brand-border flex items-center justify-center text-text-muted hover:text-white hover:bg-brand-primary transition-all duration-300 hover:scale-110 hover:-translate-y-1">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
        
        <div className="text-center mt-12 text-sm text-text-muted opacity-50">
          © {new Date().getFullYear()} GrowHigh Agency. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
