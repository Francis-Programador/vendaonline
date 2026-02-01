// ===============================
// LISTA DE PRODUTOS
// ===============================
const produtos = [
  { img: "imagens/foto (1).jpg", nome: "Camisa Masculina", preco: "15.000 Kz" },
  { img: "imagens/foto (2).jpg", nome: "Vestido Feminino", preco: "18.000 Kz" },
  { img: "imagens/foto (3).jpg", nome: "Tênis", preco: "25.000 Kz" },
   { img: "imagens/foto (1).jpg", nome: "Camisa Masculina", preco: "15.000 Kz" },
  { img: "imagens/foto (2).jpg", nome: "Vestido Feminino", preco: "18.000 Kz" },
  { img: "imagens/foto (3).jpg", nome: "Tênis", preco: "25.000 Kz" },
   { img: "imagens/foto (1).jpg", nome: "Camisa Masculina", preco: "15.000 Kz" },
  { img: "imagens/foto (2).jpg", nome: "Vestido Feminino", preco: "18.000 Kz" },
  { img: "imagens/foto (3).jpg", nome: "Tênis", preco: "25.000 Kz" },
   { img: "imagens/foto (1).jpg", nome: "Camisa Masculina", preco: "15.000 Kz" },
  { img: "imagens/foto (2).jpg", nome: "Vestido Feminino", preco: "18.000 Kz" },
  { img: "imagens/foto (3).jpg", nome: "Tênis", preco: "25.000 Kz" },
  // adiciona até 100 sem problema
];

// ===============================
// GERAR PRODUTOS NO HTML
// ===============================
const lista = document.getElementById("lista-produtos");

if (lista) {
  produtos.forEach(p => {
    const card = document.createElement("div");
    card.className = "produto";

    card.innerHTML = `
      <img src="${p.img}" alt="${p.nome}" loading="lazy">
      <h3>${p.nome}</h3>
      <p class="preco">${p.preco}</p>
      <a class="btn"
         href="https://wa.me/244942515887?text=Quero%20comprar%20${encodeURIComponent(p.nome)}">
         Comprar no WhatsApp
      </a>
    `;

    lista.appendChild(card);
  });
}

// ===============================
// (OPCIONAL) SIDEBAR
// ===============================
function openNav() {
  const sidebar = document.getElementById("mySidebar");
  if (sidebar) sidebar.style.width = "250px";
}

function closeNav() {
  const sidebar = document.getElementById("mySidebar");
  if (sidebar) sidebar.style.width = "0";
}
