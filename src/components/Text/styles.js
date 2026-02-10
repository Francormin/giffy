import styled from "@emotion/styled";

const variantStyles = theme => ({
  body: {
    fontSize: theme.typography.text.md,
    fontWeight: theme.typography.fontWeight.regular,
    lineHeight: theme.typography.lineHeight.normal
  },
  caption: {
    fontSize: theme.typography.text.sm,
    fontWeight: theme.typography.fontWeight.regular,
    lineHeight: theme.typography.lineHeight.relaxed
  },
  heading: {
    fontWeight: theme.typography.fontWeight.bold,
    lineHeight: theme.typography.lineHeight.tight
  }
});

const headingSizes = theme => ({
  h1: theme.typography.heading.h1,
  h2: theme.typography.heading.h2,
  h3: theme.typography.heading.h3
});

export const StyledText = styled.p(({ theme, as, variant }) => ({
  margin: 0,
  color: theme.colors.text.secondary,
  ...variantStyles(theme)[variant],
  ...(variant === "heading" && {
    fontSize: headingSizes(theme)[as] ?? theme.typography.heading.h2,
    margin: "1rem 0"
  })
}));
