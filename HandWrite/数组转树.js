// 数组转树, 写完后问如果要在树中新增节点或者删除节点, 函数应该怎么扩展

const arr = [
  {
    id: 2,
    name: "部门B",
    parentId: 0,
  },
  {
    id: 3,
    name: "部门C",
    parentId: 1,
  },
  {
    id: 1,
    name: "部门A",
    parentId: 2,
  },
  {
    id: 4,
    name: "部门D",
    parentId: 1,
  },
  {
    id: 5,
    name: "部门E",
    parentId: 2,
  },
  {
    id: 6,
    name: "部门F",
    parentId: 3,
  },
  {
    id: 7,
    name: "部门G",
    parentId: 2,
  },
  {
    id: 8,
    name: "部门H",
    parentId: 4,
  },
];

// function treeData(data, id, parentId, childName) {
//     let cloneData = JSON.parse(JSON.stringify(data))

//     return cloneData.filter(father =>  {
//         let newArr = cloneData.filter(child => {
//             return father[id] == child[parentId]
//         })

//         father[childName] =  newArr
//         return father[parentId] == 0
//     })
// }
// let msg = treeData(arr, 'id', 'parentId', 'children')
// console.log(33, msg)

function get_tree(arr) {
  const list = [];
  const hashmap = {};

  for (let i = 0; i < arr.length; i++) {
    // 存储每个id下的子元素
    let pid = arr[i].pid
    let id = arr[i].id


    if (!hashmap[id]) {
      hashmap[id] = { children: [] }
    }

    hashmap[id] = { ...arr[i], children: hashmap[id].children }

    if (pid === 0) {
      list.push(hashmap[id]);
    } else {
      if (!hashmap[pid]) {
        hashmap[pid] = {
          children: []
        }
      }

      hashmap[pid].children.push(hashmap[id])
    }
  }
  return list;
}


let msg = get_tree(arr, 'id', 'parentId', 'children')
console.log(33, msg)
