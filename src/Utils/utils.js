import moment from 'moment'

export const minTemp = temperatures => {
    if(temperatures.length){
        temperatures.sort( (a, b) => a.value - b.value);
         return temperatures[0];
    }
    return 'NULL';
}

export const maxTemp = temperatures => {
    if(temperatures.length){
        temperatures.sort( (a, b) => b.value - a.value);
        return temperatures[0];
    }
    return 'NULL';
}

export const currentTemp = temperatures => {
    if(temperatures.length){
        temperatures.sort( (a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        return temperatures[0];
    }
    return 'NULL';
}

export const filterTamperatures = temperatures => {
    return temperatures.filter((temperature) => {
        const result = moment().subtract(24, 'hours')
        return moment(temperature.createdAt).isAfter(result);
    })
}
