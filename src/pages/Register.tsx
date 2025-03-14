
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Facebook, Smartphone, ChevronLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from "@/hooks/use-toast";

const Register = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleBack = () => {
    navigate(-1);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!name || !email || !password || !confirmPassword) {
      toast({
        title: "Erro de registro",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive"
      });
      return;
    }
    
    if (password !== confirmPassword) {
      toast({
        title: "Erro de registro",
        description: "As senhas não coincidem.",
        variant: "destructive"
      });
      return;
    }
    
    // For demo purposes we'll just show a success message
    toast({
      title: "Registro bem-sucedido",
      description: "Sua conta foi criada com sucesso!",
    });
    
    // Navigate to login page after successful registration
    setTimeout(() => {
      navigate('/entrar');
    }, 1500);
  };

  const handleGoogleRegister = () => {
    // In a real app, this would initiate Google OAuth flow
    toast({
      title: "Registro com Google",
      description: "Iniciando autenticação com Google...",
    });
    
    // Simulate successful registration after a delay
    setTimeout(() => {
      toast({
        title: "Registro bem-sucedido",
        description: "Sua conta foi criada com Google com sucesso!",
      });
      navigate('/');
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="flex-grow bg-gradient-to-r from-sky-100 to-blue-200 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-4">
            <Button 
              variant="outline" 
              className="flex items-center gap-2 bg-white"
              onClick={handleBack}
            >
              <ChevronLeft className="h-4 w-4" />
              Voltar
            </Button>
          </div>

          <h1 className="text-2xl font-medium text-gray-700 mb-8">Inscrever-se</h1>
          
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-1/2">
              <form onSubmit={handleRegister}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-800"
                    placeholder="Seu nome completo"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-800"
                    placeholder="seu.email@exemplo.com"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Senha <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-800"
                    placeholder="Crie uma senha forte"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                    Confirmar Senha <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-800"
                    placeholder="Confirme sua senha"
                  />
                </div>
                
                <Button type="submit" className="w-full bg-blue-800 text-white py-3 rounded-md hover:bg-blue-900 transition-colors mb-4">
                  Criar Conta
                </Button>
              </form>
              
              <div className="mt-6 relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-gradient-to-r from-sky-100 to-blue-200 text-gray-500">ou</span>
                </div>
              </div>
              
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <button 
                  onClick={handleGoogleRegister}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:bg-gray-50 bg-white"
                >
                  <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                  </svg>
                  <span>Registrar com Google</span>
                </button>
                <a href="#" className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:bg-gray-50 bg-white">
                  <Facebook className="h-4 w-4" />
                  <span>Registrar com Facebook</span>
                </a>
              </div>
            </div>
            
            <div className="w-full md:w-1/2">
              <div className="relative overflow-hidden rounded-lg h-[500px]">
                <img 
                  src="/lovable-uploads/294f5448-aa50-475d-a26d-8f5cb2dc13d7.png" 
                  alt="Delivery person with packages" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex flex-col justify-end p-8">
                  <h2 className="text-white text-3xl font-bold">
                    Crie sua conta<br />
                    <span className="text-blue-300">e junte-se a nós!</span>
                  </h2>
                  <div className="flex mt-4">
                    <div className="w-2 h-2 rounded-full bg-white opacity-50 mr-2"></div>
                    <div className="w-2 h-2 rounded-full bg-white mr-2"></div>
                    <div className="w-2 h-2 rounded-full bg-white opacity-50"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Register;
