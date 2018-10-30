class Currency {
    constructor(quantity = 1, ratioWithProto = 1, sign = '$') {
        this.quantity = quantity;
        this.ratioWithProto = ratioWithProto;
        this.sign = sign;
    }
    sum(curr) {
    this.quantity = curr.quantity * curr.ratioWithProto;
    }
    isCurrencyType() {

    }
}


class Dollar extends Currency {
    super(quantity, ratioWithProto, sign) { 
      
    }
    static getCountInstance() {
        Dollar.count +=1;
        return Dollar.count;
    }
}
Dollar.count = 0;

class Canadian extends Currency {
    constructor(quantity) {
        super(quantity, ratioWithProto = 0.65, sign = 'C$');
    }
}
class Hryvna  extends Currency {
    constructor(quantity) {
        super(quantity, ratioWithProto = 0.65, sign = '₴');
    }
}

let pocketMoney  = new Dollar(5);
pocketMoney.quantity;
let hrn = new Hryvna(100); 
let total = pocketMoney.sum(hrn);
total.quantity;
let can = new Canadian(10);
let hrn = new Hryvna(15);
Dollar.count();





