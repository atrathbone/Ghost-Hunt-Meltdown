class Levels {
  constructor() {
    this.currentLevelIndex = 0;
    this.levelList = [
      // [
      //   ['o', 'o', 'b', 'b', 'b', 'b', 'b', 'b', 'o', 'o'],
      //   ['o', 'o', 'b', 'b', 'b', 'b', 'b', 'b', 'o', 'db'],
      //   ['o', 'o', 'b', 'b', 'b', 'b', 'b', 'b', 'o', 'o'],
      //   ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'b'],
      //   ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'b'],
      //   ['b', 'b', 'b', 'o', 'b', 'b', 'o', 'o', 'o', 'b'],
      //   ['b', 'b', 'b', 'o', 'b', 'b', 'v', 'b', 'b', 'b'],
      //   ['b', 'b', 'b', 'o', 'b', 'b', 'o', 'b', 'b', 'b'],
      //   ['b', 'b', 'b', 'o', 'b', 'b', 'o', 'b', 'b', 'b'],
      //   ['b', 'b', 'b', 'gr', 'b', 'b', 'gr', 'b', 'b', 'b']
      // ],
      // [
      //   ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
      //   ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
      //   ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
      //   ['b', 'b', 'b', 'b', 'b', 'b', 'o', 'o', 'o', 'o'],
      //   ['v', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
      //   ['gc', 'o', 'o', 'o', 'gr', 'o', 'o', 'o', 'o', 'o'],
      //   ['o', 'o', 'gr', 'o', 'b', 'o', 'o', 'o', 'o', 'o'],
      //   ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'gr', 'o', 'o'],
      //   ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'o', 'o'],
      //   ['dt', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o']
      // ],
      // [
      //   ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
      //   ['b', 'b', 'b', 'b', 'b', 'b', 'gc', 'o', 'o', 'o'],
      //   ['b', 'b', 'b', 'b', 'b', 'b', 'gc', 'o', 'o', 'o'],
      //   ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'gr', 'o', 'o'],
      //   ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'b', 'o', 'o'],
      //   ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'b', 'o', 'o'],
      //   ['b', 'o', 'o', 'b', 'gr', 'v', 'o', 'b', 'o', 'o'],
      //   ['b', 'o', 'o', 'b', 'b', 'b', 'b', 'o', 'o', 'o'],
      //   ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'gc'],
      //   ['o', 'o', 'dr', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
      // ],
      // [
      //   ['o', 'o', 'o', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
      //   ['o', 'o', 'o', 'b', 'b', 'v', 'b', 'b', 'b', 'b'],
      //   ['o', 'o', 'p', 'b', 'b', 'o', 'gc', 'b', 'b', 'b'],
      //   ['o', 'o', 'o', 'b', 'b', 'o', 'b', 'b', 'b', 'b'],
      //   ['o', 'o', 'gr', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
      //   ['gc', 'o', 'o', 'o', 'p', 'o', 'o', 'o', 'o', 'o'],
      //   ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'gc'],
      //   ['o', 'o', 'p', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
      //   ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
      //   ['o', 'o', 'dr', 'o', 'gr', 'o', 'o', 'o', 'o', 'o'],
      // ],
      [
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'p', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'gr', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'gr', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'dr', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
      ],
      [
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
      ],
      [
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
      ],
      [
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
      ],
      [
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
      ],
      [
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
      ]
    ];
    //blank level for tests. 
    //   this.levelTwo = [
    //     ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
    //     ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
    //     ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
    //     ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
    //     ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
    //     ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
    //     ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
    //     ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
    //     ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
    //     ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
    //   ];
  }
}