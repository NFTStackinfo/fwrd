import styled from 'styled-components'

export const LoaderStyle = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: visible;
  opacity: 1;
  transition: .5s;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  font-family: ${({ theme }) => theme.font.secondary};
  font-size: ${({ theme }) => theme.font.size.subheading2};

  &.hide-loader {
    opacity: 0;
    visibility: hidden;
  }

  .content {
    text-align: center;

    >img {
      height: 24px;
      margin-inline: auto;
    }
  }


  .percent {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 12px;

    p {
      width: 64px;
      text-align: center;
    }
  }
  .progress {
    width: 360px;
    height: 12px;
    margin-top: 24px;
    border-radius: 100px;
    background-color: ${({ theme }) => theme.colors.lightBlue};


    .progress-inner {
      background-color: ${({ theme }) => theme.colors.turquoise};
      border-radius: 50px;
      height: 100%;
      transition: .3s;
    }
  }
}
@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
  .progress {
    width: 320px;
  }
`
