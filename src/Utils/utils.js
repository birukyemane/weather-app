
export const minTemp = tempratures => {
    if(tempratures.length){
        tempratures.sort( (a, b) => a.value - b.value);
         return tempratures[0];
    }
    return 'NULL';
}

export const maxTemp = tempratures => {
    if(tempratures.length){
        tempratures.sort( (a, b) => b.value - a.value);
        return tempratures[0];
    }
    return 'NULL';
}

export const currentTemp = tempratures => {
    if(tempratures.length){
        tempratures.sort( (a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        return tempratures[0];
    }
    return 'NULL';
}
