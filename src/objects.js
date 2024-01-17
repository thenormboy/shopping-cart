const product = (ID, name, quantity) => {
    const getID = () => ID;
    const getName = () => name;
    const getQuantity = () => quantity;

    const setQuantity = (newQuantity) => {
        quantity = newQuantity
    }

    return {
        getID,
        getName,
        getQuantity,
        setQuantity
    }
}

export {
    product
}