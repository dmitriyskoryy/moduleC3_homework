function Technique(name, power) {
  this.name = name || "None";
  this.power = power || 0;
  this.isPlugged = false;
  
  
  // метод включает в розетку прибор и показывает потребляемую мощ.
  this.pluggedIn = function() {
    console.log(`Прибор ${this.name} включен в розетку! Потребляет ${this.power}Вт в час.`);
    this.isPlugged = true;
  }
   
  // метод выключает из розетки прибор
  this.unplugged = function() {
    console.log(`Прибор ${this.name} отключен от розетки!`);
    this.isPlugged = false;
  }
  
}
  


// прибор микроволновка
function Мicrowave(brand, color, grill, name, power) {     
  this.name = name;
  this.power = power;
  this.brand = brand || "Noname";
  this.color = color || "Белый";
  this.grill = grill || false;
  this.isPlugged = false;
  this.isGrill = false;

  
  //метод включает гриль
  this.grillOn = function() {
    if (this.grill) {
      let powerGrill = 30;
      if (this.isPlugged) {
        powerGrill += this.power;
        console.log(`В микроволновке ${this.name} включен гриль! Потребляется ${powerGrill}Вт.`);
        this.isGrill = true;
      } else {
        console.log(`Чтобы включить гриль в микроволновке ${this.name}, сначала включите ее в розетку.`);
      } 
    } else {
      console.log(`Микроволновка ${this.name} не оборудована грилем.`);
    }
  }
  
  //метод выключает гриль
  this.grillOff = function() {  
  if (this.isPlugged) {
      console.log(`В микроволновке ${this.name} выключен гриль! Потребляется ${this.power}Вт.`);
      this.isGrill = false;
    } else {
      console.log(`Микроволновка ${this.name} не подключена к розетке! Гриль не работает.`);
    } 
  }
  
}
  
  


//прибор switchhub
function Switchhub(brand, numberConnectors, name, power) { 
  this.name = name;
  this.power = power;
  this.brand = brand || "Noname";
  this.numberConnectors = numberConnectors || "2";
  this.arrNumbersConnectors = [];
  this.isPlugged = false;
  
  //метод подключает в разъем коннектор
  this.connect = function() {
    if (this.arrNumbersConnectors.length < this.numberConnectors) {
      this.arrNumbersConnectors.push(1);
      let numFreeConnectors = this.numberConnectors - this.arrNumbersConnectors.length;
      console.log(`Количество свободных разъемов: ${numFreeConnectors}. Занято разъемов: ${this.arrNumbersConnectors.length}`);
    } else {
      console.log(`Все разъемы у коммутатора ${this.name} заняты.`);
    }
  }
  
  //метод освобождает разъем
  this.disconnect = function() {
    if (this.arrNumbersConnectors.length >= 1) {
      this.arrNumbersConnectors.pop();
      let numFreeConnectors = this.numberConnectors - this.arrNumbersConnectors.length;
      console.log(`Количество свободных разъемов: ${numFreeConnectors}. Занято разъемов: ${this.arrNumbersConnectors.length}`);
    } else {
      console.log(`Количество свободных разъемов: ${this.numberConnectors}. Занято разъемов: ${this.arrNumbersConnectors.length}`);
    }
  }
  
  //метод подсчитывает потребляемую мощьность
  this.powerСonsumption = function() {
    if (this.isPlugged) {
      const summPower = this.arrNumbersConnectors.length * 0.5 + this.power;
      console.log(`Прибор ${this.name} в данный момент потребляет ${summPower}Вт`);
    } else {
      console.log(`Прибор ${this.name} не включен в розетку.`);
    }
  }
  
}
  

Мicrowave.prototype = new Technique();  
Switchhub.prototype = new Technique(); 

  

// экземпляр микроволновка c грилем
const oneМicrowave = new Мicrowave("Bosch", "Белый", true, "microwave",  45);

// экземпляр микроволновка без гриля
const twoМicrowave = new Мicrowave("Bosch", "Белый", false, "microwaveTwo",  65);



// экземпляр свитчхаба 
const switchhubOne = new Switchhub("TP-Link", "5", "switchhub",  10);


oneМicrowave.pluggedIn();
oneМicrowave.grillOn();
oneМicrowave.grillOff();

twoМicrowave.pluggedIn();
twoМicrowave.grillOn();



switchhubOne.pluggedIn();
switchhubOne.connect();
switchhubOne.connect();
switchhubOne.connect();
switchhubOne.powerСonsumption();
switchhubOne.disconnect();
switchhubOne.powerСonsumption();
























