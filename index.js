const exibir_resultado = () => {
    return `
    <p>Sua taxa de metabolismo basal é de ${m_basal.toFixed(2)} calorias</p>
    <p>Seu gasto calórico é de ${gasto.toFixed(2)} no dia</p>
    <p>Sua meta de calorias diarias é de ${calorias.toFixed(2)}</p>
    <p>${proteinagramas.toFixed(2)} gramas de proteína</p>
    <p>${gorduragramas.toFixed(2)} gramas de gordura</p>
    <p>${carboidratogramas.toFixed(2)} gramas de carboidrato</p>
    `
  }
  
  const calcular = (event) => {
      event.preventDefault()
      const formData = new FormData(event.target)
      nome = formData.get('nome')
      idade = formData.get('idade')
      peso = formData.get('peso')
      altura = formData.get('altura')
      sexo = formData.get('sexo')
      atividade = formData.get('atividade')
      objetivo = formData.get('objetivo')
      if(sexo == 'masculino') {
        m_basal = 66 + (13.8*peso) + (5*altura) - (6.8*idade)
      }
      if(sexo == 'feminino') {
        m_basal = 655 + (9.6*peso) + (1.8*altura) - (4.7*idade)
      }
      if(atividade == 'baixa') {
        gasto = m_basal + 500
      }
      if(atividade == 'media') {
        gasto = m_basal + 1000
      }
      if(atividade == 'intensa') {
        gasto = m_basal + 1500
      }
      if(objetivo == 'emagrecer') {
        calorias = gasto * 0.8
      }
      if(objetivo == 'hipertrofia') {
        calorias = gasto * 1.2
      }
      proteinakcal = (peso * 2.5) * 4
      gordurakcal = (peso * 1) * 9
      restokcal = (calorias - proteinakcal - gordurakcal)
      proteinagramas = (peso * 2)
      gorduragramas = (peso * 0.8)
      carboidratogramas = (restokcal / 4)
  
      let output = exibir_resultado();
      document.querySelector('.results').innerHTML = output;
      
      document.querySelector('form').reset();
  
      esconderForm();
      aparecerBotao();
  };
  
  const form = document.querySelector('.form');
  const btnCalcNov = document.querySelector('.btn-calc-nov');
  
  function esconderForm() {
    form.classList.add('remover');
  };
  
  function aparecerBotao() {
    btnCalcNov.classList.add('aparecer');
  };
  
  btnCalcNov.addEventListener('click', () => {
    form.classList.remove('remover');
    btnCalcNov.classList.remove('aparecer');
    document.querySelector('.results').innerHTML = null;
  });
  
  calcular();
  