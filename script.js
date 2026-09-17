const container = document.querySelector("#container");
const restBtn = document.querySelector("#reset-btn");

//封装生成网格的函数，传入sideCount（单边格子数）
function createGrid(sideCount) {
    //1. 清空现有的网格内容
    container.innerHTML = "";
    //2.计算新格子的百分比宽高
    const squareSize = 100 / sideCount;
    //3.计算总格子数：边长的平方
    const totalSquares = sideCount * sideCount;



//使用for循环在container里面生成小格子
for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement("div");
    square.classList.add("grid-square");

    //动态调整每个小格子的宽高百分比
    square.style.width = `${squareSize}%`;
    square.style.height = `${squareSize}%`;

    //绑定画笔悬停效果
    square.addEventListener("mouseenter", () => {
        let currentOpacity = Number(square.dataset.opacity) || 0;
        if (currentOpacity < 1) {
            if (currentOpacity === 0) {
                const h = Math.floor(Math.random() * 360);
                const s = Math.floor(Math.random() * 15) + 15;
                const l = Math.floor(Math.random() * 15) + 65;
                square.style.backgroundColor = `hsl(${h}, ${s}%, ${l}%)`;
            }

            currentOpacity += 0.1;
            square.dataset.opacity = currentOpacity;
            square.style.opacity = currentOpacity;
        }
    });
    //将小格子附到container parent 里
    container.appendChild(square);
    }
}
//默认初始化16 * 16的画板
createGrid(16);

restBtn.addEventListener("click", () => {
    let userInput = prompt("请输入每边的格子数量(建议1-100):");
    let num = parseInt(userInput);

    if(num && num > 0 && num <= 100) {
        createGrid(num);
    } else {
        alert("请输入1到100之间的有效数字!");
    }
});


