class Levels {
  constructor() {
    this.currentLevelIndex = 0;
    this.levelList = [
      [
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'v', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'b', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'b', 'gr', 'b', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'b', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'dr', 'o', 'o', 'o'],
      ],
      [
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'dl', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'p', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'p', 'o', 'o', 'o', 'o', 'gc'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['b', 'b', 'b', 'p', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['p', 'p', 'p', 'p', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'p', 'v', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'p', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'b', 'o', 'o', 'o'],
        ['o', 'gr', 'o', 'o', 'o', 'o', 'gr', 'o', 'o', 'o'],
      ],
      [
        ['o', 'o', 'b', 'b', 'b', 'b', 'b', 'b', 'o', 'o'],
        ['o', 'o', 'b', 'b', 'b', 'b', 'b', 'b', 'o', 'db'],
        ['o', 'o', 'b', 'b', 'b', 'b', 'b', 'b', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'b'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'b'],
        ['b', 'b', 'b', 'o', 'b', 'b', 'o', 'o', 'o', 'b'],
        ['b', 'b', 'b', 'o', 'b', 'b', 'v', 'b', 'b', 'b'],
        ['b', 'b', 'b', 'o', 'b', 'b', 'o', 'b', 'b', 'b'],
        ['b', 'b', 'b', 'o', 'b', 'b', 'o', 'b', 'b', 'b'],
        ['b', 'b', 'b', 'gr', 'b', 'b', 'gr', 'b', 'b', 'b']
      ],
      [
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['b', 'b', 'b', 'b', 'b', 'b', 'o', 'o', 'o', 'o'],
        ['v', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['gc', 'o', 'o', 'o', 'gr', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'gr', 'o', 'b', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'gr', 'o', 'o'],
        ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'o', 'o'],
        ['dt', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o']
      ],
      [
        ['o', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
        ['o', 'o', 'o', 'o', 'gr', 'gr', 'gr', 'b', 'gr', 'b'],
        ['o', 'o', 'o', 'o', 'b', 'b', 'b', 'b', 'p', 'o'],
        ['o', 'o', 'p', 'o', 'b', 'b', 'b', 'o', 'o', 'db'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['b', 'b', 'b', 'o', 'p', 'o', 'p', 'o', 'o', 'o'],
        ['b', 'b', 'gr', 'o', 'o', 'b', 'o', 'o', 'o', 'o'],
        ['b', 'b', 'b', 'o', 'o', 'o', 'o', 'b', 'o', 'o'],
        ['b', 'b', 'b', 'o', 'o', 'o', 'v', 'o', 'o', 'gc'],
      ],
      [
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['b', 'b', 'b', 'b', 'b', 'b', 'gc', 'o', 'o', 'o'],
        ['b', 'b', 'b', 'b', 'b', 'b', 'gc', 'o', 'o', 'o'],
        ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'gr', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'b', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'b', 'o', 'o'],
        ['b', 'o', 'o', 'b', 'gr', 'v', 'o', 'b', 'o', 'o'],
        ['b', 'o', 'o', 'b', 'b', 'b', 'b', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'gc'],
        ['o', 'o', 'dr', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
      ],
      [
        ['o', 'o', 'o', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
        ['o', 'o', 'o', 'b', 'b', 'v', 'b', 'b', 'b', 'b'],
        ['o', 'o', 'p', 'b', 'b', 'o', 'gc', 'b', 'b', 'b'],
        ['o', 'o', 'o', 'b', 'b', 'o', 'b', 'b', 'b', 'b'],
        ['o', 'o', 'gr', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['gc', 'o', 'o', 'o', 'p', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'p', 'o', 'o', 'o', 'o', 'gc'],
        ['o', 'o', 'p', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'dr', 'o', 'gr', 'o', 'o', 'o', 'o', 'o'],
      ],
      [
        ['o', 'o', 'o', 'o', 'gr', 'o', 'o', 'b', 'b', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'b', 'p', 'o', 'o', 'b', 'o', 'o', 'o'],
        ['o', 'b', 'gc', 'o', 'o', 'p', 'o', 'b', 'o', 'o'],
        ['o', 'o', 'p', 'b', 'o', 'o', 'gr', 'o', 'b', 'o'],
        ['o', 'o', 'o', 'o', 'b', 'o', 'p', 'o', 'gc', 'db'],
        ['p', 'o', 'o', 'o', 'v', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'gc', 'p', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'p', 'o', 'o'],
        ['b', 'o', 'o', 'o', 'gr', 'o', 'o', 'o', 'gr', 'b'],
      ],
      // SUPER GHOST INTRODUCED
      [
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'b', 'b', 'o'],
        ['o', 'b', 'b', 'gc', 'o', 'o', 'o', 'b', 'b', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'b', 'b', 'b', 'b', 'o'],
        ['o', 'o', 'b', 'b', 'o', 'b', 'b', 'b', 'b', 'sr'],
        ['o', 'o', 'b', 'b', 'o', 'o', 'o', 'b', 'b', 'b'],
        ['o', 'gr', 'b', 'b', 'o', 'o', 'v', 'o', 'o', 'o'],
        ['o', 'o', 'b', 'b', 'gr', 'b', 'b', 'b', 'b', 'o'],
        ['b', 'b', 'o', 'o', 'o', 'b', 'b', 'b', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'p', 'b', 'b', 'b', 'o', 'o'],
        ['dr', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
      ],
      [
        ['o', 'o', 'o', 'sr', 'o', 'o', 'o', 'sr', 'o', 'o'],
        ['o', 'p', 'o', 'o', 'o', 'p', 'o', 'o', 'o', 'p'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'p', 'o', 'o', 'o', 'p', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'sc', 'o'],
        ['o', 'p', 'o', 'o', 'o', 'p', 'o', 'o', 'o', 'p'],
        ['o', 'o', 'o', 'gc', 'o', 'v', 'o', 'o', 'o', 'o'],
        ['dt', 'o', 'o', 'p', 'o', 'o', 'o', 'p', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'sc', 'o'],
        ['o', 'p', 'o', 'o', 'o', 'p', 'o', 'o', 'o', 'p'],
      ],
      //DEMONIC GHOST INTRODUCED 
      [
        ['o', 'o', 'o', 'o', 'p', 'dm', 'o', 'o', 'o', 'b'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'b', 'b', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'dm', 'o', 'p', 'o', 'o', 'o', 'o', 'o', 'v'],
        ['o', 'b', 'o', 'o', 'o', 'o', 'b', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'b', 'dm', 'o', 'o', 'o'],
        ['dt', 'o', 'b', 'b', 'o', 'b', 'p', 'ds', 'o', 'o'],
        ['o', 'o', 'dm', 'p', 'b', 'b', 'o', 'o', 'o', 'o'],
        ['b', 'b', 'b', 'b', 'b', 'b', 'o', 'o', 'o', 'b'],
      ],
      [
        ['o', 'p', 'dm', 'p', 'dm', 'dm', 'dm', 'dm', 'dm', 'dm'],
        ['o', 'p', 'dm', 'dm', 'dm', 'p', 'dm', 'p', 'dm', 'dm'],
        ['o', 'p', 'dm', 'dm', 'dm', 'dm', 'dm', 'dm', 'p', 'dm'],
        ['o', 'p', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'ds', 'v', 'db'],
        ['p', 'p', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
        ['dm', 'dm', 'dm', 'dm', 'dm', 'dm', 'p', 'dm', 'dm', 'dm'],
        ['p', 'dm', 'p', 'dm', 'dm', 'dm', 'dm', 'dm', 'dm', 'dm'],
        ['dm', 'dm', 'dm', 'dm', 'p', 'dm', 'dm', 'dm', 'p', 'dm'],
        ['dm', 'dm', 'dm', 'dm', 'dm', 'dm', 'dm', 'dm', 'dm', 'dm'],
      ],
      [
        ['o', 'b', 'b', 'b', 'b', 'o', 'b', 'o', 'sr', 'o'],
        ['o', 'b', 'dm', 'b', 'b', 'dm', 'b', 'o', 'o', 'o'],
        ['o', 'b', 'b', 'b', 'b', 'b', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'db'],
        ['b', 'b', 'b', 'o', 'o', 'o', 'o', 'o', 'o', 'gc'],
        ['b', 'b', 'b', 'b', 'p', 'p', 'o', 'o', 'o', 'o'],
        ['b', 'b', 'b', 'b', 'dm', 'v', 'o', 'o', 'o', 'o'],
        ['b', 'dm', 'b', 'b', 'b', 'b', 'o', 'o', 'o', 'o'],
        ['b', 'b', 'b', 'b', 'b', 'b', 'ds', 'o', 'o', 'o'],
      ],
      [
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'b', 'o', 'o'],
        ['o', 'o', 'b', 'o', 'o', 'o', 'o', 'p', 'o', 'o'],
        ['o', 'o', 'b', 'o', 'sc', 'o', 'o', 'b', 'o', 'o'],
        ['o', 'o', 'b', 'o', 'o', 'p', 'o', 'b', 'o', 'sc'],
        ['o', 'o', 'o', 'o', 'o', 'b', 'o', 'o', 'o', 'o'],
        ['sc', 'o', 'o', 'p', 'o', 'b', 'o', 'o', 'o', 'o'],
        ['b', 'o', 'p', 'b', 'o', 'b', 'o', 'o', 'b', 'o'],
        ['o', 'o', 'sr', 'o', 'o', 'o', 'o', 'o', 'b', 'v'],
        ['dt', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'b', 'b'],
        ['o', 'o', 'b', 'o', 'sr', 'o', 'o', 'o', 'b', 'b'],
      ],
      [
        ['o', 'o', 'b', 'o', 'b', 'v', 'b', 'dl', 'o', 'o'],
        ['o', 'o', 'b', 'o', 'b', 'o', 'b', 'o', 'o', 'gc'],
        ['o', 'o', 'b', 'o', 'b', 'o', 'gr', 'o', 'b', 'b'],
        ['gc', 'o', 'p', 'o', 'p', 'o', 'b', 'o', 'b', 'dm'],
        ['o', 'o', 'b', 'o', 'dm', 'o', 'b', 'o', 'b', 'b'],
        ['o', 'o', 'b', 'o', 'b', 'o', 'p', 'o', 'b', 'b'],
        ['o', 'o', 'p', 'o', 'b', 'o', 'p', 'o', 'o', 'gc'],
        ['o', 'dm', 'o', 'o', 'gr', 'o', 'b', 'o', 'b', 'b'],
        ['b', 'b', 'b', 'o', 'b', 'o', 'o', 'o', 'b', 'b'],
        ['p', 'p', 'b', 'o', 'p', 'o', 'b', 'ds', 'b', 'b'],
      ],
      [
        ['o', 'b', 'b', 'sr', 'gr', 'b', 'p', 'b', 'dl', 'p'],
        ['o', 'b', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'b'],
        ['o', 'p', 'o', 'o', 'p', 'b', 'p', 'b', 'o', 'b'],
        ['o', 'p', 'o', 'o', 'o', 'o', 'o', 'b', 'o', 'b'],
        ['o', 'b', 'p', 'o', 'v', 'b', 'ds', 'b', 'o', 'b'],
        ['o', 'gc', 'o', 'o', 'p', 'b', 'o', 'b', 'o', 'gc'],
        ['o', 'b', 'dm', 'o', 'o', 'o', 'o', 'b', 'o', 'b'],
        ['o', 'p', 'b', 'p', 'b', 'b', 'b', 'b', 'o', 'b'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'b'],
        ['b', 'b', 'b', 'gr', 'p', 'b', 'gr', 'dm', 'b', 'b'],
      ],
      [
        ['o', 'o', 'o', 'p', 'o', 'o', 'o', 'o', 'b', 'b'],
        ['p', 'p', 'o', 'p', 'o', 'dm', 'o', 'o', 'o', 'ds'],
        ['b', 'o', 'o', 'p', 'o', 'p', 'o', 'o', 'o', 'sc'],
        ['dm', 'o', 'o', 'p', 'o', 'p', 'v', 'dm', 'o', 'o'],
        ['o', 'o', 'o', 'p', 'o', 'p', 'p', 'p', 'p', 'o'],
        ['o', 'p', 'p', 'p', 'o', 'p', 'dm', 'b', 'o', 'o'],
        ['o', 'o', 'sc', 'p', 'o', 'p', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'p', 'o', 'p', 'o', 'p', 'p', 'p'],
        ['p', 'p', 'o', 'p', 'o', 'p', 'o', 'o', 'dm', 'o'],
        ['dm', 'o', 'o', 'o', 'o', 'p', 'o', 'o', 'o', 'db'],
      ]
    ];
    //blank level for tests. 
    // [
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
    //   ],
  }
}