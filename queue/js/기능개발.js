function solution(progresses, speeds) {
    const answer = [];
    let cnt = 0;

    while(progresses.length !== 0) {
        for (let i=0 ; i<progresses.length ; i++) {
            progresses[i] += speeds[i];
        }


        if (progresses[0] >= 100) {
            for (const work of [...progresses]) {
                if (work >= 100) {
                    ++cnt;
                    progresses.shift();
                    speeds.shift();
                } else {
                    break;
                }
            }
        }

        if (cnt > 0) {
            answer.push(cnt);
            cnt = 0;
        }
    }

    return answer;
}

const progresses = [93, 30, 55];
const speeds = [1,30,5];

console.log(solution(progresses, speeds));