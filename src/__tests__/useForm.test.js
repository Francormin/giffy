import { renderHook, act } from "@testing-library/react";
import useForm from "../hooks/useForm";

const defaultValues = {
  initialKeyword: "",
  initialRating: "g",
  initialLanguage: "en"
};

const setup = (overrides = {}) =>
  renderHook(() =>
    useForm({
      ...defaultValues,
      ...overrides
    })
  );

describe("useForm", () => {
  describe("initialization", () => {
    test("should initialize with default values", () => {
      const { result } = renderHook(() => useForm());

      expect(result.current.keyword).toBe("");
      expect(result.current.rating).toBe("g");
      expect(result.current.language).toBe("en");
    });

    test("should initialize with provided values", () => {
      const { result } = setup({
        initialKeyword: "cats funny",
        initialRating: "pg",
        initialLanguage: "es"
      });

      expect(result.current.keyword).toBe("cats funny");
      expect(result.current.rating).toBe("pg");
      expect(result.current.language).toBe("es");
    });
  });

  describe("updates", () => {
    test("should update keyword", () => {
      const { result } = setup({
        initialRating: "r",
        initialLanguage: "ru"
      });

      act(() => {
        result.current.updateKeyword("dogs");
      });

      expect(result.current.keyword).toBe("dogs");
      expect(result.current.rating).toBe("r");
      expect(result.current.language).toBe("ru");
    });

    test("should update rating", () => {
      const { result } = setup({
        initialLanguage: "it"
      });

      act(() => {
        result.current.updateRating("pg-13");
      });

      expect(result.current.keyword).toBe("");
      expect(result.current.rating).toBe("pg-13");
      expect(result.current.language).toBe("it");
    });

    test("should update language", () => {
      const { result } = setup({
        initialLanguage: "pt"
      });

      act(() => {
        result.current.updateLanguage("fr");
      });

      expect(result.current.keyword).toBe("");
      expect(result.current.rating).toBe("g");
      expect(result.current.language).toBe("fr");
    });

    test("should update multiple fields independently", () => {
      const { result } = setup();

      act(() => {
        result.current.updateKeyword("batman");
        result.current.updateRating("pg");
        result.current.updateLanguage("de");
      });

      expect(result.current.keyword).toBe("batman");
      expect(result.current.rating).toBe("pg");
      expect(result.current.language).toBe("de");
    });
  });

  describe("reset", () => {
    test("should reset filters", () => {
      const { result } = setup({
        initialKeyword: "cats",
        initialRating: "pg-13",
        initialLanguage: "ja"
      });

      act(() => {
        result.current.updateKeyword("dogs");
        result.current.updateRating("r");
        result.current.updateLanguage("ko");
      });

      act(() => {
        result.current.resetFilters();
      });

      expect(result.current.keyword).toBe("");
      expect(result.current.rating).toBe("g");
      expect(result.current.language).toBe("en");
    });
  });
});
