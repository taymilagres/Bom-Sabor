// Dados de pesquisa

var itemURLs = {
    Camarão_Grelhado: '../Receitas/camarao.html',
    Carne_de_Panela: '../Receitas/carne.html',
    Lámen: '../Receitas/lamen.html',
    Panqueca_Doce: '../Receitas/panqueca.html',
    Peixe_ao_Molho: '../Receitas/peixe.html',
    Pizza: '../Receitas/pizza.html',
    Salada_Caesar: '../Receitas/salada.html',
    Torta_de_Limão: '../Receitas/torta.html'
  };
  
  var receitas = ['Camarão_Grelhado', 'Carne_de_Panela', 'Lámen', 'Panqueca_Doce', 'Peixe_ao_Molho', 'Pizza', 'Salada_Caesar', 'Torta_de_Limão'];
  localStorage.setItem('meuVetor', JSON.stringify( receitas));
  
  document.getElementById('txtBusca').addEventListener('input', function() {
    var searchTerm = this.value.toLowerCase();
    var storedVetor = JSON.parse(localStorage.getItem('meuVetor'));
    var searchResults = [];
  
    // Percorre o vetor e verifica se o termo de pesquisa está contido em cada item
    for (var i = 0; i < storedVetor.length; i++) {
      var item = storedVetor[i].toLowerCase();
      if (item.indexOf(searchTerm) !== -1) {
        searchResults.push(storedVetor[i]);
      }
    }
  
    // Atualiza a lista de resultados na página
    var resultsElement = document.getElementById('searchResults');
    resultsElement.innerHTML = '';
  
    if (searchResults.length === 0) {
      var li = document.createElement('li');
      li.textContent = 'Nenhuma receita encontrada';
      resultsElement.appendChild(li);
    } else {
      for (var j = 0; j < searchResults.length; j++) {
        var li = document.createElement('li');
  
        var link = document.createElement('a');
        var itemText = searchResults[j];
  
        if (itemURLs.hasOwnProperty(itemText)) {
          link.href = itemURLs[itemText];
        } else {
          link.href = '#'; // Defina um URL padrão para itens não mapeados
        }
        li.classList.add('searchResult');
  
        link.textContent = itemText;
  
        link.addEventListener('click', function() {
          window.location.href = this.href;
        });
  
        li.appendChild(link);
        resultsElement.appendChild(li);
      }
    }
  
    document.addEventListener('click', function(event) {
      var searchBar = document.getElementById('txtBusca');
      var searchResults = document.getElementById('searchResults');
    
      // Verifica se o clique ocorreu fora da barra de pesquisa
      if (event.target !== searchBar && !searchBar.contains(event.target)) {
        // Limpa os resultados da pesquisa
        searchResults.innerHTML = '';
      }
    });
  
  });