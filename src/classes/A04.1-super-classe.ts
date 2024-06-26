export class Animal {
  public readonly name: string;
  constructor(theName: string) {
    this.name = theName;
  }

  public move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

export class Snake extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 5) {
    console.log('Slithering...');
    super.move(distanceInMeters);
  }
}

export class Hourse extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 45) {
    console.log('Galloping...');
    super.move(distanceInMeters);
  }
}

const sam = new Snake('Sammy the Python');
const tom: Animal = new Hourse('Tommy the Palomino');

sam.move();
tom.move(34);
