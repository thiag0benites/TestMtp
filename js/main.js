// ********************************************************************
// Autor: Thiago Benites
// Criação: 14/06/2022
// Aplicação: Desafio Cálculo da Umidade do Solo
// ********************************************************************
// Descrição: Chamada de métodos de frontend, orientados a eventos
// ********************************************************************
// Eventos
// ********************************************************************
InputHumidity.onfocus    = function() {ValidatesFields()};
InputHumidity.onkeypress = function() {OnlyNumber()};
BtnCalculate.onclick     = function() {Calculate()};