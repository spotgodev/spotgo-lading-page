import { useState, useRef } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Mail, Check } from 'lucide-react';

interface PreRegisterFormProps {
  variant?: 'default' | 'contrast';
}

export function PreRegisterForm({ variant = 'default' }: PreRegisterFormProps) {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    
    try {
      const formData = new FormData();
      formData.append('email', email);
      
      const response = await fetch('https://submit-form.com/UoM5XERYg', {
        method: 'POST',
        body: formData,
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        setEmail('');
      } else {
        console.error('Erro ao enviar formulário');
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const isContrast = variant === 'contrast';

  if (isSubmitted) {
    return (
      <div className={`w-full max-w-md mx-auto p-8 rounded-2xl text-center animate-in fade-in duration-500 ${
        isContrast 
          ? 'bg-white shadow-xl' 
          : 'bg-green-500/10 border border-green-500/20'
      }`}>
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white mb-4">
          <Check className="h-8 w-8" />
        </div>
        <h3 className={`mb-2 text-xl font-bold ${isContrast ? 'text-gray-900' : ''}`}>Pré-registro confirmado!</h3>
        <p className={isContrast ? 'text-gray-600' : 'text-muted-foreground'}>
          Você receberá um email quando o SPOTGO estiver disponível para download.
        </p>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsSubmitted(false)}
          className={`mt-4 ${isContrast ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100' : ''}`}
        >
          Fazer outro pré-registro
        </Button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 ${
            isContrast ? 'text-gray-400' : 'text-muted-foreground'
          }`} />
          <Input
            type="email"
            name="email"
            placeholder="seu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={`h-14 pl-12 text-lg ${
              isContrast 
                ? 'bg-white text-gray-900 placeholder:text-gray-400 border-0 shadow-lg focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-orange-500' 
                : 'border-2'
            }`}
            disabled={isLoading}
          />
        </div>
        <Button
          type="submit"
          size="lg"
          disabled={isLoading}
          className={`h-14 px-8 shrink-0 ${
            isContrast
              ? 'bg-gray-900 text-white hover:bg-gray-800 shadow-lg'
              : 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700'
          }`}
        >
          {isLoading ? 'Enviando...' : 'Quero ser avisado!'}
        </Button>
      </div>
      <p className={`mt-4 text-sm text-center ${
        isContrast ? 'text-white' : 'text-muted-foreground'
      }`}>
        Sem spam. Apenas avisos sobre o lançamento e novidades exclusivas.
      </p>
    </form>
  );
}
