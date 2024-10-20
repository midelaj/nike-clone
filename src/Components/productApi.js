


export const fetchProductApi = async (id) => {
    try {
        const response = await fetch(
            `http://localhost:3000/product/${id}`
        )
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const {data} = await response.json();
        return data;
       
    } catch (error) {
        console.error('Error fetching error:', error);
        throw error;
    }
}


export const fetchProducts = async () => {
    try {
        const response = await fetch('http://localhost:3000/product/');
        if (!response.ok) throw new Error(`HTTP errro! status; ${response.status}`);
        const {data} = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching error:', error);
        throw error
    }
}