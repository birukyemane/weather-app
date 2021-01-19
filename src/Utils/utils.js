
export const minTemp = tempratures => {
    tempratures.sort( (a, b) => a.value - b.value);
    return tempratures[0];
}

export const maxTemp = tempratures => {
    tempratures.sort( (a, b) => b.value - a.value);
    return tempratures[0];
}

export const currentTemp = tempratures => {
    tempratures.sort( (a, b) => b.date - a.date);
    return tempratures[0];
}

