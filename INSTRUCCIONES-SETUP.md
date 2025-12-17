# 📁 Instrucciones de Setup - LA POPLU Virtual Wardrobe

## 🎯 Resumen
Este sistema te permite crear un armario virtual interactivo donde los usuarios pueden intercambiar prendas superiores, inferiores y zapatos. Todo se maneja mediante archivos PNG organizados en carpetas y un archivo JSON de configuración.

---

## 📂 Estructura de Carpetas para Imágenes

Crea la siguiente estructura de carpetas en el directorio `/public/`:

```
/public/
  └── clothing/
      ├── tops/          (Prendas superiores: camisetas, hoodies, chaquetas, etc.)
      ├── bottoms/       (Prendas inferiores: pantalones, faldas, shorts, etc.)
      └── shoes/         (Zapatos: sneakers, botas, tacones, etc.)
```

### Cómo organizar tus imágenes PNG:

1. **Tops (Prendas Superiores)**
   - Guarda en: `/public/clothing/tops/`
   - Nombra tus archivos: `top-001.png`, `top-002.png`, etc.
   - Ejemplos: camisetas, hoodies, chaquetas, blusas

2. **Bottoms (Prendas Inferiores)**
   - Guarda en: `/public/clothing/bottoms/`
   - Nombra tus archivos: `bottom-001.png`, `bottom-002.png`, etc.
   - Ejemplos: pantalones, faldas, shorts, jeans

3. **Shoes (Zapatos)**
   - Guarda en: `/public/clothing/shoes/`
   - Nombra tus archivos: `shoes-001.png`, `shoes-002.png`, etc.
   - Ejemplos: sneakers, botas, tacones, sandalias

---

## 📝 Configuración del archivo JSON

El archivo `/public/clothing-data.json` contiene toda la información de tus prendas.

### Estructura básica de cada prenda:

```json
{
  "id": "top-001",                        // ID único (importante para compatibilidad)
  "name": "Camiseta LA POPLU Negra",      // Nombre que aparecerá en pantalla
  "image": "/clothing/tops/top-001.png",  // Ruta a la imagen
  "category": "top",                       // Categoría: "top", "bottom", o "shoes"
  "color": "black",                        // Color de la prenda
  "compatibleWith": ["bottom-001", "bottom-002", "bottom-003"]  // IDs compatibles
}
```

### Ejemplo completo del JSON:

```json
{
  "tops": [
    {
      "id": "top-001",
      "name": "Camiseta LA POPLU Negra",
      "image": "/clothing/tops/top-001.png",
      "category": "top",
      "color": "black",
      "compatibleWith": ["bottom-001", "bottom-002"]
    },
    {
      "id": "top-002",
      "name": "Hoodie Magenta",
      "image": "/clothing/tops/top-002.png",
      "category": "top",
      "color": "magenta",
      "compatibleWith": ["bottom-001", "bottom-003"]
    }
  ],
  "bottoms": [
    {
      "id": "bottom-001",
      "name": "Pantalón Negro",
      "image": "/clothing/bottoms/bottom-001.png",
      "category": "bottom",
      "color": "black",
      "compatibleWith": ["top-001", "top-002"]
    }
  ],
  "shoes": [
    {
      "id": "shoes-001",
      "name": "Sneakers Negros",
      "image": "/clothing/shoes/shoes-001.png",
      "category": "shoes",
      "color": "black",
      "compatibleWith": []
    }
  ]
}
```

---

## 🎨 Sistema de Compatibilidad

### ¿Cómo funciona?

El campo `compatibleWith` te permite definir qué prendas van bien juntas:

1. **En tops**: lista los IDs de bottoms que combinan bien
2. **En bottoms**: lista los IDs de tops que combinan bien
3. **En shoes**: puedes dejarlo vacío `[]` o añadir compatibilidades

### Ejemplo práctico:

Si tienes una camiseta negra (`top-001`) que combina bien con pantalones negros (`bottom-001`) y jeans (`bottom-002`):

```json
{
  "id": "top-001",
  "name": "Camiseta Negra",
  "image": "/clothing/tops/top-001.png",
  "category": "top",
  "color": "black",
  "compatibleWith": ["bottom-001", "bottom-002"]
}
```

Cuando el usuario seleccione una combinación incompatible, aparecerá una advertencia en pantalla: ⚠️ "Esta combinación puede no ser compatible"

---

## 🖼️ Recomendaciones para las Imágenes PNG

### Tamaño y formato:
- **Formato**: PNG con fondo transparente (recomendado)
- **Resolución**: 800x800px mínimo
- **Orientación**: Centrado en el canvas
- **Peso**: Optimiza tus imágenes (max 500KB por imagen)

### Tips de diseño:
1. Usa la misma escala/proporción para todas las prendas de la misma categoría
2. Mantén el fondo transparente para mejor presentación
3. Asegúrate de que las prendas estén bien iluminadas
4. Evita sombras muy marcadas

---

## 🚀 Pasos para Añadir Nuevas Prendas

1. **Prepara tu imagen PNG**
   - Edita y optimiza la imagen
   - Guárdala con nombre descriptivo (ej: `top-005.png`)

2. **Coloca la imagen en la carpeta correcta**
   ```
   /public/clothing/tops/top-005.png     (para tops)
   /public/clothing/bottoms/bottom-005.png   (para bottoms)
   /public/clothing/shoes/shoes-005.png      (para shoes)
   ```

3. **Actualiza el JSON**
   - Abre `/public/clothing-data.json`
   - Añade un nuevo objeto en el array correspondiente
   - Asigna un ID único
   - Define las compatibilidades

4. **Guarda y recarga**
   - La aplicación cargará automáticamente los nuevos datos

---

## 🎯 Ejemplos de Uso

### Añadir una nueva camiseta:

```json
{
  "id": "top-004",
  "name": "Camiseta LA POPLU Cyan",
  "image": "/clothing/tops/top-004.png",
  "category": "top",
  "color": "cyan",
  "compatibleWith": ["bottom-001", "bottom-002", "bottom-003"]
}
```

### Añadir unos nuevos zapatos:

```json
{
  "id": "shoes-004",
  "name": "Botas LA POPLU Magenta",
  "image": "/clothing/shoes/shoes-004.png",
  "category": "shoes",
  "color": "magenta",
  "compatibleWith": []
}
```

---

## 🔧 Solución de Problemas

### ❌ Las imágenes no cargan:
- Verifica que las rutas en el JSON coincidan con los archivos
- Asegúrate de que los archivos PNG estén en las carpetas correctas
- Revisa que los nombres de archivo no tengan espacios ni caracteres especiales

### ❌ El JSON no carga:
- Valida el JSON en https://jsonlint.com/
- Asegúrate de que todas las comas y corchetes estén bien colocados
- Verifica que no falten comillas en los strings

### ❌ Las compatibilidades no funcionan:
- Verifica que los IDs en `compatibleWith` existan realmente
- Asegúrate de usar el ID exacto (case-sensitive)
- Recuerda que los IDs deben coincidir entre prendas

---

## 🎨 Colores de LA POPLU

Usa estos códigos de color en tu diseño:
- **Cyan**: `#0FD9ED`
- **Magenta**: `#E91EA5`
- **Negro**: `#000000`
- **Blanco**: `#0FD9ED`

---

## 📞 Próximos Pasos

Una vez que tengas tus imágenes organizadas y el JSON configurado:

1. ✅ Organiza todas tus imágenes PNG en las carpetas correspondientes
2. ✅ Edita el archivo `/public/clothing-data.json` con tus datos
3. ✅ Define las compatibilidades entre prendas
4. ✅ Prueba la aplicación navegando entre diferentes prendas
5. ✅ Ajusta las compatibilidades según tus necesidades

---

## 💡 Funcionalidades del Virtual Wardrobe

- ⏮️ **Navegación rápida**: Botones para ir al primer/último item
- ⬅️➡️ **Navegación secuencial**: Botones para avanzar/retroceder uno por uno
- 🎨 **Código de colores**: Cyan para tops, Magenta para bottoms, Púrpura para shoes
- ⚠️ **Alertas de compatibilidad**: Notificación cuando la combinación no es compatible
- 📊 **Info de outfit**: Panel inferior muestra los IDs actuales de cada prenda
- 🎯 **Diseño retro**: Inspirado en la imagen de referencia con patrón leopardo en los laterales

¡Listo para crear tu colección de moda virtual! 🌟
