// You are given an dates of dates in the format Dec 11 and a monthin the format Dec as arguments.
//  Each date represents a video that was uploaded on that day. Return the number of uploads for a given month.
function uploadCount(dates, month) {
    let result = 0;
    for (let i = 0; i < dates.length; i++) {
        const date = dates[i];
        if (date.startsWith(month)) {
            result++;
        }
    }
    return result;
}

console.log(uploadCount(["Sept 22", "Sept 21", "Oct 15"], "Sept")); // Output: 2
