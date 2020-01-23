import { renderHook, act } from "@testing-library/react-hooks";
import { useFetch } from "../useFetch";

const mockPromise = () => Promise.resolve({ data: "success" });

describe("useFetch (pure)", () => {
  it("should return loading)", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch(mockPromise)
    );
    expect(result.current[0]).toBeTruthy();
  });

  it("on successful fetch should return data)", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch(mockPromise)
    );

    await waitForNextUpdate();
    expect(result.current[1]).toBe("success");
  });

  it("on error returns error)", async () => {
    const rejectedMockPromise = () => Promise.reject("error");
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch(rejectedMockPromise)
    );
    await waitForNextUpdate();
    expect(result.current[2]).toBe("error");
  });
});
