// functions.test.js
import { loginRequest } from "../problem/(lv.2)[2]로그인-확인-함수";

describe("loginRequest 함수", () => {
  it('id가 "admin"이고 pw가 "1234"인 경우 "ok"를 반환해야 합니다.', async () => {
    const result = await loginRequest("admin", "1234");
    expect(result).toBe("ok");
  });

  it('id가 "admin"이 아니면 "fail"을 반환해야 합니다.', async () => {
    const result = await loginRequest("user", "1234");
    expect(result).toBe("fail");
  });

  it('pw가 "1234"이 아니면 "fail"을 반환해야 합니다.', async () => {
    const result = await loginRequest("admin", "wrong");
    expect(result).toBe("fail");
  });

  it('id와 pw가 모두 틀리면 "fail"을 반환해야 합니다.', async () => {
    const result = await loginRequest("user", "wrong");
    expect(result).toBe("fail");
  });

  it('id가 빈 문자열이면 "fail"을 반환해야 합니다.', async () => {
    const result = await loginRequest("", "1234");
    expect(result).toBe("fail");
  });

  it('pw가 빈 문자열이면 "fail"을 반환해야 합니다.', async () => {
    const result = await loginRequest("admin", "");
    expect(result).toBe("fail");
  });

  it('id와 pw가 모두 빈 문자열이면 "fail"을 반환해야 합니다.', async () => {
    const result = await loginRequest("", "");
    expect(result).toBe("fail");
  });

  it('id가 대소문자를 구분하여 "admin"이 아니면 "fail"을 반환해야 합니다.', async () => {
    const result = await loginRequest("Admin", "1234");
    expect(result).toBe("fail");
  });

  it('pw가 공백을 포함하여 "1234"이 아니면 "fail"을 반환해야 합니다.', async () => {
    const result = await loginRequest("admin", "1234 ");
    expect(result).toBe("fail");
  });

  it('id와 pw에 특수 문자가 포함되어도 정확히 "admin"과 "1234"일 때만 "ok"를 반환해야 합니다.', async () => {
    const result1 = await loginRequest("admin!", "1234");
    expect(result1).toBe("fail");

    const result2 = await loginRequest("admin", "1234@");
    expect(result2).toBe("fail");

    const result3 = await loginRequest("admin!", "1234@");
    expect(result3).toBe("fail");
  });
});
