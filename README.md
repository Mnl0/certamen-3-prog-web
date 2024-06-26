### Work-wise

## Aplicacion DEMO de solicitud de servicios en linea.

**Intrucciones:**

1. Clonar proyecto
2. Instalar dependencias tanto en el frontend y backend [npm install]
3. En la raiz del backend crear archivo .env y crear las siguientes variables de entorno
   
   * HOST='127.0.0.1'
   * USSER='TUUSUARIO'
   * PASS='TUPASSWORD'
   * DATABASE='TUBASEDEDATOS'
   * DB_PORT=3306 # puerto de base de datos 3306 por defecto MYSQL
   * PORT=3000 # puerto del servidor
   * PORT_SOCKET_IO='http://localhost:3001' # refencia al front
   
4. En la raiz del fron crear archivo .env y crear las siguientes variables de entorno
   
   * REACT_APP_API_URL='http://localhost:3300' # referencia al backend
   
5. En directorio backend ejecutar npm run dev || npm start
6. En directorio frontend ejecutar npm start 
