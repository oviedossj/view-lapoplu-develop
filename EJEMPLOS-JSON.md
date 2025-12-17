# 📋 Ejemplos de Configuración JSON - LA POPLU

Este documento contiene ejemplos prácticos de cómo configurar tu archivo `clothing-data.json` para diferentes escenarios.

---

## 📖 Ejemplo 1: Configuración Básica (3 prendas de cada tipo)

```json
{
  "tops": [
    {
      "id": "top-001",
      "name": "Camiseta LA POPLU Negra",
      "image": "/clothing/tops/top-001.png",
      "category": "top",
      "color": "black",
      "compatibleWith": ["bottom-001", "bottom-002", "bottom-003"]
    },
    {
      "id": "top-002",
      "name": "Camiseta LA POPLU Blanca",
      "image": "/clothing/tops/top-002.png",
      "category": "top",
      "color": "white",
      "compatibleWith": ["bottom-001", "bottom-002", "bottom-003"]
    },
    {
      "id": "top-003",
      "name": "Hoodie LA POPLU Magenta",
      "image": "/clothing/tops/top-003.png",
      "category": "top",
      "color": "magenta",
      "compatibleWith": ["bottom-001", "bottom-002"]
    }
  ],
  "bottoms": [
    {
      "id": "bottom-001",
      "name": "Pantalón Negro LA POPLU",
      "image": "/clothing/bottoms/bottom-001.png",
      "category": "bottom",
      "color": "black",
      "compatibleWith": ["top-001", "top-002", "top-003"]
    },
    {
      "id": "bottom-002",
      "name": "Jeans LA POPLU",
      "image": "/clothing/bottoms/bottom-002.png",
      "category": "bottom",
      "color": "blue",
      "compatibleWith": ["top-001", "top-002", "top-003"]
    },
    {
      "id": "bottom-003",
      "name": "Falda LA POPLU Magenta",
      "image": "/clothing/bottoms/bottom-003.png",
      "category": "bottom",
      "color": "magenta",
      "compatibleWith": ["top-001", "top-002"]
    }
  ],
  "shoes": [
    {
      "id": "shoes-001",
      "name": "Sneakers Negros LA POPLU",
      "image": "/clothing/shoes/shoes-001.png",
      "category": "shoes",
      "color": "black",
      "compatibleWith": []
    },
    {
      "id": "shoes-002",
      "name": "Botas Magenta LA POPLU",
      "image": "/clothing/shoes/shoes-002.png",
      "category": "shoes",
      "color": "magenta",
      "compatibleWith": []
    },
    {
      "id": "shoes-003",
      "name": "Zapatillas Cyan LA POPLU",
      "image": "/clothing/shoes/shoes-003.png",
      "category": "shoes",
      "color": "cyan",
      "compatibleWith": []
    }
  ]
}
```

---

## 🎨 Ejemplo 2: Colección Completa (10+ prendas)

```json
{
  "tops": [
    {
      "id": "top-001",
      "name": "Camiseta Básica Negra",
      "image": "/clothing/tops/top-001.png",
      "category": "top",
      "color": "black",
      "compatibleWith": ["bottom-001", "bottom-002", "bottom-003", "bottom-004", "bottom-005"]
    },
    {
      "id": "top-002",
      "name": "Camiseta Básica Blanca",
      "image": "/clothing/tops/top-002.png",
      "category": "top",
      "color": "white",
      "compatibleWith": ["bottom-001", "bottom-002", "bottom-003", "bottom-004", "bottom-005"]
    },
    {
      "id": "top-003",
      "name": "Camiseta Logo Cyan",
      "image": "/clothing/tops/top-003.png",
      "category": "top",
      "color": "cyan",
      "compatibleWith": ["bottom-001", "bottom-002", "bottom-003"]
    },
    {
      "id": "top-004",
      "name": "Camiseta Logo Magenta",
      "image": "/clothing/tops/top-004.png",
      "category": "top",
      "color": "magenta",
      "compatibleWith": ["bottom-001", "bottom-002", "bottom-003"]
    },
    {
      "id": "top-005",
      "name": "Hoodie LA POPLU Negra",
      "image": "/clothing/tops/top-005.png",
      "category": "top",
      "color": "black",
      "compatibleWith": ["bottom-001", "bottom-002", "bottom-004"]
    },
    {
      "id": "top-006",
      "name": "Hoodie LA POPLU Magenta",
      "image": "/clothing/tops/top-006.png",
      "category": "top",
      "color": "magenta",
      "compatibleWith": ["bottom-001", "bottom-002"]
    },
    {
      "id": "top-007",
      "name": "Chaqueta Bomber Negra",
      "image": "/clothing/tops/top-007.png",
      "category": "top",
      "color": "black",
      "compatibleWith": ["bottom-001", "bottom-002", "bottom-003", "bottom-004"]
    }
  ],
  "bottoms": [
    {
      "id": "bottom-001",
      "name": "Pantalón Cargo Negro",
      "image": "/clothing/bottoms/bottom-001.png",
      "category": "bottom",
      "color": "black",
      "compatibleWith": ["top-001", "top-002", "top-003", "top-004", "top-005", "top-006", "top-007"]
    },
    {
      "id": "bottom-002",
      "name": "Jeans Slim Fit",
      "image": "/clothing/bottoms/bottom-002.png",
      "category": "bottom",
      "color": "blue",
      "compatibleWith": ["top-001", "top-002", "top-003", "top-004", "top-005", "top-006", "top-007"]
    },
    {
      "id": "bottom-003",
      "name": "Pantalón Deportivo Cyan",
      "image": "/clothing/bottoms/bottom-003.png",
      "category": "bottom",
      "color": "cyan",
      "compatibleWith": ["top-001", "top-002", "top-003", "top-005", "top-007"]
    },
    {
      "id": "bottom-004",
      "name": "Shorts LA POPLU Negros",
      "image": "/clothing/bottoms/bottom-004.png",
      "category": "bottom",
      "color": "black",
      "compatibleWith": ["top-001", "top-002", "top-003", "top-004", "top-005", "top-007"]
    },
    {
      "id": "bottom-005",
      "name": "Falda Plisada Magenta",
      "image": "/clothing/bottoms/bottom-005.png",
      "category": "bottom",
      "color": "magenta",
      "compatibleWith": ["top-001", "top-002"]
    }
  ],
  "shoes": [
    {
      "id": "shoes-001",
      "name": "Sneakers Classic Negros",
      "image": "/clothing/shoes/shoes-001.png",
      "category": "shoes",
      "color": "black",
      "compatibleWith": []
    },
    {
      "id": "shoes-002",
      "name": "Sneakers Classic Blancos",
      "image": "/clothing/shoes/shoes-002.png",
      "category": "shoes",
      "color": "white",
      "compatibleWith": []
    },
    {
      "id": "shoes-003",
      "name": "Botas Plataforma Magenta",
      "image": "/clothing/shoes/shoes-003.png",
      "category": "shoes",
      "color": "magenta",
      "compatibleWith": []
    },
    {
      "id": "shoes-004",
      "name": "Zapatillas High-Top Cyan",
      "image": "/clothing/shoes/shoes-004.png",
      "category": "shoes",
      "color": "cyan",
      "compatibleWith": []
    },
    {
      "id": "shoes-005",
      "name": "Botas Combat Negras",
      "image": "/clothing/shoes/shoes-005.png",
      "category": "shoes",
      "color": "black",
      "compatibleWith": []
    }
  ]
}
```

---

## 🔄 Ejemplo 3: Sistema de Compatibilidad Estricta

Este ejemplo muestra cómo crear reglas de compatibilidad más específicas:

```json
{
  "tops": [
    {
      "id": "top-formal-001",
      "name": "Camisa Blanca Formal",
      "image": "/clothing/tops/top-formal-001.png",
      "category": "top",
      "color": "white",
      "compatibleWith": ["bottom-formal-001", "bottom-formal-002"]
    },
    {
      "id": "top-casual-001",
      "name": "Camiseta LA POPLU Street",
      "image": "/clothing/tops/top-casual-001.png",
      "category": "top",
      "color": "black",
      "compatibleWith": ["bottom-casual-001", "bottom-casual-002", "bottom-casual-003"]
    },
    {
      "id": "top-sport-001",
      "name": "Jersey Deportivo",
      "image": "/clothing/tops/top-sport-001.png",
      "category": "top",
      "color": "cyan",
      "compatibleWith": ["bottom-sport-001", "bottom-sport-002"]
    }
  ],
  "bottoms": [
    {
      "id": "bottom-formal-001",
      "name": "Pantalón de Vestir Negro",
      "image": "/clothing/bottoms/bottom-formal-001.png",
      "category": "bottom",
      "color": "black",
      "compatibleWith": ["top-formal-001"]
    },
    {
      "id": "bottom-formal-002",
      "name": "Falda Lápiz Negra",
      "image": "/clothing/bottoms/bottom-formal-002.png",
      "category": "bottom",
      "color": "black",
      "compatibleWith": ["top-formal-001"]
    },
    {
      "id": "bottom-casual-001",
      "name": "Jeans Rotos",
      "image": "/clothing/bottoms/bottom-casual-001.png",
      "category": "bottom",
      "color": "blue",
      "compatibleWith": ["top-casual-001"]
    },
    {
      "id": "bottom-casual-002",
      "name": "Pantalón Cargo",
      "image": "/clothing/bottoms/bottom-casual-002.png",
      "category": "bottom",
      "color": "black",
      "compatibleWith": ["top-casual-001"]
    },
    {
      "id": "bottom-casual-003",
      "name": "Shorts Denim",
      "image": "/clothing/bottoms/bottom-casual-003.png",
      "category": "bottom",
      "color": "blue",
      "compatibleWith": ["top-casual-001"]
    },
    {
      "id": "bottom-sport-001",
      "name": "Pantalón Deportivo",
      "image": "/clothing/bottoms/bottom-sport-001.png",
      "category": "bottom",
      "color": "black",
      "compatibleWith": ["top-sport-001"]
    },
    {
      "id": "bottom-sport-002",
      "name": "Leggings LA POPLU",
      "image": "/clothing/bottoms/bottom-sport-002.png",
      "category": "bottom",
      "color": "cyan",
      "compatibleWith": ["top-sport-001"]
    }
  ],
  "shoes": [
    {
      "id": "shoes-001",
      "name": "Sneakers Deportivos",
      "image": "/clothing/shoes/shoes-001.png",
      "category": "shoes",
      "color": "white",
      "compatibleWith": []
    }
  ]
}
```

---

## 🌈 Ejemplo 4: Organización por Colección/Temporada

```json
{
  "tops": [
    {
      "id": "top-fw24-001",
      "name": "Hoodie Fall/Winter 2024",
      "image": "/clothing/tops/top-fw24-001.png",
      "category": "top",
      "color": "black",
      "compatibleWith": ["bottom-fw24-001", "bottom-fw24-002"]
    },
    {
      "id": "top-ss24-001",
      "name": "Camiseta Spring/Summer 2024",
      "image": "/clothing/tops/top-ss24-001.png",
      "category": "top",
      "color": "white",
      "compatibleWith": ["bottom-ss24-001", "bottom-ss24-002"]
    }
  ],
  "bottoms": [
    {
      "id": "bottom-fw24-001",
      "name": "Pantalón Fall/Winter 2024",
      "image": "/clothing/bottoms/bottom-fw24-001.png",
      "category": "bottom",
      "color": "black",
      "compatibleWith": ["top-fw24-001"]
    },
    {
      "id": "bottom-fw24-002",
      "name": "Jeans Fall/Winter 2024",
      "image": "/clothing/bottoms/bottom-fw24-002.png",
      "category": "bottom",
      "color": "blue",
      "compatibleWith": ["top-fw24-001"]
    },
    {
      "id": "bottom-ss24-001",
      "name": "Shorts Spring/Summer 2024",
      "image": "/clothing/bottoms/bottom-ss24-001.png",
      "category": "bottom",
      "color": "white",
      "compatibleWith": ["top-ss24-001"]
    },
    {
      "id": "bottom-ss24-002",
      "name": "Falda Spring/Summer 2024",
      "image": "/clothing/bottoms/bottom-ss24-002.png",
      "category": "bottom",
      "color": "cyan",
      "compatibleWith": ["top-ss24-001"]
    }
  ],
  "shoes": [
    {
      "id": "shoes-fw24-001",
      "name": "Botas Fall/Winter 2024",
      "image": "/clothing/shoes/shoes-fw24-001.png",
      "category": "shoes",
      "color": "black",
      "compatibleWith": []
    },
    {
      "id": "shoes-ss24-001",
      "name": "Sneakers Spring/Summer 2024",
      "image": "/clothing/shoes/shoes-ss24-001.png",
      "category": "shoes",
      "color": "white",
      "compatibleWith": []
    }
  ]
}
```

---

## 🎯 Tips para IDs

### Convenciones recomendadas:

1. **Por tipo de prenda:**
   - `top-001`, `top-002`, `top-003`
   - `bottom-001`, `bottom-002`, `bottom-003`
   - `shoes-001`, `shoes-002`, `shoes-003`

2. **Por estilo:**
   - `top-casual-001`, `top-formal-001`, `top-sport-001`
   - `bottom-casual-001`, `bottom-formal-001`, `bottom-sport-001`

3. **Por temporada:**
   - `top-fw24-001` (Fall/Winter 2024)
   - `top-ss24-001` (Spring/Summer 2024)

4. **Por color:**
   - `top-black-001`, `top-white-001`, `top-cyan-001`
   - `bottom-black-001`, `bottom-blue-001`

---

## ✅ Checklist antes de publicar

- [ ] Todos los IDs son únicos
- [ ] Todas las rutas de imágenes son correctas
- [ ] Las compatibilidades son bidireccionales (si top-001 es compatible con bottom-001, bottom-001 debería ser compatible con top-001)
- [ ] El JSON es válido (verificado en jsonlint.com)
- [ ] Las imágenes existen en las rutas especificadas
- [ ] Los nombres son descriptivos y claros
- [ ] Los colores están bien especificados

---

## 🚀 Próximos pasos después de configurar el JSON

1. Sube tus imágenes PNG a las carpetas correspondientes
2. Actualiza el JSON con las rutas correctas
3. Prueba la aplicación navegando entre prendas
4. Verifica que las compatibilidades funcionen correctamente
5. Ajusta según necesites

¡Tu Virtual Wardrobe estará listo para usar! 🎉
