function whatCanIDoLegally(age) {
    // if it's under 18 can't drive or drink
if (age < 18){
    return "you can't do anything."

    // if it's between 18 and 20 inclusive, they can drive
} else if (age >= && age <= 20){
    return "You can drive but don't drink."

    // if it's at least 21, they can do both
} else if (age >= 21){
    return "You can do either but don't do both at same time."
}
}

module.exports = whatCanIDoLegally