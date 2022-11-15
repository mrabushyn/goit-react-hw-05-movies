import { Box, Div } from './NotFound.styled';

export const NotFound = () => {
  return (
    <>
      <Box>
        404 <div>Page not found</div>
        <Div>
          Try this page{' '}
          <a href="https://mrabushyn.github.io/goit-react-hw-05-movies/">
            'https://mrabushyn.github.io/goit-react-hw-05-movies/'
          </a>
        </Div>
      </Box>
    </>
  );
};
