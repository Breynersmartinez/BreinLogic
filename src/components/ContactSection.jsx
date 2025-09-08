import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [loading, setLoading] = useState(false); // 👈 Estado de carga

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // 👈 Activamos el estado de "enviando"
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.text();
      alert(data);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      alert("Error al enviar el mensaje ❌");
    } finally {
      setLoading(false); // 👈 Se quita el "enviando"
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-8">¿Tienes un proyecto en mente?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Estamos listos para ayudarte a transformar tu idea en una solución digital exitosa. 
              Contactanos y comencemos a trabajar juntos.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-blue-300" />
                <span>breynersmartinezmunoz@gmail.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-blue-300" />
                <span>+57 (310) 321-2753</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-blue-300" />
                <span>Yumbo, Colombia</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Nombre</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-white/70"
                  placeholder="Tu nombre completo"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-white/70"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Mensaje</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-white/70"
                  placeholder="Cuéntanos sobre tu proyecto..."
                />
              </div>
              <button
                type="submit"
                disabled={loading} // 👈 Deshabilita si está enviando
                className={`w-full px-8 py-3 rounded-lg transition-all duration-300 ${
                  loading 
                    ? "bg-gray-500 cursor-not-allowed" 
                    : "bg-gradient-to-r from-blue-500 to-purple-500 hover:shadow-lg transform hover:-translate-y-1"
                }`}
              >
                {loading ? "⏳ Enviando..." : "Enviar Mensaje"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;