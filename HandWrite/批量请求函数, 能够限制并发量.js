function multiRequestLimitNum(reqArr, limitNum) {
    const reqLen = reqArr.length

    const resArr = new Array(reqLen)

    let i = 0

    return new Promise(async (res, rej) => {
        const maxNum = reqLen >= limitNum ? limitNum : reqLen

        while(i < maxNum) {
            reqFn()
        }

        async function reqFn() {
            const cur = i++

            const fn = reqArr[cur]

            const data = await fn().catch(err => err);

            resArr[cur] = data

            if (i === reqArr.length) res(resArr)
            else reqFn()
        }
    })
}