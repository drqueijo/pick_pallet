import styled from "styled-components";

export type MenuProps = {
  active: boolean;
};

export const Header = styled.header`
  width: 100%;

  position: fixed;
  z-index: 2;
  top: 0;

  background: var(--secondary-bg);

  border-bottom: 1px solid var(--border);

  nav {
    max-width: 180rem;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 15px;
  }
`;

export const Logo = styled.p`
  opacity: 0.9;
`;

export const MenuIcon = styled.span`
  font-size: 2.4rem;
  color: var(--primary-color);

  opacity: 0.5;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

export const Menu = styled.div<MenuProps>`
  opacity: ${({ active }) => (active ? 1 : 0)};
  pointer-events: ${({ active }) => (active ? "initial" : "none")};

  background: var(--secondary-bg);

  box-shadow: var(--secondary-shadow);
  position: fixed;
  right: 1rem;
  top: 6.5rem;

  z-index: 2;
  padding: 1rem 2rem;

  width: 13rem;
  transition: opacity 0.1s ease;

  border: 1px solid var(--border);
  border-radius: 0.5rem;

  @media (min-width: 18.75rem) and (max-width: 25rem) {
    right: 0.9375rem;
  }

  ul {
    list-style: none;

    li {
      font-size: 1.4rem;
      transition: opacity 0.3s ease;
      cursor: pointer;
      padding: 1rem 0;

      &:hover {
        opacity: 0.5;
      }

      a {
        display: block;

        &.active {
          opacity: 0.5;
        }
      }
    }
  }
`;
