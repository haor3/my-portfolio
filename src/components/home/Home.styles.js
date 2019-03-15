import styled from 'styled-components'
import img from '../../images/intro-bg.jpg'

export const Container = styled.div`
  background: black url(${img}) no-repeat center bottom;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  background-attachment: fixed;
  width: 100%;
  height: 100%;
  min-height: 720px;
  display: table;
  text-align: center;
`

export const IntroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #111111;
  opacity: 0.85;
`

export const IntroContainer = styled.div`
  display: table-cell;
  flex-direction: column;
  vertical-align: middle;
  text-align: center;
  -webkit-transform: translateY(-2.1rem);
  -ms-transform: translateY(-2.1rem);
  transform: translateY(-2.1rem);
  @media (max-width: 768px) {
    padding-top: 30%;
  }
`

export const IntroContent = styled.div`
  color: ${props => (props.h1 ? '#FFFFFF' : props.h5 ? '#e86971' : '#FFFFFF')};
  font-family: ${props =>
    props.h1 ? 'poppins-medium' : props.h5 ? 'poppins-bold' : 'lora-regular'};
  font-size: ${props => (props.h1 ? '8.4rem' : props.h5 ? '2.3rem' : '1.7rem')}
  line-height: ${props =>
    props.h1 ? '1.071' : props.h5 ? ' 2.3rem' : '2.4rem'}
  max-width: ${props => (props.h1 ? '900px' : '')}
  margin-top: ${props => (props.h1 ? '0' : '')}
  margin-bottom: ${props => (props.h1 ? '0.6rem' : props.h5 ? '0' : '')};
  margin-left: ${props => (props.h1 ? 'auto' : '')}
  margin-right: ${props => (props.h1 ? 'auto' : '')}
  text-shadow: ${props =>
    props.h1
      ? ' 0 0 20px rgba(0, 0, 0, 0.5)'
      : props.h5
      ? '0 0 6px rgba(0, 0, 0, 0.2)'
      : '0 0 6px rgba(0, 0, 0, 0.2)'};
  text-transform: ${props => (props.h1 ? '' : 'uppercase')}
  letter-spacing: ${props => (props.h1 ? '' : props.h5 ? ' .3rem' : '.2rem')}
`
export const Button = styled.a`
  color: #ffffff !important;
  border-color: rgba(255, 255, 255, 0.3);
  height: 6rem !important;
  line-height: 5.4rem !important;
  padding: 0 3.5rem 0 3rem !important;
  margin-top: 0.6rem;
  font-size: 1.3rem;
  text-transform: uppercase;
  letter-spacing: 0.25rem;
`

export const SocialContainer = styled.div`
  width: 100%;
  left: 0;
  bottom: 7.2rem;
  font-size: 2.3rem;
  margin: 0;
  padding: 0;
`

export const SocialContent = styled.a`
  display: inline-block;
  margin: 0 20px;
  padding: 0;
  color: white;
`
