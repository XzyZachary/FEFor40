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

// const numIslands = (gird) => {
//     let count = 0;
//     let queue = [];

//     for (let i = 0; i < grid.length; i++) {
//         for (let j = 0; j < gird[0].length; j++) {
//             if(gird[i][j] === '1') {
//                 count++;
//                 gird[i][j] = '0'
//                 queue.push([i, j])
//                 turnZero(queue, grid)
//             }
//         }
//     }
//     return count;
// }

// function turnZero(queue, gird) {
//     const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]

//     while(queue.length) {
//         console.log(111, queue)
//         const cur = queue.shift();
//         console.log(333, cur)
//         for (const dir of dirs) {
//             const x = cur[0] + dir[0]
//             const y = cur[1] + dir[1]
//             if (x < 0 || x >= gird.length || y < 0 || y >= gird[0].length || gird[x][y] !== '1') {
//                 continue;
//             }

//             gird[x][y] = '0'

//             queue.push([x, y])
//         }
//     }
// }



class UnionFind {
    constructor(n) {
        this.count = n
        this.parent = new Array(n)
        this.size = new Array(n)

        for (let i = 0; i < n; i++) {
            this.parent[i] = i;
            this.size[i] = i;
        }
    }

    union(p, q) {
        let rootP = this.find(p);
        let rootQ = this.find(q);

        if (rootP === rootQ) return;

        if (this.size[rootP] > this.size[rootQ]) {
            this.parent[rootQ] = rootP;
            this.size[rootP] += this.size[rootQ];
        } else {
            this.parent[rootP] = rootQ;
            this.size[rootQ] += this.size[rootP];
        }
        this.count--;
    }

    isConnected(p, q) {
        return this.find(p) === this.find(q)
    }

    find(x) {
        while(this.parent[x] != x) {
            this.parent[x] = this.parent[this.parent[x]];
            x = this.parent[x];
        }
        return x;
    }

    getCount() {
        return this.count;
    }
}

var numIslands = function(grid) {
    let m = grid.length;
    if (m === 0) return 0;
    let n = grid[0].length;
    const dummy = -1;
    const dirs = [[1, 0], [0, 1]]

    const uf = new UnionFind(m * n)

    for (let x = 0; x < m; x++) {
        for (let y = 0; y < n; y++) {
            if (grid[x][y] === '0') {
                uf.union(n * x + y, dummy)
                console.log(111133, n * x + y, dummy)
            } else if (grid[x][y] === '1') {
                for(let d of dirs) {
                    let r = x + d[0]
                    let c = y + d[1]
                    if (r >= m || c >= n) continue;
                    if (grid[r][c] === '1') {
                        uf.union(n * x + y, n * r + c)
                    }
                }
            }
        }
    }
    console.log(33, uf)
    return uf.getCount();
}


var grid = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]
numIslands(grid)