import { renderHook } from  "@testing-library/react-hooks";
import  useOukapi  from "./dataFetch";

jest.mock("./dataFetch");

describe("use ouk api", () => {
    it("data is fetched", () => {
        useOukapi.mockReturnValue([
            {data:{}, isFetching:false, isError: false},
            "https://"
        ]);
        const { result } = renderHook(() => useOukapi([{key: "homeContent", url:"http"}, {key: "menuContent", url:"http"}, {key: "footerContent", url:"http"}]));
        expect(result.current).toStrictEqual([{data:{}, isFetching: false, isError: false}, "https://"])
    });

    it("no data is fetched", () => {
        useOukapi.mockReturnValue([
            {data:{}, isFetching:false, isError: true},
            "https://"
        ]);
        const { result } = renderHook(() => useOukapi(useOukapi([{key: "homeContent", url:"http"}, {key: "menuContent", url:"http"}, {key: "footerContent", url:"http"}])));
        expect(result.current).toStrictEqual([{data:{}, isFetching: false, isError: true}, "https://"])
    })
});
