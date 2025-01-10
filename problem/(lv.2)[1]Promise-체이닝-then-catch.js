/**
 * Q. Promise-체이닝-then-catch
 *
 * - primary()를 호출하여 resolve되면 해당 결과값을 반환합니다.
 * - primary()가 reject되면 fallback()을 호출하여 resolve된 결과값을 반환합니다.
 *
 * @param {() => Promise<any>} primary - 주된 비동기 작업을 수행하는 함수
 * @param {() => Promise<any>} fallback - primary 실패 시 호출할 대체 함수
 * @returns {Promise<any>} - primary 혹은 fallback의 결과를 담은 Promise
 */

//프로미스 호출 - .then .catch ~~ 콜백
async function getDataWithFallback(primary, fallback) {
  try {
  } catch (error) {
    fallback();
  }
}

// export를 수정하지 마세요.
export { getDataWithFallback };
