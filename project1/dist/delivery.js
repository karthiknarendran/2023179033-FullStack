"use strict";
let log = [
    { orderid: 1001, name: 'Karthik', billamt: 293, distance: 4.5, discount_code: '', late: 'N', weather: 'Y' },
    { orderid: 98435, name: 'Aravind', billamt: 1254, distance: 9, discount_code: 'TRYNEW', late: 'N', weather: 'N' },
    { orderid: 3452, name: 'Krithik', billamt: 650, distance: 7.2, discount_code: '', late: 'Y', weather: 'N' },
    { orderid: 6792, name: 'Renjith', billamt: 1280, distance: 6, discount_code: 'BINGE250', late: 'N', weather: 'N' },
    { orderid: 1148, name: 'Krishna', billamt: 337, distance: 10, discount_code: 'DX100', late: 'N', weather: 'N' }
];
function calcDiscount(code) {
    switch (code) {
        case 'TRYNEW':
            return 100;
        case 'BINGE250':
            return 250;
        case 'DX100':
            return 75;
        default:
            return 0;
    }
}
function isLate(check) {
    if (check == 'Y') {
        return 0;
    }
    else {
        return 1;
    }
}
function distanceFee(distance) {
    if (distance < 2) {
        return 0;
    }
    else if (distance < 5) {
        return 5;
    }
    else if (distance > 5 && distance < 7) {
        return 10;
    }
    else {
        return 20;
    }
}
function weatherFee(check) {
    if (check == 'Y') {
        return 30;
    }
    else {
        return 0;
    }
}
function calcFee(logs) {
    for (let i = 0; i < logs.length; i++) {
        let total = 0;
        total = (logs[i].billamt + distanceFee(logs[i].distance) + weatherFee(logs[i].weather)) - calcDiscount(logs[i].discount_code);
        total = total * isLate(logs[i].late);
        console.log("OrderID: " + logs[i].orderid + " Name: " + logs[i].name + " Order Amount: " + Math.round(total));
    }
}
calcFee(log);
//# sourceMappingURL=delivery.js.map