export const trends = {
    trendDirection (array) {
        if (array.length >= 3) {
            let trendDirection = "fa-arrow-right-arrow-left";
            if ((array[array.length - 1] < array[array.length - 2]) && (array[array.length - 2] < array[array.length - 3])) {
                trendDirection = "fa-arrow-down-short-wide";
            } else if ((array[array.length - 1] > array[array.length - 2]) && (array[array.length - 2] > array[array.length - 3])) {
                trendDirection = "fa-arrow-up-wide-short";
            }
          return trendDirection;
        }
    }
};