import { parallelRequests } from "../problem/(lv.2)[2]parallelRequests";

describe("parallelRequests", () => {
  it("두 개의 성공 Promise를 병렬로 처리하여 결과 배열을 반환한다.", async () => {
    const promise1 = Promise.resolve("결과1");
    const promise2 = Promise.resolve("결과2");

    const results = await parallelRequests(promise1, promise2);

    expect(results).toEqual(["결과1", "결과2"]);
  });

  it("두 Promise 중 하나가 실패하면, 에러를 던진다.", async () => {
    const promise1 = Promise.resolve("성공");
    const promise2 = Promise.reject(new Error("실패"));

    await expect(parallelRequests(promise1, promise2)).rejects.toThrow("실패");
  });

  it("동시에 실행되는 Promise들의 결과를 정상적으로 배열로 반환한다.", async () => {
    const promise1 = new Promise((resolve) =>
      setTimeout(() => resolve(1), 100)
    );
    const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 50));

    const results = await parallelRequests(promise1, promise2);

    expect(results).toEqual([1, 2]);
  });

  it("Promise.all을 사용하여 처리되므로 순서가 보장되는 것은 아니다(하지만 결과는 index에 맞춰 반환).", async () => {
    // 여기서는 순서가 어떻게 처리되든, [값1, 값2] 형태로 나올 것이라는 점을 테스트
    const promiseA = new Promise((resolve) =>
      setTimeout(() => resolve("A"), 50)
    );
    const promiseB = new Promise((resolve) =>
      setTimeout(() => resolve("B"), 10)
    );

    const results = await parallelRequests(promiseA, promiseB);

    expect(results).toEqual(["A", "B"]);
  });

  it("두 Promise가 병렬로 실행되는지 확인한다.", async () => {
    const start = Date.now();

    const promise1 = new Promise((resolve) =>
      setTimeout(() => resolve("First"), 100)
    );
    const promise2 = new Promise((resolve) =>
      setTimeout(() => resolve("Second"), 100)
    );

    const results = await parallelRequests(promise1, promise2);

    const end = Date.now();
    const duration = end - start;

    expect(duration).toBeLessThanOrEqual(150);
    expect(results).toEqual(["First", "Second"]);
  });

  it("두 Promise가 병렬로 실행될 때, 전체 소요 시간이 두 Promise의 지연 시간보다 짧지 않다.", async () => {
    const start = Date.now();

    const promise1 = new Promise((resolve) =>
      setTimeout(() => resolve("A"), 100)
    );
    const promise2 = new Promise((resolve) =>
      setTimeout(() => resolve("B"), 200)
    );

    const results = await parallelRequests(promise1, promise2);

    const end = Date.now();
    const duration = end - start;

    expect(duration).toBeLessThanOrEqual(250);
    expect(results).toEqual(["A", "B"]);
  });
});
