// ===============================
// LISTA DE PRODUTOS
// ===============================
const produtos = [

  // ===============================
  // ROUPAS
  // ===============================
  { img: "imagens/foto (1).jpg", nome: "BI", preco: "18.000 Kz", categoria: "roupas", publico: "unissex" },
  { img: "imagens/foto (2).jpg", nome: "Camisa Masculina", preco: "15.000 Kz", categoria: "roupas", publico: "masculino" },
  { img: "imagens/foto (3).jpg", nome: "Vestido Feminino", preco: "18.000 Kz", categoria: "roupas", publico: "feminino" },
  { img: "imagens/foto (4).jpg", nome: "Camiseta Unissex", preco: "12.000 Kz", categoria: "roupas", publico: "unissex" },
  { img: "imagens/foto (5).jpg", nome: "Jaqueta Masculina", preco: "25.000 Kz", categoria: "roupas", publico: "masculino" },
  { img: "imagens/foto (6).jpg", nome: "Saia Feminina", preco: "15.000 Kz", categoria: "roupas", publico: "feminino" },

  // ===============================
  // ACESSÓRIOS
  // ===============================
  { img: "imagens/foto (11).jpg", nome: "Relógio", preco: "25.000 Kz", categoria: "acessorios", publico: "unissex" },
  { img: "imagens/foto (12).jpg", nome: "Colar Feminino", preco: "20.000 Kz", categoria: "acessorios", publico: "feminino" },
  { img: "imagens/foto (13).jpg", nome: "Pulseira Masculina", preco: "18.000 Kz", categoria: "acessorios", publico: "masculino" },

  // ===============================
  // CALÇADOS
  // ===============================
  { img: "imagens/foto (18).jpg", nome: "Tênis Masculino", preco: "30.000 Kz", categoria: "calcados", publico: "masculino" },
  { img: "imagens/foto (19).jpg", nome: "Sandália Feminina", preco: "28.000 Kz", categoria: "calcados", publico: "feminino" },
  { img: "imagens/foto (20).jpg", nome: "Sapato Unissex", preco: "35.000 Kz", categoria: "calcados", publico: "unissex" },

  // ===============================
  // PERFUMES
  // ===============================
  { img: "imagens/foto (26).jpg", nome: "Perfume Masculino", preco: "45.000 Kz", categoria: "perfumes", publico: "masculino" },
  { img: "imagens/foto (27).jpg", nome: "Perfume Feminino", preco: "50.000 Kz", categoria: "perfumes", publico: "feminino" },
  { img: "imagens/foto (28).jpg", nome: "Perfume Unissex", preco: "40.000 Kz", categoria: "perfumes", publico: "unissex" },

  // ...adicione os outros produtos até 53 seguindo o mesmo padrão
];

// ===============================
// FUNÇÃO PARA MOSTRAR PRODUTOS
// ===============================
const lista = document.getElementById("lista-produtos");

function mostrarProdutos(filtroCategoria = "todos", filtroPublico = "todos") {
  lista.innerHTML = "";

  produtos.forEach(p => {
    const categoriaBate = filtroCategoria.toLowerCase() === "todos" || p.categoria.toLowerCase() === filtroCategoria.toLowerCase();
    const publicoBate = filtroPublico.toLowerCase() === "todos" || filtroPublico.toLowerCase() === "unissex" || p.publico.toLowerCase() === filtroPublico.toLowerCase();

    if (categoriaBate && publicoBate) {
      const card = document.createElement("div");
      card.className = "produto";

      card.innerHTML = `
        <img src="${p.img}" alt="${p.nome}" loading="lazy">
        <h3>${p.nome}</h3>
        <p class="preco">${p.preco}</p>
        <a class="btn"
           href="https:wa.me/244932563665?text=Quero%20comprar%20${encodeURIComponent(p.nome)}">
           Comprar no WhatsApp
        </a>
      `;
      lista.appendChild(card);
    }
  });
}

// Mostrar todos produtos ao carregar a página
mostrarProdutos();

// ===============================
// FILTRO PELO SIDEBAR
// ===============================
const linksSidebar = document.querySelectorAll(".sidebar a");

linksSidebar.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();

    const categoria = link.closest("fieldset").querySelector("h2").textContent.toLowerCase();
    let publico = link.textContent.toLowerCase();

    // Ajuste dos nomes
    if (publico === "ambos") publico = "unissex";
    else if (publico === "masculinas" || publico === "masculinos") publico = "masculino";
    else if (publico === "femeninas" || publico === "femininos") publico = "feminino";

    mostrarProdutos(categoria, publico);
    closeNav();
  });
});

// ===============================
// BOTÃO HOME
// ===============================
const btnHome = document.querySelector("header a[href='#']"); // assumindo que o HOME é esse link
if (btnHome) {
  btnHome.addEventListener("click", e => {
    e.preventDefault();
    mostrarProdutos(); // mostra todos
  });
}

// ===============================
// ABRIR E FECHAR SIDEBAR
// ===============================
function openNav() {
  const sidebar = document.getElementById("mySidebar");
  if (sidebar) sidebar.style.width = "250px";
}

function closeNav() {
  const sidebar = document.getElementById("mySidebar");
  if (sidebar) sidebar.style.width = "0";
}






