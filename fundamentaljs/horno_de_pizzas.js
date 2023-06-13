function pizzaOven(tipoCorteza, tipoSalsa, quesos, ingredientes) {
    var pizza = {
      tipoCorteza: tipoCorteza,
      tipoSalsa: tipoSalsa,
      quesos: quesos,
      ingredientes: ingredientes
    };
  
    return pizza;
  }
  
  var pizza1 = pizzaOven("estilo Chicago", "tradicional", ["mozzarella"], ["pepperoni", "salchicha"]);
  console.log(pizza1);
  
  var pizza2 = pizzaOven("lanzada a mano", "marinara", ["mozzarella", "feta"], ["champiñones", "aceitunas", "cebollas"]);
  console.log(pizza2);
  
  var pizza3 = pizzaOven("gluten-free", "pesto", ["mozzarella", "parmesano"], ["pollo", "espinacas", "tomates"]);
  console.log(pizza3);
  
  var pizza4 = pizzaOven("estilo NY", "barbacoa", ["cheddar", "gouda"], ["tocino", "jalapeños", "cebolla"]);
  console.log(pizza4);