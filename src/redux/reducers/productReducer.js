import { featuredProductData } from "../../components/Featured/featuredProductData";

const INITIAL_STATE = {
    featuredProduct: [...featuredProductData]
}


const productReducer = (state = INITIAL_STATE, action) => {
    const {type, payload} = action;

    switch(type) {
        default: 
         return {
             ...state
         }
    }
}


export default productReducer;
