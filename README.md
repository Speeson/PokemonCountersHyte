![title](src/assets/logo/pokemon-counters.png)
![title](src/assets/logo/Hyte.png)

<h1 align="center">
  <img src="src/assets/logo/pokeball.png" width="36" />
  Pokemon Counters
</h1>

Aplicacion web interactiva para consultar de forma rapida y visual las **debilidades, resistencias e inmunidades de los tipos Pokemon**.

Permite seleccionar **uno o dos tipos** y muestra automaticamente los multiplicadores de dano (`x4`, `x2`, `x0`, `x1/2`, `x1/4`), solucionando uno de los problemas mas habituales al jugar a Pokemon: **recordar los counters de cada tipo**.

---

## Demo online

**Aplicacion desplegada en GitHub Pages**  
https://Speeson.github.io/PokemonCountersHyte/

---

## Caracteristicas

- Seleccion de **hasta 2 tipos Pokemon**
- Calculo automatico de:
  - Debilidades (`x4`, `x2`)
  - Inmunidades (`x0`)
  - Resistencias (`x1/2`, `x1/4`)
- Soporte completo para los **18 tipos Pokemon**
- Interfaz visual basada en iconos
- Efectos visuales dinamicos por tipo
- Diseno **responsive**
- Adaptada a pantalla tactil **HYTE Y70 Touch** (paneles a toda altura y lectura vertical)
- Despliegue automatico con **GitHub Actions**

---

## HYTE Y70 Touch

- Paneles con altura completa para el formato vertical del chasis.
- Seleccion de tipos en 3 columnas, ocupando todo el alto del panel.
- Resultados con 3 columnas fijas y tamanos de iconos dinamicos segun cantidad.

---

## Funcionamiento

1. El usuario selecciona uno o dos tipos Pokemon.
2. Se calcula la efectividad defensiva combinando ambos tipos.
3. Los resultados se agrupan por multiplicador:
   - `x4` - Muy debil
   - `x2` - Debil
   - `x0` - Inmune
   - `x1/2` - Resiste
   - `x1/4` - Resiste mucho
4. Cada tipo se muestra como un boton visual con su icono.

Toda la logica se ejecuta **en el frontend**, sin backend ni base de datos.

---

## Tecnologias utilizadas

- **React**
- **Vite**
- **JavaScript (ES6+)**
- **CSS moderno**
- **Git y GitHub**
- **GitHub Pages**
- **GitHub Actions (CI/CD)**

---

## Estructura del proyecto

```
src/
  assets/
    types/
    logo/
  components/
    TypeGrid.jsx
    ResultsPanel.jsx
    TypeTileSmall.jsx
  data/
    typeChart.json
  lib/
    typeEffectiveness.js
  App.jsx
  App.css
  main.jsx
```

---

## Arquitectura

- Aplicacion **SPA** completamente en frontend
- Datos de tipos almacenados en JSON
- Gestion de estado con **React Hooks**
- Diseno preparado para futura app movil (Android / Kotlin)

---

## Despliegue automatico

El proyecto se despliega automaticamente mediante **GitHub Actions**:

- Cada `push` a la rama `main`:
  1. Se ejecuta el proceso de build (`npm run build`)
  2. Se generan los archivos estaticos
  3. Se publican automaticamente en **GitHub Pages**

Archivo de configuracion:
```
.github/workflows/deploy.yml
```

---

## Instalacion local

```bash
git clone https://github.com/Speeson/PokemonCountersHyte.git
cd PokemonCounters
npm install
npm run dev
```

La aplicacion estara disponible en:
```
http://localhost:5173
```

Para verla en movil en la misma red:
```
npm run dev -- --host
```

---

## Licencias y atribuciones

- Los iconos de tipos Pokemon son recreaciones de la comunidad con licencias permisivas.
- Pokemon es una marca registrada de **The Pokemon Company**.
- Proyecto desarrollado con fines **educativos**.

---

## Contexto academico

Ciclo formativo: **Desarrollo de Aplicaciones Multiplataforma (DAM)**

---

## Autor

**Esteban**  
Repositorio: https://github.com/Speeson/PokemonCountersHyte

---

## Mejoras futuras

- Busqueda por Pokemon (PokeAPI)
- Aplicacion movil en Android (Kotlin)
- Guardado de combinaciones favoritas
- Mas animaciones y efectos visuales
