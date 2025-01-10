/**
 * Q. timeout 함수
 *
 * - timeOut 함수를 작성하세요.
 * - timeOut 함수는 Promise를 반환합니다.
 * - 첫 번째 인자는 Promise이고, 두 번째 인자는 시간(ms)입니다.
 * - timeOut 함수는 두 번째 인자로 받은 시간(ms) 이후에도 첫 번째 인자로 받은 Promise가 처리되지 않으면, "timeout"을 reject하는 Promise를 반환합니다.
 *
 * @param {Promise<any>} promise - Promise (예: 데이터 로딩)
 * @param {number} ms - 시간 (예: 1000ms)
 * @returns {Promise<any>} - 먼저 완료된 Promise의 결과를 반환하는 Promise
 */

async function timeOut(promise, ms) {}

// export를 수정하지 마세요.
export { timeOut };
