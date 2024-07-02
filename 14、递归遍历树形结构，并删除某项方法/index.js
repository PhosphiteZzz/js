function filterTree(tree, predicate) {  
  // 如果没有树或树为空，直接返回  
  if (!tree || !tree.length) {  
      return null;  
  }  

  // 创建一个新数组来存放结果  
  let result = [];  

  // 遍历树中的每个节点  
  tree.forEach(node => {  
      // 创建一个新对象来存放当前节点及其可能的子节点  
      let filteredNode = { ...node }; // 浅拷贝当前节点  

      // 如果当前节点满足条件，则继续处理其子节点  
      if (predicate(node)) {  
          // 如果节点有子节点，则递归筛选子节点  
          if (node.children && node.children.length > 0) {  
              filteredNode.children = filterTree(node.children, predicate);  
              // 如果筛选后的子节点数组为空，则可以选择移除children属性（可选）  
              if (!filteredNode.children.length) {  
                  delete filteredNode.children;  
              }  
          }  
          // 将处理后的节点添加到结果数组中  
          result.push(filteredNode);  
      }  
      // 注意：这里我们没有处理不满足条件但子节点可能满足条件的情况，  
      // 如果你需要包含这种情况，逻辑将更复杂，因为你需要构建一个包含原始节点结构的新树。  
  });  

  // 如果只有一个根节点，你可能希望直接返回根节点对象而不是数组  
  // 这取决于你的具体需求和树的结构  
  // 如果确实只有一个元素，并且你想要返回对象而不是数组，可以这样做：  
  // if (result.length === 1) return result[0];  

  // 返回结果数组  
  return result;  
}  

// 注意：上述函数假设tree是一个节点数组。如果你的树是一个单一的对象（只有一个根节点），  
// 你需要稍微调整函数来直接处理这个对象而不是数组。  

// 示例树状数据（作为数组，但通常根节点可能是一个单独的对象）  
const tree = [  
  {  
      id: 1,  
      name: "Root",  
      children: [  
          {  
              id: 2,  
              name: "Child 1",  
              children: [  
                  {  
                      id: 4,  
                      name: "Grandchild 1",  
                      children: []  
                  },  
                  {  
                      id: 5,  
                      name: "Grandchild 2",  
                      children: []  
                  }  
              ]  
          },  
          {  
              id: 3,  
              name: "Child 2",  
              children: []  
          }  
      ]  
  }  
];  

// 筛选所有ID为偶数的节点及其子树  
const filteredTree = filterTree(tree, node => node.id % 2 === 0);  

console.log(filteredTree);  
// 注意：这将返回所有ID为偶数的节点及其子节点，但子节点可能不满足条件，因为它们是被满足条件的父节点包含的。  
// 如果你的需求是只保留完全满足条件的子树，你需要在predicate中考虑这一点，并可能需要在递归时更细致地处理子节点。