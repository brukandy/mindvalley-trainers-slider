# World Class Trainers Slider - Mindvalley Style

Slider orizzontale infinito con 10 trainer cards in stile Mindvalley.

## 📁 Struttura Progetto

```
mindvalley-trainers-slider/
├── index.html          # Pagina principale
├── styles.css          # Stili CSS
├── script.js           # JavaScript per interazioni
├── images/             # 👉 INSERISCI QUI LE TUE 10 THUMBNAIL
│   ├── trainer-1.jpg
│   ├── trainer-2.jpg
│   ├── trainer-3.jpg
│   ├── trainer-4.jpg
│   ├── trainer-5.jpg
│   ├── trainer-6.jpg
│   ├── trainer-7.jpg
│   ├── trainer-8.jpg
│   ├── trainer-9.jpg
│   └── trainer-10.jpg
└── README.md           # Questo file
```

## 🖼️ Dove Inserire le Thumbnail

**IMPORTANTE:** Inserisci le tue 10 immagini dei trainer nella cartella:

```
/Users/brunolorenzon/CascadeProjects/windsurf-project/mindvalley-trainers-slider/images/
```

### Nomi File Richiesti:
- `1Salvatore Scibetta.png`
- `2Alessandra Abbatista.png`
- `3FabioToma.png`
- `4giannamastrototaro.png`
- `5Michelemontesano.png`
- `6GiampaoloGrossi.png`
- `7Annalisaminetti.png`
- `8salvotrifiro.png`
- `9DaniaStrambi.png`
- `10FrancescoMagro.png`

### Formato Consigliato:
- **Dimensioni:** 280x380px (o proporzioni 3:4)
- **Formato:** JPG o PNG
- **Peso:** < 500KB per immagine (ottimizzato per web)

## ✨ Caratteristiche

- ✅ **Scroll infinito automatico** - Loop continuo senza interruzioni
- ✅ **Pausa on hover** - Si ferma quando passi il mouse sopra
- ✅ **6 card visibili** - Layout ottimizzato per desktop
- ✅ **10 trainer totali** - Duplicati automaticamente per loop seamless
- ✅ **Responsive** - Si adatta a mobile, tablet e desktop
- ✅ **Effetti hover** - Animazioni smooth su ogni card
- ✅ **Performance ottimizzata** - Intersection Observer per risparmio risorse

## 🎨 Personalizzazione

### Modificare i Nomi e Titoli dei Trainer

Apri `index.html` e modifica le sezioni:

```html
<div class="trainer-overlay">
    <h3 class="trainer-name">NOME TRAINER</h3>
    <p class="trainer-title">Titolo/Expertise</p>
</div>
```

### Modificare Velocità Scroll

In `styles.css`, linea 71:
```css
animation: scroll 50s linear infinite;  /* Cambia 50s per velocità diversa */
```

### Modificare Colori

In `styles.css`:
- Background sezione: linea 16
- Gradient overlay: linee 122-128
- Colori testo: linee 38, 48, 58

## 🚀 Come Usare

### 1. Apri in Browser
```bash
open index.html
```

### 2. Embed in LearnWorlds con iframe

```html
<iframe 
    src="URL_DEL_TUO_SLIDER/index.html" 
    width="100%" 
    height="700px" 
    frameborder="0" 
    scrolling="no"
    style="border: none; overflow: hidden;">
</iframe>
```

### 3. Carica su Server
Carica tutti i file (index.html, styles.css, script.js, cartella images) sul tuo hosting.

## 📱 Responsive Breakpoints

- **Desktop:** > 1024px - Card 280x380px
- **Tablet:** 768px - 1024px - Card 240x320px
- **Mobile Large:** 480px - 768px - Card 200x280px
- **Mobile Small:** < 480px - Card 160x220px

## 🔧 Supporto Browser

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

## 📝 Note

- Le immagini sono duplicate automaticamente nell'HTML per creare il loop infinito
- L'animazione si pausa quando non è visibile per risparmiare risorse
- Ottimizzato per iframe embedding in LearnWorlds

---

**Creato per:** Slider World Class Trainers in stile Mindvalley  
**Compatibile con:** LearnWorlds iframe embedding
