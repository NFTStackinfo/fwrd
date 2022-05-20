import styled, { keyframes } from 'styled-components'

export const TeamCarouselStyle = styled.div`
  margin-top: 24px;

  max-width: 548px;
  margin-inline: auto;

  .slick-dots {
    gap: 8px;
    padding-top: 16px;

    li {
      width: 8px !important;
      height: 8px !important;
      transition: 0.3s;

      button {
        border-radius: 50%;
        background-color: ${({ theme }) => theme.colors.lightRose} !important;
        height: 8px !important;
        width: 8px !important;

        &:before {
          content: none !important;
        }
      }

      &.slick-active {
        transform: scale(1.5);

        button {
          background-color: ${({ theme }) => theme.colors.orange} !important;
        }
      }
    }
  }
`
