import { getUsers } from "../problem/(lv.1)[2]비동기-함수-사용하기";

describe("getUsers 함수", () => {
  it("fetchUsers를 사용하여 사용자 이름만 포함된 배열을 반환해야 합니다.", async () => {
    const result = await getUsers();
    expect(result).toEqual(["Alice", "Bob"]);
  });

  it("fetchUsers가 빈 배열을 반환할 때, 빈 배열을 반환해야 합니다.", async () => {
    const result = await getUsers();
    expect(result).toEqual(["Alice", "Bob"]);
  });

  it("반환된 배열이 올바른 길이를 가져야 합니다.", async () => {
    const result = await getUsers();
    expect(result.length).toBe(2);
  });

  it("반환된 배열의 모든 요소가 문자열이어야 합니다.", async () => {
    const result = await getUsers();
    result.forEach((name) => {
      expect(typeof name).toBe("string");
    });
  });

  it("반환된 배열에 예상되지 않은 이름이 포함되지 않아야 합니다.", async () => {
    const result = await getUsers();
    expect(result).not.toContain("Charlie");
    expect(result).not.toContain("David");
  });
});
