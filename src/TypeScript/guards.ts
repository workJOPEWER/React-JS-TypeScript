//вспомогательные function которые позволяют работать с типами

function strip(x: string | number) {
    if (typeof x === 'number') {
        return x.toFixed(2)
    }
    return x.trim()
}

class MyResponse {
    header = 'response header'
    result = 'response result'
}

class MyError {
    header = 'error header'
    message = 'error message'
}

//instanceof принадлежность объекта к классу
//функц обрабатывает и res и ошибку

function handle(res: MyResponse | MyError) {
    if (res instanceof MyResponse) {
        return {
            info: res.header + res.result
        }
    } else {
        return {
            info: res.header + res.message
        }
    }
}

//

type AlertType = 'success' | 'danger' | 'warning'

function setAlertType(type: AlertType) {
    // ....
}

setAlertType('success')
setAlertType('warning')

// setAlertType('default')