import styled from 'styled-components'

export const TeamItemModalStyle = styled.div`
  position: fixed;
  inset: 0;
  background-image: linear-gradient(180deg, rgba(0, 8, 78, 0.7) 0%, rgba(19, 23, 64, 0.7) 100%);
  z-index: -1;
  opacity: 0;

  &.active {
    z-index: 100;
    opacity: 1;
  }

  .container-sm {
    position: absolute;
    left: 50%;
    top: 50%;

    transform: translate(-50%,-50%);
  }

  .content {
    background-color: ${({ theme }) => theme.colors.lightBlue};
    width: 100%;
    border-radius: 2px 20px;
    padding: 24px;
    max-height: calc(100vh - 48px);
    overflow-y: scroll;

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      max-height: 100vh;
    }

    .modal-header {
      &__btn-close {
        margin-left: auto;
      }
    }

    .modal-body {
      margin-top: 24px;

      &__about {
        display: grid;
        column-gap: 24px;
        grid-template-columns: 120px auto;
      }

      &__image {
        height: auto;

        img {
          height: 100%;
        }
      }

      &__info {
        display: flex;
        flex-direction: column;
        justify-content: left;
      }

      &__name {
        text-transform: uppercase;
        font-family: ${({ theme }) => theme.font.primary};
        font-weight: 300;
      }

      &__description {
        color: ${({ theme }) => theme.colors.lightRose};
        margin-top: 4px;
        margin-bottom: 16px;
      }

      &__socials {
        display: grid;
        grid-auto-flow: column;
        grid-auto-columns: max-content;
        column-gap: 8px;
      }

      &__text {
        font-family: ${({ theme }) => theme.font.secondary};
        margin-top: 24px;
        display: grid;
        row-gap: 32px;
      }
    }
  }
`
