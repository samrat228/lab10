let lab1 = [5, 5, 5, 5, 10, 10]
let lab2 = [5, 5, 5, 5, 5, 5, 10]
let lab3 = [5, 10, 10, 15]
let lab4_5 = [10, 5, 5, 5, 5, 5, 10, 10, 10, 10, 3]
let lab6 = [5, 5, 10, 5, 5, 10]
let lab8 = [5, 10, 10, 10, 5]
let lab = [lab1, lab2, lab3, lab4_5, lab6, lab8]
let quiz1 = 38

function get_sum(lab) {
    let fsum = 0;
    for (let i = 0; i < lab.length; i++) {
        fsum += lab[i];
    }
    return fsum;
}

let sum1 = get_sum(lab1);
let sum2 = get_sum(lab2);
let sum3 = get_sum(lab3);
let sum4_5 = get_sum(lab4_5);
let sum6 = get_sum(lab6);
let sum8 = get_sum(lab8);
let avg_lab = (sum1 + sum2 + sum3 + sum4_5 + sum6 + sum8) / 7;
let total_score = ((avg_lab * 0.6) + (quiz1 * 0.4)) * 2.5;


function main(lab) {
    const result = {
        lab1: [5, 5, 5, 5, 10, 10],
        lab2: [5, 5, 5, 5, 5, 5, 10],
        lab3: [5, 10, 10, 15],
        lab4_5: [10, 5, 5, 5, 5, 5, 10, 10, 10, 10, 3],
        lab6: [5, 5, 10, 5, 5, 10],
        lab8: [5, 10, 10, 10, 5],
        quiz1: 38,
        sums: [sum1, sum2, sum3, sum4_5, sum6, sum8],
        total_score: total_score,
    }
    return result;
}
let res = main(lab);
console.log(res)