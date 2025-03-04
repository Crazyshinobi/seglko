import { createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
    name : "course",
    initialState : {
        selectedCourse : "BCA"
    },
    reducers : {
        setCourse : (state ,action)=>{
            state.selectedCourse = action.payload
        }
    }
})

export const {setCourse} =courseSlice.actions;
export default courseSlice.reducer