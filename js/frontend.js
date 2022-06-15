// ********************************************************************
// Autor: Thiago Benites
// Criação: 14/06/2022
// Aplicação: Desafio Cálculo da Umidade do Solo
// ********************************************************************
// Descrição: Métodos de controle e segurança do frontend
// ********************************************************************
// Valida preenchimento correto dos campos
function ValidatesFields() {
  var value = SelectSoilType.value;
  
  if (value == 'Selecione'){ // Valida se Tipo de Solo foi selecionado
    alert('Selecione um Tipo de Solo!');
    SelectSoilType.focus(); 
  } else {
    OnlyNumber(); // Bloqueia digitação de letras
  }
}

// Bloqueia digitação de letras no evento keypress
function OnlyNumber(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  
  key = String.fromCharCode( key );
  
  //var regex = /^[0-9.,]+$/; // Permite pontos e virgulas
  var regex = /^[0-9]+$/;
  
  if( !regex.test(key) ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
  }
}

// Calcula nível de umidade do solo
function Calculate() {
  var Humidity = InputHumidity.value;

  InputHumidity.value = '';
  AreaResponse.innerHTML = '';

  if (Humidity != ''){
    if (Humidity < 1 || Humidity > 100) {
      alert('Nível de Umidade deve estar entre 1 e 100');
      InputHumidity.value = '';
      InputHumidity.focus();
    } else {
      AreaResponse.innerHTML = 'Calculou';
    }
  } else { 
    alert('Digite o Nível de Umidade');
    InputHumidity.focus();
  }
}