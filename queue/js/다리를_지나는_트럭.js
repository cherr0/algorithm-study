function solution(bridge_length, weight, truck_weights) {
    let cnt = 1;
    const trucks = truck_weights.map(v => {
        return {
            weight: v,
            move: 0,
        }
    });

    const bridge = [];
    
    while(trucks.length > 0 || bridge.length > 0) {
        // 1. 다리에 들어올 경우
        if (trucks.length > 0) {
            if (sum(bridge) + trucks[0].weight <= weight && bridge_length >= bridge.length) {
                bridge.push(trucks.shift());
            }
        }

        // 2. bridge에 데이터가 있을 경우
        if (bridge.length > 0) {
            bridge.forEach(v => {
                v.move += 1;
            });
            if (bridge[0].move >= bridge_length) {
                bridge.shift();
            }
            ++cnt;
        }
        
        if (isEmpty(trucks) && isEmpty(bridge)) {
            break;
        }
    }


    return cnt;
}

function sum(array) {
    return array.reduce((acc, i) => i.weight + acc, 0);
}

function isEmpty(array) {
    return array.length === 0;
}


// const bridge_length = 2;
// const weight = 10;
// const truck_weights = [7,4,5,6];
// const bridge_length = 100;
// const weight = 100;
// const truck_weights = [10,10,10,10,10,10,10,10,10,10];
const bridge_length = 100;
const weight = 100;
const truck_weights = [10];

console.log(solution(bridge_length,weight,truck_weights));