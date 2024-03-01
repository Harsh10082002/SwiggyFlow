
export const IMAGE_URL = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/";

export const SWIGGY_DATA_URL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.1990873&lng=79.94743249999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";


export const SWIGGY_DEETAILED_DATA_URL = (foodId) =>{
    return `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.1990873&lng=79.94743249999999&restaurantId=${foodId}`;
}