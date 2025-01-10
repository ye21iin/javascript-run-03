/**
 * Q. 로그인 확인 함수
 *
 * id와 pw를 입력받아, id가 "admin"이고 pw가 "1234"인 경우 "ok"를 반환하고, 그렇지 않은 경우 "fail"을 반환하는 함수를 작성하세요.
 * 단, Promise 사용하여 비동기로 작성하세요.
 *
 * @param {string} id
 * @param {string} pw
 * @returns {Promise<string>} "ok" or "fail"
 */

// TODO: loginRequest 함수를 작성하세요.
async function loginRequest(id, pw) {
  try {
    const result = await new Promise((resolve, reject) => {
      id === "admin" && pw === "1234" ? resolve("ok") : resolve("fail");
    });
    return result;
  } catch (err) {
    console.err(err);
  }
}

// export를 수정하지 마세요.
export { loginRequest };
