function merge(array) {
    
    const half = array.length / 2;

    if (array.length <= 1) {
        return array;
    }
    const leftPart = array.slice(0, half);
    const rightPart = array.slice(half);
    const left = merge(leftPart);
    const right = merge(rightPart);
    let arr = [];
    let i = 0, j = 0;
    while (i < left.length && j < right.length) {
        
        if (left[i] < right[j]) {                                 
            arr = [...arr, left[i]];   
            i++;            
        } else {
            arr = [...arr, right[j]];  
            j++;
        }
    }
    const leftResult = left[i] ? [left[i]]  : [];
    const rightResult = right[j] ? [right[j]]  : [];
    
    return [...arr, ...leftResult, ...rightResult];
}

//console.log(merge([1, 4, 25, 68, 96, 63, 12, 14, 15]))

function BynarySearch(array, number) {
    let start = 0;

    let end = array.length - 1;
    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (array[middle] === number) {
            return middle;
        } else if (array[middle] > number) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }

    return false;
}

const arrayForSearch = [1, 4, 8, 12, 16, 145, 478, 985, 10458]

//console.log(BynarySearch(arrayForSearch, 478))




const tree = {
    root() {
        return {
            data: 32,
        }
    },

    counter: 1,

    add(n) {
        console.log('logging', this)

        let num = Number(this.counter + n);
        num.__proto__.add =  this.add.bind(this);
        this.counter = num;
        return num;
    }
}

console.log(tree.add(4).add(6).add(2).add(1))
