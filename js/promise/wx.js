class WX {

    static PENDING = 'pending';
    static FULFILLED = 'fulfilled';
    static REJECTED = 'rejected';

    // 执行者
    constructor(executor) {
        this.status = WX.PENDING // 准备状态
        this.value = null;
        this.callbacks = [];
        // 人为的绑定当前this
        try {
            executor(this.resolve.bind(this), this.reject.bind(this));
        } catch (error) {
            this.reject(error);
        }
    }

    resolve(value) {
        // console.log(this); // undefined

        if (this.status == WX.PENDING) {
            this.status = WX.FULFILLED;
            this.value = value;

            // 变成异步任务
            setTimeout(() => {
                this.callbacks.map(callback => {
                    callback.onFulFilled(value);
                });
            });
        }
    }

    reject(reason) {
        if (this.status == WX.PENDING) {
            this.status = WX.REJECTED;
            this.value = reason;
            setTimeout(() => {
                this.callbacks.map(callback => {
                    callback.onRejected(reason);
                });
            });
        }
    }

    then(onFulFilled, onRejected) {

        if (typeof onFulFilled != 'function') {
            onFulFilled = () => {

            }
        }

        if (typeof onRejected != 'function') {
            onFulFilled = () => {

            }
        }

        console.log(this);

        if (this.status == WX.PENDING) {
            console.log("走到这里");
            this.callbacks.push({
                // 对象属性
                onFulFilled: (value) => {
                    try {
                        // 执行的函数
                        onFulFilled(value);
                    } catch (error) {
                        onRejected(error);
                    }
                },
                onRejected: (value) => {
                    try {
                        onRejected(value);
                    } catch (error) {
                        onRejected(error);
                    }
                }
            })
        }

        if (this.status == WX.FULFILLED) {
            setTimeout(() => {
                try {
                    onFulFilled(this.value);
                } catch (error) {
                    onRejected(error);
                }
            });
        }

        if (this.status == WX.REJECTED) {
            // 让任务不让他立即执行，放到队列里
            setTimeout(() => {
                try {
                    onRejected(this.value);
                } catch (error) {
                    onRejected(error);
                }
            });
        }
    }
}

// 原生的promise
// new Promise((resolve, reject) => {
//     resolve('解决');
//     reject('拒绝');
// }).then(value => {

// }, reason => {
    // console.log(reason);
// });