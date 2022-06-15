// ********************************************************************
// Autor: Thiago Benites
// Criação: 14/06/2022
// Aplicação: Desafio Cálculo da Umidade do Solo
// ********************************************************************
// Descrição: Métodos de controle e segurança do frontend
// ********************************************************************
// Valida preenchimento correto dos campos
function ValidatesFields() {
  let value = SelectSoilType.value;
  
  if (value == 'Selecione'){ // Valida se Tipo de Solo foi selecionado
    alert('Selecione um Tipo de Solo!');
    SelectSoilType.focus(); 
  } else {
    OnlyNumber(); // Bloqueia digitação de letras
  }
}

// Bloqueia digitação de letras no evento keypress
function OnlyNumber(evt) {
  let theEvent = evt || window.event;
  let key = theEvent.keyCode || theEvent.which;
  
  key = String.fromCharCode( key );
  
  //var regex = /^[0-9.,]+$/; // Permite pontos e virgulas
  let regex = /^[0-9]+$/;
  
  if( !regex.test(key) ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
  }
}

// Calcula nível de umidade do solo
function Calculate() {
  let Humidity = InputHumidity.value;
  let SoilType = SelectSoilType.value;

  AreaResponse.innerHTML = '';

  if (Humidity != ''){
    if (Humidity < 1 || Humidity > 100) {
      alert('Nível de Umidade deve estar entre 1 e 100!');
      InputHumidity.value = '';
      InputHumidity.focus();
    } else {
      AreaResponse.innerHTML = AnalyzeSoil(SoilType, Humidity);
    }
  } else { 
    alert('Digite o Nível de Umidade!');
    InputHumidity.focus();
  } 
}

// Analiza solo
function AnalyzeSoil(SoilType, HumidityLevel){

  let Analyze;
  
  switch(SoilType) {
    case 'Argila':
      if (HumidityLevel > 0 && HumidityLevel <= 59) {
        Analyze = 'Umidade do solo perigosamente baixa';
      } else if(HumidityLevel > 59 && HumidityLevel <= 79){
        Analyze = 'Irrigação a ser aplicada';
      } else if(HumidityLevel > 79 && HumidityLevel <= 100){
        Analyze = 'Irrigação não necessária';
      }
      break;
    case 'Argilosa':
      if (HumidityLevel > 0 && HumidityLevel <= 69) {
        Analyze = 'Umidade do solo perigosamente baixa';
      } else if(HumidityLevel > 69 && HumidityLevel <= 87){
        Analyze = 'Irrigação a ser aplicada';
      } else if(HumidityLevel > 87 && HumidityLevel <= 100){
        Analyze = 'Irrigação não necessária';
      }
      break;
    case 'Arenosa':
      if (HumidityLevel > 0 && HumidityLevel <= 79) {
        Analyze = 'Umidade do solo perigosamente baixa';
      } else if(HumidityLevel > 79 && HumidityLevel <= 89){
        Analyze = 'Irrigação a ser aplicada';
      } else if(HumidityLevel > 89 && HumidityLevel <= 100){
        Analyze = 'Irrigação não necessária';
      }
      break;
    default:
      Analyze = '';
  }

  return Analyze;
}