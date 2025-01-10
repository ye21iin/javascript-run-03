import { jest } from "@jest/globals";
import { delay } from "../problem/(lv.2)[2]delay";

describe("delay 함수", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('지정된 시간(ms) 후에 "done"을 resolve해야 합니다.', async () => {
    const promise = delay(1000);

    jest.advanceTimersByTime(1000);

    await expect(promise).resolves.toBe("done");
  });

  it("비동기로 동작해야 합니다.", async () => {
    const mockFn = jest.fn();
    delay(1000).then(mockFn);
    expect(mockFn).not.toHaveBeenCalled();

    await jest.runAllTimersAsync();
    expect(mockFn).toHaveBeenCalled();
  });

  it('0ms를 전달하면 즉시 "done"을 resolve해야 합니다.', async () => {
    const promise = delay(0);
    jest.advanceTimersByTime(0);
    await expect(promise).resolves.toBe("done");
  });

  it('음수 시간도 결국 "done"을 resolve해야 합니다.', async () => {
    const promise = delay(-100);
    jest.advanceTimersByTime(0);
    await expect(promise).resolves.toBe("done");
  });

  it('여러 번 호출해도 각각 "done"을 resolve해야 합니다.', async () => {
    const promise1 = delay(1000);
    const promise2 = delay(2000);

    jest.advanceTimersByTime(2000);

    await expect(promise1).resolves.toBe("done");
    await expect(promise2).resolves.toBe("done");
  });
});
