// ===============================
// LISTA DE PRODUTOS
// ===============================
const produtos = [

  // ===============================
  // ROUPAS EM JPG
  // ===============================
  { img: "imagens/roupa/foto (1).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (2).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (3).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (4).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (5).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (6).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (7).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (8).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (9).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (10).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (11).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (12).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (13).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (14).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (15).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (16).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (17).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (18).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (19).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (20).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (21).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (22).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (23).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (24).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (25).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (26).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (27).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (28).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (29).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (30).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (31).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (32).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (33).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (34).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (35).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (36).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (37).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (38).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (39).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (40).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (41).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (42).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (43).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (44).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (45).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (46).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (47).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (48).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (49).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (50).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (51).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (52).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (53).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (54).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (55).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (56).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (57).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (58).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (59).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (60).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (61).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (62).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (63).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (64).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (65).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (66).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (67).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (68).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (69).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (70).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (71).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (72).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (73).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (74).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (75).JPG", nome: "BI", preco: "NSSSegociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (76).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (77).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (78).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (79).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (80).JPG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },



  // ===============================
  // ROUPAS EM PNG
  // ===============================
  { img: "imagens/roupa/foto (1).PNG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (2).PNG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (3).PNG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (4).PNG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (5).PNG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (6).PNG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (7).PNG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (8).PNG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (9).PNG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (10).PNG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (11).PNG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (12).PNG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (13).PNG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (14).PNG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (15).PNG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (16).PNG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (17).PNG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (18).PNG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (19).PNG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (20).PNG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (21).PNG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (22).PNG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (23).PNG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (24).PNG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (25).PNG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (26).PNG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (27).PNG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (28).PNG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (29).PNG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (30).PNG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (31).PNG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (32).PNG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (33).PNG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (34).PNG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (35).PNG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (36).PNG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (37).PNG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (38).PNG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (39).PNG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (40).PNG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (41).PNG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (42).PNG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (43).PNG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (44).PNG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (45).PNG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (46).PNG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (47).PNG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (48).PNG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (49).PNG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagens/roupa/foto (50).PNG", nome: "BI", preco: "Negociável", categoria: "roupas", publico: "unissex" },


  // ===============================
  // ACESSÓRIOS JPG
  // ===============================
  { img: "imagens/acessorios/foto (1).PNG", nome: "Relógio", preco: "25.000 Kz", categoria: "acessorios", publico: "unissex" },
  { img: "imagens/acessorios/foto (1).JPG", nome: "Relógio", preco: "Negociável", categoria: "acessorios", publico: "unissex" },
  { img: "imagens/acessorios/foto (2).JPG", nome: "Relógio", preco: "Negociável", categoria: "acessorios", publico: "unissex" },
  { img: "imagens/acessorios/foto (3).JPG", nome: "Relógio", preco: "Negociável", categoria: "acessorios", publico: "unissex" },
  { img: "imagens/acessorios/foto (4).JPG", nome: "Relógio", preco: "Negociável", categoria: "acessorios", publico: "unissex" },
  { img: "imagens/acessorios/foto (5).JPG", nome: "Relógio", preco: "Negociável", categoria: "acessorios", publico: "unissex" },
  { img: "imagens/acessorios/foto (6).JPG", nome: "Relógio", preco: "Negociável", categoria: "acessorios", publico: "unissex" },
  { img: "imagens/acessorios/foto (7).JPG", nome: "Relógio", preco: "Negociável", categoria: "acessorios", publico: "unissex" },
  { img: "imagens/acessorios/foto (8).JPG", nome: "Relógio", preco: "Negociável", categoria: "acessorios", publico: "unissex" },

  // ===============================
  // ACESSÓRIOS PNG
  // ===============================
  { img: "imagens/acessorios/foto (1).PNG", nome: "Relógio", preco: "Negociável", categoria: "acessorios", publico: "unissex" },
  { img: "imagens/acessorios/foto (2).PNG", nome: "Relógio", preco: "Negociável", categoria: "acessorios", publico: "unissex" },



  // ===============================
  // CALÇADOS
  // ===============================
  // ===============================
  // CALÇADOS
  // ===============================
  { img: "imagenspdt/calcados/foto (1).JPG", nome: "Tênis Masculino", preco: "Negociável", categoria: "calcados", publico: "masculino" },
  { img: "imagenspdt/calcados/foto (2).JPG", nome: "Sandália Feminina", preco: "Negociável", categoria: "calcados", publico: "feminino" },
  { img: "imagenspdt/calcados/foto (3).JPG", nome: "Sapato Unissex", preco: "Negociável", categoria: "calcados", publico: "unissex" },
  { img: "imagenspdt/calcados/foto (4).JPG", nome: "Tênis Masculino", preco: "Negociável", categoria: "calcados", publico: "masculino" },
  { img: "imagenspdt/calcados/foto (5).JPG", nome: "Sandália Feminina", preco: "Negociável", categoria: "calcados", publico: "feminino" },
  { img: "imagenspdt/calcados/foto (6).JPG", nome: "Sapato Unissex", preco: "Negociável", categoria: "calcados", publico: "unissex" },
  { img: "imagenspdt/calcados/foto (7).JPG", nome: "Tênis Masculino", preco: "Negociável", categoria: "calcados", publico: "masculino" },
  { img: "imagenspdt/calcados/foto (8).JPG", nome: "Sandália Feminina", preco: "Negociável", categoria: "calcados", publico: "feminino" },
  { img: "imagenspdt/calcados/foto (9).JPG", nome: "Sapato Unissex", preco: "Negociável", categoria: "calcados", publico: "unissex" },
  { img: "imagenspdt/calcados/foto (10).JPG", nome: "Tênis Masculino", preco: "Negociável", categoria: "calcados", publico: "masculino" },
  { img: "imagenspdt/calcados/foto (11).JPG", nome: "Sandália Feminina", preco: "Negociável", categoria: "calcados", publico: "feminino" },
  { img: "imagenspdt/calcados/foto (12).JPG", nome: "Sapato Unissex", preco: "Negociável", categoria: "calcados", publico: "unissex" },
  { img: "imagenspdt/calcados/foto (13).JPG", nome: "Tênis Masculino", preco: "Negociável", categoria: "calcados", publico: "masculino" },
  { img: "imagenspdt/calcados/foto (14).JPG", nome: "Sandália Feminina", preco: "Negociável", categoria: "calcados", publico: "feminino" },
  { img: "imagenspdt/calcados/foto (15).JPG", nome: "Sapato Unissex", preco: "Negociável", categoria: "calcados", publico: "unissex" },
  { img: "imagenspdt/calcados/foto (16).JPG", nome: "Tênis Masculino", preco: 0, categoria: "calcados", publico: "masculino" },
  { img: "imagenspdt/calcados/foto (17).JPG", nome: "Sandália Feminina", preco: "Negociável", categoria: "calcados", publico: "feminino" },
  { img: "imagenspdt/calcados/foto (18).JPG", nome: "Sapato Unissex", preco: "Negociável", categoria: "calcados", publico: "unissex" },
  { img: "imagenspdt/calcados/foto (19).JPG", nome: "Tênis Masculino", preco: "Negociável", categoria: "calcados", publico: "masculino" },
  { img: "imagenspdt/calcados/foto (20).JPG", nome: "Sandália Feminina", preco: "Negociável", categoria: "calcados", publico: "feminino" },
  { img: "imagenspdt/calcados/foto (21).JPG", nome: "Sapato Unissex", preco: "Negociável", categoria: "calcados", publico: "unissex" },
  { img: "imagenspdt/calcados/foto (22).JPG", nome: "Tênis Masculino", preco: "Negociável", categoria: "calcados", publico: "masculino" },
  { img: "imagenspdt/calcados/foto (23).JPG", nome: "Sandália Feminina", preco: "Negociável", categoria: "calcados", publico: "feminino" },
  { img: "imagenspdt/calcados/foto (24).JPG", nome: "Sapato Unissex", preco: "Negociável", categoria: "calcados", publico: "unissex" },
  { img: "imagenspdt/calcados/foto (25).JPG", nome: "Tênis Masculino", preco: 0, categoria: "calcados", publico: "masculino" },
  { img: "imagenspdt/calcados/foto (26).JPG", nome: "Sandália Feminina", preco: "Negociável", categoria: "calcados", publico: "feminino" },
  { img: "imagenspdt/calcados/foto (27).JPG", nome: "Sapato Unissex", preco: "Negociável", categoria: "calcados", publico: "unissex" },
  { img: "imagenspdt/calcados/foto (28).JPG", nome: "Tênis Masculino", preco: "Negociável", categoria: "calcados", publico: "masculino" },
  { img: "imagenspdt/calcados/foto (29).JPG", nome: "Sandália Feminina", preco: "Negociável", categoria: "calcados", publico: "feminino" },
  { img: "imagenspdt/calcados/foto (30).JPG", nome: "Sapato Unissex", preco: "Negociável", categoria: "calcados", publico: "unissex" },
  { img: "imagenspdt/calcados/foto (31).JPG", nome: "Tênis Masculino", preco: "Negociável", categoria: "calcados", publico: "masculino" },
  { img: "imagenspdt/calcados/foto (32).JPG", nome: "Sandália Feminina", preco: "Negociável", categoria: "calcados", publico: "feminino" },
  { img: "imagenspdt/calcados/foto (33).JPG", nome: "Sapato Unissex", preco: "Negociável", categoria: "calcados", publico: "unissex" },
  { img: "imagenspdt/calcados/foto (34).JPG", nome: "Tênis Masculino", preco: 0, categoria: "calcados", publico: "masculino" },
  { img: "imagenspdt/calcados/foto (35).JPG", nome: "Sandália Feminina", preco: "Negociável", categoria: "calcados", publico: "feminino" },
  { img: "imagenspdt/calcados/foto (36).JPG", nome: "Sapato Unissex", preco: "Negociável", categoria: "calcados", publico: "unissex" },
  { img: "imagenspdt/calcados/foto (37).JPG", nome: "Tênis Masculino", preco: "Negociável", categoria: "calcados", publico: "masculino" },
  { img: "imagenspdt/calcados/foto (38).JPG", nome: "Sandália Feminina", preco: 0, categoria: "calcados", publico: "feminino" },
  { img: "imagenspdt/calcados/foto (39).JPG", nome: "Sapato Unissex", preco: "Negociável", categoria: "calcados", publico: "unissex" },
  { img: "imagenspdt/calcados/foto (40).JPG", nome: "Tênis Masculino", preco: "Negociável", categoria: "calcados", publico: "masculino" },
  { img: "imagenspdt/calcados/foto (41).JPG", nome: "Sandália Feminina", preco: "Negociável", categoria: "calcados", publico: "feminino" },
  { img: "imagenspdt/calcados/foto (42).JPG", nome: "Sapato Unissex", preco: "Negociável", categoria: "calcados", publico: "unissex" },
  { img: "imagenspdt/calcados/foto (43).JPG", nome: "Tênis Masculino", preco: "Negociável", categoria: "calcados", publico: "masculino" },
  { img: "imagenspdt/calcados/foto (44).JPG", nome: "Sandália Feminina", preco: 0, categoria: "calcados", publico: "feminino" },
  { img: "imagenspdt/calcados/foto (45).JPG", nome: "Sapato Unissex", preco: "Negociável", categoria: "calcados", publico: "unissex" },
  { img: "imagenspdt/calcados/foto (46).JPG", nome: "Tênis Masculino", preco: "Negociável", categoria: "calcados", publico: "masculino" },
  { img: "imagenspdt/calcados/foto (47).JPG", nome: "Sandália Feminina", preco: "Negociável", categoria: "calcados", publico: "feminino" },
  { img: "imagenspdt/calcados/foto (48).JPG", nome: "Sapato Unissex", preco: "Negociável", categoria: "calcados", publico: "unissex" },

  // ===============================
  // CALÇADOS
  // ===============================
  { img: "imagenspdt/calcados/foto (1).PNG", nome: "Tênis Masculino", preco: "Negociável", categoria: "calcados", publico: "masculino" },
  { img: "imagenspdt/calcados/foto (2).PNG", nome: "Sandália Feminina", preco: "Negociável", categoria: "calcados", publico: "feminino" },
  { img: "imagenspdt/calcados/foto (3).PNG", nome: "Sapato Unissex", preco: "Negociável", categoria: "calcados", publico: "unissex" },
  { img: "imagenspdt/calcados/foto (4).PNG", nome: "Tênis Masculino", preco: "Negociável", categoria: "calcados", publico: "masculino" },
  { img: "imagenspdt/calcados/foto (5).PNG", nome: "Sandália Feminina", preco: "Negociável", categoria: "calcados", publico: "feminino" },
  { img: "imagenspdt/calcados/foto (6).PNG", nome: "Sapato Unissex", preco: 0, categoria: "calcados", publico: "unissex" },
  { img: "imagenspdt/calcados/foto (7).PNG", nome: "Tênis Masculino", preco: "Negociável", categoria: "calcados", publico: "masculino" },
  { img: "imagenspdt/calcados/foto (8).PNG", nome: "Sandália Feminina", preco: "Negociável", categoria: "calcados", publico: "feminino" },
  { img: "imagenspdt/calcados/foto (9).PNG", nome: "Sapato Unissex", preco: "Negociável", categoria: "calcados", publico: "unissex" },
  { img: "imagenspdt/calcados/foto (10).PNG", nome: "Tênis Masculino", preco: "Negociável", categoria: "calcados", publico: "masculino" },
  { img: "imagenspdt/calcados/foto (11).PNG", nome: "Sandália Feminina", preco: "Negociável", categoria: "calcados", publico: "feminino" },
  { img: "imagenspdt/calcados/foto (12).PNG", nome: "Sapato Unissex", preco: 0, categoria: "calcados", publico: "unissex" },
  { img: "imagenspdt/calcados/foto (13).PNG", nome: "Tênis Masculino", preco: "Negociável", categoria: "calcados", publico: "masculino" },
  { img: "imagenspdt/calcados/foto (14).PNG", nome: "Sandália Feminina", preco: "Negociável", categoria: "calcados", publico: "feminino" },
  { img: "imagenspdt/calcados/foto (15).PNG", nome: "Sapato Unissex", preco: "Negociável", categoria: "calcados", publico: "unissex" },
  { img: "imagenspdt/calcados/foto (16).PNG", nome: "Tênis Masculino", preco: "Negociável", categoria: "calcados", publico: "masculino" },
  { img: "imagenspdt/calcados/foto (17).PNG", nome: "Sandália Feminina", preco: "Negociável", categoria: "calcados", publico: "feminino" },
  { img: "imagenspdt/calcados/foto (18).PNG", nome: "Sapato Unissex", preco: "Negociável", categoria: "calcados", publico: "unissex" },
  { img: "imagenspdt/calcados/foto (19).PNG", nome: "Tênis Masculino", preco: "Negociável", categoria: "calcados", publico: "masculino" },
  { img: "imagenspdt/calcados/foto (20).PNG", nome: "Sandália Feminina", preco: "Negociável", categoria: "calcados", publico: "feminino" },
  { img: "imagenspdt/calcados/foto (21).PNG", nome: "Sapato Unissex", preco: "Negociável", categoria: "calcados", publico: "unissex" },
  { img: "imagenspdt/calcados/foto (22).PNG", nome: "Tênis Masculino", preco: 0, categoria: "calcados", publico: "masculino" },
  { img: "imagenspdt/calcados/foto (23).PNG", nome: "Sandália Feminina", preco: "Negociável", categoria: "calcados", publico: "feminino" },
  { img: "imagenspdt/calcados/foto (24).PNG", nome: "Sapato Unissex", preco: "Negociável", categoria: "calcados", publico: "unissex" },
  { img: "imagenspdt/calcados/foto (25).PNG", nome: "Tênis Masculino", preco: "Negociável", categoria: "calcados", publico: "masculino" },
  { img: "imagenspdt/calcados/foto (26).PNG", nome: "Sandália Feminina", preco: "Negociável", categoria: "calcados", publico: "feminino" },
  { img: "imagenspdt/calcados/foto (27).PNG", nome: "Sapato Unissex", preco: "Negociável", categoria: "calcados", publico: "unissex" },
  { img: "imagenspdt/calcados/foto (28).PNG", nome: "Tênis Masculino", preco: "Negociável", categoria: "calcados", publico: "masculino" },
  { img: "imagenspdt/calcados/foto (29).PNG", nome: "Sandália Feminina", preco: "Negociável", categoria: "calcados", publico: "feminino" },
  { img: "imagenspdt/calcados/foto (30).PNG", nome: "Sapato Unissex", preco: "Negociável", categoria: "calcados", publico: "unissex" },
  { img: "imagenspdt/calcados/foto (31).PNG", nome: "Tênis Masculino", preco: "Negociável", categoria: "calcados", publico: "masculino" },
  { img: "imagenspdt/calcados/foto (32).PNG", nome: "Sandália Feminina", preco: 0, categoria: "calcados", publico: "feminino" },
  { img: "imagenspdt/calcados/foto (33).PNG", nome: "Sapato Unissex", preco: "Negociável", categoria: "calcados", publico: "unissex" },





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
  link.addEventListener("click", function (e) {
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






