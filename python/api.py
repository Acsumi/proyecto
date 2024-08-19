from flask import Flask, jsonify
import matplotlib.pyplot as plt
import numpy as np
import io
import base64
from pymongo import MongoClient
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Permitir CORS para todas las rutas

# Conexión a MongoDB Atlas
client = MongoClient('mongodb+srv://PBOO:DELunoAL7conDEmayuscula@cluster0.ijzsw6v.mongodb.net/PBOO')
db = client['test-PBOO']
collection = db['usuarios']

@app.route('/train', methods=['GET'])
def train_model():
    # Obtener datos de MongoDB
    data = list(collection.find({}, {'_id': 0, 'peso': 1, 'edad': 1}))
    
    # Filtrar datos para eliminar registros con valores NaN
    data = [d for d in data if d.get('peso') is not None and d.get('edad') is not None]
    
    if not data:
        return jsonify({'error': 'No data available'}), 400

    # Extraer las columnas de interés
    pesos = np.array([d['peso'] for d in data])
    edades = np.array([d['edad'] for d in data])
    
    # Crear la gráfica
    plt.figure(figsize=(8, 6))
    plt.scatter(edades, pesos, color='blue', label='Datos')
    
    # Ajustar la regresión lineal
    A = np.vstack([edades, np.ones(len(edades))]).T
    m, c = np.linalg.lstsq(A, pesos, rcond=None)[0]
    plt.plot(edades, m*edades + c, 'r', label='Regresión Lineal')
    plt.xlabel('Edad')
    plt.ylabel('Peso')
    plt.title('Regresión Lineal')
    plt.legend()
    
    # Guardar la gráfica en un objeto BytesIO
    img = io.BytesIO()
    plt.savefig(img, format='png')
    img.seek(0)
    
    # Codificar la imagen en base64
    img_base64 = base64.b64encode(img.getvalue()).decode('utf-8')
    
    return jsonify({'plot': img_base64})

if __name__ == '__main__':
    app.run(debug=True, port=5001)  # Cambia el puerto aquí a 5001
