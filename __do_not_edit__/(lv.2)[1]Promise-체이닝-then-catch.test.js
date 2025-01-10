import { jest } from "@jest/globals";
import { getDataWithFallback } from "../problem/(lv.2)[1]Promise-체이닝-then-catch.js";

describe("getDataWithFallback", () => {
  it("primary가 resolve되면 primary의 결과를 반환해야 합니다", async () => {
    const primary = jest.fn().mockResolvedValue("primary 데이터");

    const fallback = jest.fn();

    const result = await getDataWithFallback(primary, fallback);

    expect(primary).toHaveBeenCalled();
    expect(fallback).not.toHaveBeenCalled();
    expect(result).toBe("primary 데이터");
  });

  it("primary가 reject되면 fallback을 호출하고 fallback의 결과를 반환해야 합니다", async () => {
    const primary = jest.fn().mockRejectedValue(new Error("primary 에러"));

    const fallback = jest.fn().mockResolvedValue("fallback 데이터");

    const result = await getDataWithFallback(primary, fallback);

    expect(primary).toHaveBeenCalled();
    expect(fallback).toHaveBeenCalled();
    expect(result).toBe("fallback 데이터");
  });

  it("primary와 fallback 모두 reject되면 에러를 던져야 합니다", async () => {
    const primary = jest.fn().mockRejectedValue(new Error("primary 에러"));

    const fallback = jest.fn().mockRejectedValue(new Error("fallback 에러"));

    await expect(getDataWithFallback(primary, fallback)).rejects.toThrow(
      "fallback 에러"
    );

    expect(primary).toHaveBeenCalled();
    expect(fallback).toHaveBeenCalled();
  });
});
