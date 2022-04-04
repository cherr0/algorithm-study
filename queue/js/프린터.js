function solution(priorities, location) {
    let cnt = 0;
    let max = 0;
    let i = 0;
    
    while(true) {
        max = Math.max(...priorities);
        // 큐 현재 위치
        i = i % priorities.length;

        // 해당 위치값이 최대값인 경우 cnt 증가, 해당값 -1 변경
        if (priorities[i] === max) {
            cnt++;
            priorities[i] = -1;

            // 해당 위치값과 지정한 위치값이 맞으면 cnt 출력
            if (i === location) {
                return cnt;
            }
        }
        ++i;
    }
}

const priorities = [1,1,9,1,1,1];
const location = 0;

console.log(solution(priorities, location));