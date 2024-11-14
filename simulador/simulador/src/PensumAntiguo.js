import React, { useEffect, useState } from 'react';

const ExternalHTML = () => {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    // Cargar el archivo HTML
    fetch('./web_antiguo/pensum.html')
      .then(response => response.text())
      .then(data => setHtmlContent(data))
      .catch(error => console.error('Error loading HTML:', error));
  }, []);

  return (
    <div>
      {/* Renderizar el HTML cargado */}
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
};

export default ExternalHTML;