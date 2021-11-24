async function start() {
    return await Promise.resolve('async is working')
}

// const unuse = 42

start().then(console.log)

class Util {
    static id = Date.now()
}

console.log('Util id: ', Util.id)

import('lodash').then(_ => {
    console.log('Lodash: ', _.random(0, 24, true))
})