const res = {
  value: 2,
  children: [
    { value: 6, children: [{ value: 1 }] },
    { value: 3, children: [{ value: 2 }, { value: 3 }, { value: 4 }] },
    { value: 5, children: [{ value: 7 }, { value: 8 }] },
  ],
};

// let num = res.value;

// var numForm = (data) => {
//     for (let i = 0; i < data.length; i++) {
//         console.log(333, data[i])
//         num += data[i].value
//         if (data[i].children && data[i].children.length > 0) {
//             numForm(data[i].children)
//         }
//     }
// }

// numForm(res.children)

// console.log(333, num)



const layerSum = (root) => {
    let result = [], index = 0;

    const level = (root, index) => {
        if (!root) return;
        if (!result[index]) result[index] = 0;

        result[index] += root.value;

        if (root.children) root.children.forEach(child => level(child, index + 1))
    }

    level(root, index)

    return result;
}

console.log(layerSum(res));