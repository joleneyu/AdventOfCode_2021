const fishTimer = [4,1,1,4,1,2,1,4,1,3,4,4,1,5,5,1,3,1,1,1,4,4,3,1,5,3,1,2,5,1,1,5,1,1,4,1,1,1,1,2,1,5,3,4,4,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,5,1,1,1,4,1,2,3,5,1,2,2,4,1,4,4,4,1,2,5,1,2,1,1,1,1,1,1,4,1,1,4,3,4,2,1,3,1,1,1,3,5,5,4,3,4,1,5,1,1,1,2,2,1,3,1,2,4,1,1,3,3,1,3,3,1,1,3,1,5,1,1,3,1,1,1,5,4,1,1,1,1,4,1,1,3,5,4,3,1,1,5,4,1,1,2,5,4,2,1,4,1,1,1,1,3,1,1,1,1,4,1,1,1,1,2,4,1,1,1,1,3,1,1,5,1,1,1,1,1,1,4,2,1,3,1,1,1,2,4,2,3,1,4,1,2,1,4,2,1,4,4,1,5,1,1,4,4,1,2,2,1,1,1,1,1,1,1,1,1,1,1,4,5,4,1,3,1,3,1,1,1,5,3,5,5,2,2,1,4,1,4,2,1,4,1,2,1,1,2,1,1,5,4,2,1,1,1,2,4,1,1,1,1,2,1,1,5,1,1,2,2,5,1,1,1,1,1,2,4,2,3,1,2,1,5,4,5,1,4]

const sample_fishTimer = [3,4,3,1,2]

function CalculateFish(initfish, days) {
    // function returnNewFish(element) {
    //     if(element !== 0) {
    //         element -= 1
    //         return element
    //     }
    //     else {
    //         element = 6
    //         return element
    //     };
    // }
    function AddNewFish(arr, oldarr) {
        for(let i=0; i<oldarr.length; i++) {
            if(oldarr[i] !== 0) {
                arr[i] = oldarr[i]-1
            }
            else {
                arr[i] = 6
                arr.push(9)
            }
        }
        return arr
    }

    let newFishTimer = []
    let tempList = AddNewFish(newFishTimer, initfish)
    for(let d=1; d<days; d++) {
        // console.log(tempList)
        newFishTimer = AddNewFish(newFishTimer, tempList)
        tempList = newFishTimer
        // console.log(newFishTimer)
    }
    console.log(newFishTimer, newFishTimer.length)
}

// CalculateFish(sample_fishTimer, 80)

CalculateFish(fishTimer, 80)