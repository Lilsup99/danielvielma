import React, { useState } from 'react';

function FileUpload() {
  const [file, setFile] = useState(null);
  const [responseData, setResponseData] = useState(null); // Estado para los datos recibidos

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await fetch('http://localhost:8000/upload', {
          method: 'POST',
          body: formData,
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
        });

        if (response.ok) {
          const data = await response.json(); // Obtener los datos de la respuesta en formato JSON
          setResponseData(data); // Guardar los datos en el estado
          alert('Archivo subido correctamente.');
        } else {
          alert('Error en la respuesta del servidor.');
        }
      } catch (error) {
        console.error('Error al subir el archivo:', error);
        alert('Hubo un error al subir el archivo.');
      }
    } else {
      alert('Por favor, selecciona un archivo.');
    }
  };

  return (
    <div className="upload-container">
      <h1>Subir archivo</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} required />
        <br />
        <button type="submit">Enviar archivo</button>
      </form>

      {/* Mostrar los datos recibidos */}
      {responseData && (
        <div className="response-container">
          <h2>Datos recibidos:</h2>
          <pre>{JSON.stringify(responseData, null, 2)}</pre> {/* Formato JSON en pantalla */}
        </div>
      )}
    </div>
  );
}

export default FileUpload;
