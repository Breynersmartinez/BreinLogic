import React, { useState } from 'react';
import { Brain, MessageSquare, FileText, Zap, Star, Send, Upload, Bot, Users } from 'lucide-react';

const HomePage = ({ onStartChat, messages }) => {
  const [testimonialData, setTestimonialData] = useState({
    name: '',
    email: '',
    rating: 5,
    comment: ''
  });
  const [submitTestimonial, setSubmitTestimonial] = useState(false);

  const handleTestimonialSubmit = async (e) => {
    e.preventDefault();
    setSubmitTestimonial(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      alert("¡Gracias por tu comentario! Será revisado y publicado pronto.");
      setTestimonialData({ name: '', email: '', rating: 5, comment: '' });
    } catch (err) {
      alert("Error al enviar el comentario");
    } finally {
      setSubmitTestimonial(false);
    }
  };

  const handleTestimonialChange = (e) => {
    setTestimonialData({
      ...testimonialData,
      [e.target.name]: e.target.value
    });
  };

  const features = [
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Conversaciones Inteligentes",
      description: "Mantiene contexto para respuestas coherentes y precisas"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Análisis de PDFs",
      description: "Procesa documentos y responde preguntas específicas"
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Asistencia Académica",
      description: "Especializado en temas educativos y de investigación"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Respuestas Rápidas",
      description: "Procesamiento veloz con IA de última generación"
    }
  ];

  const testimonials = [
    {
      name: "María González",
      role: "Estudiante de Medicina",
      comment: "BreinLogic me ha ayudado enormemente en mis estudios. Puede analizar mis PDFs de anatomía y responder preguntas específicas.",
      rating: 5,
      avatar: "MG"
    },
    {
      name: "Carlos Ruiz",
      role: "Investigador",
      comment: "La capacidad de mantener contexto en conversaciones largas es impresionante. Una herramienta esencial.",
      rating: 5,
      avatar: "CR"
    },
    {
      name: "Ana Martínez",
      role: "Profesora",
      comment: "Uso BreinLogic para preparar clases y analizar papers. La precisión en las respuestas es excelente.",
      rating: 5,
      avatar: "AM"
    }
  ];

  const quickStartOptions = [
    {
      title: "Hacer una pregunta",
      description: "Pregunta cualquier cosa sobre temas académicos",
      prompt: "¿Puedes explicarme el concepto de...",
      icon: <MessageSquare className="h-5 w-5" />
    },
    {
      title: "Analizar documento",
      description: "Sube un PDF para análisis detallado",
      prompt: "Necesito analizar este documento...",
      icon: <Upload className="h-5 w-5" />
    },
    {
      title: "Ayuda con tareas",
      description: "Obtén asistencia con proyectos académicos",
      prompt: "Necesito ayuda con mi tarea sobre...",
      icon: <FileText className="h-5 w-5" />
    },
    {
      title: "Resolver problemas",
      description: "Soluciones paso a paso para ejercicios",
      prompt: "¿Puedes ayudarme a resolver este problema de...",
      icon: <Brain className="h-5 w-5" />
    }
  ];

  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-gray-900">
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Hero Section */}
        <div className="text-center py-12 px-8">
          <div className="max-w-4xl mx-auto">
            {/* Logo and Title */}
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mr-4">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                BreinLogic
              </h1>
            </div>

            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Tu asistente de IA para conversaciones inteligentes, análisis de documentos y soporte académico
            </p>

            {/* Stats */}
            <div className="flex justify-center space-x-8 mb-12 text-gray-400">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span className="text-sm">1000+ usuarios</span>
              </div>
              <div className="flex items-center space-x-2">
                <FileText className="h-5 w-5" />
                <span className="text-sm">PDF compatible</span>
              </div>
              <div className="flex items-center space-x-2">
                <Bot className="h-5 w-5" />
                <span className="text-sm">IA avanzada</span>
              </div>
            </div>

            {/* Quick Start Options */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {quickStartOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() => onStartChat(option.prompt)}
                  className="bg-gray-800/50 backdrop-blur-md p-4 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:-translate-y-1 text-left group"
                >
                  <div className="flex items-center mb-3">
                    <div className="text-blue-400 group-hover:scale-110 transition-transform mr-2">
                      {option.icon}
                    </div>
                    <h3 className="font-semibold text-sm">{option.title}</h3>
                  </div>
                  <p className="text-gray-400 text-xs">{option.description}</p>
                </button>
              ))}
            </div>

            {/* Start Chat Button */}
            <button
              onClick={() => onStartChat()}
              className="bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-2 flex items-center mx-auto"
            >
              <MessageSquare className="h-5 w-5 mr-2" />
              Comenzar Conversación
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-gray-800/30 py-12 px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              ¿Qué puedo hacer por ti?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-900/50 backdrop-blur-md p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                  <div className="text-blue-400 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How it works */}
        <div className="py-12 px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">¿Cómo funciona?</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold">Haz tu pregunta</h3>
                <p className="text-gray-300">Escribe tu consulta o sube un documento PDF para análisis</p>
              </div>
              
              <div className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold">IA procesa</h3>
                <p className="text-gray-300">La inteligencia artificial analiza y comprende tu consulta</p>
              </div>
              
              <div className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold">Respuesta precisa</h3>
                <p className="text-gray-300">Recibes una respuesta detallada y contextualizada</p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="bg-gray-800/30 py-12 px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Lo que dicen los usuarios
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-900/50 backdrop-blur-md p-6 rounded-xl border border-gray-700">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm">{testimonial.comment}</p>
                </div>
              ))}
            </div>

            {/* Add Testimonial */}
            <div className="bg-gray-900/50 backdrop-blur-md rounded-xl p-6 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold mb-4 text-center">¡Comparte tu experiencia!</h3>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    value={testimonialData.name}
                    onChange={handleTestimonialChange}
                    className="px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="Tu nombre"
                  />
                  <input
                    type="email"
                    name="email"
                    value={testimonialData.email}
                    onChange={handleTestimonialChange}
                    className="px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="tu@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Calificación</label>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <button
                        key={rating}
                        onClick={() => setTestimonialData({...testimonialData, rating})}
                        className="focus:outline-none"
                      >
                        <Star 
                          className={`h-6 w-6 ${rating <= testimonialData.rating ? 'text-yellow-400 fill-current' : 'text-gray-400'} hover:text-yellow-400 transition-colors`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
                
                <textarea
                  name="comment"
                  value={testimonialData.comment}
                  onChange={handleTestimonialChange}
                  rows={3}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="Comparte tu experiencia con BreinLogic..."
                />
                
                <button
                  onClick={handleTestimonialSubmit}
                  disabled={submitTestimonial}
                  className={`w-full px-6 py-3 rounded-lg transition-all duration-300 flex items-center justify-center ${
                    submitTestimonial 
                      ? "bg-gray-600 cursor-not-allowed" 
                      : "bg-gradient-to-r from-blue-500 to-purple-500 hover:shadow-lg transform hover:-translate-y-1"
                  }`}
                >
                  {submitTestimonial ? (
                    <>⏳ Enviando...</>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Enviar Testimonio
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;