
function myEach(col,cb) {
let thru = null;
if (typeof col === 'object') {
    thru = Object.values(col);
} else {
    thru = col;
}
for(let i = 0; i < thru.length; ++i) {
    cb(thru[i],i,col);
}
    return col;
}

function myMap(col,cb) {
    let thru = null;
    let returnArray = [];
    if (typeof col === 'object') {
        thru = Object.values(col);
    } else {
        thru = col;
    }
    for(let i = 0; i < thru.length; ++i) {
        returnArray.push(cb(thru[i],i,col));
    }
    return returnArray;
}

function myReduce(col,cb,init) {
    let accumulator = null;
    let start = 0;
    let thru = null;

    if (typeof col === 'object') {
        thru = Object.values(col);
    } else {
        thru = col;
    }

    if (init !== undefined) {
        accumulator = init;
        start = 0
    } else {
        accumulator = thru[0];
        start = 1;
    }

    for(let i = start; i < thru.length; i++) {
        accumulator = cb(accumulator,thru[i],i,col);
    }

    return accumulator;
}

function myFind(col,cb) {
    for(const item in col) {
        if(cb(col[item])) return col[item];
    }
    return undefined;
}

function myFilter(col,cb) {
    const returnArray = [];
    for(const item in col) {
        if(cb(col[item])) returnArray.push(col[item]);
    }
    return returnArray;
}

function mySize(col) {
    let i = 0;
    for(const item in col) {
        ++i;
    }
    return i;
}

function myFirst(col,n = 1) {
    const returnArray = [];
    for(let i = 0; i < n; ++i) {
        returnArray.push(col[(Object.keys(col))[i]]);
        if(n === 1) return col[(Object.keys(col))[0]];
    }
    return returnArray;
}

function myLast(col,n = 1) {
    const returnArray = [];
    for(let i = 0; i < n; ++i) {
        returnArray.push(col[(Object.keys(col))[Object.keys(col).length - n + i]]);
        if(n === 1) return col[(Object.keys(col))[Object.keys(col).length - 1]];
    }
    return returnArray;
}

function myKeys(obj) {
    const returnArray = [];
    for(const key in obj) {
        returnArray.push(key);
    }
    return returnArray;
}

function myValues(obj) {
    const returnArray = [];
    for(const key in obj) {
        returnArray.push(obj[key]);
    }
    return returnArray;
}

const tAr = [];
tAr[0] = 'zero';
tAr[5] = 'five';
tAr[1] = 'one';

const tOb = {}
tOb['zero'] = 0;
tOb['five'] = 5;
tOb['one'] = 1;

console.log(Object.keys(tAr),'\n',Object.keys(tOb));

/*
when 
*/