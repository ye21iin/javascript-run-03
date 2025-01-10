/**
 * Q. parallelRequests 함수
 *
 * 두 개의 Promise를 병렬로 실행하고, 모든 결과를 배열로 반환하는 `parallelRequests` 함수를 작성하세요.
 *
 * @param {Promise<any>} promise1 - 첫 번째 Promise
 * @param {Promise<any>} promise2 - 두 번째 Promise
 * @returns {Promise<[any, any]>} - 두 Promise의 결과를 담은 배열을 반환하는 Promise
 *
 * @example
 * const promiseA = new Promise((resolve) => setTimeout(() => resolve('A'), 100));
 * const promiseB = new Promise((resolve) => setTimeout(() => resolve('B'), 50));
 *
 * parallelRequests(promiseA, promiseB).then((results) => {
 *   console.log(results); // ['A', 'B']
 * });
 */
async function parallelRequests(promise1, promise2) {
    //promise.all
}

// export를 수정하지 마세요.
export { parallelRequests };
