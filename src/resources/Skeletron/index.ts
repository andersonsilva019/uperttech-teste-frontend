import styled from 'styled-components';

export default styled.div`
  border-radius: 0.4rem;
  background-image: linear-gradient(
    -90deg,
    #c6d5f8 0%,
    #4c71fb44 50%,
    #c6d5f8 100%
  );
  background-size: 400% 400%;
  animation: shimmer 1.2s ease-in-out infinite;
  @keyframes shimmer {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
  &.white {
    background-image: linear-gradient(-90deg, #eee 0%, #ccc 50%, #eee 100%);
  }
`;
