export class GameDate extends Date {
  static readonly FullYearRegExp = new RegExp('^\d{4}$');
  static readonly MonthRegExp = new RegExp('^[0,1]{1}\d{1}$');
  
  constructor() {
    super('1970-1-1');
  }
  setYear(fullYear:'/^\d{4}$/'):void {

  }
}

// export type Day = 1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30 ;
// export type Month = 1|2|3|4|5|6|7|8|9|10|11|12 ;

// export class GameDate {
//   protected _year:number = 1;
//   protected _month:Month = 1;
//   protected _date:Day = 1;

//   constructor(initialYear:number = 1, initialMonth:Month = 1, initialDate:Day = 1) {
//     this.setYear(initialYear)
//         .setMonth(initialMonth)
//         .setDate(initialDate);
//   }

//   get year():number {
//     return this._year;
//   }
//   get month():number {
//     return this._month;
//   }
//   get date():number {
//     return this._date;
//   }

//   setYear(newYear:number):GameDate {
//     this._year = Math.floor(newYear);
//     return this;
//   }

//   setMonth(newMonth:Month):GameDate {
//     this._month = newMonth;
//     return this;
//   }

//   setDate(newDate:Day):GameDate {
//     this._date = newDate;
//     return this;
//   }

//   progressDate(count:number):void {
//     if(count<1){
//       return;
//     }
//     for(let i=0; i<count; i++) {
//       this._updateDate();
//     }
//   }

//   progressMonth(count:number=1):void {
//     if(count<1){
//       return;
//     }
//     for(let i=0; i<count; i++){
//       this._updateMonth();
//     }
//   }

//   progressYear(count:number=1):void {
//     if(count<1){
//       return;
//     }
//     for(let i=0; i<count; i++) {
//       this._updateYear();
//     }
//   }

//   protected _updateDate():void {
//     if(this._date <= 30) {
//       this._date++;
//     } else {
//       this._date = 1;
//       this.progressMonth(1);
//     }
//   }

//   protected _updateMonth():void {
//     if(this._month <= 11) {
//       this._month++;
//     } else {
//       this._month = 1;
//       this.progressYear(1);
//     }
//   }

//   protected _updateYear():void {
//     this._year++;
//   }

// }
