# Bandung Biz Daily — Structured Files

Berikut struktur file terpisah untuk website Anda.

---

## `index.html`

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Bandung Biz Daily</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <header class="header">
    <div class="container navbar">
      <img src="logo-bandung-biz-daily.png" alt="Bandung Biz Daily" class="logo" />
      <nav>
        <ul class="menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">UMKM</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Brand Stories</a></li>
          <li><a href="#">Event</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <section class="hero container">
    <div class="hero-text">
      <p class="subtitle">Daily News for Local Business Growth</p>
      <h1>Insight Harian untuk Pertumbuhan Bisnis Lokal Bandung</h1>
      <p class="description">
        Portal berita dan cerita brand yang fokus pada perkembangan UMKM,
        bisnis lokal, event, dan kolaborasi brand di Bandung.
      </p>
      <div class="buttons">
        <button>Explore News</button>
        <button class="secondary">Latest Events</button>
      </div>
    </div>

    <div class="cards" id="cards-container"></div>
  </section>

  <script src="script.js"></script>
</body>
</html>
```

---

## `style.css`

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

body {
  background: #ffffff;
  color: #0f172a;
}

.container {
  width: 90%;
  max-width: 1200px;
  margin: auto;
}

.header {
  border-bottom: 1px solid #e2e8f0;
  padding: 20px 0;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  height: 60px;
}

.menu {
  display: flex;
  gap: 30px;
  list-style: none;
}

.menu a {
  text-decoration: none;
  color: #0f172a;
  font-weight: 600;
}

.hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  padding: 80px 0;
}

.subtitle {
  color: #2563eb;
  font-weight: bold;
  margin-bottom: 20px;
}

.hero h1 {
  font-size: 48px;
  line-height: 1.2;
  margin-bottom: 20px;
}

.description {
  color: #475569;
  line-height: 1.8;
  margin-bottom: 30px;
}

.buttons button {
  padding: 14px 24px;
  border: none;
  border-radius: 12px;
  background: #2563eb;
  color: white;
  font-weight: bold;
  margin-right: 15px;
  cursor: pointer;
}

.buttons .secondary {
  background: white;
  color: #0f172a;
  border: 1px solid #cbd5e1;
}

.cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.card {
  padding: 25px;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

.card h3 {
  margin-bottom: 10px;
}

.card p {
  color: #64748b;
}
```

---

## `script.js`

```javascript
const cards = [
  {
    title: "UMKM Spotlight",
    text: "Highlight bisnis lokal yang sedang berkembang."
  },
  {
    title: "Brand Stories",
    text: "Cerita sukses brand dan kolaborasi di Bandung."
  },
  {
    title: "News Update",
    text: "Update harian bisnis, komunitas, dan ekonomi lokal."
  },
  {
    title: "Events",
    text: "Agenda event corporate, komunitas, dan networking."
  }
];

const container = document.getElementById("cards-container");

cards.forEach(card => {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `
    <h3>${card.title}</h3>
    <p>${card.text}</p>
  `;
  container.appendChild(div);
});
```

---

## Struktur Folder

```text
bandung-biz-daily/
│
├── index.html
├── style.css
├── script.js
└── logo-bandung-biz-daily.png
```
