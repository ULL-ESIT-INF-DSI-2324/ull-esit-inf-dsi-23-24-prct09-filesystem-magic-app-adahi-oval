import 'mocha';
import { expect } from 'chai';
import { Chair } from '../src/classes/furnitures/Chair.js'
import { Table } from '../src/classes/furnitures/Table.js'
import { Wardrobe } from '../src/classes/furnitures/Wardrobe.js'
import { Door } from '../src/classes/furnitures/Door.js'
import { Fridge } from '../src/classes/furnitures/Fridge.js'
import { FurnitureCollection } from '../src/classes/furnitures/FurnitureCollection.js'
import { FurnitureCollectionSearcher } from '../src/classes/furnitures/FurnitureCollectionSearcher.js'
import { Furniture } from '../src/classes/furnitures/Furniture.js';

describe('Instancias de Furniture y clases Hijas', () => {
  const chair: Chair = new Chair(1, 'Red Chair', 'Its a red chair', 'Metal', { height: 50, width: 10, length: 10}, 25);
  const wardrobe: Wardrobe = new Wardrobe(1, 'Blue Wardrobe', 'Its a blue wardrobe', 'Wood', { height: 100, width: 10, length: 10}, 30);
  const table: Table = new Table(1, 'Green Table', 'Its a green table', 'Plastic', { height: 50, width: 50, length: 50}, 35)
  const door: Door = new Door(1, 'Wooden Door', 'Its a wooden door', 'Wood', { height: 50, width: 50, length: 50}, 50);
  const fridge: Fridge = new Fridge(1, 'Purple Fridge', 'Its a purple fridge', 'Metal', { height: 50, width: 50, length: 50}, 40);

  const collection: FurnitureCollection = new FurnitureCollection([chair, wardrobe, table, door, fridge]);
  const collectionSearcher: FurnitureCollectionSearcher = new FurnitureCollectionSearcher(collection);
  const expectedArray: Furniture[] = [wardrobe, table, fridge, chair, door];
  const expectedArray2: Furniture[] = [door, chair, fridge, table, wardrobe];
  const expectedArray3: Furniture[] = [chair, wardrobe, table, fridge, door];
  const expectedArray4: Furniture[] = [door, fridge, table, wardrobe, chair];

  it('Se instancian y se devuelve el tipo correctamente', () => {
    expect(chair.getType()).to.deep.equal('Chair');
    expect(table.getType()).to.deep.equal('Table');
    expect(wardrobe.getType()).to.deep.equal('Wardrobe');
    expect(door.getType()).to.deep.equal('Door');
    expect(fridge.getType()).to.deep.equal('Fridge');
    expect(chair.dimensions.height).to.deep.equal(50);
    expect(table.dimensions.width).to.deep.equal(50);
    expect(wardrobe.dimensions.height).to.deep.equal(100);
  });

  it('Se devuelve el nombre correctamente', () => {
    expect(chair.getName()).to.deep.equal('Red Chair');
    expect(table.getName()).to.deep.equal('Green Table');
    expect(wardrobe.getName()).to.deep.equal('Blue Wardrobe');
    expect(door.getName()).to.deep.equal('Wooden Door');
    expect(fridge.getName()).to.deep.equal('Purple Fridge');
  })

  it('Se devuelven los muebles correctamente', () => {
    expect(collection.getCollection()).to.deep.eq([chair, wardrobe, table, door, fridge]);
  })

  it('Los buscadores funcionan correctamente', () => {
    expect(collectionSearcher.searchName('Red Chair', 1)).to.deep.eq([chair]);
    expect(collectionSearcher.searchDesc('Its', 1)).to.deep.eq(expectedArray);
    expect(collectionSearcher.searchType('Fridge', 1)).to.deep.eq([fridge]);
    expect(collectionSearcher.searchType('Fridge', 0)).to.deep.eq([fridge]);
  });

  it('Las ordenaciones funcionan correctamente', () => {
    expect(collectionSearcher.searchDesc('Its', 1)).to.deep.eq(expectedArray);
    expect(collectionSearcher.searchDesc('Its', 2)).to.deep.eq(expectedArray2);
    expect(collectionSearcher.searchDesc('Its', 3)).to.deep.eq(expectedArray3);
    expect(collectionSearcher.searchDesc('Its', 4)).to.deep.eq(expectedArray4);
  });

})