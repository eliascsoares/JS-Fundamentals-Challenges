var topping = "mushrooms";

switch (topping) {
    case "pepperoni":
    case "sausage":
    case "bacon":
        console.log("These are important ingredients for my pizza.");
        break;
    case "olives":
    case "bell peppers":
        console.log("I don't mind having " + topping + " on my pizza.");
        break;
    case "pineapple":
    case "anchovies":
        console.log(topping + " should not be on a pizza.");
        break;
    default:
        console.log("I don't have a strong opinion about " + topping + " on pizza.");
}