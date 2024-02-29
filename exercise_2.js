/*
Given a logarithm base X and two values A and B, return a sum of logratihms with the base X:
log
*/

function logs(x, a, b) {
    if ((x > 0 && x !== 1) && a > 0 && b > 0) {
        return Math.log(a) / Math.log(x) + Math.log(b) / Math.log(x);
    }
    return Infinity;
}