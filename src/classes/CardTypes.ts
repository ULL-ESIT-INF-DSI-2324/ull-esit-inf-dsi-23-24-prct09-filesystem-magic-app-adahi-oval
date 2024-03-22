import { CardColor, CardType, CardRarity, Card } from "./Card.js";

/**
 * Interfaz para representar un objeto de tipo CardStats, que se compone de un valor numerico para la fuerza y otro para la resistencia
 */
export interface CardStats {
  fuerza: number,
  resistencia: number
}

/**
 * Clase que representa una carta de tipo Tierra
 */
export class Tierra extends Card {
  constructor(protected ID: number, protected Name: string, protected Cost: number, protected Color: CardColor, protected Type: CardType, protected Rarity: CardRarity, protected Text: string, protected Price: number) {
    super(ID, Name, Cost, Color, Type, Rarity, Text, Price);
  }
}

/**
 * Clase que representa una carta de tipo Encantamiento
 */
export class Encantamiento extends Card {
  constructor(protected ID: number, protected Name: string, protected Cost: number, protected Color: CardColor, protected Type: CardType, protected Rarity: CardRarity, protected Text: string, protected Price: number) {
    super(ID, Name, Cost, Color, Type, Rarity, Text, Price);
  }
}

/**
 * Clase que representa una carta de tipo Conjuro
 */
export class Conjuro extends Card {
  constructor(protected ID: number, protected Name: string, protected Cost: number, protected Color: CardColor, protected Type: CardType, protected Rarity: CardRarity, protected Text: string, protected Price: number) {
    super(ID, Name, Cost, Color, Type, Rarity, Text, Price);
  }
}

/**
 * Clase que representa una carta de tipo Instantaneo
 */
export class Instantaneo extends Card {
  constructor(protected ID: number, protected Name: string, protected Cost: number, protected Color: CardColor, protected Type: CardType, protected Rarity: CardRarity, protected Text: string, protected Price: number) {
    super(ID, Name, Cost, Color, Type, Rarity, Text, Price);
  }
}

/**
 * Clase que representa una carta de tipo Artefacto
 */
export class Artefacto extends Card {
  constructor(protected ID: number, protected Name: string, protected Cost: number, protected Color: CardColor, protected Type: CardType, protected Rarity: CardRarity, protected Text: string, protected Price: number) {
    super(ID, Name, Cost, Color, Type, Rarity, Text, Price);
  }
}

/**
 * Clase que representa una carta de tipo Criatura, tiene un atributo adicional de tipo CardStats para la fuerza y resistencia
 */
export class Criatura extends Card {
  
  constructor(protected ID: number, protected Name: string, protected Cost: number, protected Color: CardColor, protected Type: CardType, protected Rarity: CardRarity, protected Text: string, protected Price: number, protected Stats: CardStats) {
    super(ID, Name, Cost, Color, Type, Rarity, Text, Price);
  }

  /**
   * Devuelve las stats de la carta, objeto de tipo CardStats
   */
  get stats() {
    return this.Stats;
  }
  
}

/**
 * Clase que representa una carta de tipo Planeswalker, atributo adicional Loyalty para las masrcas de lealtad
 */
export class Planeswalker extends Card {
  constructor(protected ID: number, protected Name: string, protected Cost: number, protected Color: CardColor, protected Type: CardType, protected Rarity: CardRarity, protected Text: string, protected Price: number, protected Loyalty: number) {
    super(ID, Name, Cost, Color, Type, Rarity, Text, Price);
  }

  /**
   * Devuelve las marcas de lealtad
   */
  get loyalty() {
    return this.Loyalty;
  }

}