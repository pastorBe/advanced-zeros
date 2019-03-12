module.exports = function getZerosCount(number, base) {
    // your implementation
    let mul = findMultipliersOfBase(base);
    let answer = 0;
    for (let p in mul) {
        let zeroes = Math.floor(findPowerOfP(number, p)/mul[p]);
        if (answer == 0) {
            answer = zeroes;
        } else if (answer > zeroes){
            answer = zeroes;
        }
    }

    return answer;
}

function findPowerOfP(N, p)
{
    let count = 0;
    let r = p;
    while (r <= N) {
        let res = Math.floor(N/r);
        count += res;
        r = r * p;
    }
    return count;
}

function findMultipliersOfBase(Base)
{
    let f = {};
    for (let i = 2; Base != 1; i++) {
        if (Base % i == 0) {
            let count = 0;
            while (Base % i == 0) {
                Base = Base / i;
                count++;
            }
            f[i] = count;
        }
    }
    return f;
}