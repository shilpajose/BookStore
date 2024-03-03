import { CommonApi } from "./CommonApi";
import { BASE_URL } from "./Base_url";

// add book Api
export const addBookAPI=async(book)=>{
    return await CommonApi("POST",`${BASE_URL}/books`,book)
}

// Get All Books API
export const getAllBooksAPI=async()=>{
    return await CommonApi("GET",`${BASE_URL}/books`,"")
}

// delete book Api
export const deleteBookAPI=async(id)=>{
    return await CommonApi("DELETE",`${BASE_URL}/books/${id}`,{})
}