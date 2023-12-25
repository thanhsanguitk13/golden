import { getUserId} from "../api/utils"
import { useLocalStorage } from "usehooks-ts";

export function AddToCart({data}){
    const userId = getUserId();
    const [cartItems,setCartItems] = useLocalStorage('cart',[])
    const curIndex = cartItems.findIndex( item => item.id === data.id) ;

    function addItem (){
        if( curIndex == -1){
            setCartItems([...cartItems,{...data, quantity : 1} ])
            mutate();        
        }
    }
    return (   
    <button className="shopItemButton relative" onClick={addItem} 
    style={{cursor: curIndex == -1 ? 'pointer' : 'default', width: curIndex == -1 ? 'auto' : '50px'}}>
        {
           curIndex == -1 ? <p className="uppercase">add to cart</p> : <img src="/check.png" className="checkTick"/>
        }
    </button>
    )
}