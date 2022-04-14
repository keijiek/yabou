export const DieSize = {
  d4:  4,
  d6:  6,
  d8:  8,
  d10: 10,
  d12: 12,
  d20: 20,
} as const;
export type DieSize = typeof DieSize[keyof typeof DieSize];


/**
 * 1つのダイス(Die)。サイズは d4 ~ d20
 */
class Die {
  protected _dieSize:DieSize;
  protected _currentFace:number = 1;
  protected _result:number = 0;
  protected _infinitRollMode:boolean;

  constructor(dieSize:DieSize, infinitRollMode:boolean = false) {
    this._dieSize = dieSize;
    this._infinitRollMode = infinitRollMode;
    this.roll();
  }

  get size():DieSize {
    return this._dieSize;
  }

  get currentFace():number {
    return this._currentFace.valueOf();
  }

  get result():number {
    return this._result;
  }

  get isInfinit():boolean {
    return this._infinitRollMode;
  }

  roll(infinitRollTarget:number = this._dieSize):Die {
    this._result = 0;
    while(true) {
      this._currentFace = Math.floor( (Math.random() * this._dieSize) + 1 );
      this._result += this._currentFace;
      if (this.infinitRollConditions(infinitRollTarget)) {
        break;
      }
    }
    return this;
  }

  private infinitRollConditions(infinitRollTarget:number, dieFace:number = this._currentFace):boolean {
    return dieFace >= infinitRollTarget && this._infinitRollMode;
  }

  private isMax():boolean {
    return this._currentFace === this._dieSize.valueOf();
  }

  isUppre(targetNumber:number):boolean {
    return this._currentFace >= targetNumber;
  }

  isLower(targetNumber:number):boolean {
    return this._currentFace <= targetNumber;
  }
}


/**
 * DicePool
 * @param number 初期に追加するダイスの個数
 * @param size 初期に追加するダイスのサイズ
 */
export class DicePool {
  protected _diecePool:Array<Die> = [];
  protected _rerollAtMax:boolean;

  constructor(number:number = 1, size:DieSize = 6, rerollAtMax:boolean = false) {
    this._rerollAtMax = rerollAtMax;
    this.addDice(number, size);
  }

  roll():DicePool {
    this._diecePool.map(elm => elm.roll());
    return this;
  }

  faceArray():Array<number> {
    const results:Array<number>=[];
    this._diecePool.map(elm => results.push(elm.result));
    return results;
  }

  sumFaces():number {
    const allSumReducer = (previousValue:number, currentDie:Die):number => {
      return previousValue + currentDie.result;
    }
    const initialValue:number = 0;
    return this._diecePool.reduce(allSumReducer, initialValue);
  }

  hitsUpper(targetNumber:number):number {
    const filteringFunc = (die:Die) => {
      return die.isUppre(targetNumber);
    };
    return this._diecePool.filter(filteringFunc).length;
  }

  hitsLower(targetNumber:number):number {
    const filteringFunc = (die:Die) => {
      return die.isLower(targetNumber);
    };
    return this._diecePool.filter(filteringFunc).length;
  }

  removeAllDice():DicePool {
    this._diecePool = [];
    return this;
  }

  addDice(number:number, size:DieSize):DicePool {
    for (let i=0; i<number; i++) {
      this._diecePool.push(new Die(size))
    }
    this.roll();
    return this;
  }
}
