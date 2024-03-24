import { Card } from "./Card.js";
import path from 'path';
import chalk from 'chalk';
import fs from 'fs';
import { CardStats } from "./CardTypes.js";
import { CardReader } from "./CardReader.js";

/**
 * Interfaz para comprobar la forma de un JSON leído
 */
export interface CardShape {
  ID: number,
  Name: string,
  Cost: number,
  Color: string,
  Type: string,
  Rarity: string,
  Text: string,
  Price: number,
  Stats: CardStats,
  Loyalty: number
}

export class CardCollectionReader  {

  private collection: Card[] = [];
  private route: string = '';

  /**
   * El constructor de la clase, se encarga de crear la ruta hasta el directorio del usuario dado
   * @param user El usuario del que se crea el objeto colección
   */
  constructor(private user: string) {
    const __dirname = path.dirname(new URL(import.meta.url).pathname);
    const fatherdir = path.resolve(__dirname, '..');
    this.route = path.join(fatherdir, `database/users/${this.user}`);
  }

  /**
   * Método para leer el directorio de un usuario concreto.
   */
  readDir(): void {
    
    try {
      fs.accessSync(this.route);
      console.log(chalk.green('Collection read succesfully!'));
    } catch (error) {
      throw new Error(chalk.red('User doesnt exist!'));
    }

    const cards = fs.readdirSync(this.route);

    cards.forEach((card) => {

      const content: string = fs.readFileSync(`${this.route}/${card}`, 'utf-8');
      const data: CardShape = JSON.parse(content);
      const reader: CardReader = new CardReader(data);

      this.collection.push(reader.returnCard());

    });

  }

  /**
   * Método para devolver las cartas de un usuario concreto
   * @returns Un array de cartas del usuario
   */
  getCollection(): Card[] {
    return this.collection;
  }

  /**
   * Método para devolver el usuario de la colección leída
   * @returns El usuario de la coleccion leida
   */
  getUser(): string {
    return this.user;
  }

}