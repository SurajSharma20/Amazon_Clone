export const initialState = {
    basket:[],
};

export const subTotalAmount = (basket)=>
basket?.reduce((amount , item ) => item.price + amount , 0);

export const reducer = (state , action) =>{
    console.log(action)
    switch(action.type) {
        case 'ADD_TO_BASKET':
            return{
                ...state,
                basket:[...state.basket , action.item]
            }
        
        case "REMOVE_FROM_BASKET":
               //it removes all the item whos intex are same
                // ...state,
                // basket: state.basket.filter(item=> item.id!=action.id)

                const index = state.basket.findIndex(
                    (basketItem) => basketItem.id === action.id
                );

                let newBasket = [...state.basket ];

                if(index >= 0 ){
                    newBasket.splice(index , 1)
                }else{
                   console.warn(`cannot remove product`)     
                }

                return{
                    ...state ,
                    basket: newBasket
                
                }
    }
} 