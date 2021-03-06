import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";
import Poster from "../../Components/Poster"
import Message from "../../Components/Message";


const Container = styled.div`
  padding: 20px 30px;
`;

const TvPresenter = ({ topRated, popular, airingToday, loading, error}) => (
    <>
        <Helmet>
            <title>Tv | Netflix Clone</title>
        </Helmet>
        {
            loading ? (
                <Loader/>
            ) : (
                <Container>
                    {topRated && topRated.length > 0 && (
                        <Section title="topRated">
                            {topRated.map(tv =>
                                <Poster
                                    key={tv.id}
                                    id={tv.id}
                                    title={tv.name}
                                    imageUrl={tv.poster_path}
                                    rating={tv.vote_average}
                                    year={tv.first_air_date}
                                />
                            )}
                        </Section>
                    )}

                    {popular && popular.length > 0 && (
                        <Section title="popular">
                            {popular.map(tv =>
                                <Poster
                                    key={tv.id}
                                    id={tv.id}
                                    title={tv.name}
                                    imageUrl={tv.poster_path}
                                    rating={tv.vote_average}
                                    year={tv.first_air_date}
                                />
                            )}
                        </Section>
                    )}

                    {airingToday && airingToday.length > 0 && (
                        <Section title="airingToday">
                            {airingToday.map(tv =>
                                <Poster
                                    key={tv.id}
                                    id={tv.id}
                                    title={tv.name}
                                    imageUrl={tv.poster_path}
                                    rating={tv.vote_average}
                                    year={tv.first_air_date}
                                />
                            )}
                        </Section>

                    )}
                    {error && <Message color="#e74c3c" text={error} />}
                </Container>
            )
        }
    </>

)


TvPresenter.propTypes = {
    topRated: PropTypes.array,
    popular: PropTypes.array,
    airingToday: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default TvPresenter;