function Retangulo(x, y) {
    this.base = x;
    this.altura = y;

    this.area = (function() {return base * altura})();

    console.log({ base: this.base, altura: this.altura, area: this.area });
}