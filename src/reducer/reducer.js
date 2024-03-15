const middel = JSON.parse(localStorage.getItem("data0")) || []

const formReducer = (state = middel, action) => {
    switch (action.type) {
        case "ADD": {
            localStorage.setItem("data0", JSON.stringify([...state, action.payload]))
            return [...state, action.payload]
        }
            break;
        case "DELETE": {
            const deleteData = state?.filter((item, index) => index !== action.payload)
            localStorage.setItem("data0", JSON.stringify(deleteData))
            return deleteData;

        }
            break;
        case "UPDATE": {
            const update = state?.map((item, index) => {
                if (index === action.payload.editIndex) {
                    return action.payload.editRecord
                }
                return item
            })
            localStorage.setItem("data0", JSON.stringify(update))
            return update

        }
        case "SEARCH": {
            if (action.payload.index == "fname") {
                const searchresult = state?.filter((item) => { return item.fname.toLocaleLowerCase().includes(action.payload.item.toLocaleLowerCase()) })
                console.log(searchresult);
                return searchresult;

            }
            else {
                const searchresult = state?.filter((item) => { return item.age.includes(action.payload.item) })
                return searchresult;

            }

        }
        case "SHORT": {
            if (action.payload === "age") {
                return [...state?.sort((a, b) =>

                    (a[action.payload] - b[action.payload])
                )]


            }


            else { return [...state?.sort((a, b) => (a[action.payload] > b[action.payload] ? 1 : -1))] }


        }
            break;
        default: {
            return state || []
        }
    }

}
export { formReducer };