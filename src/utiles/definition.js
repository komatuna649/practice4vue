var this_year, today;
today = new Date();
this_year = today.getFullYear();

const yearList = []
const monthList = []
const dayList = []

const optionLoop = (start, end, list) => {
    for( let i = start; i <= end; i++)
        list.push(i)
}

optionLoop(1950, this_year, yearList);
optionLoop(1, 12, monthList);
optionLoop(1, 31, dayList);


export {yearList, monthList, dayList}
