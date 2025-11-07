# Sistema de Tickets - Hospital de Collipulli

Una aplicación móvil multiplataforma desarrollada con React Native y Expo para la gestión de tickets de soporte en el Hospital de Collipulli.

## 🏥 Características

### Funcionalidades Principales
- **Gestión de Tickets**: Crear, visualizar y gestionar tickets de soporte
- **Múltiples Categorías**: Equipos médicos, IT, mantenimiento, limpieza, seguridad, etc.
- **Sistema de Prioridades**: Baja, media, alta y crítica
- **Estados de Tickets**: Abierto, en progreso, pendiente, resuelto, cerrado, cancelado
- **Comentarios**: Sistema de comentarios para seguimiento de tickets
- **Adjuntos**: Soporte para imágenes y documentos
- **Notificaciones**: Alertas en tiempo real
- **Panel de Administración**: Gestión completa del sistema

### Roles de Usuario
- **Administrador**: Acceso completo al sistema
- **Doctor**: Crear tickets y gestionar casos médicos
- **Enfermero/a**: Gestión de tickets relacionados con cuidados
- **Técnico**: Resolución de tickets técnicos
- **Paciente**: Crear tickets para servicios
- **Familiar**: Soporte para familiares de pacientes

## 🚀 Tecnologías Utilizadas

- **React Native**: Framework para desarrollo móvil
- **Expo**: Plataforma de desarrollo
- **TypeScript**: Tipado estático
- **React Navigation**: Navegación entre pantallas
- **React Native Paper**: Componentes de UI
- **AsyncStorage**: Almacenamiento local
- **Ionicons**: Iconografía

## 📱 Pantallas

### Autenticación
- **LoginScreen**: Acceso al sistema con diferentes roles

### Navegación Principal
- **HomeScreen**: Dashboard con resumen y estadísticas
- **TicketListScreen**: Lista de todos los tickets
- **CreateTicketScreen**: Formulario para crear nuevos tickets
- **TicketDetailScreen**: Detalles completos de un ticket
- **ProfileScreen**: Gestión de perfil de usuario
- **AdminScreen**: Panel de administración (solo administradores)

## 🎨 Diseño

### Tema del Hospital
- **Color Primario**: Verde hospital (#2E7D32)
- **Colores de Estado**: 
  - Abierto: Azul (#2196F3)
  - En Progreso: Naranja (#FF9800)
  - Resuelto: Verde (#4CAF50)
  - Cerrado: Gris (#607D8B)

### Componentes
- Diseño Material Design con React Native Paper
- Iconografía consistente con Ionicons
- Navegación por tabs y stack
- FAB (Floating Action Button) para acciones rápidas

## 📋 Categorías de Tickets

1. **Equipos Médicos**: Rayos X, resonancia, equipos de laboratorio
2. **Sistemas Informáticos**: Software, hardware, redes
3. **Mantenimiento**: Reparaciones, mantenimiento preventivo
4. **Limpieza**: Servicios de limpieza y sanitización
5. **Seguridad**: Control de acceso, vigilancia
6. **Insumos**: Material médico, medicamentos
7. **Transporte**: Ambulancias, vehículos hospitalarios
8. **Emergencia**: Situaciones críticas
9. **Otros**: Categorías no específicas

## 🏗️ Estructura del Proyecto

```
src/
├── constants/
│   └── index.ts          # Constantes y configuraciones
├── screens/
│   ├── LoginScreen.tsx   # Pantalla de login
│   ├── HomeScreen.tsx    # Dashboard principal
│   ├── CreateTicketScreen.tsx  # Crear ticket
│   ├── TicketListScreen.tsx    # Lista de tickets
│   ├── TicketDetailScreen.tsx  # Detalles del ticket
│   ├── ProfileScreen.tsx       # Perfil de usuario
│   └── AdminScreen.tsx         # Panel de administración
└── types/
    └── index.ts          # Definiciones de tipos TypeScript
```

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn
- Expo CLI
- Android Studio (para Android) o Xcode (para iOS)

### Instalación
```bash
# Clonar el repositorio
git clone <repository-url>
cd hospital-tickets

# Instalar dependencias
npm install

# Iniciar el servidor de desarrollo
npm start
```

### Scripts Disponibles
```bash
npm start          # Iniciar servidor de desarrollo
npm run android    # Ejecutar en Android
npm run ios        # Ejecutar en iOS
npm run web        # Ejecutar en web
npm run build      # Construir para producción
```

## 📱 Uso de la Aplicación

### Para Pacientes y Familiares
1. Acceder con nombre y email
2. Crear tickets para solicitar servicios
3. Seguir el estado de sus tickets
4. Agregar comentarios y adjuntos

### Para Personal Médico
1. Acceder con credenciales de empleado
2. Crear tickets para equipos o servicios
3. Gestionar tickets asignados
4. Actualizar estados y agregar comentarios

### Para Administradores
1. Acceso completo al panel de administración
2. Gestión de usuarios y tickets
3. Estadísticas y reportes
4. Configuración del sistema

## 🔧 Configuración del Hospital

### Información del Hospital
- **Nombre**: Hospital de Collipulli
- **Dirección**: Av. Principal 123, Collipulli, Chile
- **Teléfono**: +56 9 1234 5678
- **Emergencias**: 131
- **Horario**: 24/7

### Departamentos
- Administración, Cardiología, Cirugía, Emergencia
- Ginecología, Laboratorio, Medicina Interna
- Neurología, Oncología, Pediatría, Psiquiatría
- Radiología, UCI, Urología, Mantenimiento
- IT, Limpieza, Seguridad, Farmacia, Nutrición

## 🛠️ Desarrollo

### Agregar Nuevas Funcionalidades
1. Crear nuevos tipos en `src/types/index.ts`
2. Agregar constantes en `src/constants/index.ts`
3. Implementar pantallas en `src/screens/`
4. Actualizar navegación en `App.tsx`

### Mejores Prácticas
- Usar TypeScript para tipado estático
- Seguir las convenciones de React Native
- Implementar manejo de errores
- Usar componentes reutilizables
- Mantener consistencia en el diseño

## 📄 Licencia

Este proyecto está desarrollado para el Hospital de Collipulli. Todos los derechos reservados.

## 🤝 Contribución

Para contribuir al proyecto:
1. Fork el repositorio
2. Crear una rama para la funcionalidad
3. Hacer commit de los cambios
4. Crear un Pull Request

## 📞 Soporte

Para soporte técnico o consultas:
- **Email**: contacto@hospitalcollipulli.cl
- **Teléfono**: +56 9 1234 5678
- **Emergencias**: 131

---

**Hospital de Collipulli** - Sistema de Gestión de Tickets
Desarrollado con ❤️ para mejorar la atención hospitalaria

