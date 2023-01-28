// 给定一个 row x col 的二维网格地图 grid ，其中：grid[i][j] = 1 表示陆地， grid[i][j] = 0 表示水域。

// 网格中的格子 水平和垂直 方向相连（对角线方向不相连）。整个网格被水完全包围，但其中恰好有一个岛屿（或者说，一个或多个表示陆地的格子相连组成的岛屿）。

// 岛屿中没有“湖”（“湖” 指水域在岛屿内部且不和岛屿周围的水相连）。格子是边长为 1 的正方形。网格为长方形，且宽度和高度均不超过 100 。计算这个岛屿的周长。

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/island-perimeter
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
// 输入：grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
// 输出：16
// 解释：它的周长是上面图片中的 16 个黄色的边

var islandPerimeter = function(grid) {

    const x = grid.length;
    const y = grid[0].length;
    let perimeter = 0
    for (let i = 0; i < x; i++) {
        for(let j = 0; j < y; j++) {
            if (grid[i][j] == '1') {
                const mesh = [[0, 1], [0, -1], [1, 0], [-1, 0]]
                let count = 4

                for(let k = 0; k < 4; k++) {
                    if (inArea(i + mesh[k][0], j  + mesh[k][1], x, y) && grid[i + mesh[k][0]][j + mesh[k][1]] === 1) {
                        count--;
                    }
                }
                perimeter += count;
            }
        }
    }
    return perimeter;
};

function inArea(x,y,xLimit,yLimit) {
    return x >= 0 && x < xLimit && y >= 0 && y < yLimit
}