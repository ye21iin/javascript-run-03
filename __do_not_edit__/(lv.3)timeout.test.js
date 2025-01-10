import { timeOut } from "../problem/(lv.3)timeout";
import {
  describe,
  it,
  expect,
  jest,
  beforeEach,
  afterEach,
} from "@jest/globals";

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.useRealTimers();
});

describe("timeOut 함수", () => {
  it("Promise가 지정된 시간 내에 해결되면, 해당 결과를 반환한다.", async () => {
    const promise = new Promise((resolve) =>
      setTimeout(() => resolve("성공"), 100)
    );
    const timeoutPromise = timeOut(promise, 200);

    // 100ms 경과시키기
    jest.advanceTimersByTime(100);

    const result = await timeoutPromise;
    expect(result).toBe("성공");
  });

  it("Promise가 지정된 시간 내에 거부되면, 해당 에러를 던진다.", async () => {
    const error = new Error("원래 에러");
    const promise = new Promise((_, reject) =>
      setTimeout(() => reject(error), 100)
    );
    const timeoutPromise = timeOut(promise, 200);

    // 100ms 경과시키기
    jest.advanceTimersByTime(100);

    await expect(timeoutPromise).rejects.toThrow("원래 에러");
  });

  it('Promise가 지정된 시간 내에 해결되지 않으면, "timeout" 에러를 던진다.', async () => {
    const promise = new Promise((resolve) =>
      setTimeout(() => resolve("늦게 성공"), 300)
    );
    const timeoutPromise = timeOut(promise, 200);

    // 200ms 경과시키기
    jest.advanceTimersByTime(200);

    await expect(timeoutPromise).rejects.toThrow("timeout");
  });

  it("Promise가 지정된 시간 내에 이미 해결된 경우, 즉시 결과를 반환한다.", async () => {
    const promise = Promise.resolve("즉시 성공");
    const timeoutPromise = timeOut(promise, 200);

    const result = await timeoutPromise;
    expect(result).toBe("즉시 성공");
  });

  it("Promise가 지정된 시간 내에 이미 거부된 경우, 즉시 에러를 던진다.", async () => {
    const error = new Error("즉시 실패");
    const promise = Promise.reject(error);
    const timeoutPromise = timeOut(promise, 200);

    await expect(timeoutPromise).rejects.toThrow("즉시 실패");
  });

  it('두 번째 인자인 시간이 0인 경우, 항상 "timeout"을 거부한다.', async () => {
    const promise = new Promise((resolve) =>
      setTimeout(() => resolve("성공"), 100)
    );
    const timeoutPromise = timeOut(promise, 0);

    jest.advanceTimersByTime(0);

    await expect(timeoutPromise).rejects.toThrow("timeout");
  });

  it("Promise가 해결되기 직전에 타임아웃이 발생하지 않는지 확인한다.", async () => {
    const promise = new Promise((resolve) =>
      setTimeout(() => resolve("근접 성공"), 200)
    );
    const timeoutPromise = timeOut(promise, 200);

    jest.advanceTimersByTime(200);

    const result = await timeoutPromise;
    expect(result).toBe("근접 성공");
  });

  it("Promise가 거부되기 직전에 타임아웃이 발생하지 않는지 확인한다.", async () => {
    const error = new Error("근접 실패");
    const promise = new Promise((_, reject) =>
      setTimeout(() => reject(error), 200)
    );
    const timeoutPromise = timeOut(promise, 200);

    jest.advanceTimersByTime(200);

    await expect(timeoutPromise).rejects.toThrow("근접 실패");
  });

  it("타임아웃이 발생했을 때, 타이머가 제대로 클리어되는지 확인한다.", async () => {
    const promise = new Promise((resolve) =>
      setTimeout(() => resolve("성공"), 100)
    );
    const timeoutPromise = timeOut(promise, 200);

    jest.advanceTimersByTime(150);

    await Promise.resolve();

    await expect(timeoutPromise).resolves.toBe("성공");
  });
});
