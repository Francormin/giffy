import { renderHook, act } from "@testing-library/react";
import useForm from ".";

const setup = initialValues => renderHook(() => useForm(initialValues));

describe("useForm", () => {
  test("should initialize with default values if no initial values are provided", () => {
    const { result } = setup();

    expect(result.current.keyword).toBe("");
    expect(result.current.rating).toBe("g");
    expect(result.current.language).toBe("en");
  });

  test("should initialize with provided values", () => {
    const { result } = setup({
      initialKeyword: "cats%20funny",
      initialRating: "pg",
      initialLanguage: "es"
    });

    expect(result.current.keyword).toBe("cats funny");
    expect(result.current.rating).toBe("pg");
    expect(result.current.language).toBe("es");
  });

  test("should update keyword", () => {
    const { result } = setup({
      initialKeyword: "",
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
      initialKeyword: "",
      initialRating: "g",
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
      initialKeyword: "",
      initialRating: "g",
      initialLanguage: "pt"
    });

    act(() => {
      result.current.updateLanguage("fr");
    });

    expect(result.current.keyword).toBe("");
    expect(result.current.rating).toBe("g");
    expect(result.current.language).toBe("fr");
  });

  test("should reset filters", () => {
    const { result } = setup({
      initialKeyword: "cats",
      initialRating: "pg",
      initialLanguage: "de"
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
