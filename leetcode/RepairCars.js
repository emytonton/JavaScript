/**
 * @param {number[]} ranks
 * @param {number} cars
 * @return {number}
 */
var repairCars = function(ranks, cars) {
    let left = 1;
    let right = Math.min(...ranks) * cars * cars; 
  
   
    function canRepairInTime(t) {
        let totalCars = 0;
        for (let rank of ranks) {
            totalCars += Math.floor(Math.sqrt(t / rank)); 
            if (totalCars >= cars) return true; 
        }
        return false;
    }

    
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (canRepairInTime(mid)) {
            right = mid; 
        } else {
            left = mid + 1; 
        }
    }

    return left; 
};
