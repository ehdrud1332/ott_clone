// 실직적으로 화면에 보이는 부분
// 1번
import React from 'react';
// components에 대한 속성, 필수값은 아니다.
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Helmet from 'react-helmet';


import Loader from "../../Components/Loader";
import Section from "../../Components/Section";
import Poster from "../../Components/Poster";
import Message from "../../Components/Message";


const Container = styled.div`
  padding : 20px 30px;
`;


//2번
const HomePresenter = ({nowPlaying, popular, upcoming, loading, error}) => (
    <>
        <Helmet>
            <title>Movies | Netflix Clone</title>
        </Helmet>
        {
            loading ? (
                <Loader/>
            ) : (
                <Container>
                    {nowPlaying && nowPlaying.length > 0 && (
                        <Section title="Now-Playing">
                            {nowPlaying.map(movie =>
                                <Poster
                                    key={movie.id}
                                    id={movie.id}
                                    imageUrl={movie.poster_path}
                                    title={movie.title}
                                    year={movie.release_date}
                                    rating={movie.vote_average}
                                    isMovie={true}
                                />
                            )}
                        </Section>

                    )}

                    {popular && popular.length > 0 && (
                        <Section title="Popular">
                            {popular.map(movie =>
                                <Poster
                                    key={movie.id}
                                    id={movie.id}
                                    imageUrl={movie.poster_path}
                                    title={movie.title}
                                    year={movie.release_date}
                                    rating={movie.vote_average}
                                    isMovie={true}
                                />
                            )}
                        </Section>

                    )}

                    {upcoming && upcoming.length > 0 && (
                        <Section title="upcoming">
                            { popular.map(movie =>
                                <Poster
                                    key={movie.id}
                                    id={movie.id}
                                    imageUrl={movie.poster_path}
                                    title={movie.title}
                                    year={movie.release_date}
                                    rating={movie.vote_average}
                                    isMovie={true}
                                />
                            )}
                        </Section>
                    )}
                    {error && <Message color="#e74c3c" text={error} />}
                </Container>
            )}
    </>

);

HomePresenter.propTypes = {
    nowPlaying: PropTypes.array,
    popular: PropTypes.array,
    upcoming: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default HomePresenter;


