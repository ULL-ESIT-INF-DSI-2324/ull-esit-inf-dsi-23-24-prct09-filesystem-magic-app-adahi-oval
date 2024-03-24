import path from 'path';
import fs from 'fs';
import { CardCollection } from './Collection.js';


export class CardCollectionWriter {
  private route: string = '';

  /**
   * El constructor de la clase, se encarga de crear la ruta hasta el directorio del usuario dado
   * @param user El usuario del que se crea el objeto colección
   */
  constructor(private collection: CardCollection) {
    const __dirname = path.dirname(new URL(import.meta.url).pathname);
    const fatherdir = path.resolve(__dirname, '..');
    this.route = path.join(fatherdir, `database/users/${this.collection.user}`);
  }

  write(): void {
    const files: string[] = fs.readdirSync(this.route);
    files.forEach((file) => {
      const filePath: string = path.join(this.route, file);
      fs.unlinkSync(filePath);
    });

    this.collection.collection.forEach((card) => {
      const cardPath: string = path.join(this.route, `${card.name}.json`);
      fs.writeFileSync(cardPath, JSON.stringify(card));
    });

  }
}