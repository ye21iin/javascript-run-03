import { expect, jest, describe, it } from "@jest/globals";
import { returnHello } from "../problem/(lv.1)[1]Promise-객체-만들기";

describe("returnHello 함수", () => {
  it('Promise가 "Hello"를 resolve해야 합니다.', async () => {
    const result = await returnHello();
    expect(result).toBe("Hello");
  });

  it("반환된 값이 문자열 타입이어야 합니다.", async () => {
    const result = await returnHello();
    expect(typeof result).toBe("string");
  });

  it('Promise가 "Hello" 외의 값을 resolve하지 않아야 합니다.', async () => {
    const result = await returnHello();
    expect(result).not.toBe("Hi");
    expect(result).not.toBe("hello");
    expect(result).not.toBe("");
  });

  it("Promise가 비동기로 동작하는지 확인해야 합니다.", async () => {
    const mockFn = jest.fn();
    returnHello().then(mockFn);
    expect(mockFn).not.toHaveBeenCalled();
    await Promise.resolve();
    expect(mockFn).toHaveBeenCalled();
  });

  it("returnHello 함수가 Promise를 반환해야 합니다.", () => {
    const result = returnHello();
    expect(result).toBeInstanceOf(Promise);
  });

  it("Promise가 reject되지 않아야 합니다.", async () => {
    await expect(returnHello()).resolves.toBe("Hello");
  });

  it('여러 번 호출해도 항상 "Hello"를 반환해야 합니다.', async () => {
    const result1 = await returnHello();
    const result2 = await returnHello();
    const result3 = await returnHello();
    expect(result1).toBe("Hello");
    expect(result2).toBe("Hello");
    expect(result3).toBe("Hello");
  });
});
