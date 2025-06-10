// Find majority element using Moore's Voting Algorithm
// Example: arr = [2,2,1,1,1,2,2,1,1,5,1] => Output: 2 (only if it's truly majority)

let findTheMajorityElem = (arr) => {
    // Phase 1: Find a candidate
    let count = 1;
    let candidate = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === candidate) {
            count++;
        } else {
            count--;
            if (count === 0) {
                candidate = arr[i];
                count = 1;
            }
        }
    }

    // Phase 2: Verify if the candidate is majority
    count = 0;
    for (let num of arr) {
        if (num === candidate) {
            count++;
        }
    }

    if (count > Math.floor(arr.length / 2)) {
        return `✅ Majority element = ${candidate}, occurs ${count} times.`;
    } else {
        return `❌ No majority element. Candidate ${candidate} appears only ${count} times.`;
    }
};

console.log(findTheMajorityElem([3,2,3]));
