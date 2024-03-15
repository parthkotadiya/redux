export const addData = (data) => {
    return { type: "ADD", payload: data }
}

export const deleteData = (data) => {
    return { type: "DELETE", payload: data }
}

export const update = (item, index) => {
    return { type: "UPDATE", payload: { editRecord: item, editIndex: index } }
}
export const search = (data1,data2) => {
    return { type: "SEARCH", payload: {item:data1,index:data2}}
}

export const short = (data) => {
    console.log(data);
    return { type: 'SHORT', payload: data }
}