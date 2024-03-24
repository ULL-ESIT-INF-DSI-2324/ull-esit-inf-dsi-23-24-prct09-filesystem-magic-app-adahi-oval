/**
 * Enumerado que estipula los colores de las cartas
 */
export enum CardColor {
  Blanco = 'Blanco',
  Negro = 'Negro',
  Azul = 'Azul',
  Rojo = 'Rojo',
  Verde = 'Verde',
  Incoloro = 'Incoloro',
  Multicolor = 'Multicolor'
}

/**
 * Enumerado que estipula los tipos de cartas
 */
export enum CardType {
  Tierra = 'Tierra',
  Criatura = 'Criatura',
  Encantamiento = 'Encantamiento',
  Conjuro = 'Conjuro',
  Instantáneo = 'Instantáneo',
  Artefacto = 'Artefacto',
  Planeswalker = 'Planeswalker'
}

/**
 * Enumerado que estipula los tiers de rareza de las cartas
 */
export enum CardRarity {
  Común = 'Común',
  Infrecuente = 'Infrecuente',
  Rara = 'Rara',
  Mítica = 'Mítica'
}


export abstract class Card {
  
  constructor(protected ID: number, protected Name: string, protected Cost: number, protected Color: CardColor, protected Type: CardType, protected Rarity: CardRarity, protected Text: string, protected Price: number) {}

 
  /**
   * Devuelve el identificador de la carta
   */
  get id() {
    return this.ID;
  }

  /**
   * Devuelve el nombre de la carta
   */
  get name() {
    return this.Name;
  }

  /**
   * Devuelve el costo de la carta
   */
  get cost() {
    return this.Cost;
  }

  /**
   * Devuelve el color de la carta
   */
  get color() {
    return this.Color;
  }

  /**
   * Devuelve el tipo de la carta
   */
  get type() {
    return this.Type;
  }

  /**
   * Devuelve la rareza de la carta
   */
  get rarity() {
    return this.Rarity;
  }

  /**
   * Devuelve el texto de la carta
   */
  get text() {
    return this.Text;
  }

  /**
   * Devuelve el precio de la carta
   */
  get price() {
    return this.Price;
  }

  abstract print(): void;

}