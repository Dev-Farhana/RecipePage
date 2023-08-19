function showMethod(){
    let para1 = `Toss the lamb in a bowl with the garlic, ginger and a large pinch of salt. Marinate in   the fridge overnight or for at least a couple of hours. `;
    let para2 = `Heat the oil in a casserole. Fry the lamb for 5-10 mins until starting to brown. Add the onion, cumin seeds, and cook for 5 mins until starting to soften. Stir in the curry paste, then cook for 1 min more. Scatter in the rice, then pour over the stock and bring to the boil. Meanwhile, heat oven to 180C/160C gas 4. `;
    let par3 = `Stir in the paneerand some seasoning. Cover the dish with a tight lid of foil, then put the lid. Cook in the oven for 20 mins, then leave to stand, covered, for 10 mins. Bring the dish to the table, remove the lid and foil, scatter with the coriander and chillies and serve with yogurt on the side. `;
    let method =  `
        ${para1}
        ${para2} 
        ${par3} ` ;
        
    let methodPara = document.getElementById('methodPara');
    methodPara.innerText = method;
}
