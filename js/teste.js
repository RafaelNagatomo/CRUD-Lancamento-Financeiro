
const data = []
data.push ({ 'id': data.length, 'Date': 'lDate.value', 'Description': 'lDescription.value', 'Type': 'lType.value', 'Category': 'lCategory.value', 'Value': 'lValue.value' })

data.push ({ 'id': data.length, 'Date': '20252', 'Description': 'agerger', 'Type': 'teste', 'Category': 'rvalue', 'Value': '20200' })

// id = 0
data.splice(0, 1)
// data[0].id = 2
console.log(data)