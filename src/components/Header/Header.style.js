import styled from 'styled-components'

export const HeaderStyle = styled.header`
  position: fixed;
  top: 24px;
  left: 0;
  right: 0;
  z-index: 99;
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: auto;

    &.open {
      ::before {
        content: '';
        position: fixed;
        inset: 0;
        background: linear-gradient(180deg, #2a3487 16.71%, #131740 100%);
        opacity: 0.7;
        z-index: -1;
      }

      .header-nav {
        height: calc(100vh - 130px);
        border-radius: 10px;
      }
    }
  }

  .container {
    max-width: 688px;
    background-color: ${({ theme }) => theme.colors.lightBlue};
    border-radius: 10px;
    padding: 16px 40px;

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      padding-inline: 16px;
    }
  }

  .hamburger {
    display: none;

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      cursor: pointer;
      background: hsl(0, 0%, 100%, 0.15);
      border-radius: 4px;
      padding: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.3s;

      &:hover {
        background-color: ${({ theme }) => theme.colors.white};

        .icon path {
          fill: ${({ theme }) => theme.colors.darkBlue} !important;
        }
      }

      .icon {
        path {
          transition: 0.3s;
        }
      }
    }
  }

  .header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .social {
    flex: 1;
  }

  .header-nav {
    &::-webkit-scrollbar {
      display: none !important;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      position: fixed;
      inset: 114px 16px 16px;
      overflow-y: auto;
      z-index: 100;
      height: 0;
      transition: height 0.5s;
      background-color: ${({ theme }) => theme.colors.lightBlue};
    }

    &-inner {
      display: flex;
      align-items: center;
      justify-content: center;

      @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        flex-direction: column;
        align-items: inherit;
        justify-content: space-between;
        padding: 24px 16px;
      }
    }

    .header-nav-list {
      display: flex;
      gap: 24px;

      @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        flex-direction: column;
        align-items: flex-start;
        gap: 32px;
      }

      > li {
        cursor: pointer;
        font-size: ${({ theme }) => theme.font.size.subheading2};
        position: relative;
        font-family: ${({ theme }) => theme.font.secondary};
        color: ${({ theme }) => theme.colors.white};
        font-weight: 700;

        @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
          font-size: ${({ theme }) => theme.font.size.h4};
          width: 100%;
          color: ${({ theme }) => theme.colors.white};

          &:after {
            content: none;
          }
        }
      }
    }

    .copyright {
      display: none;

      @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        display: block;
        text-align: center;
        padding: 24px 20px;
        font-size: ${({ theme }) => theme.font.size.h4};
      }
    }
  }

  .social {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 16px;

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      justify-content: flex-start;
    }
  }
`
