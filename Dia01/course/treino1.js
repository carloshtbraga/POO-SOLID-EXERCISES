"use strict";
class Tv {
    constructor(b, s, r, c) {
        console.log(`Producing TV of the brand ${b} heheheeee`);
        this._brand = b;
        this._size = s;
        this._resolution = r;
        this._connections = c;
    }
    turnOn() {
        console.log(`Tv of brand ${this._brand}, size ${this._size}, resolution ${this._resolution} and has ${this._connections} connections`);
    }
    get connectedTo() {
        return this._connectedTo;
    }
    set connectedTo(value) {
        // permite setar undefined ou uma conexão que esteja no `connections`
        if (!value || this._connections.includes(value)) {
            this._connectedTo = value;
            console.log(this._connectedTo);
        }
        else {
            console.log('Sorry, connection unavailable!');
        }
    }
}
const tv1 = new Tv("LG", 54, "1024", ["HDMI", "USB", "Wi-Fi"]);
// aqui estamos passando somente dois parâmetros, atente-se ao valor do atributo p2.weight
const tv2 = new Tv("Samsumg", 24, "1024", ["HDMI"]);
tv1.turnOn();
tv2.turnOn();
tv1.connectedTo = 'HDMI';
console.log('Connected to:', tv1.connectedTo);
/*
  Saída:
  Creating person Maria
  Creating person João
  Maria 171 58
  João 175 undefined
  Maria: zzzzzzz
  João: zzzzzzz
  */
