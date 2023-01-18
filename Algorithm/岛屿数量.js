// 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
// 岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。
// 此外，你可以假设该网格的四条边均被水包围。
// 链接：https://leetcode.cn/problems/number-of-islands

// 输入：grid = [
//     ["1","1","1","1","0"],
//     ["1","1","0","1","0"],
//     ["1","1","0","0","0"],
//     ["0","0","0","0","0"]
//   ]
// 输出：1

// dfs深度优先遍历

// var numIslands = function (grid) {
//     let count = 0;

//     for (let i = 0; i < grid.length; i++) {
//         for (let j = 0; j < grid[0].length; j++) {
//             if (grid[i][j] === '1') {
//                 count++;
//                 turnZero(i, j, grid)
//             }
//         }
//     }
// };

// function turnZero(i, j, grid) {
//     if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === '0') return;

//     grid[i][j] = '0'

//     turnZero(i, j + 1, grid)
//     turnZero(i, j - 1, grid)
//     turnZero(i + 1, j, grid)
//     turnZero(i - 1, j, grid)
// }


// bfs广度优先遍历

const numIslands = (gird) => {
    let count = 0;
    let queue = [];

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < gird[0].length; j++) {
            if(gird[i][j] === '1') {
                count++;
                gird[i][j] = '0'
                queue.push([i, j])
                turnZero(queue, grid)
            }
        }
    }
    return count;
}

function turnZero(queue, gird) {
    const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]

    while(queue.length) {
        console.log(111, queue)
        const cur = queue.shift();
        console.log(333, cur)
        for (const dir of dirs) {
            const x = cur[0] + dir[0]
            const y = cur[1] + dir[1]
            if (x < 0 || x >= gird.length || y < 0 || y >= gird[0].length || gird[x][y] !== '1') {
                continue;
            }

            gird[x][y] = '0'

            queue.push([x, y])
        }
    }
}

var grid = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]
numIslands(grid)