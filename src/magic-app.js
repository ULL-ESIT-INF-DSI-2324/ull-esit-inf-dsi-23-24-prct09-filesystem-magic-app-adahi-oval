import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { CardCollectionReader } from './classes/CollectionReader.js';
import { CardCollection } from './classes/Collection.js';
import { CardType } from './classes/Card.js';
import { Artefacto, Conjuro, Criatura, Encantamiento, Instantaneo, Planeswalker, Tierra } from './classes/CardTypes.js';
import * as chalk from 'chalk';
import { CardCollectionWriter } from './classes/CollectionWriter.js';
import { CardCollectionPrinter } from './classes/CollectionPrinter.js';
yargs(hideBin(process.argv))
    .command('add', 'Adds a card to the collection', {
    user: {
        description: 'Username',
        type: 'string',
        demandOption: true
    },
    id: {
        description: 'Card ID',
        type: 'number',
        demandOption: true
    },
    name: {
        description: 'Card Name',
        type: 'string',
        demandOption: true
    },
    cost: {
        description: 'Card Cost',
        type: 'number',
        demandOption: true
    },
    color: {
        description: 'Card Name',
        type: 'string',
        demandOption: true
    },
    type: {
        description: 'Card Type',
        type: 'string',
        demandOption: true
    },
    rarity: {
        description: 'Card Rarity',
        type: 'string',
        demandOption: true
    },
    text: {
        description: 'Card Text',
        type: 'string',
        demandOption: true
    },
    price: {
        description: 'Card Price',
        type: 'number',
        demandOption: true
    },
    loyalty: {
        description: 'Planeswalker loyalty',
        type: 'number',
        demandOption: false
    },
    strength: {
        description: 'Card Strength',
        type: 'number',
        demandOption: false
    },
    resistance: {
        description: 'Card Resistance',
        type: 'number',
        demandOption: false
    }
}, (argv) => {
    const reader = new CardCollectionReader(argv.user);
    const collection = new CardCollection(reader.getCollection(), reader.getUser());
    let card;
    const cardType = argv.type;
    const cardColor = argv.color;
    const cardRarity = argv.rarity;
    let cardStrength = 0;
    let cardResistance = 0;
    let cardLoyalty = 0;
    if (cardType == CardType.Criatura && typeof argv.strength === 'number' && typeof argv.resistance === 'number') {
        cardStrength = argv.strength;
        cardResistance = argv.resistance;
    }
    else if (cardType === CardType.Criatura && !argv.strength) {
        throw new Error(chalk.red('Stats not found.'));
    }
    else if (cardType == CardType.Planeswalker && typeof argv.loyalty === 'number') {
        cardLoyalty = argv.loyalty;
    }
    else if (cardType === CardType.Planeswalker && !argv.strength) {
        throw new Error(chalk.red('Stats not found.'));
    }
    switch (cardType) {
        case CardType.Tierra:
            card = new Tierra(argv.id, argv.name, argv.cost, cardColor, cardType, cardRarity, argv.text, argv.price);
            collection.addCard(card);
            break;
        case CardType.Encantamiento:
            card = new Encantamiento(argv.id, argv.name, argv.cost, cardColor, cardType, cardRarity, argv.text, argv.price);
            collection.addCard(card);
            break;
        case CardType.Conjuro:
            card = new Conjuro(argv.id, argv.name, argv.cost, cardColor, cardType, cardRarity, argv.text, argv.price);
            collection.addCard(card);
            break;
        case CardType.Instantáneo:
            card = new Instantaneo(argv.id, argv.name, argv.cost, cardColor, cardType, cardRarity, argv.text, argv.price);
            collection.addCard(card);
            break;
        case CardType.Artefacto:
            card = new Artefacto(argv.id, argv.name, argv.cost, cardColor, cardType, cardRarity, argv.text, argv.price);
            collection.addCard(card);
            break;
        case CardType.Criatura:
            card = new Criatura(argv.id, argv.name, argv.cost, cardColor, cardType, cardRarity, argv.text, argv.price, { fuerza: cardStrength, resistencia: cardResistance });
            collection.addCard(card);
            break;
        case CardType.Planeswalker:
            card = new Planeswalker(argv.id, argv.name, argv.cost, cardColor, cardType, cardRarity, argv.text, argv.price, cardLoyalty);
            collection.addCard(card);
            break;
        default:
            throw new Error(chalk.red('No valid type!'));
    }
    const writer = new CardCollectionWriter(collection);
    writer.write();
})
    .command('update', 'Updates a card from the collection', {
    user: {
        description: 'Username',
        type: 'string',
        demandOption: true
    },
    id: {
        description: 'Card ID',
        type: 'number',
        demandOption: true
    },
    name: {
        description: 'Card Name',
        type: 'string',
        demandOption: true
    },
    cost: {
        description: 'Card Cost',
        type: 'number',
        demandOption: true
    },
    color: {
        description: 'Card Name',
        type: 'string',
        demandOption: true
    },
    type: {
        description: 'Card Type',
        type: 'string',
        demandOption: true
    },
    rarity: {
        description: 'Card Rarity',
        type: 'string',
        demandOption: true
    },
    text: {
        description: 'Card Text',
        type: 'string',
        demandOption: true
    },
    price: {
        description: 'Card Price',
        type: 'number',
        demandOption: true
    },
    loyalty: {
        description: 'Planeswalker loyalty',
        type: 'number',
        demandOption: false
    },
    strength: {
        description: 'Card Strength',
        type: 'number',
        demandOption: false
    },
    resistance: {
        description: 'Card Resistance',
        type: 'number',
        demandOption: false
    }
}, (argv) => {
    const reader = new CardCollectionReader(argv.user);
    const collection = new CardCollection(reader.getCollection(), reader.getUser());
    let card;
    const cardType = argv.type;
    const cardColor = argv.color;
    const cardRarity = argv.rarity;
    let cardStrength = 0;
    let cardResistance = 0;
    let cardLoyalty = 0;
    if (cardType == CardType.Criatura && typeof argv.strength === 'number' && typeof argv.resistance === 'number') {
        cardStrength = argv.strength;
        cardResistance = argv.resistance;
    }
    else if (cardType === CardType.Criatura && !argv.strength) {
        throw new Error(chalk.red('Stats not found.'));
    }
    else if (cardType == CardType.Planeswalker && typeof argv.loyalty === 'number') {
        cardLoyalty = argv.loyalty;
    }
    else if (cardType === CardType.Planeswalker && !argv.strength) {
        throw new Error(chalk.red('Stats not found.'));
    }
    switch (cardType) {
        case CardType.Tierra:
            card = new Tierra(argv.id, argv.name, argv.cost, cardColor, cardType, cardRarity, argv.text, argv.price);
            collection.updateCard(card);
            break;
        case CardType.Encantamiento:
            card = new Encantamiento(argv.id, argv.name, argv.cost, cardColor, cardType, cardRarity, argv.text, argv.price);
            collection.updateCard(card);
            break;
        case CardType.Conjuro:
            card = new Conjuro(argv.id, argv.name, argv.cost, cardColor, cardType, cardRarity, argv.text, argv.price);
            collection.updateCard(card);
            break;
        case CardType.Instantáneo:
            card = new Instantaneo(argv.id, argv.name, argv.cost, cardColor, cardType, cardRarity, argv.text, argv.price);
            collection.updateCard(card);
            break;
        case CardType.Artefacto:
            card = new Artefacto(argv.id, argv.name, argv.cost, cardColor, cardType, cardRarity, argv.text, argv.price);
            collection.updateCard(card);
            break;
        case CardType.Criatura:
            card = new Criatura(argv.id, argv.name, argv.cost, cardColor, cardType, cardRarity, argv.text, argv.price, { fuerza: cardStrength, resistencia: cardResistance });
            collection.updateCard(card);
            break;
        case CardType.Planeswalker:
            card = new Planeswalker(argv.id, argv.name, argv.cost, cardColor, cardType, cardRarity, argv.text, argv.price, cardLoyalty);
            collection.updateCard(card);
            break;
        default:
            throw new Error(chalk.red('No valid type!'));
    }
    const writer = new CardCollectionWriter(collection);
    writer.write();
})
    .command('remove', 'Removes a card from the collection', {
    user: {
        description: 'Username',
        type: 'string',
        demandOption: true
    },
    id: {
        description: 'Card ID',
        type: 'number',
        demandOption: true
    }
}, (argv) => {
    const reader = new CardCollectionReader(argv.user);
    const collection = new CardCollection(reader.getCollection(), reader.getUser());
    collection.deleteCard(argv.id);
    const writer = new CardCollectionWriter(collection);
    writer.write();
})
    .command('list', 'Lists the cards from the collection', {
    user: {
        description: 'Username',
        type: 'string',
        demandOption: true
    }
}, (argv) => {
    const reader = new CardCollectionReader(argv.user);
    const collection = new CardCollection(reader.getCollection(), reader.getUser());
    const printer = new CardCollectionPrinter(collection);
    printer.print();
})
    .command('read', 'Reads a card from the collection', {
    user: {
        description: 'Username',
        type: 'string',
        demandOption: true
    },
    id: {
        description: 'Card ID',
        type: 'number',
        demandOption: true
    }
}, (argv) => {
    const reader = new CardCollectionReader(argv.user);
    const collection = new CardCollection(reader.getCollection(), reader.getUser());
    collection.showCard(argv.id);
})
    .help()
    .argv;
